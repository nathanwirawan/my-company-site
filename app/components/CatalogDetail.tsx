// app/components/CatalogDetail.tsx
import Link from "next/link";
import type { CatalogItem } from "../lib/catalog";

export default function CatalogDetail({
  item,
  backHref,
  backLabel,
}: {
  item: CatalogItem;
  backHref: string;
  backLabel: string;
}) {
  return (
    <section className="mx-auto max-w-6xl px-6 py-12">
      <div className="flex items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">{item.title}</h1>
          <p className="mt-2 text-gray-600">{item.tagline}</p>
        </div>

        <Link
          href={backHref}
          className="rounded-md border px-4 py-2 text-sm font-semibold hover:bg-gray-50"
        >
          ← {backLabel}
        </Link>
      </div>

      <div className="mt-10 grid gap-8 md:grid-cols-2">
        <div className="rounded-xl border bg-white p-6 shadow-sm">
          <h2 className="text-lg font-semibold">Key points</h2>
          <ul className="mt-4 list-disc pl-5 text-gray-700">
            {(item.bullets ?? []).length > 0 && (
  <ul>
    {(item.bullets ?? []).map((b, idx) => <li key={idx}>{b}</li>)}
  </ul>
)}
          </ul>
        </div>

        <div className="rounded-xl border bg-white p-6 shadow-sm">
          <h2 className="text-lg font-semibold">Typical use cases</h2>
          <ul className="mt-4 list-disc pl-5 text-gray-700">
            {(item.applications ?? ["Add use cases here later."]).map((a, idx) => (
              <li key={idx}>{a}</li>
            ))}
          </ul>

          <h3 className="mt-6 text-lg font-semibold">Deliverables</h3>
          <ul className="mt-4 list-disc pl-5 text-gray-700">
            {(item.deliverables ?? ["Add deliverables here later."]).map((d, idx) => (
              <li key={idx}>{d}</li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mt-10 rounded-xl border bg-slate-50 p-6">
        <h2 className="text-lg font-semibold">Next step</h2>
        <p className="mt-2 text-gray-700">
          Add a contact CTA, quote request form, or “Talk to sales” button here.
        </p>

        <div className="mt-4 flex flex-wrap gap-3">
          <Link
            href="/about"
            className="inline-flex items-center rounded-md bg-slate-900 px-4 py-2 text-sm font-semibold text-white hover:bg-slate-800"
          >
            Contact us →
          </Link>
          <Link
            href="/"
            className="inline-flex items-center rounded-md border px-4 py-2 text-sm font-semibold hover:bg-white"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </section>
  );
}