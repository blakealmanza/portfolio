# Blake Almanza Portfolio

A single-page portfolio for Blake Almanza, focused on apps, browser extensions, tools, and product experiences.

## Stack

- Next.js 16
- React 19
- TypeScript
- CSS Modules
- `yet-another-react-lightbox` for project media inspection

## Local development

```bash
pnpm install
pnpm dev
```

Open `http://localhost:3000`.

## Checks

```bash
pnpm lint
pnpm build
```

## Deployment configuration

Set the production site URL before deploying so canonical metadata, `robots.txt`, and `sitemap.xml` use the real domain:

```bash
NEXT_PUBLIC_SITE_URL=https://your-domain.com
```

Without this value, the site still renders, but the sitemap returns no entries and no canonical URL is emitted.

## Content to replace before launch

Project data lives in `src/app/page.tsx`.

Replace all temporary values before publishing:

- `public/example.jpg` and `public/example.mp4` with project-specific screenshots and demos.
- Project action destinations (`Live site`, `Source`, and `Case study`).
- Contact email, phone, LinkedIn URL, and GitHub URL.
- Add a favicon and social sharing image when the final brand assets are available.

## Project media

The homepage presents up to three curated media items per project. Clicking a media tile opens a dynamically loaded lightbox with video support and thumbnails. Keep homepage media focused; use the lightbox for additional proof.

## Navigation behavior

- Main navigation uses shareable hash links such as `#work` and `#contact`.
- Project index selections use project hashes such as `#better-halo`.
- Direct project URLs and browser Back/Forward center the corresponding project.
- Passive scrolling does not change the URL.
