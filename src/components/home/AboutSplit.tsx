import Image from "next/image";
import Link from "next/link";
import { images } from "@/lib/assets";

export default function AboutSplit() {
  return (
    <section className="py-24 sm:py-32 bg-white dark:bg-slate-950">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          <div className="lg:col-span-5 order-2 lg:order-1">
            <p className="inline-flex items-center gap-2 text-[#00b074] dark:text-[#17ff49] font-medium tracking-[0.22em] uppercase text-[11px] sm:text-xs mb-5">
              <span className="w-6 h-px bg-current opacity-70" aria-hidden />
              The Centre of Choice
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-[2.75rem] font-bold tracking-[-0.03em] mb-7 leading-[1.1] text-slate-900 dark:text-white">
              Dutch-inspired design.
              <br />
              African heart.
            </h2>
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-5 text-lg font-light">
              In the heart of Shebas Rocks, Ezulwini, The Gables brings together
              fashion, food, entertainment and essential services under one
              distinctive roof.
            </p>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-10">
              From Pick n Pay and Woolworths to Movie Zone and Spur, every visit
              is designed to feel effortless.
            </p>
            <Link
              href="/about"
              className="group inline-flex items-center gap-2.5 text-[#00b074] dark:text-[#17ff49] font-semibold text-[15px] hover:gap-3.5 transition-all duration-300 focus:outline-none focus-visible:underline"
            >
              Discover our story
              <span className="transition-transform duration-300 group-hover:translate-x-0.5" aria-hidden>
                →
              </span>
            </Link>
          </div>

          <div className="lg:col-span-7 order-1 lg:order-2 grid grid-cols-2 gap-3 sm:gap-5">
            <div className="relative aspect-[3/4] rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl shadow-black/10 dark:shadow-black/40 ring-1 ring-black/5 dark:ring-white/5">
              <Image
                src={images.entrance}
                alt="Main entrance of The Gables"
                fill
                sizes="30vw"
                className="object-cover hover:scale-105 transition-transform duration-700 ease-out"
                quality={85}
              />
            </div>
            <div className="flex flex-col gap-3 sm:gap-5">
              <div className="relative aspect-[4/3] rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl shadow-black/10 dark:shadow-black/40 flex-1 ring-1 ring-black/5 dark:ring-white/5">
                <Image
                  src={images.aerial}
                  alt="Aerial view of The Gables"
                  fill
                  sizes="30vw"
                  className="object-cover hover:scale-105 transition-transform duration-700 ease-out"
                  quality={85}
                  loading="lazy"
                />
              </div>
              <div className="relative aspect-[4/3] rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl shadow-black/10 dark:shadow-black/40 flex-1 ring-1 ring-black/5 dark:ring-white/5">
                <Image
                  src={images.exterior}
                  alt="Exterior architecture of The Gables"
                  fill
                  sizes="30vw"
                  className="object-cover hover:scale-105 transition-transform duration-700 ease-out"
                  quality={85}
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
