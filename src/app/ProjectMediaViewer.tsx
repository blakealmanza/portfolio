"use client";

import { useEffect, useLayoutEffect, useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Video from "yet-another-react-lightbox/plugins/video";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";

export type ProjectMediaItem = {
  kind: "image" | "video";
  src: string;
  alt: string;
  label: string;
  poster?: string;
  fit?: "cover" | "contain";
};

type ProjectMediaViewerProps = {
  media: ProjectMediaItem[];
  index: number;
  onCloseAction: () => void;
};

export default function ProjectMediaViewer({ media, index, onCloseAction }: ProjectMediaViewerProps) {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updatePreference = () => setPrefersReducedMotion(mediaQuery.matches);

    updatePreference();
    mediaQuery.addEventListener("change", updatePreference);
    return () => mediaQuery.removeEventListener("change", updatePreference);
  }, []);

  useLayoutEffect(() => {
    const scrollY = window.scrollY;
    const { body, documentElement } = document;
    const previous = {
      bodyOverflow: body.style.overflow,
      bodyPosition: body.style.position,
      bodyTop: body.style.top,
      bodyWidth: body.style.width,
      htmlOverflow: documentElement.style.overflow,
      htmlOverscrollBehavior: documentElement.style.overscrollBehavior,
      htmlScrollBehavior: documentElement.style.scrollBehavior,
    };

    documentElement.style.overflow = "hidden";
    documentElement.style.overscrollBehavior = "none";
    body.style.overflow = "hidden";
    body.style.position = "fixed";
    body.style.top = `-${scrollY}px`;
    body.style.width = "100%";

    return () => {
      body.style.overflow = previous.bodyOverflow;
      body.style.position = previous.bodyPosition;
      body.style.top = previous.bodyTop;
      body.style.width = previous.bodyWidth;
      documentElement.style.overflow = previous.htmlOverflow;
      documentElement.style.overscrollBehavior = previous.htmlOverscrollBehavior;
      documentElement.style.scrollBehavior = "auto";
      window.scrollTo(0, scrollY);
      documentElement.style.scrollBehavior = previous.htmlScrollBehavior;
    };
  }, []);

  const slides = media.map((item) =>
    item.kind === "video"
      ? {
          type: "video" as const,
          poster: item.poster,
          width: 1600,
          height: 900,
          sources: [{ src: item.src, type: "video/mp4" }],
        }
      : { src: item.src, alt: item.alt },
  );

  return (
    <Lightbox
      open
      close={onCloseAction}
      index={index}
      slides={slides}
      plugins={[Video, Thumbnails, Zoom]}
      carousel={{ finite: true, padding: "6%", spacing: "4%" }}
      thumbnails={{ position: "bottom", width: 96, height: 56, gap: 10, border: 1, borderRadius: 0, padding: 0 }}
      animation={prefersReducedMotion ? { fade: 0, swipe: 0 } : { fade: 180, swipe: 260 }}
      controller={{ closeOnBackdropClick: true }}
      video={{ controls: true, muted: true, playsInline: true, preload: "metadata" }}
      zoom={{ scrollToZoom: true }}
      styles={{
        root: {
          "--yarl__thumbnails_thumbnail_border_color": "transparent",
          "--yarl__thumbnails_thumbnail_active_border_color": "#f6f6f3",
        },
        container: { backgroundColor: "rgba(5, 5, 5, 0.98)" },
        button: { color: "#f6f6f3" },
      }}
    />
  );
}
