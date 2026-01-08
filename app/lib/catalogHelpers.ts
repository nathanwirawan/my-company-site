import { instrumentsNav, servicesNav } from "./catalog";

export function getInstrument(slug: string) {
  return instrumentsNav.find((x) => x.slug === slug);
}

export function getService(slug: string) {
  return servicesNav.find((x) => x.slug === slug);
}
