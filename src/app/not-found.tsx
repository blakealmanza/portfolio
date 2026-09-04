import Link from "next/link";
import styles from "./not-found.module.css";

/*
THESIS: A wrong turn resolves as a calm signpost, not a dead end.
OWN-WORLD: The portfolio's black field, warm-white type, muted text, and fine hairlines.
STORY: The visitor understands this page is unavailable and can immediately return to relevant work or contact.
FIRST VIEWPORT: A slim nameplate sits above an oversized message, with recovery links aligned below.
FORM: A single editorial error state that preserves the homepage's quiet, spacious reading rhythm.
*/
export default function NotFound() {
  return (
    <main className={styles.page}>
      <nav className={styles.nav} aria-label="Error page navigation">
        <Link className={styles.brand} href="/" aria-label="Blake Almanza home">
          Blake Almanza
        </Link>
      </nav>

      <section className={styles.content} aria-labelledby="not-found-title">
        <p className={styles.code}>404</p>
        <h1 id="not-found-title">This page isn’t here.</h1>
        <p className={styles.description}>
          It may have moved, or the link may be out of date. You can return to my work or get in touch.
        </p>
        <div className={styles.actions}>
          <Link href="/#work">View work ↓</Link>
          <Link href="/#contact">Contact →</Link>
        </div>
      </section>
    </main>
  );
}
