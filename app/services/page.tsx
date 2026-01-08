// app/services/page.tsx
import CatalogGrid from "../components/CatalogGrid";
import { services } from "../lib/catalog";

export default function ServicesPage() {
  return (
    <CatalogGrid
      title="Services"
      subtitle="Contract research and lab support services."
      baseHref="/services"
      items={Object.values(services)}
    />
  );
}