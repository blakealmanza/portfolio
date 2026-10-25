"use client";

import { useEffect } from "react";

const chromeVars = ["--bg", "--ink", "--muted", "--accent"] as const;

/**
 * Hands the sticky header, scrollbar, and text selection to whichever themed section sits under the header.
 * Copies that section's theme onto the root as --chrome-* properties, so scrolling never re-renders the page.
 */
export function ThemeChrome({ selector }: { selector: string }) {
  useEffect(() => {
    const root = document.documentElement;
    const sections = Array.from(document.querySelectorAll<HTMLElement>(selector));
    if (sections.length === 0) return;

    let current: HTMLElement | undefined;
    let frame = 0;

    const apply = () => {
      frame = 0;
      // Just below the header's bottom edge, so a band takes over once its top edge has slid under the header.
      const line = (parseFloat(getComputedStyle(root).getPropertyValue("--header-height")) || 0) + 1;
      const next = sections.find((section) => {
        const { top, bottom } = section.getBoundingClientRect();
        return top <= line && bottom > line;
      });
      if (next === current) return;
      current = next;

      if (!next) {
        chromeVars.forEach((name) => root.style.removeProperty(`--chrome-${name.slice(2)}`));
        root.style.removeProperty("color-scheme");
        return;
      }

      const theme = getComputedStyle(next);
      chromeVars.forEach((name) => root.style.setProperty(`--chrome-${name.slice(2)}`, theme.getPropertyValue(name)));
      root.style.setProperty("color-scheme", next.dataset.scheme ?? "dark");
    };

    const schedule = () => {
      if (!frame) frame = requestAnimationFrame(apply);
    };

    apply();
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
    };
  }, [selector]);

  return null;
}
