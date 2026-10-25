import type { CSSProperties } from "react";
import { ArrowIcon } from "@/components/Icons";
import { MediaViewerProvider } from "@/components/MediaViewerProvider";
import { ProjectSection, faceStyle } from "@/components/ProjectSection";
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

      <header className={styles.header}>
        <div className={styles.headerInner}>
          <a className={styles.brand} href="#top">{site.name}</a>
          <nav className={styles.nav} aria-label="Main">
            <a className={styles.navWork} href="#work">Work</a>
            <a href="#about">About</a>
            <ExternalLink href={site.resumeHref} label="Resume (PDF)">Resume</ExternalLink>
            <a href="#contact">Contact</a>
          </nav>
        </div>
      </header>

      <section className={styles.intro} aria-labelledby="intro-title">
        <h1 id="intro-title">I design interfaces and build them.</h1>
        <div className={styles.introFoot}>
          <p>Browser extensions, mobile apps, and the systems behind them.</p>
          <nav className={styles.index} aria-label="Projects">
            <ul>
              {projects.map((project) => (
                <li key={project.slug}>
                  <a
                    href={`#${project.slug}`}
                    style={{ ...faceStyle(project.face), "--signal": project.theme.signal } as CSSProperties}
                  >
                    {project.shortTitle ?? project.title}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
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
            I’m a designer and developer who takes products from brand and interface design through to the code that ships them.
          </p>
          <p>
            I’m finishing a B.S. in Software Development with an emphasis in mobile app development at Grand Canyon University’s Honors College, and I take on freelance design and development work for small businesses and community organizations.
          </p>
          <dl className={styles.facts}>
            <div>
              <dt>Education</dt>
              <dd>Grand Canyon University, Honors College · B.S. Software Development, Apr. 2027</dd>
            </div>
            <div>
              <dt>Freelance</dt>
              <dd>Designer &amp; developer since Apr. 2025</dd>
            </div>
            <div>
              <dt>Certification</dt>
              <dd>AWS Certified Cloud Practitioner</dd>
            </div>
          </dl>
        </div>
      </section>

      <section id="contact" className={styles.contact} aria-labelledby="contact-title">
        <h2 id="contact-title">Let’s build something useful.</h2>
        <a className={styles.contactEmail} href={`mailto:${contact.email}`}>
          {contact.email}
          <ArrowIcon />
        </a>
        <div className={styles.contactLinks}>
          <a href={contact.phone.href}>{contact.phone.display}</a>
          <ExternalLink href={contact.linkedin} label="LinkedIn">LinkedIn</ExternalLink>
          <ExternalLink href={contact.github} label="GitHub">GitHub</ExternalLink>
          <ExternalLink href={site.resumeHref} label="Resume (PDF)">Resume</ExternalLink>
          <a className={styles.backToTop} href="#top">
            Back to top
            <ArrowIcon direction="up" size={13} />
          </a>
        </div>
      </section>
    </main>
  );
}
