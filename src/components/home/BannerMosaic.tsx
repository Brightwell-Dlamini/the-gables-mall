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
    <section className="py-0" aria-label="Photo mosaic">
      <div className="grid grid-cols-2 md:grid-cols-4">
        {banners.map((banner, i) => (
          <div
            key={i}
            className="relative aspect-[3/4] sm:aspect-[4/5] overflow-hidden group"
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
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-500" />
          </div>
        ))}
      </div>
    </section>
  );
}
