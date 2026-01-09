// app/services/page.tsx
import CatalogGrid from "../components/CatalogGrid";
import { servicesNav } from "../lib/catalog";

export default function ServicesPage() {
  return (
    <CatalogGrid
      title="Contract Bioresearch Services"
      subtitle="From DNA to proteins. We are your second laboratory."
      baseHref="/services"
      items={Object.values(servicesNav)}
    />
  );
}
