import CatalogDetail from "../../components/CatalogDetail";
import { services } from "../../lib/catalog";

export default function Page() {
  return (
    <CatalogDetail
      item={services.geneticengineering}
      backHref="/services"
      backLabel="All Services"
    />
  );
}