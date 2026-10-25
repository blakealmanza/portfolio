"use client";

import dynamic from "next/dynamic";
import { type ReactNode, createContext, useContext, useRef, useState } from "react";
import type { ProjectMediaItem } from "@/content/types";

const ProjectMediaViewer = dynamic(() => import("./ProjectMediaViewer"), { ssr: false });

type Gallery = { title: string; media: ProjectMediaItem[] };
type OpenViewer = (slug: string, index: number, trigger: HTMLButtonElement) => void;

const MediaViewerContext = createContext<OpenViewer | null>(null);

export function MediaViewerProvider({
  galleries,
  children,
}: {
  galleries: Record<string, Gallery>;
  children: ReactNode;
}) {
  const [viewer, setViewer] = useState<{ slug: string; index: number } | null>(null);
  const trigger = useRef<HTMLButtonElement | null>(null);

  const open: OpenViewer = (slug, index, button) => {
    trigger.current = button;
    setViewer({ slug, index });
  };

  const close = () => {
    setViewer(null);
    requestAnimationFrame(() => trigger.current?.focus());
  };

  const gallery = viewer ? galleries[viewer.slug] : undefined;

  return (
    <MediaViewerContext.Provider value={open}>
      {children}
      {viewer && gallery && (
        <ProjectMediaViewer projectTitle={gallery.title} media={gallery.media} index={viewer.index} onCloseAction={close} />
      )}
    </MediaViewerContext.Provider>
  );
}

export function OpenMediaButton({
  slug,
  index = 0,
  className,
  label,
  children,
}: {
  slug: string;
  index?: number;
  className?: string;
  label?: string;
  children: ReactNode;
}) {
  const open = useContext(MediaViewerContext);

  return (
    <button
      type="button"
      className={className}
      aria-label={label}
      onClick={(event) => open?.(slug, index, event.currentTarget)}
    >
      {children}
    </button>
  );
}
