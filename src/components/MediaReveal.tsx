"use client";

import { useLayoutEffect, useRef, type CSSProperties, type ReactNode } from "react";
import styles from "./ProjectSection.module.css";

const clamp = (value: number) => Math.max(0, Math.min(1, value));

export function MediaReveal({ children, count, phones }: { children: ReactNode; count: number; phones: boolean }) {
  const ref = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const element = ref.current;
    if (!element) return;

    const screens = Array.from(element.children) as HTMLElement[];
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    let frame = 0;
    let lastProgress = -1;

    const update = () => {
      frame = 0;
      if (reducedMotion.matches) {
        lastProgress = -1;
        screens.forEach((screen) => {
          screen.style.removeProperty("opacity");
          screen.style.removeProperty("transform");
        });
        return;
      }

      const viewportHeight = window.innerHeight;
      const top = element.getBoundingClientRect().top;
      const progress = clamp((viewportHeight * 0.75 - top) / (viewportHeight * 0.3));
      if (progress === lastProgress) return;
      lastProgress = progress;

      screens.forEach((screen, index) => {
        const screenProgress = phones ? clamp((progress - index * 0.1) / 0.7) : progress;
        screen.style.opacity = String(clamp(progress * 3));
        screen.style.transform = `translateY(${20 * (1 - screenProgress)}px)`;
      });
    };

    const schedule = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    reducedMotion.addEventListener("change", schedule);

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
      reducedMotion.removeEventListener("change", schedule);
      screens.forEach((screen) => {
        screen.style.removeProperty("opacity");
        screen.style.removeProperty("transform");
      });
    };
  }, [phones]);

  return (
    <div ref={ref} className={styles.media} style={{ "--count": count } as CSSProperties}>
      {children}
    </div>
  );
}
