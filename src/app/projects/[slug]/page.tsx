import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { caseStudies, caseStudiesVisible, getProject } from "../../../content/projects";
import { siteName, siteUrl } from "../../site";
import { CaseStudyComposition } from "./components/CaseStudyComposition";
import styles from "./page.module.css";

type PageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return caseStudies.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!caseStudiesVisible || !project?.caseStudy) return {};

  return {
    title: `${project.title} — ${siteName}`,
    description: project.summary,
    alternates: siteUrl ? { canonical: `/projects/${project.slug}` } : undefined,
  };
}

export default async function ProjectCaseStudy({ params }: PageProps) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!caseStudiesVisible || !project?.caseStudy) notFound();

  const { caseStudy } = project;

  return (
    <main className={styles.page}>
      <nav className={styles.nav} aria-label="Case study navigation">
        <Link className={styles.brand} href="/">Blake Almanza</Link>
        <Link className={styles.back} href="/#work">← All work</Link>
      </nav>

      <article className={styles.caseStudy}>
        <header className={styles.hero}>
          <div className={styles.heroCopy}>
            <p className={styles.eyebrow}>{project.type}</p>
            <h1>{project.title}</h1>
            <p className={styles.summary}>{caseStudy.framing}</p>
            {project.links.length > 0 && (
              <div className={styles.actions} aria-label={`${project.title} links`}>
                {project.links.map((link) => (
                  <a key={link.label} href={link.href} target="_blank" rel="noreferrer">
                    {link.label} ↗
                  </a>
                ))}
              </div>
            )}
            {project.metrics && (
              <dl className={styles.heroMetrics}>
                {project.metrics.map((metric) => (
                  <div key={metric.label}>
                    <dt>{metric.value}</dt>
                    <dd>{metric.label}</dd>
                  </div>
                ))}
              </dl>
            )}
          </div>

          <figure className={styles.heroCapture}>
            <div className={styles.heroCaptureCanvas} aria-hidden="true">
              <span>Case study capture</span>
              <i />
              <i />
              <i />
              <b />
            </div>
            <figcaption>
              <strong>{caseStudy.heroCapture.title}</strong>
              <span>{caseStudy.heroCapture.detail}</span>
            </figcaption>
          </figure>
        </header>

        <CaseStudyComposition slug={project.slug} />

        <footer className={styles.stack}>
          <p>Built with</p>
          <p>{caseStudy.stack}</p>
        </footer>
      </article>
    </main>
  );
}
