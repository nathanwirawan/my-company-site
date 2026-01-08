import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div id="top">
      {/* HERO */}
      <section className="relative h-[60vh] w-full">
        <Image
          src="/homepage.png"
          alt="DNA background"
          fill
          priority
          className="object-cover"
        />

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/30" />

        {/* Hero text */}
        <div className="relative z-10 flex h-full items-center justify-center text-center">
          <div className="mx-auto max-w-3xl px-6 text-white">
            <h1 className="text-5xl font-bold tracking-wide">Welcome to BEX</h1>
            <p className="mt-4 text-base/7 text-white/90">
              Advanced molecular biology tech and services supporting research and innovation.
            </p>

            {/* CTA buttons (optional) */}
            <div className="mt-8 flex justify-center gap-3">
              <Link
                href="/products"
                className="rounded-md bg-white px-5 py-2.5 text-sm font-semibold text-gray-900 hover:bg-gray-100"
              >
                View Products
              </Link>
              <Link
                href="/about"
                className="rounded-md border border-white/70 px-5 py-2.5 text-sm font-semibold text-white hover:bg-white/10"
              >
                About Us
              </Link>
            </div>
          </div>
        </div>

        {/* Scroll-down indicator */}
        <a
          href="#services"
          className="absolute bottom-4 left-1/2 z-20 -translate-x-1/2 rounded-full bg-white/10 px-4 py-2 text-sm text-white backdrop-blur hover:bg-white/15"
        >
          <div className="flex items-center gap-2">
            <span>Scroll</span>
            <span className="inline-block animate-bounce">↓</span>
          </div>
        </a>
      </section>

      {/* CONTENT */}
      <main className="mx-auto max-w-6xl px-6 py-12">
        {/* SERVICES / 2 BOXES */}
        <section id="services">
          <h2 className="text-3xl font-bold text-gray-900">Products & Services</h2>
          <p className="mt-2 text-gray-600">
            Two core areas we support for labs and research teams.
          </p>

          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {/* Box 1 */}
            <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900">
                Contract Bioresearch Services
              </h3>
              <p className="mt-2 text-gray-600">
                Custom synthesis and preparation to support your workflows.
              </p>
              <ul className="mt-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Peptide / oligo-related support</li>
                <li>Custom buffer & reagent prep</li>
                <li>Small-batch, fast turnaround options</li>
              </ul>

              <Link
                href="/products"
                className="mt-6 inline-flex items-center rounded-md bg-gray-900 px-4 py-2 text-sm font-semibold text-white hover:bg-gray-800"
              >
                Explore Services →
              </Link>
            </div>

            {/* Box 2 */}
            <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900">Physical and Chemical Instruments</h3>
              <p className="mt-2 text-gray-600">
                Instruments, consumables, and lab tools chosen for reliability.
              </p>
              <ul className="mt-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Core lab instruments</li>
                <li>Consumables & plastics</li>
                <li>Validation and technical support</li>
              </ul>

              <Link
                href="/products"
                className="mt-6 inline-flex items-center rounded-md bg-gray-900 px-4 py-2 text-sm font-semibold text-white hover:bg-gray-800"
              >
                Explore Equipment →
              </Link>
            </div>
          </div>
        </section>

        {/* NEWS */}
        <section className="mt-14">
          <div className="flex items-end justify-between gap-4">
            <div>
              <h2 className="text-3xl font-bold text-gray-900">News</h2>
              <p className="mt-2 text-gray-600">Updates, releases, and announcements.</p>
            </div>
            <Link href="/about" className="text-sm font-semibold text-gray-900 hover:underline">
              View all →
            </Link>
          </div>

          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {[
              { title: "New service line launched", date: "2026-01-08", tag: "Announcement" },
              { title: "Improved turnaround times", date: "2026-01-02", tag: "Update" },
              { title: "Upcoming seminar / webinar", date: "2025-12-20", tag: "Event" },
            ].map((item) => (
              <article
                key={item.title}
                className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm"
              >
                <div className="flex items-center justify-between text-xs text-gray-500">
                  <span className="rounded-full bg-gray-100 px-3 py-1 text-gray-700">
                    {item.tag}
                  </span>
                  <time>{item.date}</time>
                </div>
                <h3 className="mt-4 text-lg font-semibold text-gray-900">{item.title}</h3>
                <p className="mt-2 text-sm text-gray-600">
                  Short summary text goes here. Replace this with your real news excerpt.
                </p>
                <a href="#" className="mt-4 inline-block text-sm font-semibold text-gray-900 hover:underline">
                  Read more →
                </a>
              </article>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}




