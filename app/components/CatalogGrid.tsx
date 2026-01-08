// app/components/CatalogGrid.tsx
import Link from "next/link";
import type { CatalogItem } from "../lib/catalog";

export default function CatalogGrid({
  title,
  subtitle,
  baseHref,
  items,
}: {
  title: string;
  subtitle?: string;
  baseHref: string;
  items: CatalogItem[];
}) {
  return (
    <section className="mx-auto max-w-6xl px-6 py-12">
      <h1 className="text-3xl font-bold tracking-tight">{title}</h1>
      {subtitle && <p className="mt-2 text-gray-600">{subtitle}</p>}

      <div className="mt-8 grid gap-6 md:grid-cols-2">
        {items.map((it) => (
          <div
            key={it.slug}
            className="rounded-xl border bg-white p-6 shadow-sm"
          >
            <h2 className="text-xl font-semibold">{it.title}</h2>
            <p className="mt-2 text-gray-600">{it.tagline}</p>

            <ul className="mt-4 list-disc pl-5 text-gray-700">
              {(it.bullets ?? []).map((b, idx) => (
  <li key={idx}>{b}</li>
))
}
            </ul>

            <div className="mt-6">
              <Link
                href={`${baseHref}/${it.slug}`}
                className="inline-flex items-center rounded-md bg-slate-900 px-4 py-2 text-sm font-semibold text-white hover:bg-slate-800"
              >
                View details →
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}