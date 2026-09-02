"use client";

import dynamic from "next/dynamic";
import Image from "next/image";
import { MouseEvent, useEffect, useRef, useState } from "react";
import type { CaseStudyProject } from "../content/projects";
import { projects } from "../content/projects";
import styles from "./page.module.css";

const ProjectMediaViewer = dynamic(() => import("./ProjectMediaViewer"), { ssr: false });

export default function Home() {
  const [activeProject, setActiveProject] = useState(projects[0].slug);
  const [viewer, setViewer] = useState<{ project: CaseStudyProject; index: number } | null>(null);
  const projectElements = useRef(new Map<string, HTMLElement>());
  const mediaTrigger = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    let frameId = 0;

    const updateActiveProject = () => {
      const viewportCenter = window.innerHeight / 2;
      const focusedProject = projects
        .map((project) => projectElements.current.get(project.slug))
        .filter((element): element is HTMLElement => element !== undefined)
        .reduce<HTMLElement | null>((closest, element) => {
          if (!closest) return element;

          const elementCenter = element.getBoundingClientRect().top + element.getBoundingClientRect().height / 2;
          const closestCenter = closest.getBoundingClientRect().top + closest.getBoundingClientRect().height / 2;

          return Math.abs(elementCenter - viewportCenter) < Math.abs(closestCenter - viewportCenter)
            ? element
            : closest;
        }, null);

      if (focusedProject) {
        setActiveProject((currentProject) =>
          currentProject === focusedProject.id ? currentProject : focusedProject.id,
        );
      }
    };

    const requestActiveProjectUpdate = () => {
      cancelAnimationFrame(frameId);
      frameId = requestAnimationFrame(updateActiveProject);
    };

    requestActiveProjectUpdate();
    window.addEventListener("scroll", requestActiveProjectUpdate, { passive: true });
    window.addEventListener("resize", requestActiveProjectUpdate);

    return () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener("scroll", requestActiveProjectUpdate);
      window.removeEventListener("resize", requestActiveProjectUpdate);
    };
  }, []);

  useEffect(() => {
    const focusProjectFromHash = () => {
      const projectId = window.location.hash.slice(1);
      const project = projectElements.current.get(projectId);
      if (!project) return;

      project.scrollIntoView({ behavior: "auto", block: "center" });
      setActiveProject((currentProject) => (currentProject === projectId ? currentProject : projectId));
    };

    focusProjectFromHash();
    window.addEventListener("hashchange", focusProjectFromHash);
    window.addEventListener("popstate", focusProjectFromHash);

    return () => {
      window.removeEventListener("hashchange", focusProjectFromHash);
      window.removeEventListener("popstate", focusProjectFromHash);
    };
  }, []);

  const closeViewer = () => {
    setViewer(null);
    requestAnimationFrame(() => mediaTrigger.current?.focus());
  };

  const focusProject = (event: MouseEvent<HTMLAnchorElement>, projectId: string) => {
    event.preventDefault();

    const project = projectElements.current.get(projectId);
    if (!project) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    project.scrollIntoView({ behavior: reduceMotion ? "auto" : "smooth", block: "center" });

    const projectHash = `#${projectId}`;
    if (window.location.hash !== projectHash) {
      window.history.pushState(null, "", projectHash);
    }

    setActiveProject(projectId);
  };

  return (
    <main id="top" className={styles.page}>
      <a className={styles.skipLink} href="#work-title">Skip to work</a>
      <nav className={styles.nav} aria-label="Main navigation">
        <a className={styles.brand} href="#top" aria-label="Blake Almanza home">
          Blake Almanza
        </a>
        <div className={styles.navLinks}>
          <a href="#work">Work</a>
          <a href="/design-lab">Design Lab</a>
          <a href="/Blake_Almanza_Resume.pdf" target="_blank" rel="noreferrer" aria-label="Open resume PDF in a new tab">Resume ↗</a>
          <a href="https://github.com/blakealmanza" target="_blank" rel="noreferrer" aria-label="GitHub (opens in a new tab)">GitHub ↗</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      <section className={styles.hero}>
        <p className={styles.availability}>Available for work.</p>
        <h1>
          Building useful
          <br /> software, cleanly.
        </h1>
        <div className={styles.heroBottom}>
          <p>
            I build practical tools across web, cloud, and embedded systems, with equal attention to engineering foundations and thoughtful product experiences.
          </p>
          <a className={styles.heroCta} href="#work">View work ↓</a>
        </div>

      </section>

      <section id="work" className={styles.work} aria-labelledby="work-title">
        <h2 id="work-title" className={styles.srOnly} tabIndex={-1}>Work</h2>
        <div className={styles.workLayout}>
          <aside className={styles.projectIndexRail}>
            <nav className={styles.projectIndex} aria-label="Project index">
              {projects.map((project) => (
                <a
                  key={project.slug}
                  className={activeProject === project.slug ? styles.activeIndexItem : ""}
                  href={`#${project.slug}`}
                  onClick={(event) => focusProject(event, project.slug)}
                  aria-current={activeProject === project.slug ? "location" : undefined}
                >
                  <span>{project.number}</span>
                  <strong>{project.title}</strong>
                </a>
              ))}
            </nav>
          </aside>

          <div className={styles.projectList}>
            {projects.map((project) => (
              <article
                className={styles.project}
                id={project.slug}
                key={project.title}
                ref={(element) => {
                  if (element) {
                    projectElements.current.set(project.slug, element);
                  } else {
                    projectElements.current.delete(project.slug);
                  }
                }}
              >
                <div
                  className={`${styles.imageSet} ${project.media.length === 1 ? styles.singleMedia : ""}`}
                  aria-label={`${project.title} media gallery`}
                  role="group"
                >
                  {project.media.slice(0, 1).map((media, index) => (
                    <button
                      className={`${styles.mediaButton} ${styles.primaryImage}`}
                      key={media.label}
                      type="button"
                      onClick={(event) => {
                        mediaTrigger.current = event.currentTarget;
                        setViewer({ project, index });
                      }}
                      aria-label={`Open ${media.label} for ${project.title}`}
                    >
                      {media.kind === "video" ? (
                        <video
                          aria-hidden="true"
                          className={`${styles.mediaPreview} ${media.fit === "contain" ? styles.containMedia : ""}`}
                          src={media.src}
                          muted
                          playsInline
                          poster={media.poster}
                          preload="metadata"
                        />
                      ) : (
                        <Image
                          className={`${styles.mediaPreview} ${media.fit === "contain" ? styles.containMedia : ""}`}
                          src={media.src}
                          alt=""
                          fill
                          quality={100}
                          sizes="(max-width: 1023px) 100vw, 60vw"
                        />
                      )}
                      <span className={styles.mediaLabel}>{media.label}</span>
                    </button>
                  ))}
                  <div className={styles.secondaryImages}>
                    {project.media.slice(1, 3).map((media, index) => (
                      <button
                        className={styles.mediaButton}
                        key={media.label}
                        type="button"
                        onClick={(event) => {
                          mediaTrigger.current = event.currentTarget;
                          setViewer({ project, index: index + 1 });
                        }}
                        aria-label={`Open ${media.label} for ${project.title}`}
                      >
                        {media.kind === "video" ? (
                          <video
                            aria-hidden="true"
                            className={`${styles.mediaPreview} ${media.fit === "contain" ? styles.containMedia : ""}`}
                            src={media.src}
                            muted
                            playsInline
                            poster={media.poster}
                            preload="metadata"
                          />
                        ) : (
                          <Image
                            className={`${styles.mediaPreview} ${media.fit === "contain" ? styles.containMedia : ""}`}
                            src={media.src}
                            alt=""
                            fill
                            quality={100}
                            sizes="(max-width: 1023px) 100vw, 28vw"
                          />
                        )}
                        <span className={styles.mediaLabel}>{media.label}</span>
                        {media.kind === "video" && <span className={styles.videoCue} aria-hidden="true">Play</span>}
                      </button>
                    ))}
                  </div>
                </div>

                <div className={styles.projectDetails}>
                  <div className={styles.projectUtility}>
                    <p className={styles.projectTech}>
                      <span className={styles.projectNumber}>{project.number} · </span>
                      {project.homepageStack}
                    </p>
                    <div className={styles.projectLinks}>
                      {project.overview && <a href={`/projects/${project.slug}`}>Case study →</a>}
                      {project.links.map((link) => (
                        <a
                          href={link.href}
                          key={link.label}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`${link.label} for ${project.title} (opens in a new tab)`}
                        >
                          {link.label} →
                        </a>
                      ))}
                    </div>
                  </div>

                  <div className={styles.projectCopy}>
                    <h3>{project.title}</h3>
                    <p className={styles.projectSummary}>{project.summary}</p>
                    {project.metrics && (
                      <dl className={styles.projectMetrics}>
                        {project.metrics.map((metric) => (
                          <div key={metric.label}>
                            <dt>{metric.value}</dt>
                            <dd>{metric.label}</dd>
                          </div>
                        ))}
                      </dl>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {viewer && <ProjectMediaViewer projectTitle={viewer.project.title} media={viewer.project.media} index={viewer.index} onCloseAction={closeViewer} />}

      <section className={styles.designLabTeaser} aria-labelledby="design-lab-title">
        <p>Design Lab</p>
        <div className={styles.designLabFeature}>
          <div className={styles.designLabPreview} aria-hidden="true">
            <span>Concept preview</span>
            <div className={styles.designLabMockRail} />
            <div className={styles.designLabMockMain}>
              <i />
              <i />
              <i />
              <b />
              <b />
            </div>
          </div>
          <div className={styles.designLabCopy}>
            <h2 id="design-lab-title">Interface concepts, clearly separate from shipped work.</h2>
            <p>Explorations in developer tools, sports software, and embedded-device interfaces.</p>
            <a href="/design-lab">View Design Lab →</a>
          </div>
        </div>
      </section>


      <section id="contact" className={styles.contact} aria-labelledby="contact-title">
        <p>Contact</p>
        <div className={styles.contactContent}>
          <h2 id="contact-title">Let’s build something useful.</h2>

          <div className={styles.contactDetails}>
            <div className={styles.contactGroup}>
              <p>Direct</p>
              <div>
                <a href="mailto:blakealmanza02@gmail.com">blakealmanza02@gmail.com →</a>
                <a href="tel:+13602028791">(360) 202-8791 →</a>
              </div>
            </div>

            <div className={styles.contactGroup}>
              <p>Profiles</p>
              <div>
                <a
                  href="https://www.linkedin.com/in/blakealmanza"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn (opens in a new tab)"
                >
                  LinkedIn →
                </a>
                <a href="/Blake_Almanza_Resume.pdf" target="_blank" rel="noreferrer" aria-label="Open resume PDF in a new tab">Resume →</a>
                <a
                  href="https://github.com/blakealmanza"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="GitHub (opens in a new tab)"
                >
                  GitHub →
                </a>
              </div>
            </div>
          </div>
        </div>

        <a className={styles.contactBack} href="#top">Back to top ↑</a>
      </section>
    </main>
  );
}
