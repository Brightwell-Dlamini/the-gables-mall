import Image from "next/image";
import Link from "next/link";
import { images } from "@/lib/assets";

export default function AboutSplit() {
  return (
    <section className="py-24 sm:py-36 bg-white dark:bg-slate-950 overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          {/* Images — stacked / overlapping feel */}
          <div className="lg:col-span-6 relative">
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src={images.entrance}
                alt="Main entrance of The Gables"
                fill
                sizes="50vw"
                className="object-cover"
                quality={88}
              />
            </div>
            <div className="absolute -bottom-6 -right-4 sm:-right-8 w-[55%] aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl border-4 border-white dark:border-slate-950 hidden sm:block">
              <Image
                src={images.aerial}
                alt="Aerial view"
                fill
                sizes="30vw"
                className="object-cover"
                quality={85}
                loading="lazy"
              />
            </div>
          </div>

          <div className="lg:col-span-6 lg:pl-8 xl:pl-16 pt-8 lg:pt-0">
            <p className="text-[#00b074] dark:text-[#17ff49] text-[11px] font-semibold tracking-[0.3em] uppercase mb-5">
              The Centre of Choice
            </p>
            <h2 className="text-4xl sm:text-5xl lg:text-[3.25rem] font-bold tracking-[-0.04em] leading-[1.05] text-slate-900 dark:text-white mb-6">
              Dutch design.
              <br />
              African soul.
            </h2>
            <p className="text-slate-600 dark:text-slate-300 text-lg leading-relaxed font-light mb-5 max-w-md">
              In the heart of Shebas Rocks, Ezulwini — fashion, food, entertainment and essentials under one distinctive roof.
            </p>
            <p className="text-slate-500 dark:text-slate-400 leading-relaxed mb-10 max-w-md">
              From Pick n Pay and Woolworths to Movie Zone and Spur, every visit is designed to feel effortless.
            </p>
            <Link
              href="/about"
              className="group inline-flex items-center gap-3 text-slate-900 dark:text-white font-semibold text-base border-b-2 border-[#00b074] dark:border-[#17ff49] pb-1 hover:gap-4 transition-all"
            >
              Discover our story
              <span className="text-[#00b074] dark:text-[#17ff49]" aria-hidden>
                →
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
