import { CopyEmail } from "@/components/CopyEmail";
import { ArrowIcon } from "@/components/Icons";
import { MediaViewerProvider } from "@/components/MediaViewerProvider";
import { ProjectSection } from "@/components/ProjectSection";
import { SiteHeader } from "@/components/SiteHeader";
import { ThemeChrome } from "@/components/ThemeChrome";
import { contact, site } from "@/config/site";
import { projects } from "@/content/projects";
import styles from "./page.module.css";

const galleries = Object.fromEntries(
  projects.map((project) => [project.slug, { title: project.title, media: project.media }]),
);

function ExternalLink({ href, label, children }: { href: string; label: string; children: string }) {
  return (
    <a href={href} target="_blank" rel="noreferrer" aria-label={`${label} (opens in a new tab)`}>
      {children}
      <ArrowIcon direction="up-right" size={13} />
    </a>
  );
}

export default function Home() {
  return (
    <main id="top" className={styles.page}>
      <a className={styles.skipLink} href="#work">Skip to work</a>
      <ThemeChrome selector="[data-chrome]" />

      <SiteHeader home />

      <section className={styles.intro} aria-labelledby="intro-title">
        <div className={styles.introInner}>
          <h1 id="intro-title">
            <span className={styles.statementLine}>I design interfaces</span>{" "}
            <span className={styles.statementLine}>and build them.</span>
          </h1>
        </div>
      </section>

      <MediaViewerProvider galleries={galleries}>
        <section id="work" className={styles.work} aria-label="Selected work">
          {projects.map((project, index) => (
            <ProjectSection key={project.slug} project={project} priority={index === 0} />
          ))}
        </section>
      </MediaViewerProvider>

      <section id="about" className={styles.about} aria-labelledby="about-title">
        <h2 id="about-title" className={styles.sectionTitle}>About</h2>
        <div className={styles.aboutBody}>
          <p className={styles.aboutLead}>
            Most of my work starts with a real annoyance: a clunky school portal, a spreadsheet nobody trusts, event schedules scattered across three websites. I design the fix and build it until people actually use it.
          </p>
          <dl className={styles.facts}>
            <div>
              <dt>Looking for</dt>
              <dd>Full-time product design and design engineering roles. Taking select freelance projects.</dd>
            </div>
            <div>
              <dt>Education</dt>
              <dd>Grand Canyon University, Honors College · B.S. Software Development, expected Apr. 2027</dd>
            </div>
          </dl>
        </div>
      </section>

      <section id="contact" className={styles.contact} aria-labelledby="contact-title">
        <h2 id="contact-title" className={styles.sectionTitle}>Contact</h2>
        <div className={styles.contactBody}>
          <div className={styles.contactEmailRow}>
            <a className={styles.contactEmail} href={`mailto:${contact.email}`}>
              {contact.email}
              <ArrowIcon />
            </a>
            <CopyEmail email={contact.email} className={styles.copyEmail} />
          </div>
          <div className={styles.contactLinks}>
            <a href={contact.phone.href}>{contact.phone.display}</a>
            <ExternalLink href={contact.linkedin} label="LinkedIn">LinkedIn</ExternalLink>
            <ExternalLink href={contact.github} label="GitHub">GitHub</ExternalLink>
            <ExternalLink href={site.resumeHref} label="Resume (PDF)">Resume</ExternalLink>
          </div>
        </div>
        <a className={styles.backToTop} href="#top">
          Back to top
          <ArrowIcon direction="up" size={13} />
        </a>
      </section>
    </main>
  );
}
