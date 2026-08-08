# The Gables Shopping Centre

Modern Next.js redesign of the premier shopping destination in Ezulwini, Eswatini.

**Live site**: [thegables.co.sz](https://www.thegables.co.sz)

## Overview
A high-performance, brand-faithful website for The Gables Shopping Centre featuring 96+ stores, cinema, dining, banking and free secure parking. Nestled in Shebas Rocks near two national parks.

## Tech Stack
- **Framework**: Next.js 16.3 + React 19
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Fonts**: Geist Sans / Geist Mono
- **Deployment**: Vercel-ready

## Brand Colours (preserved)
| Token | Hex |
|-------|-----|
| Primary | `#00b074` / `#22c55e` |
| Bright | `#17ff49` |
| Lime | `#85d32c` |
| Background (light) | `#FBFBFB` |
| Background (dark) | `#0a0f0c` |

## Pages
| Route | Description |
|-------|-------------|
| `/` | Home — hero, stats, brands, facilities, map, events teaser, lease CTA |
| `/about` | Full story + management team |
| `/directory` | Searchable store directory with logos |
| `/gallery` | Photo gallery |
| `/events` | Upcoming events |
| `/contact` | Contact details + lease enquiry form |

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Scripts
- `npm run dev` — development server
- `npm run build` — production build
- `npm run start` — start production server
- `npm run lint` — ESLint

## Deployment
Deploy on Vercel. Images and assets are optimised via `next/image`.

## Completed
- [x] Core pages & responsive layout
- [x] Dark / light theme with system-aware toggle
- [x] SEO metadata, Open Graph & sitemap
- [x] Directory search + category filters
- [x] Accessibility (focus-visible, ARIA, semantic markup)
- [x] Consistent dark-mode across all major pages
- [x] Custom 404 page
- [x] Loading state
- [x] Header mobile scroll-lock & focus states
- [x] Footer polish

## Optional future enhancements
- Framer Motion micro-interactions
- Contact form backend / validation
- Events calendar integration
- Google Maps embed refinement

---
Built with care for The Gables Shopping Centre, Ezulwini, Kingdom of Eswatini.
