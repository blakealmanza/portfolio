import type { ProjectMediaItem } from "../app/ProjectMediaViewer";

export type ProjectLink = {
  label: string;
  href: string;
};

export type ProjectMetric = {
  value: string;
  label: string;
};

export type ArchitectureNode = {
  label: string;
  detail?: string;
};

export type CaseStudyProject = {
  slug: string;
  number: string;
  title: string;
  type: string;
  summary: string;
  description: string;
  stack: string;
  homepageStack: string;
  media: ProjectMediaItem[];
  links: ProjectLink[];
  metrics?: ProjectMetric[];
  overview?: string;
  problem?: string;
  solution?: string;
  architecture?: {
    caption: string;
    stages: ArchitectureNode[][];
  };
  decisions?: { title: string; description: string }[];
  progression?: { title: string; detail: string }[];
};

export const projects: CaseStudyProject[] = [
  {
    slug: "embedded-developer-workflow-dashboard",
    number: "01",
    title: "Embedded Developer Workflow Dashboard",
    type: "Self-hosted embedded system · In progress",
    summary: "A self-hosted physical dashboard for developer context, notifications, and focus—without another browser tab.",
    description:
      "An ESP32-P4 desk device that combines a touch display, rotary input, ambient feedback, and a self-hosted backend for glanceable developer workflow information.",
    stack: "ESP-IDF · C++ · LVGL · FreeRTOS · NestJS · React · Tauri · WebSockets · Protobuf",
        homepageStack: "ESP-IDF · C++ · LVGL · NestJS · In progress",
    overview:
      "The dashboard is a dedicated productivity appliance designed to keep current work, build state, and notifications available in peripheral attention. It is intentionally an embedded system rather than a browser dashboard: physical controls, fast startup, lower power use, and a focused interaction model are part of the product decision.",
    problem:
      "Developer workflow context is usually spread across browser tabs, desktop apps, and notification streams. That creates repeated context switching and competes for the same monitor space needed for focused work.",
    solution:
      "I am building a self-hosted device around a Waveshare ESP32-P4 display board, a rotary encoder, touch fallback, LED feedback, and a companion backend. The current vertical slice includes GitHub webhook ingestion and sandbox simulation; additional integrations remain planned.",
    architecture: {
      caption: "The physical device receives real-time state from a self-hosted backend while keeping third-party credentials off the hardware.",
      stages: [
        [
          { label: "GitHub", detail: "Webhooks implemented" },
          { label: "Slack, Jira, Calendar", detail: "Planned integrations" },
        ],
        [
          { label: "NestJS backend", detail: "API gateway + WebSockets" },
          { label: "SQLite + Prisma", detail: "Local persistence" },
        ],
        [
          { label: "ESP32-P4 device", detail: "C++ + FreeRTOS" },
          { label: "LVGL interface", detail: "Touch + rotary input" },
          { label: "Tauri companion", detail: "Optional desktop actions" },
        ],
      ],
    },
    decisions: [
      {
        title: "An appliance, not a kiosk browser",
        description:
          "The Waveshare ESP32-P4 board and native LVGL interface avoid the boot time, power draw, cooling, and browser overhead of a Raspberry Pi-style kiosk. The tradeoff is giving up standard web rendering in favor of a purpose-built interface.",
      },
      {
        title: "Keep the UI loop responsive",
        description:
          "The firmware separates the LVGL UI task from hardware and network work through FreeRTOS tasks, queues, and shared state. Background services publish events instead of manipulating UI widgets directly.",
      },
      {
        title: "Make physical interaction intentional",
        description:
          "A panel-mounted rotary encoder provides focused, tactile navigation. The firmware uses the ESP32 pulse counter for reliable detent tracking, with touch as a secondary input rather than the primary interaction model.",
      },
      {
        title: "Keep credentials and integrations off-device",
        description:
          "The NestJS backend acts as an API gateway. The device uses authenticated WebSocket messages and generic action payloads, while third-party OAuth and webhook concerns remain on the self-hosted backend.",
      },
    ],
    progression: [
      { title: "Concept", detail: "Define a calm, glanceable alternative to another desktop dashboard." },
      { title: "Surface prototype", detail: "Model the device experience in React before committing it to the embedded UI." },
      { title: "Vertical slice", detail: "Validate the backend, real-time protocol, device firmware, and physical input path together." },
      { title: "Device prototype", detail: "Add enclosure, carrier board, electronics, and documented physical iteration as they are built." },
    ],
    media: [
      { kind: "image", src: "/projects/embedded-workflow-dashboard/device-placeholder.svg", alt: "Placeholder for an Embedded Developer Workflow Dashboard device photo", label: "Device photo placeholder" },
      { kind: "image", src: "/projects/embedded-workflow-dashboard/ui-placeholder.svg", alt: "Placeholder for an LVGL interface screenshot", label: "LVGL UI placeholder" },
      { kind: "image", src: "/projects/embedded-workflow-dashboard/prototype-placeholder.svg", alt: "Placeholder for an electronics or prototype photo", label: "Prototype placeholder" },
    ],
    links: [],
  },
  {
    slug: "better-halo",
    number: "02",
    title: "Better Halo",
    type: "Browser extension",
    summary: "A student-first extension that makes GCU’s Halo LMS easier to use.",
    description:
      "Students can personalize their LMS, stay on top of assignments, and navigate a more comfortable learning experience.",
    stack: "React · TypeScript · GraphQL · Web Extension APIs",
        homepageStack: "React · TypeScript · GraphQL · Extension APIs",
    metrics: [{ value: "350+", label: "students using Better Halo" }],
    overview:
      "Better Halo adds practical quality-of-life improvements to the learning system students already use every day. It gives students more control over the visual experience while keeping assignments and navigation easy to reach.",
    problem:
      "Halo is a required part of the student workflow, but its default experience leaves little room for personalization and can make everyday tasks feel harder to scan.",
    solution:
      "I built a browser extension around the existing LMS experience, focusing on theme customization and a more comfortable way to stay oriented around coursework.",
    architecture: {
      caption: "Better Halo extends the existing LMS rather than replacing it.",
      stages: [
        [{ label: "Halo LMS", detail: "Existing student workflow" }],
        [{ label: "Better Halo extension", detail: "React + TypeScript" }],
        [
          { label: "Theme controls", detail: "Personalization" },
          { label: "Assignment context", detail: "Student workflow" },
        ],
      ],
    },
    decisions: [
      {
        title: "Improve the workflow in place",
        description:
          "The product is designed as an extension of the LMS students already rely on, keeping adoption low-friction instead of asking them to move to a separate tool.",
      },
      {
        title: "Make personalization useful",
        description:
          "Theme controls are not treated as decoration alone; they help students shape a learning environment they spend significant time using.",
      },
    ],
    media: [
      {
        kind: "image",
        src: "/projects/better-halo/theme-customizer.webp",
        alt: "Better Halo theme customizer applied to the Halo LMS dashboard",
        label: "Theme editor",
      },
      {
        kind: "image",
        src: "/projects/better-halo/gallery.webp",
        alt: "Better Halo community theme gallery",
        label: "Theme gallery",
      },
      {
        kind: "image",
        src: "/projects/better-halo/extension.webp",
        alt: "Better Halo theme and dark mode controls",
        label: "Theme controls",
        fit: "contain",
      },
    ],
    links: [{ label: "Live site", href: "https://www.betterhalo.app" }],
  },
  {
    slug: "wsbri",
    number: "03",
    title: "Washington State Barrel Racing Info",
    type: "Community event platform",
    summary: "Event schedules, results, and rider updates for Washington barrel racers.",
    description: "A central hub for competitors to find events, follow results, explore arenas, and receive timely updates.",
    stack: "Calendar UI · Google Maps · Resend · Automation",
        homepageStack: "React · Maps · Email · Automation",
    metrics: [
      { value: "200+", label: "users served" },
      { value: "~80%", label: "less manual event-management work" },
    ],
    overview:
      "Washington State Barrel Racing Info brings event schedules, results, venues, and updates into one dependable destination for a focused local community.",
    problem:
      "Event information and rider updates need to be timely and easy to find. Managing that information manually creates repeated administrative work and makes it harder for competitors to stay informed.",
    solution:
      "I built a central event platform with a calendar, arena directory, and communication workflow that makes information easier to publish, discover, and maintain.",
    architecture: {
      caption: "The platform turns event information into a searchable, shareable community resource.",
      stages: [
        [{ label: "Event information", detail: "Schedules and updates" }],
        [{ label: "WSBRI platform", detail: "Calendar + automation" }],
        [
          { label: "Riders", detail: "Events and results" },
          { label: "Email updates", detail: "Timely communication" },
          { label: "Arena directory", detail: "Maps and venue details" },
        ],
      ],
    },
    decisions: [
      {
        title: "Design around a real operating workflow",
        description:
          "The system prioritizes the information people need around an event—what is happening, where it is, and when it changes—rather than treating the site as a static directory.",
      },
      {
        title: "Automate repetitive administration",
        description:
          "The publishing and event-management workflow was designed to reduce manual work by approximately 80%, leaving more time for the people running events.",
      },
    ],
    media: [
      { kind: "image", src: "/projects/wsbri/home.webp", alt: "Washington State Barrel Racing Info homepage", label: "Homepage" },
      { kind: "image", src: "/projects/wsbri/events.webp", alt: "Washington State Barrel Racing Info event calendar", label: "Event calendar" },
      { kind: "image", src: "/projects/wsbri/arenas.webp", alt: "Washington State Barrel Racing Info arena map and directory", label: "Arena directory" },
    ],
    links: [{ label: "Live site", href: "https://www.wsbarrelracing.com" }],
  },
  {
    slug: "kimbo-learning",
    number: "04",
    title: "Kimbo Learning",
    type: "AI learning platform",
    summary: "Interactive, AI-powered stories for K–3 learners.",
    description: "Young readers choose what happens next, complete reading quests, and follow their progress across every adventure.",
    stack: "AI · RAG · Supabase · Redis · Accessibility",
        homepageStack: "AI · RAG · Supabase · Accessibility",
    media: [
      { kind: "image", src: "/projects/kimbo-learning/home.webp", alt: "Kimbo Learning adventure dashboard with reading progress and story collection", label: "Adventure dashboard" },
      { kind: "image", src: "/projects/kimbo-learning/story.webp", alt: "Kimbo Learning interactive story screen with a reading passage and choice prompts", label: "Story choices" },
      { kind: "video", src: "/projects/kimbo-learning/demo.mp4", poster: "/projects/kimbo-learning/poster.webp", alt: "Kimbo Learning loading animation", label: "Loading animation" },
    ],
    links: [],
  },
  {
    slug: "golf-caddie",
    number: "05",
    title: "Golf Caddie",
    type: "Mobile golf companion",
    summary: "GPS yardages, shot tracking, and course maps for every round.",
    description: "A mobile-first golf companion that helps players plan shots, track rounds, and navigate courses with confidence.",
    stack: "React · TypeScript · AWS · Google Maps API",
        homepageStack: "React · TypeScript · AWS · Google Maps",
    overview:
      "Golf Caddie is a mobile-first companion for the decisions players make during a round: where they are, how far they are from the target, and what has happened on previous shots.",
    problem:
      "On-course information has to be useful at a glance. Players need course context and shot tracking without the interface becoming another distraction during a round.",
    solution:
      "I built a progressive web app that combines GPS yardages, course maps, and shot tracking in a touch-friendly experience designed around the flow of play.",
    architecture: {
      caption: "The app combines location-aware course context with a mobile-first round experience.",
      stages: [
        [{ label: "Player location", detail: "GPS context" }],
        [{ label: "Golf Caddie PWA", detail: "React + TypeScript" }],
        [
          { label: "Course maps", detail: "Google Maps API" },
          { label: "Round data", detail: "AWS-backed services" },
        ],
      ],
    },
    decisions: [
      {
        title: "Design for the course, not the desk",
        description:
          "The product is mobile-first because it is meant to be used during a round. Core information is organized around immediate golf decisions rather than a dense desktop-style dashboard.",
      },
      {
        title: "Combine context and tracking",
        description:
          "GPS yardages and map context help with the next shot, while round and shot tracking build a useful record of what happened across the course.",
      },
    ],
    media: [
      { kind: "image", src: "/projects/golf-caddie/play.webp", alt: "Golf Caddie yardage map and shot-tracking view", label: "Yardage map", fit: "contain" },
      { kind: "image", src: "/projects/golf-caddie/home.webp", alt: "Golf Caddie home and current round screen", label: "Round home", fit: "contain" },
      { kind: "image", src: "/projects/golf-caddie/courses.webp", alt: "Golf Caddie course selection screen", label: "Course library", fit: "contain" },
    ],
    links: [],
  },
];

export const caseStudies = projects.filter((project) => project.overview);

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}
