import { servicesNav } from "@/app/lib/catalog";
import CatalogDetail from "@/app/components/CatalogDetail";

export default function Page() {
  const item = servicesNav.find((x) => x.slug === "geneticengineering");

  if (!item) {
    return (
      <main className="mx-auto max-w-6xl px-6 py-12">
        <h1 className="text-2xl font-semibold">Not found</h1>
        <p className="mt-2 text-gray-600">This product is not registered in the catalog.</p>
      </main>
    );
  }

  return (
    <CatalogDetail
      item={item}
      backHref="/services"
      backLabel="All Services"
    />
  );
}