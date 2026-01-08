import CatalogDetail from "../../components/CatalogDetail";
import { instruments } from "../../lib/catalog";

export default function Page() {
  return (
    <CatalogDetail
      item={instruments.microinjector}
      backHref="/instruments"
      backLabel="All Instruments"
    />
  );
}