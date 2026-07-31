# Design System

## Direction

A stark, image-led dark portfolio inspired by minimal studio sites: oversized typography, a black canvas, generous negative space, fine hairlines, and project media as the primary proof. The page should feel quiet, deliberate, and spacious rather than like a dashboard or app interface.

## Palette

- Page: flat black `#050505`
- Text: warm white `#f6f6f3`
- Secondary text: soft gray `#b5b5ae`
- Muted text: dim gray `#777770`
- Hairline: transparent warm white `rgba(246, 246, 243, 0.16)`

No color accents by default. Contrast and hierarchy come from scale, spacing, and typography.

## Typography

Use Satoshi as the primary typeface, with the system sans stack as fallback. Type is the dominant visual element: an oversized hero and project titles, small restrained navigation, compact uppercase labels, and concise body copy. Avoid dense metadata and long paragraphs.

## Layout

Use a wide centered content rail on a flat background. The homepage follows a focused editorial flow:

```text
Hero → Work → Contact
```

The hero is identity and practice focused. Work is the central proof surface. On desktop, Work uses a sticky, vertically centered project index with hairline dividers and a scroll-based active state; project records remain visual-first in the adjacent column. The tablet and phone layouts remove the index in favor of a direct linear reading flow. Contact is a distinct full-width sign-off, not another project record.

## Project Presentation

Each project opens with real media, then number/type, a large title, one-line summary, short description, technology line, and relevant text links. Desktop galleries use a primary image with supporting media beside it. On phone, one primary tile is followed by two compact supporting thumbnails. Media opens in a keyboard-accessible lightbox with image zoom, video controls, and thumbnails where applicable.

## Components

- Navigation: plain text row with a single bottom divider; Work and Contact only.
- Actions: text links only; no buttons styled as cards or pills.
- Project index: desktop-only sticky anchor navigation with a visible current location.
- Project sections: large typographic records separated by hairlines.
- Media: real screenshots and video previews, framed only by fine borders.
- Contact: email, phone, external profile links, and a back-to-top action.

## Motion

Minimal and functional only: subtle text-color and media-preview transitions, smooth in-page navigation where motion is not reduced, and lightbox navigation. `prefers-reduced-motion` disables CSS transitions, smooth scrolling, and lightbox fade/swipe animation; JavaScript project navigation uses immediate scrolling for that preference.

## Accessibility

Maintain semantic landmarks and heading order, descriptive media data in the lightbox, labeled gallery controls, visible keyboard focus, a skip-to-work link, 44px minimum touch targets for text actions on tablet and phone, clear current-location state in the desktop project index, and focus restoration when the lightbox closes. Use AA-compliant text contrast against the dark background and responsive layouts that preserve readable type and media.
