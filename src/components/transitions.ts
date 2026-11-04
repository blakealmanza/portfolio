import type { ViewTransitionClass } from "react";
import { projects } from "@/content/projects";

/*
 * Which band pieces pair up across a navigation. Every link into a case study names its destination as a transition
 * type, so only the band being opened morphs. Without that, any band that also appears on the next page (a homepage
 * band and the same project's next-case strip) would pair up too, and hold its colour on screen while another opens.
 */

type Via = "case-open" | "case-next";

/** Transition type for "All work", which returns to the case study's own band on the homepage. */
export const backTypes = ["case-back"];

/** Transition types for the header's links home, which land elsewhere on the homepage, so no band morphs. */
export const leaveTypes = ["case-back", "case-leave"];

/** Transition types for a link into a case study: how it was opened, and which band it opens. */
export const openTypes = (slug: string, via: Via) => [via, `to-${slug}`];

/** A homepage band shares only when its own case study opens, or on the way back to its slot. */
export function homeShare(slug: string, className: string): ViewTransitionClass {
  return {
    default: className,
    "case-leave": "none",
    ...Object.fromEntries(projects.map((project) => [`to-${project.slug}`, project.slug === slug ? className : "none"])),
  };
}

/** A case study's own band shares with whatever leads into it or back to its slot, but not when leaving elsewhere. */
export const pageShare = (className: string): ViewTransitionClass => ({ "case-leave": "none", default: className });

/** The next-case strip shares only on the navigation it starts itself. */
export const nextShare = (className: string): ViewTransitionClass => ({ "case-next": className, default: "none" });
