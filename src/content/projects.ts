import type { Project } from "./types";

export const projects: Project[] = [
  {
    slug: "better-halo",
    title: "Better Halo",
    type: "Browser extension",
    summary: "A Chrome Web Store extension that makes GCU’s Halo LMS easier to use, with themes, assignment tracking, and grade tools.",
    description:
      "Students can personalize their LMS, stay on top of assignments, project their grades, and share themes through a community gallery.",
    stack: "React · TypeScript · GraphQL · Manifest V3 · React Router · Supabase · Clerk",
    face: { family: "var(--font-inter)", weight: 600, tracking: "-0.04em" },
    theme: { scheme: "dark", bg: "#141414", surface: "#1F1F1F", ink: "#F4F1EA", muted: "#ABA69C", accent: "#F59E0B", signal: "#F59E0B" },
    layout: "stage",
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
    slug: "priceright",
    title: "PriceRight",
    type: "Cross-platform mobile app · Team project",
    summary: "A cross-platform app that helps businesses work out what products cost to make and what to sell them for.",
    description:
      "Users build up a product's costs—materials, labor, overhead, packaging, shipping, and channel fees—and PriceRight calculates a price from the chosen pricing policy.",
    stack: "React Native · Expo · TypeScript · C# · .NET · Azure Functions · Microsoft Entra · GitHub Actions",
    face: { family: '-apple-system, BlinkMacSystemFont, "SF Pro Display", "Segoe UI Variable Display", "Segoe UI", Roboto, var(--font-sans)', weight: 700, tracking: "-0.03em" },
    theme: { scheme: "dark", bg: "#0F172A", surface: "#1E293B", ink: "#F1F5F9", muted: "#A3B0C6", accent: "#A5B4FC", signal: "#A5B4FC" },
    layout: "phones",
    metrics: [{ value: "25+", label: "screens redesigned" }],

    problem:
      "Pricing a product correctly means accounting for many kinds of cost. Spreadsheets make that error-prone, and the app's original interface made the cost-building flow hard to follow on a phone.",
    solution:
      "On a university team, I led a full UI redesign, rebuilding 25+ screens with native iOS navigation. I designed the brand identity, including the logo, a Liquid Glass app icon, and the launch animation, and I implemented Microsoft Entra sign-in, API caching, and regression tests.",
    architecture: {
      caption: "The app talks to a serverless .NET API through Azure API Management.",
      stages: [
        [
          { label: "PriceRight app", detail: "Expo: iOS, Android, web" },
          { label: "Microsoft Entra", detail: "OAuth sign-in" },
        ],
        [{ label: "Azure API Management", detail: "API gateway" }],
        [
          { label: "Azure Functions", detail: ".NET 8" },
          { label: "Azure Table Storage", detail: "Products + businesses" },
        ],
      ],
    },
    decisions: [
      {
        title: "Native navigation on iOS",
        description:
          "iOS uses native tabs and stacks through platform-specific components, so the app behaves like an iOS app rather than a web view, while Android and web share the same screens.",
      },
      {
        title: "No spinners on repeat visits",
        description:
          "API data is cached and hidden tabs are preloaded, so returning to a screen shows content immediately instead of a loading state.",
      },
      {
        title: "Sessions that survive",
        description:
          "Microsoft Entra OAuth uses secure token storage, silent renewal, and session restore, so users stay signed in across launches.",
      },
      {
        title: "Protect the redesign with tests",
        description:
          "Regression suites cover navigation, sessions, caching, and startup, and run in GitHub Actions CI on every push.",
      },
    ],
    media: [
      { kind: "image", src: "/projects/priceright/overview.webp", alt: "PriceRight product overview with sale price, cost, and margin", label: "Product overview", fit: "contain" },
      { kind: "image", src: "/projects/priceright/products.webp", alt: "PriceRight product list with prices and costs per unit", label: "Product list", fit: "contain" },
      { kind: "image", src: "/projects/priceright/pricing.webp", alt: "PriceRight pricing method and rounding settings", label: "Pricing method", fit: "contain" },
      { kind: "image", src: "/projects/priceright/materials.webp", alt: "PriceRight materials cost breakdown for a product", label: "Materials costs", fit: "contain" },
    ],
    links: [],
  },
  {
    slug: "wsbri",
    title: "Washington State Barrel Racing Info",
    type: "Community event platform · Freelance",
    summary: "Event schedules, arenas, and producer notices for Washington barrel racers, kept current by automated scrapers.",
    description: "A central hub where riders find and save events, explore arenas, and get registration alerts, with paid memberships and an admin review workflow.",
    stack: "Next.js · TypeScript · Supabase · Python · GitHub Actions · Memberstack · Google Maps · Google Calendar",
    shortTitle: "WSBRI",
    face: { family: "var(--font-martel)", weight: 400, tracking: "0.01em", uppercase: true },
    theme: { scheme: "light", bg: "#F4EEE6", surface: "#FDFBF9", ink: "#2A1F17", muted: "#6E5D50", accent: "#8B5A2B", signal: "#CD7F32" },
    layout: "stage",
    metrics: [
      { value: "200+", label: "users served" },
      { value: "~80%", label: "less manual event entry" },
      { value: "3", label: "event sources scraped" },
    ],

    problem:
      "Barrel racing events were scattered across producer websites, social posts, and group updates. Keeping a single listing current by hand meant repeated data entry and made it hard for riders to plan.",
    solution:
      "I designed and built the platform: event list and calendar views with filters, saved events, paid memberships, and an arena and organization directory. Python scrapers pull from 3 event sources and fuzzy-match duplicates into a staging queue that admins review before publishing. I later migrated the site from Vite to Next.js 16 and added registration alerts and Google Calendar sync.",
    architecture: {
      caption: "Scraped and submitted events are reviewed before they become the data riders rely on.",
      stages: [
        [
          { label: "Event sources", detail: "3 producer sites" },
          { label: "Python scrapers", detail: "GitHub Actions" },
        ],
        [
          { label: "Staging + admin review", detail: "Fuzzy de-duplication" },
          { label: "Supabase", detail: "Events, arenas, members" },
        ],
        [
          { label: "Next.js site", detail: "List + calendar views" },
          { label: "Registration alerts", detail: "Automated notices" },
          { label: "Google Calendar", detail: "Event sync" },
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
        title: "Automate collection, keep a human in the loop",
        description:
          "Scrapers handle repetitive data entry, but every scraped event lands in a staging queue for admin review. Fuzzy de-duplication catches the same event listed by multiple sources, cutting manual entry by about 80%.",
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
    slug: "annies-house-farm-sitting",
    title: "Annie’s House + Farm Sitting",
    type: "Client website · In progress",
    summary: "A website and booking-inquiry flow for a farm, house, and pet sitting business in Snohomish County, WA.",
    description:
      "Customers check availability, select a date range, and send an inquiry without creating an account. I'm leading the design and build.",
    stack: "Astro · React · React Aria · Cloudflare Workers · Google Calendar API",
    shortTitle: "Annie’s",
    face: { family: "Georgia, \"Times New Roman\", serif", weight: 400, tracking: "-0.025em" },
    theme: { scheme: "dark", bg: "#2C3727", surface: "#39432D", ink: "#F8F4EC", muted: "#C3C9B6", accent: "#E7BD67", signal: "#E7BD67" },
    layout: "stage",

    problem:
      "A new sitting business needs a professional presence and a simple way for customers to request dates, while the owner manages availability from her phone at no ongoing cost.",
    solution:
      "I'm leading end-to-end design in code, from brand positioning to layout, typography, and a token-based style system, and building an accessible date-range booking flow with React Aria. Availability will come from the owner's Google Calendar; it is currently mocked while the integration is built.",
    media: [
      { kind: "image", src: "/projects/annies-house-farm-sitting/home.webp", alt: "Annie’s House + Farm Sitting homepage hero", label: "Homepage" },
      { kind: "image", src: "/projects/annies-house-farm-sitting/inquiry.webp", alt: "Annie’s House + Farm Sitting inquiry form with availability calendar", label: "Availability calendar" },
      { kind: "image", src: "/projects/annies-house-farm-sitting/about.webp", alt: "Annie’s House + Farm Sitting introduction section", label: "Meet Annie" },
    ],
    links: [],
  },
  {
    slug: "mosaic",
    title: "Mosaic",
    type: "Open-source connected desk display · Capstone",
    summary: "An open-source, self-hosted desk display for developer notifications, actions, and focus—without another browser tab.",
    description:
      "An ESP32-P4 desk device with a 5\" touchscreen, paired with a self-hosted server, admin app, and desktop companion. I own the firmware and on-device LVGL interface.",
    stack: "ESP-IDF · C++ · LVGL · ESP32-P4 · .NET · SQLite · React · Tauri · Protobuf",
    face: { family: "var(--font-manrope)", weight: 700, tracking: "-0.04em" },
    theme: { scheme: "dark", bg: "#000000", surface: "#121214", ink: "#FAFAFA", muted: "#A1A1AA", accent: "#60A5FA", signal: "#60A5FA" },
    layout: "stage",

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
        caption: "Concept visualization",
      },
    ],
    links: [{ label: "GitHub", href: "https://github.com/mosaic-device/mosaic" }],
  },
  {
    slug: "golf-caddie",
    title: "Golf Caddie",
    type: "Mobile golf companion",
    summary: "GPS yardages, shot tracking, club recommendations, and course maps for every round.",
    description: "A mobile-first golf companion that helps players plan shots, track rounds, and navigate courses with confidence.",
    stack: "React · TypeScript · PWA · Google Maps · AWS Lambda · DynamoDB · Cognito · CDK · Figma",
    face: { family: "var(--font-barlow)", weight: 600, tracking: "-0.01em" },
    theme: { scheme: "light", bg: "#EBEBEB", surface: "#FFFFFF", ink: "#232323", muted: "#5E5E5E", accent: "#2B7347", signal: "#5DBB82" },
    layout: "phones",

    problem:
      "On-course information has to be useful at a glance. Players need course context and shot tracking without the interface becoming another distraction during a round.",
    solution:
      "I designed the mobile UI and branding in Figma, then built a progressive web app that combines GPS yardages, hole layouts, shot tracking, and club recommendations, backed by a serverless AWS API.",
    architecture: {
      caption: "The app combines location-aware course context with a mobile-first round experience.",
      stages: [
        [{ label: "Player location", detail: "GPS context" }],
        [
          { label: "Golf Caddie PWA", detail: "React + TypeScript" },
          { label: "Course maps", detail: "Google Maps API" },
        ],
        [
          { label: "API Gateway + Lambda", detail: "Rate-limited REST API" },
          { label: "DynamoDB + Cognito", detail: "Rounds, shots, auth" },
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
        title: "Design before code",
        description:
          "I worked from planning and mood boards through mid- and high-fidelity Figma designs, including the logo, before building the interface in React.",
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
    links: [{ label: "GitHub", href: "https://github.com/blakealmanza/GolfCaddie" }],
  },
  {
    slug: "kimbo-learning",
    title: "Kimbo Learning",
    type: "AI learning platform · Team project",
    summary: "Interactive, AI-powered stories for K–\u20603 learners.",
    description: "Young readers choose what happens next, complete reading quests, and follow their progress across every adventure.",
    stack: "Next.js · TypeScript · OpenAI · RAG · Supabase · Accessibility",
    shortTitle: "Kimbo",
    face: { family: "var(--font-poppins)", weight: 700, tracking: "-0.03em" },
    theme: { scheme: "dark", bg: "#00636B", surface: "#174F62", ink: "#FFFFFF", muted: "#C4E3E5", accent: "#F6D465", signal: "#F6D465" },
    layout: "stage",
    media: [
      { kind: "image", src: "/projects/kimbo-learning/dashboard.webp", alt: "Kimbo Learning adventure dashboard with reading progress and story collection", label: "Adventure dashboard" },
      { kind: "image", src: "/projects/kimbo-learning/story.webp", alt: "Kimbo Learning interactive story screen with a reading passage and choice prompts", label: "Story choices" },
      { kind: "video", src: "/projects/kimbo-learning/demo.mp4", poster: "/projects/kimbo-learning/poster.webp", alt: "Kimbo Learning loading animation", label: "Loading animation" },
    ],
    links: [],
  },
];
