import Image from "next/image";
import type { CSSProperties } from "react";
import type { Project, ProjectFace, ProjectLayout, ProjectTheme } from "@/content/types";
import { ArrowIcon } from "./Icons";
import { MediaReveal } from "./MediaReveal";
import { OpenMediaButton } from "./MediaViewerProvider";
import styles from "./ProjectSection.module.css";

const layoutClass: Record<ProjectLayout, string> = {
  stage: styles.layoutStage,
  phones: styles.layoutPhones,
};

const screenCount: Record<ProjectLayout, number> = {
  stage: 1,
  phones: 4,
};

function themeStyle(theme: ProjectTheme) {
  return {
    "--bg": theme.bg,
    "--ink": theme.ink,
    "--muted": theme.muted,
    "--accent": theme.accent,
  } as CSSProperties;
}

/** The product's own display typeface, as inline styles so a name looks the same wherever it appears. */
export function faceStyle(face: ProjectFace): CSSProperties {
  return {
    fontFamily: face.family,
    fontWeight: face.weight,
    letterSpacing: face.tracking,
    textTransform: face.uppercase ? "uppercase" : undefined,
    // Capitals have no descenders to clear, but need room so stacked lines don't touch.
    lineHeight: face.uppercase ? 1.02 : undefined,
  };
}

function proofLine(project: Project) {
  const metric = project.metrics?.[0];
  return metric ? `${metric.value} ${metric.label}` : null;
}

export function ProjectSection({ project, priority = false }: { project: Project; priority?: boolean }) {
  const proof = proofLine(project);
  const shownMedia = project.media.filter((media) => media.kind === "image").slice(0, screenCount[project.layout]);
  const phones = project.layout === "phones";
  // Bands carry the product's own short mark so every title holds to one line; the full name moves to the type line.
  const name = project.shortTitle ?? project.title;

  return (
    <article
      id={project.slug}
      data-chrome
      data-scheme={project.theme.scheme}
      className={`${styles.section} ${layoutClass[project.layout]}`}
      style={themeStyle(project.theme)}
      aria-labelledby={`${project.slug}-title`}
    >
      <div className={styles.inner}>
        <div className={styles.copy}>
          <h2
            id={`${project.slug}-title`}
            className={`${styles.title} ${name.length > 24 ? styles.titleLong : ""}`}
            style={faceStyle(project.face)}
          >
            {name}
          </h2>
          <div className={styles.details}>
            <p className={styles.type}>{project.shortTitle ? `${project.title} · ${project.type}` : project.type}</p>
            <p className={styles.summary}>{project.summary}</p>
            {proof && <p className={styles.proof}>{proof}</p>}
            {project.links.length > 0 && (
              <div className={styles.links}>
                {project.links.map((link) => (
                <a
                  key={link.href}
                  className={styles.textLink}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${link.label} for ${project.title} (opens in a new tab)`}
                >
                  {link.label}
                  <ArrowIcon direction="up-right" size={13} />
                </a>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* The screens are the band's one action: the whole picture is the door, and its label sits on its top edge. */}
        <OpenMediaButton slug={project.slug} className={styles.mediaLink} label={`View screens for ${project.title}`}>
          <span className={styles.mediaLabel} aria-hidden="true">
            View screens
            <ArrowIcon />
          </span>
          <MediaReveal count={shownMedia.length} phones={phones}>
            {shownMedia.map((media, index) => (
              <span key={media.src} className={styles.screen}>
                <Image
                src={media.src}
                alt=""
                fill
                quality={90}
                sizes={phones ? "(max-width: 900px) 30vw, 300px" : "(max-width: 900px) 100vw, 80vw"}
                priority={priority && index === 0}
              />
                {media.caption && <span className={styles.caption}>{media.caption}</span>}
              </span>
            ))}
          </MediaReveal>
        </OpenMediaButton>
      </div>
    </article>
  );
}
