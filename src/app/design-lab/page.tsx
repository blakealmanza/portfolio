import Link from "next/link";
import styles from "./page.module.css";

const concepts = [
  {
    title: "Developer Command Center",
    category: "Developer tool concept",
    goal: "Explore how an operations view can surface active work without becoming another noisy dashboard.",
    tools: "Placeholder for React prototype",
    preview: "command",
  },
  {
    title: "Race Day Operations",
    category: "Sports software concept",
    goal: "Explore a clearer event-day control surface for schedules, competitors, and live updates.",
    tools: "Placeholder for web prototype",
    preview: "race",
  },
  {
    title: "Focus Companion",
    category: "Embedded interface concept",
    goal: "Explore calm device interactions for focus time, notifications, and ambient status.",
    tools: "Placeholder for device UI prototype",
    preview: "focus",
  },
] as const;

export default function DesignLabPage() {
  return (
    <main className={styles.page}>
      <nav className={styles.nav} aria-label="Design Lab navigation">
        <Link className={styles.brand} href="/">Blake Almanza</Link>
        <Link className={styles.back} href="/">← All work</Link>
      </nav>

      <header className={styles.hero}>
        <p>Design Lab</p>
        <h1>Experiments in product and interface design.</h1>
        <div className={styles.heroCopy}>
          <p>
            A separate space for fictional concepts, interface studies, and small prototypes. Nothing here is presented as a shipped product.
          </p>
          <span>Concept placeholders — work in progress</span>
        </div>
      </header>

      <section className={styles.lab} aria-labelledby="concepts-title">
        <h2 id="concepts-title" className={styles.srOnly}>Design Lab concepts</h2>
        {concepts.map((concept, index) => (
          <article className={styles.concept} key={concept.title}>
            <div className={`${styles.preview} ${styles[concept.preview]}`} aria-label={`${concept.title} placeholder preview`}>
              <span className={styles.placeholder}>Concept placeholder</span>
              {concept.preview === "command" && <CommandPreview />}
              {concept.preview === "race" && <RacePreview />}
              {concept.preview === "focus" && <FocusPreview />}
            </div>
            <div className={styles.conceptMeta}>
              <p className={styles.number}>{String(index + 1).padStart(2, "0")}</p>
              <div>
                <p className={styles.category}>{concept.category}</p>
                <h2>{concept.title}</h2>
                <p className={styles.goal}>{concept.goal}</p>
                <p className={styles.tools}>{concept.tools}</p>
              </div>
            </div>
          </article>
        ))}
      </section>
    </main>
  );
}

function CommandPreview() {
  return <div className={styles.commandMock} aria-hidden="true"><div className={styles.mockRail} /><div className={styles.mockMain}><span /><span /><div><i /><i /><i /></div><b /><b /></div></div>;
}

function RacePreview() {
  return <div className={styles.raceMock} aria-hidden="true"><div className={styles.raceHeader}><i /><i /></div><div className={styles.raceRows}>{[1, 2, 3, 4].map((row) => <span key={row}><b /> <i /> <i /></span>)}</div></div>;
}

function FocusPreview() {
  return <div className={styles.focusMock} aria-hidden="true"><div className={styles.deviceScreen}><span>25:00</span><i /><i /></div><div className={styles.dial} /></div>;
}
