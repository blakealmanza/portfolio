import Link from "next/link";
import { site } from "@/config/site";
import { ArrowIcon } from "./Icons";
import styles from "./SiteHeader.module.css";

/**
 * The sticky header shared by every page. It wears the theme of the band beneath it (see ThemeChrome)
 * and holds still through page transitions. On the homepage its links are in-page anchors; elsewhere they lead home first.
 */
export function SiteHeader({ home = false }: { home?: boolean }) {
  const NavLink = home ? "a" : Link;
  const base = home ? "" : "/";

  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <NavLink className={styles.brand} href={home ? "#top" : "/"}>
          {site.name}
        </NavLink>
        <nav className={styles.nav} aria-label="Main">
          <NavLink className={styles.navWork} href={`${base}#work`}>Work</NavLink>
          <NavLink href={`${base}#about`}>About</NavLink>
          <a href={site.resumeHref} target="_blank" rel="noreferrer" aria-label="Resume (PDF, opens in a new tab)">
            Resume
            <ArrowIcon direction="up-right" size={13} />
          </a>
          <NavLink href={`${base}#contact`}>Contact</NavLink>
        </nav>
      </div>
    </header>
  );
}
