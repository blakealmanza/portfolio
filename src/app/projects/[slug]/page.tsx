import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { caseStudies, getProject } from "../../../content/projects";
import { siteName, siteUrl } from "../../site";
import styles from "./page.module.css";

type PageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return caseStudies.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project?.overview) return {};

  return {
    title: `${project.title} — ${siteName}`,
    description: project.summary,
    alternates: siteUrl ? { canonical: `/projects/${project.slug}` } : undefined,
  };
}

export default async function ProjectCaseStudy({ params }: PageProps) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project?.overview) notFound();

  const [hero, ...gallery] = project.media;

  return (
    <main className={styles.page}>
      <nav className={styles.nav} aria-label="Case study navigation">
        <Link className={styles.brand} href="/">Blake Almanza</Link>
        <Link className={styles.back} href="/#work">← All work</Link>
      </nav>

      <article className={styles.caseStudy}>
        <header className={styles.hero}>
          <p className={styles.eyebrow}>{project.type}</p>
          <h1>{project.title}</h1>
          <p className={styles.summary}>{project.summary}</p>
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
            <dl className={styles.metrics}>
              {project.metrics.map((metric) => (
                <div className={styles.metric} key={metric.label}>
                  <dt className={styles.metricValue}>{metric.value}</dt>
                  <dd className={styles.metricLabel}>{metric.label}</dd>
                </div>
              ))}
            </dl>
          )}
        </header>

        <figure className={styles.heroMedia}>
          <Image className={styles.heroImage} src={hero.src} alt={hero.alt} fill sizes="(max-width: 1264px) 100vw, 1220px" priority />
        </figure>

        <section className={styles.section} aria-labelledby="overview-title">
          <p className={styles.sectionLabel}>Overview</p>
          <div className={styles.sectionContent}>
            <h2 id="overview-title">Useful by design, grounded in a real workflow.</h2>
            <p>{project.overview}</p>
          </div>
        </section>

        {(project.problem || project.solution) && (
          <section className={styles.section} aria-label="Problem and solution">
            <p className={styles.sectionLabel}>Context</p>
            <div className={styles.twoColumn}>
              {project.problem && <div><h2>Problem</h2><p>{project.problem}</p></div>}
              {project.solution && <div><h2>What I built</h2><p>{project.solution}</p></div>}
            </div>
          </section>
        )}

        {project.architecture && (
          <section className={styles.section} aria-labelledby="architecture-title">
            <p className={styles.sectionLabel}>Architecture</p>
            <div className={styles.sectionContent}>
              <h2 id="architecture-title">The system at a glance.</h2>
              <div className={styles.architecture} aria-label={project.architecture.caption}>
                {project.architecture.stages.map((stage, index) => (
                  <div className={styles.stage} key={index}>
                    {stage.map((node) => <div className={styles.node} key={node.label}><span>{node.label}</span>{node.detail && <span className={styles.stageDetail}>{node.detail}</span>}</div>)}
                  </div>
                ))}
              </div>
              <p>{project.architecture.caption}</p>
            </div>
          </section>
        )}

        {gallery.length > 0 && (
          <section className={styles.section} aria-labelledby="product-title">
            <p className={styles.sectionLabel}>Product</p>
            <div className={styles.sectionContent}>
              <h2 id="product-title">Designed to be understood quickly.</h2>
              <div className={styles.mediaGrid}>
                {gallery.map((media) => (
                  <figure className={`${styles.mediaTile} ${media.fit === "contain" ? styles.contain : ""}`} key={media.src}>
                    <Image src={media.src} alt={media.alt} fill sizes="(max-width: 700px) 100vw, 55vw" />
                    <figcaption className={styles.mediaLabel}>{media.label}</figcaption>
                  </figure>
                ))}
              </div>
            </div>
          </section>
        )}

        {project.progression && (
          <section className={styles.section} aria-labelledby="progression-title">
            <p className={styles.sectionLabel}>Process</p>
            <div className={styles.sectionContent}>
              <h2 id="progression-title">From concept to physical product.</h2>
              <ol className={styles.progressionList}>
                {project.progression.map((step, index) => (
                  <li className={styles.progressionStep} key={step.title}>
                    <span>{String(index + 1).padStart(2, "0")}</span>
                    <div><h3>{step.title}</h3><p>{step.detail}</p></div>
                  </li>
                ))}
              </ol>
            </div>
          </section>
        )}

        {project.decisions && (
          <section className={styles.section} aria-labelledby="decisions-title">
            <p className={styles.sectionLabel}>Decisions</p>
            <div className={styles.sectionContent}>
              <h2 id="decisions-title">Engineering and product choices.</h2>
              <div className={styles.decisionList}>
                {project.decisions.map((decision) => <div className={styles.decision} key={decision.title}><h3>{decision.title}</h3><p>{decision.description}</p></div>)}
              </div>
            </div>
          </section>
        )}

        <section className={styles.section} aria-labelledby="technology-title">
          <p className={styles.sectionLabel}>Technology</p>
          <div className={styles.sectionContent}>
            <h2 id="technology-title">Built with the right tools for the job.</h2>
            <p className={styles.tech}>{project.stack}</p>
          </div>
        </section>
      </article>
    </main>
  );
}
