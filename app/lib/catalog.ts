// app/catalog.ts
export type CatalogItem = {
  slug: string;
  title: string;

  // used by the mega menu
  navLabel: string;
  navOrder: number;

  // used by CatalogDetail/CatalogGrid (so your app stops erroring)
  tagline?: string;
  bullets?: string[];
  applications?: string[];
  deliverables?: string[];
};

export const servicesNav: CatalogItem[] = [
  { slug: "oligosynthesis", title: "Oligo Synthesis", navLabel: "Oligo synthesis", navOrder: 1 },
  { slug: "peptidesynthesis", title: "Peptide Synthesis", navLabel: "Peptide synthesis", navOrder: 2 },
  { slug: "geneanalysis", title: "Gene Analysis", navLabel: "Gene analysis", navOrder: 3 },
  { slug: "geneticengineering", title: "Genetic Engineering Experiments", navLabel: "Genetic engineering experiments", navOrder: 4 },
  { slug: "cellrelated", title: "Cell-related Services", navLabel: "Cell-related services", navOrder: 5 },
];

export const instrumentsNav: CatalogItem[] = [
  { slug: "electroporator", title: "Electroporators", navLabel: "Electroporators", navOrder: 1 },
  { slug: "cellfusion", title: "Cell-Fusion Devices", navLabel: "Cell-Fusion Devices", navOrder: 2 },
  { slug: "microinjector", title: "Electric Microinjectors", navLabel: "Electric Microinjectors", navOrder: 3 },
  { slug: "fluorescenceadaptor", title: "Fluorescence Adaptor", navLabel: "Fluorescence Adaptor", navOrder: 4 },
  { slug: "culturedevices", title: "Culture-related Devices", navLabel: "Culture-related devices", navOrder: 5 },
  { slug: "oligosynthesizer", title: "Oligo Synthesizer", navLabel: "Oligo synthesizer", navOrder: 6 },
];

// Backward-compatible names (fix your "no exported member services/instruments" errors)
export const services = servicesNav;
export const instruments = instrumentsNav;