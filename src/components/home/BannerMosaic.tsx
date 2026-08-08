import Image from "next/image";
import { images } from "@/lib/assets";

const banners = [
  { src: images.banner01, alt: "Lifestyle at The Gables" },
  { src: images.banner02, alt: "Centre atmosphere" },
  { src: images.banner03, alt: "Retail corridors" },
  { src: images.banner04, alt: "Premium shopping experience" },
];

export default function BannerMosaic() {
  return (
    <section className="py-4 bg-slate-50 dark:bg-slate-900" aria-label="Photo mosaic">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-1 sm:gap-2 px-1 sm:px-2">
        {banners.map((banner, i) => (
          <div
            key={i}
            className="relative aspect-[4/3] overflow-hidden rounded-lg sm:rounded-xl group"
          >
            <Image
              src={banner.src}
              alt={banner.alt}
              fill
              sizes="25vw"
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              quality={80}
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/25 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>
        ))}
      </div>
    </section>
  );
}
