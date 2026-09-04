
import { Capture, Flow, SystemMap } from "./CaseStudyPrimitives";
import styles from "./EmbeddedDashboardCaseStudy.module.css";

const deviceFlowSteps = [
  { title: "Receive", detail: "A signed GitHub webhook reaches the self-hosted NestJS backend." },
  { title: "Notify", detail: "A bounded Protobuf message reaches the ESP32-P4 over WebSocket." },
  { title: "Act", detail: "Firmware surfaces the event in LVGL and triggers device feedback." },
  { title: "Return", detail: "A physical action travels back through the provider-neutral action pipeline." },
];

const systemStages = [
  [{ label: "GitHub", detail: "Webhook source" }],
  [{ label: "NestJS", detail: "Integration + action boundary" }, { label: "Protobuf", detail: "Shared contract" }],
  [{ label: "ESP32-P4", detail: "FreeRTOS firmware" }, { label: "LVGL", detail: "Device interface" }],
];

export function EmbeddedDashboardCaseStudy() {
  return (
    <div className={styles.composition}>
      <section className={styles.opening}>
        <div className={styles.openingCopy}>
          <h2>Can developer workflow leave the browser?</h2>
          <p>The premise is simple: useful work context should live in peripheral attention instead of competing for the same monitor space as the work itself. This is a purpose-built device for glanceable state, tactile control, and a calmer workflow.</p>
          <p className={styles.note}>An in-progress vertical slice—not a finished multi-integration product.</p>
        </div>
        <Capture title="Physical prototype" detail="The ESP32-P4 display, rotary control, and ambient feedback hardware." />
      </section>

      <section className={styles.eventLoop}>
        <div className={styles.sectionHeading}>
          <h2>One event, one physical loop.</h2>
          <p>The first proof is a GitHub pull-request event moving through the entire system.</p>
        </div>
        <Capture className={styles.eventCapture} title="GitHub to device" detail="A single, observable event path from webhook to physical action." />
        <Flow className={styles.flow} steps={deviceFlowSteps} />
      </section>

      <section className={styles.applianceDecision}>
        <div className={styles.decisionHeading}>
          <h2>Why an appliance, not a web kiosk.</h2>
        </div>
        <div className={styles.decisionList}>
          <article>
            <h3>Purpose-built interaction</h3>
            <p>ESP32-P4 hardware, native LVGL, FreeRTOS task boundaries, and rotary-first input favor a focused interaction over general web rendering.</p>
          </article>
          <article>
            <h3>A safer boundary</h3>
            <p>Third-party credentials and integration logic remain on the self-hosted backend; the device receives authenticated messages and returns generic actions.</p>
          </article>
        </div>
      </section>

      <section className={styles.systemSection}>
        <div className={styles.systemCopy}>
          <h2>Seams that keep the prototype expandable.</h2>
          <p>Provider concerns, transport contracts, and device UI remain distinct as the product grows.</p>
        </div>
        <SystemMap caption="Provider-specific work stays on the backend; generated contracts connect the service and firmware." stages={systemStages} />
      </section>

      <section className={styles.scopeSplit}>
        <article>
          <h2>Working now.</h2>
          <p>Backend/device WebSocket connection, Protobuf contracts, GitHub webhook ingestion, notifications, action routing, and firmware feedback handling.</p>
        </article>
        <article>
          <h2>Deliberately next.</h2>
          <p>A full inbox, calendar and task views, more providers, final enclosure work, and deeper focus workflows.</p>
        </article>
      </section>
    </div>
  );
}
