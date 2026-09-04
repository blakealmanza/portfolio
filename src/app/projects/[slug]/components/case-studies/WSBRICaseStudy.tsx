import { Capture, Flow } from "./CaseStudyPrimitives";
import styles from "./WSBRICaseStudy.module.css";

export function WSBRICaseStudy() {
  return (
    <div className={styles.composition}>
      <section className={styles.wsbriOpening}>
        <div className={styles.openingCopy}>
          <h2>Planning before the haul.</h2>
          <p>
            For barrel racers, event information needs to answer practical questions fast:
            what is happening, where is it, what changed, and is it worth planning around?
            The old workflow was fragmented across association sites, social posts, and
            updates that were easy to miss.
          </p>
        </div>
        <p className={styles.pullQuote}>
          A community calendar only earns trust when the information behind it stays
          maintained.
        </p>
      </section>

      <section className={styles.wsbriPipeline}>
        <div className={styles.pipelineIntro}>
          <h2>From scattered listings to a reviewable pipeline.</h2>
          <p>WSBRI treats event information as a maintained system, not a static directory.</p>
        </div>
        <div className={styles.pipelineWork}>
          <Capture
            className={styles.incomingCapture}
            title="Incoming event record"
            detail="A source listing prepared for normalization and review."
          />
          <Flow
            className={styles.flow}
            steps={[
              {
                title: "Collect",
                detail: "Python scrapers collect event data from relevant regional sources.",
              },
              {
                title: "Normalize",
                detail: "Records are merged, formatted consistently, and checked for likely duplicates.",
              },
              {
                title: "Review",
                detail: "Potential events enter a staging workflow where operators inspect and decide.",
              },
              {
                title: "Publish",
                detail: "Approved data becomes a searchable calendar and community resource.",
              },
            ]}
          />
        </div>
      </section>

      <section className={styles.wsbriReview}>
        <div className={styles.reviewCopy}>
          <h2>Automation proposes; operators decide.</h2>
          <div className={styles.reviewArticles}>
            <article>
              <h3>Useful suggestions</h3>
              <p>
                Incoming records can be connected to existing event series, arenas, and
                producers while surfacing confidence and duplicate concerns.
              </p>
            </article>
            <article>
              <h3>Human judgment stays in the loop</h3>
              <p>
                Operators can add a date to an existing series, create a new record, or
                reject a duplicate with source context available.
              </p>
            </article>
          </div>
        </div>
        <Capture
          className={styles.reviewCapture}
          title="Review queue"
          detail="Potential duplicates and suggested matches before a record becomes public."
        />
      </section>

      <section className={styles.wsbriOutcome}>
        <div className={styles.outcomeIntro}>
          <h2>Useful for the community. Lighter for the people maintaining it.</h2>
          <p>
            The product reduces repetitive collection and reconciliation work while giving
            riders one dependable place to plan around regional events.
          </p>
        </div>
        <dl className={styles.impactMetrics}>
          <div>
            <dt>200+</dt>
            <dd>users served</dd>
          </div>
          <div>
            <dt>~80%</dt>
            <dd>less manual event-management work</dd>
          </div>
        </dl>
        <div className={styles.evidenceGroup}>
          <h2>Evidence being captured.</h2>
          <div className={styles.evidenceList}>
            <Capture
              className={styles.evidenceCapture}
              title="Review queue"
              detail="Incoming event data with source context and suggested matches."
            />
            <Capture
              className={styles.evidenceCapture}
              title="Duplicate resolution"
              detail="A same-date warning before publication."
            />
            <Capture
              className={styles.evidenceCapture}
              title="Pipeline view"
              detail="Source → normalized record → reviewed calendar event."
            />
          </div>
        </div>
      </section>
    </div>
  );
}
