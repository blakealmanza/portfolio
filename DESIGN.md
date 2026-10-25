---
name: Blake Almanza
description: A design-engineer portfolio where every project is shown in its own product's real theme on a neutral near-black ground.
colors:
  ground: "#0b0b0c"
  ink: "#f2f1ee"
  muted: "#a3a19b"
  line: "rgba(242, 241, 238, 0.1)"
  photo-black: "#000000"
  better-halo-bg: "#141414"
  better-halo-accent: "#F59E0B"
  priceright-bg: "#0F172A"
  priceright-accent: "#A5B4FC"
  wsbri-bg: "#19140F"
  wsbri-accent: "#CD7F32"
  annies-bg: "#2C3727"
  annies-accent: "#E6E1D3"
  mosaic-bg: "#050505"
  mosaic-accent: "#60A5FA"
  golf-caddie-bg: "#0E1912"
  golf-caddie-accent: "#5DBB82"
  kimbo-bg: "#111827"
  kimbo-accent: "#2DD4BF"
typography:
  display:
    fontFamily: "Host Grotesk, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(2.6rem, 6vw, 5.5rem)"
    fontWeight: 600
    lineHeight: 0.98
    letterSpacing: "-0.035em"
  headline:
    fontFamily: "Host Grotesk, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(2.4rem, 4vw, 3.75rem)"
    fontWeight: 600
    lineHeight: 0.95
    letterSpacing: "-0.035em"
  intro:
    fontFamily: "Host Grotesk, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(1.75rem, 2.9vw, 2.75rem)"
    fontWeight: 500
    lineHeight: 1.14
    letterSpacing: "-0.025em"
  title:
    fontFamily: "Host Grotesk, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(1.5rem, 2.2vw, 2rem)"
    fontWeight: 500
    letterSpacing: "-0.02em"
  lead:
    fontFamily: "Host Grotesk, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(1.35rem, 2vw, 1.75rem)"
    fontWeight: 500
    lineHeight: 1.3
    letterSpacing: "-0.02em"
  summary:
    fontFamily: "Host Grotesk, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1.15rem"
    fontWeight: 400
    lineHeight: 1.45
  body:
    fontFamily: "Host Grotesk, ui-sans-serif, system-ui, sans-serif"
    fontSize: "17px"
    fontWeight: 400
    lineHeight: 1.5
  label:
    fontFamily: "Host Grotesk, ui-sans-serif, system-ui, sans-serif"
    fontSize: "0.94rem"
    fontWeight: 400
    lineHeight: 1.5
rounded:
  focus: "4px"
  skip-link: "8px"
  screen-frame: "10px"
  panel: "16px"
  phone: "28px"
spacing:
  gutter: "clamp(20px, 5vw, 80px)"
  rail: "1280px"
  panel-pad: "clamp(28px, 3.4vw, 52px)"
  panel-gap: "clamp(20px, 2.4vw, 32px)"
  section-about: "clamp(112px, 16vh, 180px)"
  section-contact: "clamp(128px, 18vh, 200px)"
  touch: "44px"
components:
  project-panel:
    backgroundColor: "{colors.better-halo-bg}"
    textColor: "{colors.ink}"
    rounded: "{rounded.panel}"
    padding: "clamp(28px, 3.4vw, 52px)"
  project-panel-photo:
    backgroundColor: "{colors.photo-black}"
    textColor: "{colors.ink}"
    rounded: "{rounded.panel}"
  link-primary:
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    height: "44px"
  link-text:
    textColor: "{colors.muted}"
    typography: "{typography.body}"
    height: "44px"
  link-text-hover:
    textColor: "{colors.ink}"
  nav-link:
    textColor: "{colors.muted}"
    height: "44px"
  nav-link-hover:
    textColor: "{colors.ink}"
  skip-link:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.ground}"
    rounded: "{rounded.skip-link}"
    padding: "10px 14px"
---

# Design System: Blake Almanza

## Overview

**Creative North Star: "The Live Theme"**

The portfolio itself is a quiet, neutral room: a near-black ground, warm off-white ink, one confident grotesk, and almost nothing else. Color does not belong to the portfolio. It belongs to the work. Every project is presented inside its own product's real colour theme (background, ink, muted tone, accent), so Better Halo arrives in amber on charcoal, PriceRight in periwinkle on slate, WSBRI in bronze on saddle brown, Mosaic in blue on true black. The frame stays constant: every panel shares one 16px corner, one padding, one grid. The visitor sees range because the products look like themselves, not like cards wearing the portfolio's colors.

The page is a single scroll: a one-line identity statement, then all seven projects as the same full-width themed panel (Better Halo, PriceRight, WSBRI, Annie's, Mosaic, Golf Caddie, Kimbo), then an About block with a facts list, then an oversized contact sign-off. As any panel crosses the middle of the viewport, the page ground quietly tints toward that project's background, so the room takes on the product's light while you are looking at it.

Density is low and the type does the structuring: large tight-tracked headings, generous vertical gaps between sections, hairlines rather than boxes for everything outside the project panels. Real screenshots are the only imagery.

**Key Characteristics:**
- Neutral near-black ground; color appears only inside a project's own theme scope.
- Per-project colour tokens (bg, surface, ink, muted, accent) applied as CSS custom properties on each panel.
- One panel component for every project; no featured tier, no secondary list. Variation comes from the theme and the media layout (browser, phones, photo).
- One portfolio-wide panel radius (16px); corners are the frame's, colours are the product's.
- One typeface (Host Grotesk) across every role, with negative tracking that tightens as size grows.
- Real product screenshots that bleed off panel edges, lifted by soft ambient shadows.
- Text links with a stroked SVG arrow instead of buttons; no pills, no filled CTAs.
- Ground tint that follows the project panel in view, transitioned over 900ms.

## Colors

A neutral warm-black frame with a rotating set of borrowed product palettes; the frame never competes with the work.

### Primary
- **Project Accent** (per theme, e.g. `{colors.better-halo-accent}` amber, `{colors.priceright-accent}` periwinkle, `{colors.mosaic-accent}` blue): exposed as `--accent` inside a panel. Used for the proof metric line, the arrow on the primary link, the panel's inset hairline (22% mix), focus outlines, and text selection. Never used on the neutral ground outside a panel.

### Neutral
- **Warm Night Ground** (`{colors.ground}`): the page background and `color-scheme: dark` base. Also the base that project backgrounds are mixed into for the scroll tint.
- **Bone Ink** (`{colors.ink}`): all primary text on the ground; the skip link's fill.
- **Stone Muted** (`{colors.muted}`): navigation at rest, About body copy, fact labels, secondary text links.
- **Ghost Hairline** (`{colors.line}`): every divider outside the panels: facts rows, the contact links rule, the contact email's resting underline.
- **Photo Black** (`{colors.photo-black}`): the photo-layout panel only, so a render whose black runs to pure #000 meets the panel seamlessly.

### Project Themes
Each project in `src/content/projects.ts` carries a `theme` object (bg, surface, ink, muted, accent) and a `layout`. Bg and accent are in the frontmatter; ink and muted are tuned per theme to stay warm or cool with the product:

| Order | Project | Ground | Accent | Layout | Ink / Muted |
|---|---|---|---|---|---|
| 1 | Better Halo | `better-halo-bg` | `better-halo-accent` | browser | #F4F1EA / #ABA69C |
| 2 | PriceRight | `priceright-bg` | `priceright-accent` | phones | #F1F5F9 / #A3B0C6 |
| 3 | WSBRI | `wsbri-bg` | `wsbri-accent` | browser | #F4EEE8 / #B5A99F |
| 4 | Annie's House + Farm Sitting | `annies-bg` | `annies-accent` | browser | #F7F4EB / #C3C9B6 |
| 5 | Mosaic | `mosaic-bg` (panel renders on `photo-black`) | `mosaic-accent` | photo | #FAFAFA / #A1A1AA |
| 6 | Golf Caddie | `golf-caddie-bg` | `golf-caddie-accent` | phones | #F0F5F1 / #A4B5A9 |
| 7 | Kimbo Learning | `kimbo-bg` | `kimbo-accent` | browser | #F9FAFB / #A7B0BE |

### Named Rules
**The Borrowed Palette Rule.** The portfolio owns no accent. Any color other than ground, ink, muted, and line must come from a project's `theme` object and live inside that project's panel.

**The Contrast Lift Rule.** A product color that cannot carry text on its own ground is lifted, not used as-is. Golf Caddie's brand green #338753 fails 4.5:1 on its dark ground, so the theme ships #5DBB82. Every theme's ink, muted, and accent clears 4.5:1 against its bg (lowest: WSBRI bronze at 5.8:1).

**The Thirty Percent Tint Rule.** The scrolling ground never becomes a project's color outright: it is `color-mix(in oklab, <theme bg> 30%, ground)`, applied for whichever panel sits at mid-viewport, and only after the visitor has scrolled past 120px.

## Typography

**Display Font:** Host Grotesk (via `next/font`, `--font-sans`), falling back to ui-sans-serif, system-ui, -apple-system, Segoe UI, sans-serif
**Body Font:** Host Grotesk (same stack)

**Character:** One grotesk carries everything. Hierarchy comes from size, weight (400, 500, 600 only), and tracking that tightens with scale, not from a second family or uppercase labels.

### Hierarchy
- **Display** (600, clamp(2.6rem, 6vw, 5.5rem), 0.98): the contact sign-off headline only, max 14ch, balanced.
- **Headline** (600, clamp(2.4rem, 4vw, 3.75rem), 0.95): project titles inside panels.
- **Intro** (500, clamp(1.75rem, 2.9vw, 2.75rem), 1.14): the single identity sentence under the header, max 42ch; its second clause drops to muted.
- **Title** (500, clamp(1.5rem, 2.2vw, 2rem)): section titles ("About").
- **Lead** (500, clamp(1.35rem, 2vw, 1.75rem), 1.3): the About opening statement, in ink.
- **Summary** (400, 1.15rem, 1.45): panel summaries, max 32ch, ink mixed 86% toward the panel bg.
- **Body** (400, 17px, 1.5): About copy (max 64ch) and links.
- **Label** (400, 0.94rem): the smallest size on the page. Project type lines in muted; the proof metric at 500 in accent with tabular numerals; photo captions in muted.

### Named Rules
**The Tightening Rule.** Tracking scales with size: -0.01em on the 1.06rem wordmark, -0.015em on the contact email, -0.02em at lead and title, -0.025em at intro, -0.035em at headline and display.

**The No-Uppercase Rule.** Labels are sentence case in muted at 0.94rem. The homepage uses no tracked uppercase labels or eyebrows.

## Layout

A single centered rail (1280px max) inside a fluid gutter (clamp(20px, 5vw, 80px)). Every direct child of the page shares the rail.

- **Header:** wordmark left, nav right, 88px tall. Below 560px it stacks, wordmark over nav.
- **Work:** all project panels at full rail width, stacked with clamp(20px, 2.4vw, 32px) gaps, in the data order of `projects.ts`. Each panel is two columns, copy at minmax(360px, 5fr) and media at 7fr, min-height clamp(440px, 58vh, 580px). The copy column is a flex column whose proof line (or, without a metric, the actions) is pushed to the bottom with `margin-top: auto`.
- **Media layouts** (set by `layout`; image media only): *browser* places one wide screenshot that starts at the panel padding and runs off the right and bottom edges; *phones* stands three screens on the panel floor, each stepped lower (0, clamp(32px, 5vh, 64px), clamp(64px, 10vh, 128px)) and cropped at the bottom; *photo* fills the media half edge to edge with a caption bottom-right.
- **About:** two columns, section title at minmax(200px, 0.42fr) and body at 1fr, clamp(112px, 16vh, 180px) below the last panel.
- **Contact:** clamp(128px, 18vh, 200px) below About; a hairline-ruled link row ends with back-to-top pushed right.
- **At 900px and below:** panels collapse to one column (copy over media), browser screenshots inset from the left by clamp(20px, 5vw, 40px), phones shrink to 30% each, the photo takes a 16:11 frame and its caption moves left, About stacks.
- **At 560px and below:** header stacks, fact rows stack label over value, the back-to-top link leaves the right edge.

## Elevation & Depth

The page and panels are flat. Depth belongs only to the product screenshots, which float above their panel on soft, wide, ambient black shadows, as if a device or window were lying on the product's own ground. Panels get a 1px inset hairline in their accent at 22% opacity rather than a shadow.

### Shadow Vocabulary
- **Window Lift** (`box-shadow: -18px 24px 60px rgba(0, 0, 0, 0.45)`): the browser-layout screenshot, cast down and to the left as it runs off the right edge.
- **Phone Lift** (`box-shadow: 0 24px 60px rgba(0, 0, 0, 0.45)`): each phone screen in the phones layout.
- **Accent Hairline** (`box-shadow: inset 0 0 0 1px color-mix(in oklab, var(--accent) 22%, transparent)`): the edge of every panel.

### Named Rules
**The Only Screens Float Rule.** Shadows sit under screenshots, never under text, panels, or controls.

## Shapes

Corners belong to the portfolio, not the product: every panel uses the single `--radius-panel` token (16px), whatever the project. Screenshots that bleed off an edge round only the corner that remains visible (10px top-left for the browser screen). Phone screens round at 28px to read as devices. Outside the panels everything is square, divided by 1px hairlines. The focus ring rounds at 4px. The only icon is a 16px stroked arrow (1.5px, round caps) rotated to point right, up-right (external), or up (back to top); in nav, text links, and contact links it renders at 13px.

### Named Rules
**The One Corner Rule.** Products lend the panel their colours, never their geometry. A new project gets a theme, not a radius.

## Components

### Project Panel (signature)
The product presented in its own colours, inside the portfolio's frame. Used for every project.
- **Scope:** sets `--bg`, `--ink`, `--muted`, `--accent` from the project's theme, so every child reads the product's palette.
- **Shape:** 16px corners (`--radius-panel`), overflow hidden, accent hairline inset.
- **Copy:** headline title, label-size type line, summary, then (when the project has metrics) a proof line in accent built from the first metric, e.g. "1,100+ students using Better Halo", and actions pinned to the bottom.
- **Actions:** a primary link ("Read the case study" when case studies are visible, otherwise "View screens", which opens the media viewer) followed by external text links.
- **Media:** buttons that open the media viewer at that image (zoom-in cursor); hover scales the image to 1.015 over 600ms.

### Links (no buttons)
- **Primary link:** ink, 600 weight, arrow in accent, 44px min height. Hover slides the arrow 4px right over 240ms on the ease-out curve.
- **Text link:** muted, 13px arrow, hover to ink over 200ms. Used for external links (Live site, GitHub).
- **Contact email:** clamp(1.5rem, 2.4vw, 2rem) at 500, underlined with the hairline color at 8px offset; hover turns the underline to ink and slides the arrow.

### Navigation
Plain text in muted with clamp(20px, 3vw, 36px) gaps and 44px targets: Work, About, Resume (up-right arrow, opens PDF), Contact. Hover to ink. The wordmark is 1.06rem at 600.

### Facts List
A definition list ruled by hairlines above and between rows: muted 140px label column, ink value. Stacks below 560px.

### Skip Link
Ink tab (8px radius) with ground-colored text, hidden above the viewport until focused.

## Do's and Don'ts

### Do:
- **Do** give every project a full `theme` object (bg, surface, ink, muted, accent) and a `layout`, and render it as the same project panel as every other project.
- **Do** verify each theme's ink, muted, and accent at 4.5:1 or better against its bg, and lift a brand color that fails (The Contrast Lift Rule).
- **Do** keep the portfolio chrome (header, intro, section titles, About, contact) on ground, ink, muted, and line only.
- **Do** use real product screenshots, bleeding off panel edges, with the Window or Phone Lift shadows.
- **Do** use text links with the stroked arrow for every action, with 44px minimum targets.
- **Do** keep transitions on the ease-out curve (cubic-bezier(0.16, 1, 0.3, 1)) and honor `prefers-reduced-motion`.

### Don't:
- **Don't** put projects in uniform cards that wear the portfolio's colors; that is the exact pattern this system refuses.
- **Don't** split projects into a featured tier and a lesser list; every project gets the full panel.
- **Don't** give a panel a product-specific corner radius; all panels use the 16px panel token.
- **Don't** introduce a portfolio-level accent or let a project accent leak outside its panel.
- **Don't** add a second typeface, tracked uppercase labels, or eyebrows above headings.
- **Don't** put shadows under text, panels, or controls; only screenshots float.
- **Don't** use filled or pill buttons for actions.
- **Don't** tint the ground fully to a project's color; the scroll tint stays at 30% mixed into the ground.

Legacy note: the media viewer's chrome (`src/components/ProjectMediaViewer.module.css`) still carries the previous world's styling (#050505 grounds, small uppercase labels) and is due a restyle. It is not part of this system. Project types live in `src/content/types.ts`; site and contact details in `src/config/site.ts`.
