import Image from "next/image";
import { images } from "@/lib/assets";

const banners = [images.banner01, images.banner02, images.banner03, images.banner04];

export default function BannerMosaic() {
  return (
    <section className="py-4 bg-slate-50 dark:bg-slate-900">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-1 sm:gap-2 px-1 sm:px-2">
        {banners.map((src, i) => (
          <div
            key={i}
            className="relative aspect-[4/3] overflow-hidden rounded-lg sm:rounded-xl group"
          >
            <Image
              src={src}
              alt={`The Gables atmosphere ${i + 1}`}
              fill
              sizes="25vw"
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              quality={80}
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>
        ))}
      </div>
    </section>
  );
}
