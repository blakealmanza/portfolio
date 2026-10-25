"use client";

import { useEffect } from "react";

/**
 * Tints the page ground toward the theme of whichever project panel sits at the middle of the viewport.
 * Writes a CSS custom property on the target element directly, so scrolling never re-renders the page.
 */
export function GroundTint({ targetId, panelSelector }: { targetId: string; panelSelector: string }) {
  useEffect(() => {
    const target = document.getElementById(targetId);
    const panels = Array.from(document.querySelectorAll<HTMLElement>(panelSelector));
    if (!target || panels.length === 0) return;

    const visible = new Set<HTMLElement>();

    const apply = () => {
      // Keep the neutral ground until the visitor starts moving through the work.
      const current = window.scrollY > 120 ? panels.find((panel) => visible.has(panel)) : undefined;
      const themeBg = current?.dataset.themeBg;

      if (themeBg) target.style.setProperty("--page-bg", `color-mix(in oklab, ${themeBg} 30%, var(--ground))`);
      else target.style.removeProperty("--page-bg");
    };

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          const panel = entry.target as HTMLElement;
          if (entry.isIntersecting) visible.add(panel);
          else visible.delete(panel);
        }
        apply();
      },
      { rootMargin: "-45% 0px -45% 0px" },
    );

    panels.forEach((panel) => observer.observe(panel));
    window.addEventListener("scroll", apply, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", apply);
    };
  }, [targetId, panelSelector]);

  return null;
}
