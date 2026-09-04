import { Capture, Flow, SystemMap } from "./CaseStudyPrimitives";
import styles from "./KimboLearningCaseStudy.module.css";

const learningLoop = [
  { title: "Create", detail: "A learner selects interests and a learning focus." },
  { title: "Choose", detail: "Story decisions give the learner a meaningful role in what happens next." },
  { title: "Solve", detail: "Contextual questions turn a chapter into a learning moment." },
  { title: "Continue", detail: "Progress and story state carry forward across the adventure." },
];

export function KimboLearningCaseStudy() {
  return (
    <div className={styles.composition}>
      <section className={styles.kimboOpening}>
        <div className={styles.openingStatement}>
          <p className={styles.statementLead}>An adventure starts with the learner.</p>
          <h2>Practice can begin with a child’s own interests.</h2>
        </div>
        <Capture
          className={styles.openingCapture}
          title="Adventure setup"
          detail="Interest, skill, and story choices before an adventure begins."
        />
        <p className={styles.openingCopy}>
          Kimbo begins with a child’s interests, grade and skill context, then builds an interactive story around them. The goal is to make practice feel more like entering an adventure than being assigned another worksheet.
        </p>
      </section>

      <section className={styles.kimboLoop}>
        <div className={styles.loopHeading}>
          <h2>A story loop with real learning signals.</h2>
          <p>Narrative momentum and measurable learning moments move together.</p>
        </div>
        <Flow className={styles.flow} steps={learningLoop} />
      </section>

      <section className={styles.kimboSupport}>
        <div className={styles.supportHeading}>
          <h2>Reading support belongs in the experience.</h2>
          <p>Text size, contrast, motion preferences, and reading assistance are part of the learner’s controls—not a separate compliance screen.</p>
        </div>
        <Capture
          className={styles.supportCapture}
          title="Reading support"
          detail="Controls that let a learner shape their reading environment."
        />
      </section>

      <section className={styles.kimboViews}>
        <article className={styles.learnerView}>
          <h2>For learners</h2>
          <p>The experience prioritizes the next story, visible progress, and gentle encouragement to keep the adventure moving.</p>
        </article>
        <article className={styles.parentView}>
          <h2>For parents</h2>
          <p>A separate reporting view translates activity and skill signals into a clearer picture of progress and areas that may need support.</p>
        </article>
      </section>

      <section className={styles.systemSection}>
        <div className={styles.systemHeading}>
          <h2>Structure behind an open-ended story.</h2>
          <p>Learning context, chapter structure, progress persistence, and parent reporting all have to agree.</p>
        </div>
        <SystemMap
          caption="The child-facing story and parent-facing reporting stay connected through structured progress data."
          stages={[
            [{ label: "Learning UI", detail: "Story + support controls" }],
            [
              { label: "Story orchestration", detail: "Chapter + skill context" },
              { label: "Content generation", detail: "Personalized narrative" },
            ],
            [
              { label: "Supabase", detail: "Progress + access control" },
              { label: "Parent view", detail: "Reporting" },
            ],
          ]}
        />
      </section>
    </div>
  );
}
