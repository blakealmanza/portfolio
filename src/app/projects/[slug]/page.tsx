import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowIcon } from "@/components/Icons";
import { MediaViewerProvider } from "@/components/MediaViewerProvider";
import { ProjectSection, faceStyle, themeStyle } from "@/components/ProjectSection";
import { SiteHeader } from "@/components/SiteHeader";
import { ThemeChrome } from "@/components/ThemeChrome";
import { site } from "@/config/site";
import { projects } from "@/content/projects";
import styles from "./page.module.css";

const caseStudies = projects.filter((project) => project.caseStudy);

export const dynamicParams = false;

export function generateStaticParams() {
  return caseStudies.map((project) => ({ slug: project.slug }));
}

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = caseStudies.find((item) => item.slug === slug);
  if (!project) return {};

  return {
    title: `${project.title} — ${site.name}`,
    description: project.summary,
    alternates: site.url ? { canonical: `/projects/${project.slug}` } : undefined,
  };
}

export default async function CaseStudyPage({ params }: Props) {
  const { slug } = await params;
  const index = caseStudies.findIndex((item) => item.slug === slug);
  if (index === -1) notFound();

  const project = caseStudies[index];
  const next = caseStudies[(index + 1) % caseStudies.length];
  const gallery = { [project.slug]: { title: project.title, media: project.media } };

  return (
    // The whole page stays in the product's world: the band opens it, and the write-up continues on the same ground.
    <main className={styles.page} style={themeStyle(project.theme)}>
      <SiteHeader />
      <ThemeChrome selector="[data-chrome]" />

      <MediaViewerProvider galleries={gallery}>
        <ProjectSection project={project} variant="page" priority />
      </MediaViewerProvider>

      <div className={styles.body} data-chrome data-scheme={project.theme.scheme}>
        <section className={styles.section} aria-labelledby="overview-title">
          <h2 id="overview-title" className={styles.sectionTitle}>Overview</h2>
          <div className={styles.content}>
            <p className={styles.lead}>{project.description}</p>
            <dl className={styles.facts}>
              <div>
                <dt>Built with</dt>
                <dd>{project.stack}</dd>
              </div>
              {project.links.length > 0 && (
                <div>
                  <dt>Links</dt>
                  <dd className={styles.links}>
                    {project.links.map((link) => (
                      <a
                        key={link.href}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${link.label} for ${project.title} (opens in a new tab)`}
                      >
                        {link.label}
                        <ArrowIcon direction="up-right" size={13} />
                      </a>
                    ))}
                  </dd>
                </div>
              )}
            </dl>
          </div>
        </section>

        {project.problem && (
          <section className={styles.section} aria-labelledby="problem-title">
            <h2 id="problem-title" className={styles.sectionTitle}>Problem</h2>
            <div className={styles.content}>
              <p className={styles.prose}>{project.problem}</p>
            </div>
          </section>
        )}

        {project.solution && (
          <section className={styles.section} aria-labelledby="solution-title">
            <h2 id="solution-title" className={styles.sectionTitle}>Solution</h2>
            <div className={styles.content}>
              <p className={styles.prose}>{project.solution}</p>
            </div>
          </section>
        )}

        {project.architecture && (
          <section className={styles.section} aria-labelledby="architecture-title">
            <h2 id="architecture-title" className={styles.sectionTitle}>Architecture</h2>
            <figure className={styles.content}>
              <div className={styles.stages}>
                {project.architecture.stages.map((stage, stageIndex) => (
                  <div key={stageIndex} className={styles.stageGroup}>
                    {stageIndex > 0 && <ArrowIcon className={styles.flowArrow} />}
                    <ul className={styles.stage}>
                      {stage.map((node) => (
                        <li key={node.label} className={styles.node}>
                          <span>{node.label}</span>
                          {node.detail && <span className={styles.nodeDetail}>{node.detail}</span>}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
              <figcaption className={styles.caption}>{project.architecture.caption}</figcaption>
            </figure>
          </section>
        )}

        {project.decisions && project.decisions.length > 0 && (
          <section className={styles.section} aria-labelledby="decisions-title">
            <h2 id="decisions-title" className={styles.sectionTitle}>Decisions</h2>
            <dl className={`${styles.content} ${styles.rows}`}>
              {project.decisions.map((decision) => (
                <div key={decision.title}>
                  <dt>{decision.title}</dt>
                  <dd>{decision.description}</dd>
                </div>
              ))}
            </dl>
          </section>
        )}

        {project.progression && project.progression.length > 0 && (
          <section className={styles.section} aria-labelledby="progression-title">
            <h2 id="progression-title" className={styles.sectionTitle}>Progression</h2>
            <ol className={`${styles.content} ${styles.rows}`}>
              {project.progression.map((step) => (
                <li key={step.title}>
                  <span className={styles.rowTitle}>{step.title}</span>
                  <span className={styles.rowDetail}>{step.detail}</span>
                </li>
              ))}
            </ol>
          </section>
        )}

        <nav className={styles.footer} aria-label="Case studies">
          <Link className={styles.back} href={`/#${project.slug}`}>
            <ArrowIcon direction="left" size={13} />
            All work
          </Link>
          {next.slug !== project.slug && (
            <Link className={styles.next} href={`/projects/${next.slug}`} transitionTypes={["case-open"]}>
              <span className={styles.nextLabel}>Next case study</span>
              <span className={styles.nextName} style={faceStyle(next.face)}>
                {next.shortTitle ?? next.title}
                <ArrowIcon size={24} />
              </span>
            </Link>
          )}
        </nav>
      </div>
    </main>
  );
}
