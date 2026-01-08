"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { servicesNav, instrumentsNav } from "@/app/lib/catalog"; // adjust path if needed

export default function Header() {
  const [open, setOpen] = useState(false);
  const wrapRef = useRef<HTMLDivElement>(null);
  const dropdownRef = useRef<HTMLDivElement | null>(null);

useEffect(() => {
  function onDocClick(e: MouseEvent) {
    if (!dropdownRef.current) return;
    if (!dropdownRef.current.contains(e.target as Node)) setOpen(false);
  }
  document.addEventListener("mousedown", onDocClick);
  return () => document.removeEventListener("mousedown", onDocClick);
}, []);

  return (
    <header className="bg-white border-b">
      <div className="mx-auto max-w-6xl px-6 h-20 flex items-center justify-between">
        {/* left: logo */}
       <Link href="/" className="inline-flex items-center">
  <Image
    src="/logo.png"
    alt="BEX logo"
    width={270}
    height={75}
    priority
  />
</Link>


        {/* right: nav */}
        <nav className="flex items-center gap-6">
          <Link href="/" className="text-sm hover:underline">
            Home
          </Link>

          {/* PRODUCTS & SERVICES mega menu */}
          <div className="relative" ref={dropdownRef}>
  <button
    onClick={() => setOpen((v) => !v)}
    className="inline-flex items-center gap-1 text-sm font-medium text-gray-700 hover:text-gray-900"
    aria-expanded={open}
  >
    Products &amp; Services <span className="text-xs">▼</span>
  </button>

  {open && (
    <div className="absolute right-0 mt-3 w-[640px] rounded-xl border border-gray-200 bg-white shadow-lg z-[60]">
      <div className="grid grid-cols-2 gap-0">
        {/* Left column: Services */}
        <div className="p-4">
          <div className="mb-3 text-xs font-semibold tracking-wide text-gray-500">
            SERVICES
          </div>

          <div className="space-y-1">
            {servicesNav
              .slice()
              .sort((a, b) => a.navOrder - b.navOrder)
              .map((item) => (
                <Link
                  key={item.slug}
                  href={`/services/${item.slug}`}
                  className="block rounded-lg px-3 py-2 text-sm text-gray-800 hover:bg-gray-50"
                  onClick={() => setOpen(false)}
                >
                  {item.navLabel}
                </Link>
              ))}
          </div>

          <div className="mt-4">
            <Link
              href="/services"
              className="inline-flex items-center rounded-lg px-3 py-2 text-sm font-semibold text-white bg-gray-900 hover:bg-gray-800"
              onClick={() => setOpen(false)}
            >
              All Services →
            </Link>
          </div>
        </div>

        {/* Right column: Instruments */}
        <div className="p-4 border-l border-gray-200">
          <div className="mb-3 text-xs font-semibold tracking-wide text-gray-500">
            INSTRUMENTS
          </div>

          <div className="space-y-1">
            {instrumentsNav
              .slice()
              .sort((a, b) => a.navOrder - b.navOrder)
              .map((item) => (
                <Link
                  key={item.slug}
                  href={`/instruments/${item.slug}`}
                  className="block rounded-lg px-3 py-2 text-sm text-gray-800 hover:bg-gray-50"
                  onClick={() => setOpen(false)}
                >
                  {item.navLabel}
                </Link>
              ))}
          </div>

          <div className="mt-4">
            <Link
              href="/instruments"
              className="inline-flex items-center rounded-lg px-3 py-2 text-sm font-semibold text-white bg-gray-900 hover:bg-gray-800"
              onClick={() => setOpen(false)}
            >
              All Instruments →
            </Link>
          </div>
        </div>
      </div>
    </div>
  )}
</div>

          <Link href="/about" className="text-sm hover:underline">
            About
          </Link>
        </nav>
      </div>
    </header>
  );
}


