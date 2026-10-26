import Link from "next/link";
import { ArrowIcon } from "@/components/Icons";
import { site } from "@/config/site";
import styles from "./not-found.module.css";

export default function NotFound() {
  return (
    <main className={styles.page}>
      <header className={styles.header}>
        <Link className={styles.brand} href="/">{site.name}</Link>
      </header>

      <section className={styles.content} aria-labelledby="not-found-title">
        <h1 id="not-found-title">This page isn’t here.</h1>
        <p className={styles.description}>
          It may have moved, or the link may be out of date. You can head back to my work or get in touch.
        </p>
        <div className={styles.actions}>
          <Link className={styles.primaryLink} href="/#work">
            View work
            <ArrowIcon />
          </Link>
          <Link className={styles.textLink} href="/#contact">Contact</Link>
        </div>
      </section>
    </main>
  );
}
