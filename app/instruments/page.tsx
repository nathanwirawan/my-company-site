// app/instruments/page.tsx
import CatalogGrid from "../components/CatalogGrid";
import { instrumentsNav } from "../lib/catalog";

export default function InstrumentsPage() {
  return (
    <CatalogGrid
      title="Instruments"
      subtitle="Equipment and tools to support lab workflows."
      baseHref="/instruments"
      items={Object.values(instrumentsNav)}
    />
  );
}
