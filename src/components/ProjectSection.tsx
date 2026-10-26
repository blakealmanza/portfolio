import Image from "next/image";
import Link from "next/link";
import { ViewTransition, type CSSProperties } from "react";
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

export function themeStyle(theme: ProjectTheme) {
  return {
    "--bg": theme.bg,
    "--surface": theme.surface,
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

/**
 * A project as a full-bleed band. On the homepage it is the project's front door: the screens link to the case study
 * when there is one, otherwise they open the viewer. On the case-study page the same band is the page's opening screen,
 * and shares a view-transition name with its homepage twin so one morphs into the other.
 */
export function ProjectSection({
  project,
  priority = false,
  variant = "home",
}: {
  project: Project;
  priority?: boolean;
  variant?: "home" | "page";
}) {
  const proof = proofLine(project);
  const shownMedia = project.media.filter((media) => media.kind === "image").slice(0, screenCount[project.layout]);
  const phones = project.layout === "phones";
  // Bands carry the product's own short mark so every title holds to one line; the full name moves to the type line.
  const name = project.shortTitle ?? project.title;
  const Title = variant === "page" ? "h1" : "h2";
  const toCaseStudy = variant === "home" && project.caseStudy;

  const screens = (
    <>
      <span className={styles.mediaLabel} aria-hidden="true">
        {toCaseStudy ? "Read the case study" : "View screens"}
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
    </>
  );

  return (
    <ViewTransition name={`band-${project.slug}`} share="band" default="none">
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
            <Title
              id={`${project.slug}-title`}
              className={`${styles.title} ${name.length > 24 ? styles.titleLong : ""}`}
              style={faceStyle(project.face)}
            >
              {name}
            </Title>
            <div className={styles.details}>
              <p className={styles.type}>{project.shortTitle ? `${project.title} · ${project.type}` : project.type}</p>
              <p className={styles.summary}>{project.summary}</p>
              {proof && <p className={styles.proof}>{proof}</p>}
            </div>
          </div>

          {/* The screens are the band's one action: the whole picture is the door, and its label sits on its top edge. */}
          {toCaseStudy ? (
            <Link
              href={`/projects/${project.slug}`}
              transitionTypes={["case-open"]}
              className={styles.mediaLink}
              aria-label={`Read the ${project.title} case study`}
            >
              {screens}
            </Link>
          ) : (
            <OpenMediaButton slug={project.slug} className={styles.mediaLink} label={`View screens for ${project.title}`}>
              {screens}
            </OpenMediaButton>
          )}
        </div>
      </article>
    </ViewTransition>
  );
}
