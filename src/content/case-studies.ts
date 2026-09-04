export type CaseStudy = {
  framing: string;
  heroCapture: { title: string; detail: string };
  stack: string;
};

export const caseStudiesBySlug: Record<string, CaseStudy> = {
  "embedded-developer-workflow-dashboard": {
    framing: "A vertical slice for a self-hosted developer appliance that turns a GitHub pull-request event into a physical, actionable interaction.",
    heroCapture: { title: "End-to-end device interaction", detail: "GitHub event → self-hosted service → physical device → action result" },
    stack: "ESP-IDF · C++ · LVGL · FreeRTOS · NestJS · React · Tauri · WebSockets · Protobuf",
  },
  "better-halo": {
    framing: "A browser extension that gives students more control over the LMS they already have to use.",
    heroCapture: { title: "A student-controlled LMS", detail: "Personalization, coursework context, and direct course actions—inside Halo" },
    stack: "React · TypeScript · GraphQL · Manifest V3 · Browser Extension APIs",
  },
  wsbri: {
    framing: "Regional barrel-racing information, transformed from scattered listings into a maintained planning resource.",
    heroCapture: { title: "A dependable regional planning system", detail: "Source information becomes reviewed event data riders can use" },
    stack: "Next.js · Supabase · Python · GitHub Actions · Google Maps · Memberstack · Resend",
  },
  "kimbo-learning": {
    framing: "Interactive, AI-powered reading adventures that give young learners more agency in how they practice.",
    heroCapture: { title: "A story shaped by the learner", detail: "Interest, skill, and choice create a more personal reading path" },
    stack: "Next.js · TypeScript · OpenAI · Supabase · Redis · Accessibility-first UI",
  },
  "golf-caddie": {
    framing: "A mobile golf companion designed around the decisions a player makes between shots.",
    heroCapture: { title: "On-course context, at a glance", detail: "GPS position, target selection, yardage, and shot tracking in one mobile flow" },
    stack: "React · TypeScript · PWA · Google Maps · AWS Lambda · DynamoDB · Cognito · CDK",
  },
};
