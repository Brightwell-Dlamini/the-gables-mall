import Image from "next/image";
import Link from "next/link";
import { images } from "@/lib/assets";

export default function AboutSplit() {
  return (
    <section className="py-20 sm:py-28 bg-white dark:bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          <div className="lg:col-span-5 order-2 lg:order-1">
            <p className="text-[#00b074] dark:text-[#17ff49] font-semibold tracking-wider uppercase text-sm mb-3">
              The Centre of Choice
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-6 leading-tight text-slate-900 dark:text-white">
              Dutch-inspired design. African heart.
            </h2>
            <p className="text-slate-700 dark:text-slate-300 leading-relaxed mb-4 text-lg">
              In the heart of Shebas Rocks, Ezulwini, The Gables brings together
              fashion, food, entertainment and essential services under one
              distinctive roof.
            </p>
            <p className="text-slate-700 dark:text-slate-300 leading-relaxed mb-8">
              From Pick n Pay and Woolworths to Movie Zone and Spur, every visit
              is designed to feel effortless.
            </p>
            <Link
              href="/about"
              className="inline-flex items-center gap-2 text-[#00b074] dark:text-[#17ff49] font-semibold text-lg hover:gap-3 transition-all duration-300 hover:text-[#009a62] dark:hover:text-[#00e64d] focus:outline-none focus-visible:underline"
            >
              Discover our story <span aria-hidden>→</span>
            </Link>
          </div>
          <div className="lg:col-span-7 order-1 lg:order-2 grid grid-cols-2 gap-3 sm:gap-4">
            <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-xl shadow-black/10 dark:shadow-black/40">
              <Image
                src={images.entrance}
                alt="Main entrance of The Gables"
                fill
                sizes="30vw"
                className="object-cover hover:scale-105 transition-transform duration-700"
                quality={80}
              />
            </div>
            <div className="flex flex-col gap-3 sm:gap-4">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl shadow-black/10 dark:shadow-black/40 flex-1">
                <Image
                  src={images.aerial}
                  alt="Aerial view of The Gables"
                  fill
                  sizes="30vw"
                  className="object-cover hover:scale-105 transition-transform duration-700"
                  quality={80}
                  loading="lazy"
                />
              </div>
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl shadow-black/10 dark:shadow-black/40 flex-1">
                <Image
                  src={images.exterior}
                  alt="Exterior architecture of The Gables"
                  fill
                  sizes="30vw"
                  className="object-cover hover:scale-105 transition-transform duration-700"
                  quality={80}
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
