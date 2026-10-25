export type ProjectMediaItem = {
  kind: "image" | "video";
  src: string;
  alt: string;
  label: string;
  poster?: string;
  fit?: "cover" | "contain";
};

export type ProjectLink = {
  label: string;
  href: string;
};

export type ProjectMetric = {
  value: string;
  label: string;
};

/** A project's own product colours, applied to its panel. Corner radius is portfolio-wide, not per project. */
export type ProjectTheme = {
  bg: string;
  surface: string;
  ink: string;
  muted: string;
  accent: string;
};

/** How a project's panel presents its media: one wide screen, three phone screens, or a full-bleed photo. */
export type ProjectLayout = "browser" | "phones" | "photo";

export type ArchitectureNode = {
  label: string;
  detail?: string;
};

export type Project = {
  slug: string;
  title: string;
  type: string;
  summary: string;
  description: string;
  stack: string;
  theme: ProjectTheme;
  layout: ProjectLayout;
  media: ProjectMediaItem[];
  links: ProjectLink[];
  metrics?: ProjectMetric[];
  /* Draft case-study material; not rendered yet. */
  problem?: string;
  solution?: string;
  architecture?: {
    caption: string;
    stages: ArchitectureNode[][];
  };
  decisions?: { title: string; description: string }[];
  progression?: { title: string; detail: string }[];
};
