import { ViewTransition, type ReactNode } from "react";

/**
 * A whole page as one piece of every navigation. React won't crossfade the document itself when nothing changes outside
 * its <ViewTransition> boundaries, so each page names its own way in and out: the leaving page holds still underneath,
 * and the arriving page fades in over it (rising into place on the way back home), so the two never dip to the ground
 * colour between them. Bands, the header, and their pieces travel separately on top.
 */
export function PageTransition({ children }: { children: ReactNode }) {
  return (
    <ViewTransition enter={{ "case-back": "page-rise", default: "page-in" }} exit="page-out" default="none">
      {children}
    </ViewTransition>
  );
}
