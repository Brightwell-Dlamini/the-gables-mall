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
    <section className="py-1.5 sm:py-2 bg-slate-100 dark:bg-slate-950" aria-label="Photo mosaic">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-1 sm:gap-1.5 px-1 sm:px-1.5">
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
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
              quality={85}
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-50 group-hover:opacity-30 transition-opacity duration-500" />
          </div>
        ))}
      </div>
    </section>
  );
}
