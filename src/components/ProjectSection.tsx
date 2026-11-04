import Image from "next/image";
import Link from "next/link";
import { ViewTransition, type CSSProperties } from "react";
import type { Project, ProjectFace, ProjectLayout, ProjectTheme } from "@/content/types";
import { ArrowIcon } from "./Icons";
import { MediaReveal } from "./MediaReveal";
import styles from "./ProjectSection.module.css";
import { homeShare, openTypes } from "./transitions";

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
 * A project as a full-bleed band. On the homepage it is the project's front door: the screens link to its case study.
 * On the case-study page the same band is the page's opening screen. Across a navigation the band itself morphs as a
 * plain colour plate, while its title, summary, and screens travel as their own pieces nested inside it, so no layout
 * is ever stretched or double-exposed. React only names these when both ends of the pair are on screen.
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
  // On its case study the band shows its screens whole, so a wide screen keeps its own proportions instead of filling a crop.
  const natural = variant === "page" && !phones;
  // On the homepage a band pairs only with its own case study; on that case study it pairs with whatever leads back.
  const share = (className: string) => (variant === "home" ? homeShare(project.slug, className) : className);

  const screens = (
    <MediaReveal count={shownMedia.length} phones={phones} animate={variant === "home"}>
      {shownMedia.map((media, index) => (
        // Each screen travels on its own, so one caught mid-reveal on the homepage glides straight to its resting place.
        <ViewTransition key={media.src} name={`band-screen-${project.slug}-${index}`} share={share("band-part")} default="none">
          <span className={styles.screen}>
            <Image
              src={media.src}
              alt=""
              {...(natural ? { width: media.width, height: media.height } : { fill: true })}
              quality={90}
              sizes={phones ? "(max-width: 900px) 30vw, 300px" : "(max-width: 900px) 100vw, 80vw"}
              priority={priority && index === 0}
            />
            {media.caption && <span className={styles.caption}>{media.caption}</span>}
          </span>
        </ViewTransition>
      ))}
    </MediaReveal>
  );

  return (
    <>
      {/*
       * From the next-case strip, the plate's group is painted in the band's own colour, so the strip's extras can fade
       * out before the new band's arrive without the page showing through. Hoisted and deduped by href, since every
       * view of the same band emits the same rule.
       */}
      <style href={`band-plate-${project.slug}`} precedence="default">
        {`html:active-view-transition-type(case-next)::view-transition-group(band-${project.slug}){background-color:${project.theme.bg}}`}
      </style>
      <ViewTransition name={`band-${project.slug}`} share={share("band")} default="none">
        <article
          id={project.slug}
          data-chrome
          data-scheme={project.theme.scheme}
          className={`${styles.section} ${layoutClass[project.layout]} ${variant === "page" ? styles.sectionPage : ""}`}
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
                <ViewTransition name={`band-title-${project.slug}`} share={share("band-part")} default="none">
                  <span className={styles.titleText}>{name}</span>
                </ViewTransition>
              </Title>
              <div className={styles.details}>
                <p className={styles.type}>{project.shortTitle ? `${project.title} · ${project.type}` : project.type}</p>
                <ViewTransition name={`band-summary-${project.slug}`} share={share("band-part")} default="none">
                  <p className={styles.summary}>{project.summary}</p>
                </ViewTransition>
                {proof && <p className={styles.proof}>{proof}</p>}
              </div>
            </div>

            {/* On the homepage the whole picture is the door to the case study, labelled on its top edge; on the case study it is just the opening view. */}
            {variant === "home" ? (
              <Link
                href={`/projects/${project.slug}`}
                transitionTypes={openTypes(project.slug, "case-open")}
                className={`${styles.mediaArea} ${styles.mediaLink}`}
                aria-label={`Read the ${project.title} case study`}
              >
                <span className={styles.mediaLabel} aria-hidden="true">
                  Read the case study
                  <ArrowIcon />
                </span>
                {screens}
              </Link>
            ) : (
              <div className={styles.mediaArea}>{screens}</div>
            )}
          </div>
        </article>
      </ViewTransition>
    </>
  );
}
