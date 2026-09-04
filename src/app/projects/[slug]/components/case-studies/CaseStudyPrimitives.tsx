import styles from "./CaseStudyPrimitives.module.css";

type CaptureProps = { title: string; detail: string; className?: string };

export function Capture({ title, detail, className = "" }: CaptureProps) {
  return (
    <figure className={`${styles.capture} ${className}`}>
      <div className={styles.canvas} aria-hidden="true"><span>Capture planned</span><i /><i /><i /></div>
      <figcaption><strong>{title}</strong><span>{detail}</span></figcaption>
    </figure>
  );
}

export function Flow({ steps, className = "" }: { steps: { title: string; detail: string }[]; className?: string }) {
  return <ol className={`${styles.flow} ${className}`}>{steps.map((step, index) => <li key={step.title}><span>{String(index + 1).padStart(2, "0")}</span><div><h3>{step.title}</h3><p>{step.detail}</p></div></li>)}</ol>;
}

export function SystemMap({ stages, caption }: { stages: { label: string; detail: string }[][]; caption: string }) {
  return <div className={styles.systemWrap}><div className={styles.systemMap} aria-label={caption}>{stages.map((stage, index) => <div className={styles.systemStage} key={index}>{stage.map((node) => <div key={node.label}><strong>{node.label}</strong><span>{node.detail}</span></div>)}</div>)}</div><p className={styles.caption}>{caption}</p></div>;
}
