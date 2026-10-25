import Image from "next/image";
import type { CSSProperties } from "react";
import type { Project, ProjectTheme } from "@/content/types";
import { ArrowIcon } from "./Icons";
import { OpenMediaButton } from "./MediaViewerProvider";
import styles from "./ProjectPanel.module.css";

const layoutClass = {
  browser: styles.layoutBrowser,
  phones: styles.layoutPhones,
  photo: styles.layoutPhoto,
};

function themeStyle(theme: ProjectTheme) {
  return {
    "--bg": theme.bg,
    "--ink": theme.ink,
    "--muted": theme.muted,
    "--accent": theme.accent,
  } as CSSProperties;
}

function proofLine(project: Project) {
  const metric = project.metrics?.[0];
  return metric ? `${metric.value} ${metric.label}` : null;
}

export function ProjectPanel({ project, priority = false }: { project: Project; priority?: boolean }) {
  const proof = proofLine(project);
  const shownMedia = project.media
    .filter((media) => media.kind === "image")
    .slice(0, project.layout === "phones" ? 3 : 1);

  return (
    <article
      id={project.slug}
      data-theme-bg={project.theme.bg}
      className={`${styles.panel} ${layoutClass[project.layout]}`}
      style={themeStyle(project.theme)}
      aria-labelledby={`${project.slug}-title`}
    >
      <div className={styles.panelCopy}>
        <h2 id={`${project.slug}-title`}>{project.title}</h2>
        <p className={styles.panelType}>{project.type}</p>
        <p className={styles.panelSummary}>{project.summary}</p>
        {proof && <p className={styles.panelProof}>{proof}</p>}
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

      <div className={styles.panelMedia}>
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
              sizes={project.layout === "phones" ? "(max-width: 900px) 40vw, 260px" : "(max-width: 900px) 100vw, 60vw"}
              priority={priority && index === 0}
            />
            {project.layout === "photo" && <span className={styles.mediaCaption}>{media.label}</span>}
          </OpenMediaButton>
        ))}
      </div>
    </article>
  );
}
