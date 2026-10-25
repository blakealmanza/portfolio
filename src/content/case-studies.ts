export type CaseStudy = {
  framing: string;
  heroCapture: { title: string; detail: string };
  stack: string;
};

export const caseStudiesBySlug: Record<string, CaseStudy> = {
  mosaic: {
    framing: "An open-source, self-hosted desk display that turns developer service events into physical, actionable interactions.",
    heroCapture: { title: "From phone setup to desk display", detail: "QR code → captive portal → saved Wi-Fi → self-hosted server" },
    stack: "ESP-IDF · C++ · LVGL · ESP32-P4 · .NET · SQLite · React · Tauri · Protobuf",
  },
  "better-halo": {
    framing: "A browser extension that gives students more control over the LMS they already have to use.",
    heroCapture: { title: "A student-controlled LMS", detail: "Personalization, coursework context, and direct course actions—inside Halo" },
    stack: "React · TypeScript · GraphQL · Manifest V3 · React Router · Supabase · Clerk",
  },
  wsbri: {
    framing: "Regional barrel-racing information, transformed from scattered listings into a maintained planning resource.",
    heroCapture: { title: "A dependable regional planning system", detail: "Source information becomes reviewed event data riders can use" },
    stack: "Next.js · Supabase · Python · GitHub Actions · Memberstack · Google Maps · Google Calendar",
  },
  "kimbo-learning": {
    framing: "Interactive, AI-powered reading adventures that give young learners more agency in how they practice.",
    heroCapture: { title: "A story shaped by the learner", detail: "Interest, skill, and choice create a more personal reading path" },
    stack: "Next.js · TypeScript · OpenAI · RAG · Supabase · Accessibility-first UI",
  },
  "golf-caddie": {
    framing: "A mobile golf companion designed around the decisions a player makes between shots.",
    heroCapture: { title: "On-course context, at a glance", detail: "GPS position, target selection, yardage, and shot tracking in one mobile flow" },
    stack: "React · TypeScript · PWA · Google Maps · AWS Lambda · DynamoDB · Cognito · CDK",
  },
};
