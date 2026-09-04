
import { Capture, Flow, SystemMap } from "./CaseStudyPrimitives";
import styles from "./BetterHaloCaseStudy.module.css";

const plannerSteps = [
  { title: "Scan", detail: "See upcoming and overdue assignments alongside each course." },
  { title: "Plan", detail: "Bring assignments together in an all-course calendar with selectable time ranges." },
  { title: "Hand off", detail: "Export selected work and class schedules as calendar events with deep links back to Halo." },
];

export function BetterHaloCaseStudy() {
  return (
    <div className={styles.composition}>
      <section className={styles.intro}>
        <p className={styles.kicker}>The LMS students could not replace.</p>
        <div>
          <h2>Improve the system they already open every day.</h2>
          <p>Halo is part of the required student workflow, so Better Halo had to improve the experience in place—not ask students to move to a separate tool. It layers useful controls directly onto a familiar system.</p>
        </div>
      </section>

      <section className={styles.principles}>
        <div className={styles.sectionHeading}>
          <h2>More agency, without a new learning curve.</h2>
          <p>Better Halo is a layer of useful choices inside a system students already know.</p>
        </div>
        <div className={styles.principleList}>
          <article>
            <h3>A real theme system</h3>
            <p>Theme values map together across color, type, radius, shadows, and LMS-specific surfaces instead of becoming isolated overrides.</p>
          </article>
          <article>
            <h3>A better daily environment</h3>
            <p>Dark mode, font choices, layout treatments, and visual preferences give students more ownership over a high-frequency workspace.</p>
          </article>
        </div>
      </section>

      <section className={styles.planner}>
        <div className={styles.sectionHeading}>
          <h2>From course cards to a semester view.</h2>
          <p>The extension turns scattered course context into actions a student can take without leaving Halo.</p>
        </div>
        <Capture className={styles.plannerCapture} title="All assignments" detail="A cross-course planner that becomes the bridge from coursework to calendar." />
        <Flow className={styles.flow} steps={plannerSteps} />
      </section>

      <section className={styles.grade}>
        <Capture className={styles.gradeCapture} title="Projected grade" detail="A gradebook before and after one hypothetical score." />
        <div className={styles.gradeCopy}>
          <h2>Make “what if?” a gradebook interaction.</h2>
          <p>Better Halo adds a direct way to enter possible scores for ungraded work and see a projected percentage and letter grade. A familiar student question becomes immediate instead of spreadsheet math.</p>
        </div>
      </section>

      <section className={styles.architecture}>
        <div className={styles.sectionHeading}>
          <p className={styles.kicker}>Manifest V3 · React · GraphQL · Browser storage · SPA lifecycle handling</p>
          <h2>Building on top of a third-party app.</h2>
          <p>The challenge was not simply restyling a page; it was making a dependable layer over an application Better Halo does not own.</p>
        </div>
        <SystemMap
          caption="Better Halo stays useful by adding a focused extension layer to the workflow students already use."
          stages={[
            [{ label: "Halo", detail: "Required student workflow" }],
            [{ label: "Better Halo", detail: "Browser extension layer" }, { label: "GraphQL", detail: "Course context" }],
            [{ label: "Student", detail: "Plan, project, and personalize" }],
          ]}
        />
      </section>

      <section className={styles.closing}>
        <h2>A familiar system, made more useful.</h2>
        <p>Better Halo does not compete with the LMS. It makes the everyday work already happening there easier to see, shape, and act on.</p>
      </section>
    </div>
  );
}
