import Link from "next/link";
import { ViewTransition, type ReactNode } from "react";
import { site } from "@/config/site";
import { ArrowIcon } from "./Icons";
import styles from "./SiteHeader.module.css";
import { leaveTypes } from "./transitions";

type NavLinkProps = { home: boolean; href: string; className?: string; children: ReactNode };

/** On the homepage a plain in-page anchor; elsewhere a link home, through the return transition. */
function NavLink({ home, href, className, children }: NavLinkProps) {
  return home ? (
    <a href={href} className={className}>
      {children}
    </a>
  ) : (
    <Link href={href} className={className} transitionTypes={leaveTypes}>
      {children}
    </Link>
  );
}

/**
 * The sticky header shared by every page. It wears the theme of the band beneath it (see ThemeChrome)
 * and holds still through page transitions. On the homepage its links are in-page anchors; elsewhere they lead home first.
 */
export function SiteHeader({ home = false }: { home?: boolean }) {
  const base = home ? "" : "/";

  return (
    // A pair on every page, so React always starts a transition when the page changes, even with no band to morph.
    <ViewTransition name="site-header" share="auto" default="none">
      <header data-site-header className={styles.header}>
        <div className={styles.inner}>
          <NavLink home={home} className={styles.brand} href={home ? "#top" : "/"}>
            {site.name}
          </NavLink>
          <nav className={styles.nav} aria-label="Main">
            <NavLink home={home} href={`${base}#work`}>Work</NavLink>
            <NavLink home={home} className={styles.navAbout} href={`${base}#about`}>About</NavLink>
            <a href={site.resumeHref} target="_blank" rel="noreferrer" aria-label="Resume (PDF, opens in a new tab)">
              Resume
              <ArrowIcon direction="up-right" size={13} />
            </a>
            <NavLink home={home} href={`${base}#contact`}>Contact</NavLink>
          </nav>
        </div>
      </header>
    </ViewTransition>
  );
}
