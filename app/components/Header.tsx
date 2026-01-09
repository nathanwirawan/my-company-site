"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useMemo, useRef, useState } from "react";
import { servicesNav, instrumentsNav } from "@/app/lib/catalog";

// If your catalog types are exported, you can import them instead.
// Keeping these lightweight here makes Header resilient even if catalog types change.
type NavChild = { slug: string; navLabel: string; navOrder: number };
type NavItem = {
  slug: string;
  navLabel: string;
  navOrder: number;
  children?: NavChild[];
};

type OpenMenu = null | "services" | "products";

function sortByNavOrder<T extends { navOrder: number }>(arr: T[]): T[] {
  return [...arr].sort((a, b) => a.navOrder - b.navOrder);
}

export default function Header() {
  // One state controls all menus (prevents “two menus open” bugs)
  const [openMenu, setOpenMenu] = useState<OpenMenu>(null);


  
  // Track which parent item is currently “active” for flyout
  //const [activeServiceSlug, setActiveServiceSlug] = useState<string | null>(null);
const firstServiceSlug = servicesNav.slice().sort((a,b) => a.navOrder - b.navOrder)[0]?.slug ?? null;
const [activeServiceSlug, setActiveServiceSlug] = useState<string | null>(firstServiceSlug);


  // One ref wrapper for reliable click-outside
  const headerRef = useRef<HTMLElement | null>(null);

  
  const sortedServices = useMemo(
    () => sortByNavOrder(servicesNav as NavItem[]),
    []
  );
useEffect(() => {
  if (openMenu !== "services") return;

  setActiveServiceSlug((prev) => prev ?? sortedServices[0]?.slug ?? null);
}, [openMenu, sortedServices]);
  const sortedInstruments = useMemo(
    () => sortByNavOrder(instrumentsNav as NavItem[]),
    []
  );

  // Close on outside click + ESC
  useEffect(() => {
    function onDocMouseDown(e: MouseEvent) {
      const target = e.target as Node;
      if (headerRef.current && !headerRef.current.contains(target)) {
        setOpenMenu(null);
        setActiveServiceSlug(null);
      }
    }

    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") {
        setOpenMenu(null);
        setActiveServiceSlug(null);
      }
    }

    document.addEventListener("mousedown", onDocMouseDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("mousedown", onDocMouseDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, []);

  const closeAll = () => {
    setOpenMenu(null);
    setActiveServiceSlug(null);
  };

  const toggleMenu = (menu: Exclude<OpenMenu, null>) => {
    setOpenMenu((cur) => (cur === menu ? null : menu));
    if (menu !== "services") setActiveServiceSlug(null);
  };

  return (
    <header ref={headerRef} className="sticky top-0 z-50 bg-gray-50">
      <div className="mx-auto max-w-6xl px-6 h-20 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="inline-flex items-center" onClick={closeAll}>
          <Image src="/logo.png" alt="BEX logo" width={270} height={75} priority />
        </Link>

        {/* Nav */}
        <nav className="flex items-center gap-6">
          <Link
            href="/"
            className="text-sm font-medium text-gray-700 hover:text-gray-900 hover:underline"
            onClick={closeAll}
          >
            Home
          </Link>

          {/* SERVICES dropdown + flyout */}
          <div
            className="relative"
            
          >
            <button
              type="button"
              onClick={() => toggleMenu("services")}
              className="inline-flex items-center gap-1 text-sm font-medium text-gray-700 hover:text-gray-900"
              aria-expanded={openMenu === "services"}
              aria-haspopup="menu"
            >
              Services <span className="text-xs">▼</span>
            </button>

            {openMenu === "services" && (
              <div className="absolute right-0 mt-3 w-[520px] rounded-xl border border-gray-200 bg-white shadow-lg z-[60]">
                <div className="p-4">
                  <div className="mb-3 text-xs font-semibold tracking-wide text-gray-500">
                    SERVICES
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    {/* Left column: parent items */}
                    <div className="space-y-1">
                      {sortedServices.map((item) => {
                        const hasChildren = !!item.children?.length;
                        const isActive = activeServiceSlug === item.slug;

                        return (
                          <button
                            key={item.slug}
                            type="button"
                            className={[
                              "w-full text-left rounded-lg px-3 py-2 text-sm",
                              "flex items-center justify-between",
                              isActive ? "bg-gray-100 text-gray-900" : "text-gray-800 hover:bg-gray-100",
                            ].join(" ")}
                            onMouseEnter={() => 
                              setActiveServiceSlug(item.slug)}
                            onFocus={() => {
                              if (hasChildren) setActiveServiceSlug(item.slug);
                              else setActiveServiceSlug(null);
                            }}
                            onClick={() => {
                              // Clicking parent navigates to parent page (common UX)
                              // If you want “click only opens flyout”, change this to setActiveServiceSlug
                              closeAll();
                              window.location.href = `/services/${item.slug}`;
                            }}
                          >
                            <span>{item.navLabel}</span>
                            {hasChildren && <span className="text-gray-400">›</span>}
                          </button>
                        );
                      })}

                      <div className="pt-2">
                        <Link
                          href="/services"
                          className="inline-flex items-center rounded-lg px-3 py-2 text-sm font-semibold text-white bg-gray-900 hover:bg-gray-800"
                          onClick={closeAll}
                        >
                          All Services →
                        </Link>
                      </div>
                    </div>

                    {/* Right column: flyout children (for active parent) */}
                    <div className="rounded-xl border border-gray-200 bg-white">
                      <div className="p-3">
                        {(() => {
                          const parent = sortedServices.find((s) => s.slug === activeServiceSlug);
                          const children = parent?.children ? sortByNavOrder(parent.children) : [];

                          if (!parent || children.length === 0) return null;

                          return (
                            <div className="space-y-1">
                              <div className="mb-2 text-xs font-semibold tracking-wide text-gray-500">
                                {parent.navLabel.toUpperCase()}
                              </div>

                              {children.map((child) => (
                                <Link
                                  key={child.slug}
                                  href={`/services/${parent.slug}/${child.slug}`}
                                  className="block rounded-lg px-3 py-2 text-sm text-gray-800 hover:bg-gray-100"
                                  onClick={closeAll}
                                >
                                  {child.navLabel}
                                </Link>
                              ))}
                            </div>
                          );
                        })()}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* PRODUCTS (Instruments) dropdown */}
          <div className="relative">
            <button
              type="button"
              onClick={() => toggleMenu("products")}
              className="inline-flex items-center gap-1 text-sm font-medium text-gray-700 hover:text-gray-900"
              aria-expanded={openMenu === "products"}
              aria-haspopup="menu"
            >
              Products <span className="text-xs">▼</span>
            </button>

            {openMenu === "products" && (
              <div className="absolute right-0 mt-3 w-[420px] rounded-xl border border-gray-200 bg-white shadow-lg z-[60]">
                <div className="p-4">
                  <div className="mb-3 text-xs font-semibold tracking-wide text-gray-500">
                    INSTRUMENTS
                  </div>

                  <div className="space-y-1">
                    {sortedInstruments.map((item) => (
                      <Link
                        key={item.slug}
                        href={`/instruments/${item.slug}`}
                        className="block rounded-lg px-3 py-2 text-sm text-gray-800 hover:bg-gray-50"
                        onClick={closeAll}
                      >
                        {item.navLabel}
                      </Link>
                    ))}
                  </div>

                  <div className="mt-4">
                    <Link
                      href="/instruments"
                      className="inline-flex items-center rounded-lg px-3 py-2 text-sm font-semibold text-white bg-gray-900 hover:bg-gray-800"
                      onClick={closeAll}
                    >
                      All Instruments →
                    </Link>
                  </div>
                </div>
              </div>
            )}
          </div>

          <Link
            href="/about"
            className="text-sm font-medium text-gray-700 hover:text-gray-900 hover:underline"
            onClick={closeAll}
          >
            About
          </Link>
        </nav>
      </div>
    </header>
  );
}
