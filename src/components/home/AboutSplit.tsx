import Image from "next/image";
import Link from "next/link";
import { images } from "@/lib/assets";

export default function AboutSplit() {
  return (
    <section className="py-28 sm:py-40 bg-white dark:bg-slate-950 overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-6 items-center">
          <div className="lg:col-span-6 relative">
            <div className="relative aspect-[3/4] rounded-[2rem] overflow-hidden">
              <Image
                src={images.entrance}
                alt="Main entrance of The Gables"
                fill
                sizes="50vw"
                className="object-cover"
                quality={90}
              />
            </div>
            {/* Floating accent card */}
            <div className="absolute -bottom-5 -right-2 sm:right-6 bg-slate-950 dark:bg-[#17ff49] text-white dark:text-slate-950 rounded-2xl px-6 py-5 shadow-2xl max-w-[200px]">
              <p className="text-3xl font-black tracking-tight">96+</p>
              <p className="text-xs opacity-70 mt-0.5">Stores & services</p>
            </div>
          </div>

          <div className="lg:col-span-6 lg:pl-10 xl:pl-16">
            <p className="text-[#00b074] dark:text-[#17ff49] text-[11px] font-bold tracking-[0.3em] uppercase mb-5">
              The Centre of Choice
            </p>
            <h2 className="text-4xl sm:text-5xl lg:text-[3.5rem] font-black tracking-[-0.04em] leading-[1.0] text-slate-900 dark:text-white mb-7">
              Dutch design.
              <br />
              African soul.
            </h2>
            <p className="text-slate-600 dark:text-slate-300 text-lg leading-relaxed font-light mb-5 max-w-md">
              In the heart of Shebas Rocks — fashion, food, entertainment and essentials under one roof.
            </p>
            <p className="text-slate-500 dark:text-slate-400 leading-relaxed mb-10 max-w-md">
              From Pick n Pay and Woolworths to Movie Zone and Spur, every visit is designed to feel effortless.
            </p>
            <Link
              href="/about"
              className="group inline-flex items-center gap-3 font-bold text-slate-900 dark:text-white border-b-2 border-[#17ff49] pb-1 hover:gap-4 transition-all"
            >
              Discover our story
              <span className="text-[#00b074] dark:text-[#17ff49]" aria-hidden>→</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
