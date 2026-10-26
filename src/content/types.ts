export type ProjectMediaItem = {
  kind: "image" | "video";
  src: string;
  alt: string;
  label: string;
  poster?: string;
  fit?: "cover" | "contain";
  /** Shown over the media in its section, e.g. to label a concept render. */
  caption?: string;
};

export type ProjectLink = {
  label: string;
  href: string;
};

export type ProjectMetric = {
  value: string;
  label: string;
};

/** A project's own product colours, applied to its full-bleed section. */
export type ProjectTheme = {
  scheme: "dark" | "light";
  bg: string;
  surface: string;
  ink: string;
  muted: string;
  accent: string;
  /** The brand colour as it reads on the portfolio's dark ground, used where the product is named outside its section. */
  signal: string;
};

/** The product's own display typeface, used for its name wherever it appears. */
export type ProjectFace = {
  family: string;
  weight: number;
  tracking: string;
  uppercase?: boolean;
};

/** How a section shows its media below the copy: one wide screen, or up to four phone screens. */
export type ProjectLayout = "stage" | "phones";

export type ArchitectureNode = {
  label: string;
  detail?: string;
};

export type Project = {
  slug: string;
  title: string;
  /** Short name for the homepage index; defaults to the title. */
  shortTitle?: string;
  face: ProjectFace;
  type: string;
  summary: string;
  description: string;
  stack: string;
  theme: ProjectTheme;
  layout: ProjectLayout;
  media: ProjectMediaItem[];
  links: ProjectLink[];
  metrics?: ProjectMetric[];
  /** Has a case-study page at /projects/[slug]; its band on the homepage links there instead of opening the screens. */
  caseStudy?: boolean;
  /* Case-study material, rendered on the case-study page when caseStudy is set. */
  problem?: string;
  solution?: string;
  architecture?: {
    caption: string;
    stages: ArchitectureNode[][];
  };
  decisions?: { title: string; description: string }[];
  progression?: { title: string; detail: string }[];
};
