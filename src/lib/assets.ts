/**
 * All site images — organised as a single source of truth.
 * Files live in public/images/ (and are currently also in src/ on this repo).
 */
const REMOTE =
  "https://raw.githubusercontent.com/Brightwell-Dlamini/the-gables-mall/main/src";

function img(name: string, remoteName?: string) {
  return `${REMOTE}/${encodeURI(remoteName ?? name)}`;
}

export const images = {
  dutch: img("Dutch.png"),
  logo: img("the-gables-logo.png"),
  logoGreen: img("the-gables-logo-green.png"),
  entrance: img("thegables-entrance.jpg"),
  aerial: img("thegables-aerialview.jpg"),
  exterior: img("the-gables-01.png"),
  banner01: img("banner-01.jpg"),
  banner02: img("banner-02.jpg"),
  banner03: img("banner-03.jpg"),
  banner04: img("banner-04.jpg"),
  mapView: img("map-view.png"),
  mapVector: img("map-vector.png", "Map Vector.png"),
  mapVectorAlt: img("map-vector-copy.png", "Map Vector - Copy.png"),
  cbreLogo: img("cbre-logo.png"),
  cbreSlogan: img("cbre-slogan.png"),
} as const;

export type ImageKey = keyof typeof images;

/** Every photo used in the gallery */
export const galleryPhotos = [
  { src: images.entrance, alt: "Main entrance of The Gables Shopping Centre", title: "Entrance" },
  { src: images.aerial, alt: "Aerial view of The Gables in Ezulwini", title: "Aerial View" },
  { src: images.exterior, alt: "The Gables exterior architecture", title: "Exterior" },
  { src: images.banner01, alt: "The Gables shopping experience", title: "Lifestyle" },
  { src: images.banner02, alt: "The Gables centre atmosphere", title: "Centre Life" },
  { src: images.banner03, alt: "Retail corridors at The Gables", title: "Retail" },
  { src: images.banner04, alt: "Premium shopping at The Gables", title: "Premium" },
  { src: images.mapView, alt: "Centre map view", title: "Map View" },
] as const;
