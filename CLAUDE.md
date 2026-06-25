# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Repository Layout

This repository is a mix of design assets and the web application. The actual Next.js codebase lives entirely inside `yinarealtor-web/`. All development work happens there.

```
yina-tiburcio-realtor/
├── yinarealtor-web/        ← Next.js app (all code lives here)
├── *.pdf / *.html / *.txt  ← Brand assets and copy references (read-only context)
└── CLAUDE.md
```

## Development Commands

All commands must be run from within `yinarealtor-web/`:

```bash
cd yinarealtor-web
npm run dev      # Start dev server at http://localhost:3000
npm run build    # Production build
npm run lint     # ESLint via next lint
npm run start    # Serve production build
```

There is no test suite.

## Architecture

### Stack
- **Next.js 14** (App Router, TypeScript)
- **Tailwind CSS** with a custom design-token color palette
- **No backend** — all data is static, no API routes, no CMS

### App Router Pages

| Route | File |
|---|---|
| `/` | `app/page.tsx` (home, ~850 lines) |
| `/servicios` | `app/servicios/page.tsx` |
| `/propiedades` | `app/propiedades/page.tsx` |
| `/propiedades/[slug]` | `app/propiedades/[slug]/page.tsx` |
| `/contacto` | `app/contacto/page.tsx` |

The root layout (`app/layout.tsx`) wraps every page with `I18nProvider`, `Nav`, `Footer`, `WhatsAppButton`, and `RevealObserver`.

### Bilingual (i18n) System

`lib/i18n.tsx` provides a custom context-based i18n system (no third-party library). Key points:

- Two locales: `'es'` (default) and `'en'`
- All UI strings live in a single `content` object inside `lib/i18n.tsx`
- The active locale is persisted to `localStorage` under the key `yt-locale`
- Access translations in any client component via `const { t, locale, setLocale } = useI18n()`
- Pages that have large amounts of bilingual content (property pages, servicios) define their own local `PAGE = { es: {...}, en: {...} }` objects and index into them with `locale`

Every user-facing string must have both `es` and `en` versions. Never add English-only or Spanish-only copy.

### Property Data

All property listings live in `lib/properties.ts` as a typed array (`Property[]`). This is the single source of truth — there is no database or API. Each property has parallel bilingual fields (e.g., `desc` / `descEN`, `features` / `featuresEN`).

Helper functions exported from the same file:
- `getPropertyBySlug(slug)` — used by the dynamic route
- `getRelatedProperties(id, type)` — used on detail pages

Property images are stored under `public/images/propiedades/<slug>/` as `.webp` files. The `gallery` array in each `Property` object must match the actual files present.

To add a new property: add its entry to the `properties` array in `lib/properties.ts`, then add its images to `public/images/propiedades/<slug>/`.

### Components

| Component | Purpose |
|---|---|
| `Nav.tsx` | Sticky nav with scroll-based style change and locale toggle |
| `Footer.tsx` | Multi-column footer with contact info |
| `Gallery.tsx` | Image carousel with thumbnail strip |
| `RevealObserver.tsx` | Sets up an `IntersectionObserver` that adds a `visible` class to elements with `data-reveal` — drives all scroll animations |
| `WhatsAppButton.tsx` | Floating WhatsApp CTA (always rendered) |

### Styling Conventions

**Custom color tokens** (defined in `tailwind.config.ts`):

| Token | Hex | Usage |
|---|---|---|
| `sol` | `#F5D13A` | Primary accent (yellow) |
| `ceiba` | `#4A5E2A` | Primary brand green |
| `canela` | `#C4844A` | Warm accent |
| `tierra` | `#2A1F0E` | Near-black for text |
| `arena` / `lino` / `crema` | warm neutrals | Backgrounds |

**Fonts** (loaded via Google Fonts in `layout.tsx`):
- `font-serif` → Cormorant Garamond (headings)
- `font-sans` → DM Sans (body)

Global typographic styles (`.eyebrow`, heading scales, `.btn`) are defined in `app/globals.css`. Scroll-reveal elements use `data-reveal` attributes; the `RevealObserver` component handles all the JS.

`next.config.js` disables Next.js image optimization (`unoptimized: true`), so use `<Image>` from `next/image` normally but don't rely on automatic resizing — images must already be the correct size and format (`.webp` preferred).

### SEO

- `app/robots.ts` — generates `robots.txt`
- `app/sitemap.ts` — generates the XML sitemap (must be updated when adding new pages or properties)
- Metadata is defined per-page using Next.js `export const metadata`
- The canonical site URL is `https://yinatiburciorealtor.com` (set in `layout.tsx` as `SITE_URL`)

### Deployment

Deployed to Vercel. Config in `vercel.json` (framework: nextjs, build: `npm run build`). No environment variables are required — the site is fully static.
