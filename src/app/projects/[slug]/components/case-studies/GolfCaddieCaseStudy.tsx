import { Capture, Flow, SystemMap } from "./CaseStudyPrimitives";
import styles from "./GolfCaddieCaseStudy.module.css";

const roundSteps = [
  {
    title: "Start",
    detail: "Choose a course or quickly return to a previously played one.",
  },
  {
    title: "Orient",
    detail: "Use the hole map to understand tee, pin, player, and current position.",
  },
  {
    title: "Decide",
    detail: "Set a target and receive distance and club context.",
  },
  {
    title: "Record",
    detail: "Track the shot and preserve the path for review.",
  },
];

export function GolfCaddieCaseStudy() {
  return (
    <div className={styles.composition}>
      <section className={styles.opening}>
        <div className={styles.openingCopy}>
          <p className={styles.kicker}>An on-course companion</p>
          <h2>Designed for the moment between shots.</h2>
          <p>
            A golf app is used outdoors, on a phone, with limited time and
            attention. Golf Caddie is organized around immediate decisions—where
            am I, where am I trying to land, and what happened on the last shot.
          </p>
        </div>
        <Capture
          className={styles.openingCapture}
          title="On-course context"
          detail="GPS position, target selection, yardage, and club context in one mobile flow."
        />
      </section>

      <section className={styles.round}>
        <div className={styles.roundHeading}>
          <h2>The round, one decision at a time.</h2>
          <p>
            The central loop keeps the next shot in focus while preserving the
            round as useful history.
          </p>
        </div>
        <Capture
          className={styles.roundCapture}
          title="Target selection"
          detail="A live-hole map with position, target, yardage, and club context."
        />
        <Flow className={styles.flow} steps={roundSteps} />
      </section>

      <section className={styles.mapSection}>
        <Capture
          className={styles.mapCapture}
          title="Shot path"
          detail="A hole shown as a sequence of real decisions, not just a map background."
        />
        <div className={styles.mapCopy}>
          <p className={styles.kicker}>The active-round surface</p>
          <h2>Maps turn GPS context into action.</h2>
          <p>
            The active-round map brings together tee and pin markers, player
            position, target selection, shot paths, and calculated distance
            labels. Preview and review modes deliberately turn off live editing.
          </p>
        </div>
      </section>

      <section className={styles.history}>
        <div className={styles.historyHeading}>
          <p className={styles.kicker}>Round continuity</p>
          <h2>From one round to the next.</h2>
        </div>
        <div className={styles.historyPoints}>
          <article>
            <h3>Stay in the round</h3>
            <p>
              An active or paused round remains easy to resume instead of
              becoming lost state.
            </p>
          </article>
          <article>
            <h3>Learn from the round</h3>
            <p>
              Finished rounds, course history, and longer-term trends become a
              record a player can revisit.
            </p>
          </article>
        </div>
      </section>

      <section className={styles.systemSection}>
        <div className={styles.systemHeading}>
          <p className={styles.kicker}>The supporting system</p>
          <h2>A PWA with real round state behind it.</h2>
          <p>
            The product needs secure accounts, durable courses and rounds, and
            APIs that can keep up with play.
          </p>
        </div>
        <SystemMap
          caption="AWS CDK defines the serverless infrastructure that supports courses, round state, and player data."
          stages={[
            [
              { label: "React PWA", detail: "Mobile interface" },
              { label: "Google Maps", detail: "Map + GPS context" },
            ],
            [
              { label: "API Gateway", detail: "Authenticated API" },
              { label: "AWS Lambda", detail: "Round + course actions" },
            ],
            [
              { label: "DynamoDB", detail: "Rounds + courses" },
              { label: "Cognito", detail: "Player identity" },
            ],
          ]}
        />
      </section>
    </div>
  );
}
