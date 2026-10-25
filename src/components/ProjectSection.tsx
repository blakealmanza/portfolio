import Image from "next/image";
import type { CSSProperties } from "react";
import type { Project, ProjectFace, ProjectLayout, ProjectTheme } from "@/content/types";
import { ArrowIcon } from "./Icons";
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
            className={`${styles.title} ${project.title.length > 24 ? styles.titleLong : ""}`}
            style={faceStyle(project.face)}
          >
            {project.title}
          </h2>
          <div className={styles.details}>
            <p className={styles.type}>{project.type}</p>
            <p className={styles.summary}>{project.summary}</p>
            {proof && <p className={styles.proof}>{proof}</p>}
            <div className={styles.actions}>
              <OpenMediaButton slug={project.slug} className={styles.primaryLink}>
                View screens
                <ArrowIcon />
              </OpenMediaButton>
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
          </div>
        </div>

        <div className={styles.media} style={{ "--count": shownMedia.length } as CSSProperties}>
          {shownMedia.map((media, index) => (
            <OpenMediaButton
              key={media.src}
              slug={project.slug}
              index={project.media.indexOf(media)}
              className={styles.mediaButton}
              label={`Open ${media.label} for ${project.title}`}
            >
              <Image
                src={media.src}
                alt=""
                fill
                quality={90}
                sizes={phones ? "(max-width: 900px) 30vw, 300px" : "(max-width: 900px) 100vw, 80vw"}
                priority={priority && index === 0}
              />
              {media.caption && <span className={styles.caption}>{media.caption}</span>}
            </OpenMediaButton>
          ))}
        </div>
      </div>
    </article>
  );
}
