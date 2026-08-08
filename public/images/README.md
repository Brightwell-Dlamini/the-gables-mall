# Site images

All official photos and brand assets for The Gables site.

Currently the same files also live under `src/` in this repository (as uploaded).
The app loads them via `src/lib/assets.ts`.

## Inventory (every file is used on the site)

| File | Usage |
|------|--------|
| Dutch.png | Site-wide divider above footer |
| the-gables-logo.png | Header & footer |
| the-gables-logo-green.png | Brand asset |
| thegables-entrance.jpg | About split, gallery |
| thegables-aerialview.jpg | About split, gallery |
| the-gables-01.png | Exterior, events hero, gallery |
| banner-01.jpg … banner-04.jpg | Hero, mosaic, events, gallery, CTAs |
| map-view.png | Home map, gallery |
| Map Vector.png | Site plan |
| Map Vector - Copy.png | Gallery site plan |
| cbre-logo.png | Footer, home partner strip |
| cbre-slogan.png | Home partner strip |

To serve from local `/images/...` paths in production, copy these files into this folder and switch `src/lib/assets.ts` to local paths.
