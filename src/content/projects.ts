import type { ProjectMediaItem } from "../app/ProjectMediaViewer";
import { caseStudiesBySlug, type CaseStudy } from "./case-studies";

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
  caseStudy?: CaseStudy;
};

const projectRecords: CaseStudyProject[] = [
  {
    slug: "mosaic",
    number: "01",
    title: "Mosaic",
    type: "Open-source connected desk display · Capstone",
    summary: "An open-source, self-hosted desk display for developer notifications, actions, and focus—without another browser tab.",
    description:
      "An ESP32-P4 desk device with a 5\" touchscreen, paired with a self-hosted server, admin app, and desktop companion. I own the firmware and on-device LVGL interface.",
    stack: "ESP-IDF · C++ · LVGL · ESP32-P4 · .NET · SQLite · React · Tauri · Protobuf",
    homepageStack: "C++ · LVGL · ESP32-P4 · TypeScript",

    problem:
      "Developer workflow context is usually spread across browser tabs, desktop apps, and notification streams. That creates repeated context switching and competes for the same monitor space needed for focused work.",
    solution:
      "Mosaic is a two-person capstone: a Waveshare ESP32-P4 5\" touch display backed by a self-hosted server designed to run on a Raspberry Pi. I own the firmware and device UI. Display, touch, phone-based Wi-Fi setup, credential storage, and Wi-Fi recovery are verified on hardware; pairing, backend transport, and the dashboard are in progress.",
    architecture: {
      caption: "The device receives state from a self-hosted server, so third-party credentials never live on the hardware.",
      stages: [
        [
          { label: "GitHub", detail: "First planned service" },
          { label: "Additional services", detail: "Planned" },
        ],
        [
          { label: ".NET server", detail: "Native AOT + SQLite" },
          { label: "Admin app", detail: "React + Vite" },
        ],
        [
          { label: "ESP32-P4 device", detail: "ESP-IDF + C++" },
          { label: "LVGL interface", detail: "5\" touchscreen" },
          { label: "Tauri companion", detail: "Desktop actions" },
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
        title: "One source of truth for design tokens",
        description:
          "A single JSON token source generates web CSS, lint restrictions, and a firmware C header, so the admin app, browser prototype, and device UI share one visual system. Firmware tokens use desk-distance type sizing and an 80 px minimum control height.",
      },
      {
        title: "Setup from a phone, no app required",
        description:
          "The device shows a Wi-Fi QR code and opens a captive portal where the owner enters network credentials and a server URL. The flow, credential save, reboot, and recovery path were verified on the physical board.",
      },
      {
        title: "Keep credentials and integrations off-device",
        description:
          "The server owns third-party connections and webhooks. The device only speaks a Protobuf protocol to the owner's server, and the admin interface is planned to stay private while webhooks are exposed publicly.",
      },
    ],
    progression: [
      { title: "Concept", detail: "Define a calm, glanceable alternative to another desktop dashboard." },
      { title: "Vertical slice", detail: "Prototype a GitHub event reaching the device end to end to validate the real-time path." },
      { title: "Foundation", detail: "Rebuild as Mosaic: design token pipeline, Wi-Fi provisioning on hardware, and CI for firmware, web, .NET, and Rust." },
      { title: "First release", detail: "Pair a device with a Raspberry Pi server, deliver real service events, and add widgets such as a timer." },
    ],
    media: [
      {
        kind: "image",
        src: "/projects/embedded-workflow-dashboard/teaser.png",
        alt: "Concept visualization of the Mosaic desk display",
        label: "Concept visualization",
      },
    ],
    links: [{ label: "GitHub", href: "https://github.com/mosaic-device/mosaic" }],
  },
  {
    slug: "better-halo",
    number: "02",
    title: "Better Halo",
    type: "Browser extension",
    summary: "A Chrome Web Store extension that makes GCU’s Halo LMS easier to use, with themes, assignment tracking, and grade tools.",
    description:
      "Students can personalize their LMS, stay on top of assignments, project their grades, and share themes through a community gallery.",
    stack: "React · TypeScript · GraphQL · Manifest V3 · React Router · Supabase · Clerk",
    homepageStack: "React · TypeScript · GraphQL · Extension APIs",
    metrics: [{ value: "1,100+", label: "students using Better Halo" }],

    problem:
      "Halo is a required part of the student workflow, but its default experience leaves little room for personalization and can make everyday tasks feel harder to scan.",
    solution:
      "I built a browser extension around the existing LMS experience. It adds a CSS-variable theming system with custom themes and scheduled dark mode, assignment tracking on course cards, a what-if grade calculator, a combined calendar across classes, and class schedule export to calendar apps. A companion website hosts a community theme gallery.",
    architecture: {
      caption: "Better Halo extends the existing LMS rather than replacing it.",
      stages: [
        [
          { label: "Halo LMS", detail: "Existing student workflow" },
          { label: "Halo GraphQL API", detail: "Reverse-engineered" },
        ],
        [{ label: "Better Halo extension", detail: "React + TypeScript, Manifest V3" }],
        [
          { label: "Themes", detail: "Custom + scheduled dark mode" },
          { label: "Coursework tools", detail: "Assignments, grades, calendar" },
          { label: "Theme gallery", detail: "React Router + Supabase" },
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
        title: "Build on Halo's own data",
        description:
          "I reverse-engineered and documented Halo's private GraphQL API, which made it possible to add assignment tracking, course shortcuts, and grade projections without scraping fragile page markup.",
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
    links: [
      { label: "Live site", href: "https://www.betterhalo.app" },
      { label: "Chrome Web Store", href: "https://chromewebstore.google.com/detail/goofpkaenamaankebgoegfghpkaolchj" },
    ],
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

export const projects: CaseStudyProject[] = projectRecords.map((project) => ({
  ...project,
  caseStudy: caseStudiesBySlug[project.slug],
}));

export const caseStudiesVisible = false;

export const caseStudies = caseStudiesVisible
  ? projects.filter(
      (project): project is CaseStudyProject & { caseStudy: CaseStudy } => project.caseStudy !== undefined,
    )
  : [];

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}
