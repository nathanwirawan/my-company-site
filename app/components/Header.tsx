"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";

export default function Header() {
  const [productsOpen, setProductsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    function onDocMouseDown(e: MouseEvent) {
      if (!menuRef.current) return;
      if (!menuRef.current.contains(e.target as Node)) {
        setProductsOpen(false);
      }
    }

    document.addEventListener("mousedown", onDocMouseDown);
    return () => document.removeEventListener("mousedown", onDocMouseDown);
  }, []);

  // Close dropdown on Escape
  useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") setProductsOpen(false);
    }
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, []);

  return (
    <header className="border-b border-gray-700">
      <div className="mx-auto max-w-7xl px-10 h-24 flex items-center justify-between">
        <strong className="text-lg">
          <Link href="/"><Image
  src="/logo.png"
  alt="BEX logo"
  width={280}
  height={75}
  priority
/>
</Link>
        </strong>

        <nav className="flex items-center gap-4">
          <Link href="/" className="hover:underline">
            Home
          </Link>

          <div className="relative" ref={menuRef}>
            <button
              type="button"
              className="hover:underline"
              aria-haspopup="menu"
              aria-expanded={productsOpen}
              onClick={() => setProductsOpen((v) => !v)}
            >
              Products ▾
            </button>

            {productsOpen && (
              <div
                className="absolute right-0 mt-2 w-56 rounded-md border border-gray-700 bg-black shadow-lg"
                role="menu"
              >
                <Link
                  href="/products"
                  className="block px-4 py-2 hover:bg-gray-900"
                  role="menuitem"
                  onClick={() => setProductsOpen(false)}
                >
                  All Products
                </Link>

                <div className="my-1 border-t border-gray-800" />

                <Link
                  href="/products/alpha"
                  className="block px-4 py-2 hover:bg-gray-900"
                  role="menuitem"
                  onClick={() => setProductsOpen(false)}
                >
                  Product Alpha
                </Link>
                <Link
                  href="/products/beta"
                  className="block px-4 py-2 hover:bg-gray-900"
                  role="menuitem"
                  onClick={() => setProductsOpen(false)}
                >
                  Product Beta
                </Link>
                <Link
                  href="/products/gamma"
                  className="block px-4 py-2 hover:bg-gray-900"
                  role="menuitem"
                  onClick={() => setProductsOpen(false)}
                >
                  Product Gamma
                </Link>
              </div>
            )}
          </div>

          <Link href="/about" className="hover:underline">
            About
          </Link>
        </nav>
      </div>
    </header>
  );
}

