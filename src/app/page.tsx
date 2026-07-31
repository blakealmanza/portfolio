"use client";

import dynamic from "next/dynamic";
import Image from "next/image";
import { MouseEvent, useEffect, useRef, useState } from "react";
import type { ProjectMediaItem } from "./ProjectMediaViewer";
import styles from "./page.module.css";

const ProjectMediaViewer = dynamic(() => import("./ProjectMediaViewer"), { ssr: false });

type Project = {
  id: string;
  number: string;
  title: string;
  type: string;
  summary: string;
  description: string;
  stack: string;
  media: ProjectMediaItem[];
  links: { label: string; href: string }[];
};

const projects: Project[] = [
  {
    id: "better-halo",
    number: "01",
    title: "Better Halo",
    type: "Browser extension",
    summary: "A student-first extension that makes GCU’s Halo LMS easier to use.",
    description:
      "Students can personalize their LMS, stay on top of assignments, and navigate a more comfortable learning experience.",
    stack: "React · TypeScript · GraphQL · Web Extension APIs",
    media: [
      {
        kind: "image",
        src: "/projects/better-halo/theme-customizer.webp",
        alt: "Better Halo theme customizer applied to the Halo LMS dashboard",
        label: "Theme editor",
      },
      {
        kind: "image",
        src: "/projects/better-halo/gallery.webp",
        alt: "Better Halo community theme gallery",
        label: "Theme gallery",
      },
      {
        kind: "image",
        src: "/projects/better-halo/extension.webp",
        alt: "Better Halo theme and dark mode controls",
        label: "Theme controls",
        fit: "contain",
      },
    ],
    links: [{ label: "Live site", href: "https://www.betterhalo.app" }],
  },
  {
    id: "wsbri",
    number: "02",
    title: "Washington State Barrel Racing Info",
    type: "Freelance platform",
    summary: "Event schedules, results, and rider updates for Washington barrel racers.",
    description: "A central hub for competitors to find events, follow results, explore arenas, and receive timely updates.",
    stack: "Calendar UI · Google Maps · Resend · Automation",
    media: [
      {
        kind: "image",
        src: "/projects/wsbri/home.webp",
        alt: "Washington State Barrel Racing Info homepage",
        label: "Homepage",
      },
      {
        kind: "image",
        src: "/projects/wsbri/events.webp",
        alt: "Washington State Barrel Racing Info event calendar",
        label: "Event calendar",
      },
      {
        kind: "image",
        src: "/projects/wsbri/arenas.webp",
        alt: "Washington State Barrel Racing Info arena map and directory",
        label: "Arena directory",
      },
    ],
    links: [{ label: "Live site", href: "https://www.wsbarrelracing.com" }],
  },
  {
    id: "kimbo-learning",
    number: "03",
    title: "Kimbo Learning",
    type: "AI learning platform",
    summary: "Interactive, AI-powered stories for K–3 learners.",
    description:
      "Young readers choose what happens next, complete reading quests, and follow their progress across every adventure.",
    stack: "AI · RAG · Supabase · Redis · Accessibility",
    media: [
      {
        kind: "image",
        src: "/projects/kimbo-learning/home.webp",
        alt: "Kimbo Learning adventure dashboard with reading progress and story collection",
        label: "Adventure dashboard",
      },
      {
        kind: "image",
        src: "/projects/kimbo-learning/story.webp",
        alt: "Kimbo Learning interactive story screen with a reading passage and choice prompts",
        label: "Story choices",
      },
      {
        kind: "video",
        src: "/projects/kimbo-learning/demo.mp4",
        poster: "/projects/kimbo-learning/poster.webp",
        alt: "Kimbo Learning loading animation",
        label: "Loading animation",
      },
    ],
    links: [],
  },
  {
    id: "golf-caddie",
    number: "04",
    title: "Golf Caddie",
    type: "Progressive web app",
    summary: "GPS yardages, shot tracking, and course maps for every round.",
    description: "A mobile-first golf companion that helps players plan shots, track rounds, and navigate courses with confidence.",
    stack: "React · TypeScript · AWS · Google Maps API",
    media: [
      {
        kind: "image",
        src: "/projects/golf-caddie/play.webp",
        alt: "Golf Caddie yardage map and shot-tracking view",
        label: "Yardage map",
        fit: "contain",
      },
      {
        kind: "image",
        src: "/projects/golf-caddie/home.webp",
        alt: "Golf Caddie home and current round screen",
        label: "Round home",
        fit: "contain",
      },
      {
        kind: "image",
        src: "/projects/golf-caddie/courses.webp",
        alt: "Golf Caddie course selection screen",
        label: "Course library",
        fit: "contain",
      },
    ],
    links: [],
  },
];

export default function Home() {
  const [activeProject, setActiveProject] = useState(projects[0].id);
  const [viewer, setViewer] = useState<{ project: Project; index: number } | null>(null);
  const projectElements = useRef(new Map<string, HTMLElement>());
  const mediaTrigger = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    let frameId = 0;

    const updateActiveProject = () => {
      const viewportCenter = window.innerHeight / 2;
      const focusedProject = projects
        .map((project) => projectElements.current.get(project.id))
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
          <a href="#contact">Contact</a>
        </div>
      </nav>

      <section className={styles.hero}>
        <p className={styles.availability}>Available for work.</p>
        <h1>
          Building useful
          <br /> sof<span className={styles.tightPair}>t</span>ware, cleanly.
        </h1>
        <div className={styles.heroBottom}>
          <p>
            I’m Blake Almanza, building browser extensions, web apps, and practical tools for real people.
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
                  key={project.id}
                  className={activeProject === project.id ? styles.activeIndexItem : ""}
                  href={`#${project.id}`}
                  onClick={(event) => focusProject(event, project.id)}
                  aria-current={activeProject === project.id ? "location" : undefined}
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
                id={project.id}
                key={project.title}
                ref={(element) => {
                  if (element) {
                    projectElements.current.set(project.id, element);
                  } else {
                    projectElements.current.delete(project.id);
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
                    <p className={styles.projectType}>
                      <span className={styles.projectNumber}>{project.number} · </span>
                      {project.type}
                    </p>
                    <div className={styles.projectLinks}>
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
                    <p className={styles.projectDescription}>{project.description}</p>
                    <p className={styles.stack}>{project.stack}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {viewer && <ProjectMediaViewer media={viewer.project.media} index={viewer.index} onCloseAction={closeViewer} />}


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
