---
name: Blake Almanza
description: A design-engineer portfolio where every project is shown in its own product's real theme on a neutral near-black ground.
colors:
  ground: "#0b0b0c"
  ink: "#f2f1ee"
  muted: "#a3a19b"
  line: "rgba(242, 241, 238, 0.1)"
  photo-black: "#000000"
  better-halo-bg: "#1D1C1A"
  better-halo-accent: "#F8A114"
  priceright-bg: "#1A2540"
  priceright-accent: "#A5B4FC"
  sideline-bg: "#1C1C1E"
  sideline-accent: "#409CFF"
  wsbri-bg: "#E9DFD1"
  wsbri-accent: "#7A4E24"
  annies-bg: "#212A1D"
  annies-accent: "#E7BD67"
  mosaic-bg: "#141518"
  mosaic-accent: "#70B6FF"
  golf-caddie-bg: "#DBDDD9"
  golf-caddie-accent: "#246640"
  kimbo-bg: "#00535B"
  kimbo-accent: "#F6D465"
typography:
  hero:
    fontFamily: "Host Grotesk, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(3.25rem, 8.6vw, 6rem)"
    fontWeight: 600
    lineHeight: 0.94
    letterSpacing: "-0.04em"
  display:
    fontSize: "clamp(3rem, 7vw, 6rem); clamp(2.5rem, 9vw, 4rem) at 900px and below"
    lineHeight: 0.94
  heading:
    fontFamily: "Host Grotesk, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(1.5rem, 2.2vw, 2rem)"
    fontWeight: 500
    lineHeight: 1.2
    letterSpacing: "-0.02em"
  lead:
    fontFamily: "Host Grotesk, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(1.35rem, 2vw, 1.75rem)"
    fontWeight: 500
    lineHeight: 1.3
    letterSpacing: "-0.02em"
  large:
    fontFamily: "Host Grotesk, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1.15rem"
    fontWeight: 400
    lineHeight: 1.5
  largeStrong:
    fontFamily: "Host Grotesk, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1.15rem"
    fontWeight: 500
    lineHeight: 1.4
    letterSpacing: "-0.01em"
  body:
    fontFamily: "Host Grotesk, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.5
  bodyStrong:
    fontFamily: "Host Grotesk, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 600
    lineHeight: 1.5
    letterSpacing: "-0.01em"
  small:
    fontFamily: "Host Grotesk, ui-sans-serif, system-ui, sans-serif"
    fontSize: "0.94rem"
    fontWeight: 400
    lineHeight: 1.45
  smallStrong:
    fontFamily: "Host Grotesk, ui-sans-serif, system-ui, sans-serif"
    fontSize: "0.94rem"
    fontWeight: 500
    lineHeight: 1.45
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

The page is a single scroll: a one-line identity statement, then all eight projects as the same full-width themed panel (Better Halo, PriceRight, Sideline, WSBRI, Annie's, Mosaic, Golf Caddie, Kimbo), then an About block with a facts list, then an oversized contact sign-off. As any panel crosses the middle of the viewport, the page ground quietly tints toward that project's background, so the room takes on the product's light while you are looking at it.

Density is low and the type does the structuring: large tight-tracked headings, generous vertical gaps between sections, hairlines rather than boxes for everything outside the project panels. Real screenshots are the only imagery.

**Key Characteristics:**
- Neutral near-black ground; color appears only inside a project's own theme scope.
- Per-project colour tokens (bg, surface, ink, muted, accent) applied as CSS custom properties on each panel.
- One panel component for every project; no featured tier, no secondary list. Variation comes from the theme and the media layout (browser, phones, photo).
- One portfolio-wide panel radius (16px); corners are the frame's, colours are the product's.
- One typeface (Host Grotesk) across every role, with negative tracking that tightens as size grows.
- Real product screenshots, cropped by the band's foot, lifted by soft ambient shadows.
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
| 3 | Sideline | `sideline-bg` | `sideline-accent` | browser | #F5F5F7 / #B4B4BA |
| 4 | WSBRI | `wsbri-bg` | `wsbri-accent` | browser | #F4EEE8 / #B5A99F |
| 5 | Annie's House + Farm Sitting | `annies-bg` | `annies-accent` | browser | #F7F4EB / #C3C9B6 |
| 6 | Mosaic | `mosaic-bg` (panel renders on `photo-black`) | `mosaic-accent` | photo | #FAFAFA / #A1A1AA |
| 7 | Golf Caddie | `golf-caddie-bg` | `golf-caddie-accent` | phones | #F0F5F1 / #A4B5A9 |
| 8 | Kimbo Learning | `kimbo-bg` | `kimbo-accent` | browser | #F9FAFB / #A7B0BE |

### Named Rules
**The Borrowed Palette Rule.** The portfolio owns no accent. Any color other than ground, ink, muted, and line must come from a project's `theme` object and live inside that project's panel.

**The Contrast Lift Rule.** A product color that cannot carry text on its own ground is lifted, not used as-is. Golf Caddie's brand green #338753 fails 4.5:1 on its dark ground, so the theme ships #5DBB82. Every theme's ink, muted, and accent clears 4.5:1 against its bg (lowest: WSBRI bronze at 5.8:1).

**The Thirty Percent Tint Rule.** The scrolling ground never becomes a project's color outright: it is `color-mix(in oklab, <theme bg> 30%, ground)`, applied for whichever panel sits at mid-viewport, and only after the visitor has scrolled past 120px.

## Typography

**Display Font:** Host Grotesk (via `next/font`, `--font-sans`), falling back to ui-sans-serif, system-ui, -apple-system, Segoe UI, sans-serif
**Body Font:** Host Grotesk (same stack)

**Character:** One grotesk carries everything. Hierarchy comes from size, weight (400, 500, 600 only), and tracking that tightens with scale, not from a second family or uppercase labels.

### Hierarchy
Every piece of text uses one of ten styles, defined once in `src/styles/type.module.css` and composed into each component's own class. Sizes live in the `--text-*` tokens in `globals.css`. Colour is never part of a style; the same style reads as ink, muted, or accent by role.

- **Hero** (600, clamp(3.25rem, 8.6vw, 6rem), 0.94, -0.04em): the homepage statement and the 404 heading.
- **Display** (clamp(3rem, 7vw, 6rem), 0.94; clamp(2.5rem, 9vw, 4rem) at 900px and below): project names in bands and the next-project strip. The product's own face supplies family, weight, and tracking.
- **Heading** (500, clamp(1.5rem, 2.2vw, 2rem), 1.2, -0.02em): section titles and the contact email.
- **Lead** (500, clamp(1.35rem, 2vw, 1.75rem), 1.3, -0.02em): a section's opening paragraph.
- **Large** (400, 1.15rem, 1.5): summaries, case-study prose, the 404 description.
- **Large Strong** (500, 1.15rem, 1.4, -0.01em): row titles in Decisions and Progression.
- **Body** (400, 17px, 1.5): row details, fact lists, navigation, and links; also the page default.
- **Body Strong** (600, 17px, 1.5, -0.01em): the wordmark, primary actions, architecture node names.
- **Small** (400, 0.94rem, 1.45): type lines, captions, node details, the next-project label, the nav on phones.
- **Small Strong** (500, 0.94rem, 1.45): the proof metric (accent, tabular numerals) and "Read the case study".

### Named Rules
**The Tightening Rule.** Tracking scales with size: normal at small, body, and large; -0.01em on their strong forms; -0.02em at lead and heading; -0.04em at hero.

**The No-Uppercase Rule.** Labels are sentence case at Small. The homepage uses no tracked uppercase labels or eyebrows.

## Layout

A single centered rail (1280px max) inside a fluid gutter (clamp(20px, 5vw, 80px)). Every direct child of the page shares the rail.

- **Header:** wordmark left, nav right, 88px tall. Below 560px it stacks, wordmark over nav.
- **Work:** all project panels at full rail width, stacked with clamp(20px, 2.4vw, 32px) gaps, in the data order of `projects.ts`. Each panel is two columns, copy at minmax(360px, 5fr) and media at 7fr, min-height clamp(440px, 58vh, 580px). The copy column is a flex column whose proof line (or, without a metric, the actions) is pushed to the bottom with `margin-top: auto`.
- **Media layouts** (set by `layout`; image media only): *browser* places one wide screenshot held to the rail on both sides and cropped only at the bottom; *phones* stands three screens on the panel floor, each stepped lower (0, clamp(32px, 5vh, 64px), clamp(64px, 10vh, 128px)) and cropped at the bottom; *photo* fills the media half edge to edge with a caption bottom-right.
- **About:** two columns, section title at minmax(200px, 0.42fr) and body at 1fr, clamp(112px, 16vh, 180px) below the last panel.
- **Contact:** clamp(128px, 18vh, 200px) below About; a hairline-ruled link row ends with back-to-top pushed right.
- **At 900px and below:** panels collapse to one column (copy over media), browser screenshots inset from the left by clamp(20px, 5vw, 40px), phones shrink to 30% each, the photo takes a 16:11 frame and its caption moves left, About stacks.
- **At 560px and below:** header stacks, fact rows stack label over value, the back-to-top link leaves the right edge.

## Elevation & Depth

The page and panels are flat. Depth belongs only to the product screenshots, which float above their panel on soft, wide, ambient black shadows, as if a device or window were lying on the product's own ground. Panels get a 1px inset hairline in their accent at 22% opacity rather than a shadow.

### Shadow Vocabulary
- **Window Lift** (`box-shadow: 0 24px 60px rgba(0, 0, 0, 0.45)`): the browser-layout screenshot, cast straight down like the phones.
- **Phone Lift** (`box-shadow: 0 24px 60px rgba(0, 0, 0, 0.45)`): each phone screen in the phones layout.
- **Accent Hairline** (`box-shadow: inset 0 0 0 1px color-mix(in oklab, var(--accent) 22%, transparent)`): the edge of every panel.

### Named Rules
**The Only Screens Float Rule.** Shadows sit under screenshots, never under text, panels, or controls.

## Shapes

Corners belong to the portfolio, not the product: every panel uses the single `--radius-panel` token (16px), whatever the project. Screenshots cropped by the band's foot round only the corners that remain visible (10px on both top corners for the browser screen). Phone screens round at 28px to read as devices. Outside the panels everything is square, divided by 1px hairlines. The focus ring rounds at 4px. The only icon is a 16px stroked arrow (1.5px, round caps) rotated to point right, up-right (external), or up (back to top); in nav, text links, and contact links it renders at 13px.

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
Plain text in muted with clamp(20px, 3vw, 36px) gaps and 44px targets: Work, About, Resume (up-right arrow, opens PDF), Contact. On phones, the header shows Work, Resume, and Contact. Hover to ink. The wordmark is 1.06rem at 600.

### Facts List
A definition list ruled by hairlines above and between rows: muted 140px label column, ink value. Stacks below 560px.

### Skip Link
Ink tab (8px radius) with ground-colored text, hidden above the viewport until focused.

## Do's and Don'ts

### Do:
- **Do** give every project a full `theme` object (bg, surface, ink, muted, accent) and a `layout`, and render it as the same project panel as every other project.
- **Do** verify each theme's ink, muted, and accent at 4.5:1 or better against its bg, and lift a brand color that fails (The Contrast Lift Rule).
- **Do** keep the portfolio chrome (header, intro, section titles, About, contact) on ground, ink, muted, and line only.
- **Do** use real product screenshots, held to the rail and cropped at the foot, with the Window or Phone Lift shadows.
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
