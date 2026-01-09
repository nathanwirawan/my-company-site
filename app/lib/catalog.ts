// app/lib/catalog.ts

/**
 * A single node in the navigation/catalog tree.
 * - Use `children` to create nested menus (sideways flyouts, mega menus, etc.)
 * - Use `route` to override the default URL if needed.
 */
export type CatalogNode = {
  // URL-friendly identifier (used to build routes)
  slug: string;

  // What appears in navigation UI
  navLabel: string;

  // Sorting order in navigation
  navOrder: number;

  // Optional: display title for pages/cards
  title?: string;

  // Optional: short summary for cards/hero sections
  tagline?: string;

  // Optional: bullet points for overview pages
  bullets?: string[];

  // Optional: content groupings for detail pages
  applications?: string[];
  deliverables?: string[];

  // Optional: if you want a node to point somewhere else
  // Example: "/services" or "/instruments/electroporator"
  route?: string;

  // Optional nested sub-categories or items
  children?: CatalogNode[];
};

export type CatalogSectionKey = "services" | "instruments";

/**
 * Root sections: Services & Instruments
 * Keep these separate for a cleaner header/nav.
 */
export type CatalogSection = {
  key: CatalogSectionKey;
  navLabel: string;      // label used in header
  route: string;         // "/services", "/instruments"
  navOrder: number;
  items: CatalogNode[];
};

/**
 * ---------- SERVICES ----------
 * Order required by you:
 * 1) oligo synthesis
 * 2) peptide synthesis
 * 3) gene analysis
 * 4) genetic engineering experiments
 * 5) cell-related services
 *
 * Oligo synthesis has children (sideways flyout submenu).
 */
export const servicesNav: CatalogNode[] = [
  {
    slug: "oligosynthesis",
    navLabel: "Oligo DNA/RNA synthesis",
    navOrder: 1,
    title: "Oligo DNA & RNA synthesis",
    tagline: "DNA/RNA/siRNA synthesis options and related oligo products.",
    bullets: ["Custom oligo synthesis", "Modified oligos", "Short turnaround options"],
    children: [
      { slug: "oligodna", navLabel: "Oligo DNA", navOrder: 1, title: "Oligo DNA" },
      { slug: "oligokit", navLabel: "Oligo Kit", navOrder: 2, title: "Oligo Kit" },
      { slug: "sirna", navLabel: "siRNA Synthesis", navOrder: 3, title: "siRNA Synthesis" },
      { slug: "rnasynthesis", navLabel: "RNA Synthesis", navOrder: 4, title: "RNA Synthesis" },
      { slug: "chimera-rna", navLabel: "Chimera DNA/RNA Insertion", navOrder: 5, title: "Chimera DNA/RNA insertion" },
    ],
  },
  {
    slug: "peptidesynthesis",
    navLabel: "Peptide Synthesis, Antibody Production",
    navOrder: 2,
    title: "Peptide synthesis",
    tagline: "Custom peptides for research, screening, and validation.",
    children: [
      { slug: "peptide_synthesis", navLabel: "Peptide Synthesis", navOrder: 1, title: "Peptide Synthesis" },
      { slug: "monoclonal", navLabel: "Monoclonal Antibody Production", navOrder: 2, title: "Monoclonal Antibody Production" },
      { slug: "polyclonal", navLabel: "Polyclonal Antibody-making", navOrder: 3, title: "Polyclonal Antibody-making" },
      ],
  },
  {
    slug: "geneanalysis",
    navLabel: "Gene Analysis",
    navOrder: 3,
    title: "Gene analysis",
    tagline: "Analysis services supporting discovery and verification workflows.",
    children: [
      { slug: "sanger", navLabel: "Sanger Sequencing", navOrder: 1, title: "Sanger Sequencing" },
      { slug: "str", navLabel: "STR Analysis", navOrder: 2, title: "STR Analysis" },
      { slug: "str_mouse", navLabel: "Mouse STR Analysis", navOrder: 3, title: "Mouse STR Analysis" },
      ],
  },
  {
    slug: "geneticengineering",
    navLabel: "Genetic Engineering Experiments",
    navOrder: 4,
    title: "Genetic engineering",
    tagline: "Experimental support for genetic engineering workflows.",
    children: [
      { slug: "gene_synthesis", navLabel: "Artificial Gene Synthesis", navOrder: 1, title: "Artificial Gene Synthesis" },
      { slug: "mrna", navLabel: "mRNA Synthesis", navOrder: 2, title: "mRNA Synthesis" },
      { slug: "pcr", navLabel: "PCR Contract", navOrder: 3, title: "PCR Contract" },
      { slug: "dnaextraction", navLabel: "DNA/RNA Extraction", navOrder: 4, title: "DNA/RNA Extraction" },
      { slug: "plasmidprep", navLabel: "Plasmid Preparation", navOrder: 5, title: "Plasmid Preparation" },
    ],
  },
  {
    slug: "cellrelation",
    navLabel: "Cell-related Services",
    navOrder: 5,
    title: "Cell-related services",
    tagline: "Cell work support, handling, and related service options.",
    children: [
      { slug: "str", navLabel: "STR Analysis", navOrder: 2, title: "STR Analysis" },
      { slug: "protein_expression", navLabel: "Animal Cell Protein Expression", navOrder: 3, title: "Animal cell protein expression" },
      { slug: "strain_est", navLabel: "Stable Expression Strain Establishment", navOrder: 1, title: "Stable expression strain establishment" },
      ],
  },
];

/**
 * ---------- INSTRUMENTS ----------
 * Order required by you:
 * 1) Electroporators
 * 2) Cell-Fusion Devices
 * 3) Electric Microinjectors
 * 4) Fluorescence Adaptor
 * 5) Culture-related devices
 * 6) Oligo synthesizer
 */
export const instrumentsNav: CatalogNode[] = [
  {
    slug: "electroporator",
    navLabel: "Electroporation Systems",
    navOrder: 1,
    title: "Electroporators",
    tagline: "In vivo & in vitro electroporation solutions.",
  },
  {
    slug: "cellfusion",
    navLabel: "Cell-Fusion Devices",
    navOrder: 2,
    title: "Cell-Fusion Devices",
    tagline: "Cell fusion and activation workflows.",
  },
  {
    slug: "microinjector",
    navLabel: "Electric Microinjectors",
    navOrder: 3,
    title: "Electric Microinjectors",
    tagline: "Precision microinjection systems for research applications.",
  },
  {
    slug: "fluorescenceadaptor",
    navLabel: "Fluorescence Adaptor",
    navOrder: 4,
    title: "Fluorescence Adaptor",
    tagline: "Fluorescence adaptor options and accessories.",
  },
  {
    slug: "culturedevices",
    navLabel: "Culture-related devices",
    navOrder: 5,
    title: "Culture-related devices",
    tagline: "Devices supporting culture workflows and lab routines.",
  },
  {
    slug: "oligosynthesizer",
    navLabel: "Oligo synthesizer",
    navOrder: 6,
    title: "Oligo synthesizer",
    tagline: "Oligo synthesis instruments and related systems.",
  },
];

/**
 * Root catalog sections for header-level navigation
 * (useful if you want to map top-level buttons automatically).
 */
export const catalogSections: CatalogSection[] = [
  { key: "services", navLabel: "Services", route: "/services", navOrder: 1, items: servicesNav },
  { key: "instruments", navLabel: "Instruments", route: "/instruments", navOrder: 2, items: instrumentsNav },
];

/**
 * Helpers
 */

// Default routing rule:
// - Top-level: "/services/<slug>" or "/instruments/<slug>"
// - Nested child: "/services/<parentSlug>/<childSlug>"
export function nodeHref(section: CatalogSectionKey, node: CatalogNode, parent?: CatalogNode): string {
  if (node.route) return node.route;
  if (parent) return `/${section}/${parent.slug}/${node.slug}`;
  return `/${section}/${node.slug}`;
}

// Safe recursive find by slug in a section tree
export function findNodeBySlug(nodes: CatalogNode[], slug: string): CatalogNode | undefined {
  for (const n of nodes) {
    if (n.slug === slug) return n;
    if (n.children?.length) {
      const found = findNodeBySlug(n.children, slug);
      if (found) return found;
    }
  }
  return undefined;
}

// Find a node by parent slug + child slug (common pattern for nested pages)
export function findChild(nodes: CatalogNode[], parentSlug: string, childSlug: string): { parent: CatalogNode; child: CatalogNode } | undefined {
  const parent = nodes.find((n) => n.slug === parentSlug);
  if (!parent?.children?.length) return undefined;
  const child = parent.children.find((c) => c.slug === childSlug);
  if (!child) return undefined;
  return { parent, child };
}

export const services = servicesNav;
export const instruments = instrumentsNav;