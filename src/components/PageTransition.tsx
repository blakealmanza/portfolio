import { ViewTransition, type ReactNode } from "react";

/**
 * A whole page as one piece of the trip back to the homepage. React won't crossfade the document itself when nothing
 * changes outside its <ViewTransition> boundaries, which suits opening a case study (the new page is simply there and
 * only the band's layout moves) but leaves the way back as a hard cut. So on "case-back" the leaving case study clears
 * and the homepage rises into place; every other navigation leaves pages alone.
 */
export function PageTransition({ children }: { children: ReactNode }) {
  return (
    <ViewTransition
      enter={{ "case-back": "page-rise", default: "none" }}
      exit={{ "case-back": "page-out", default: "none" }}
      default="none"
    >
      {children}
    </ViewTransition>
  );
}
