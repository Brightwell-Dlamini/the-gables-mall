import Image from "next/image";
import Link from "next/link";
import { images } from "@/lib/assets";

export default function Hero() {
  return (
    <section
      className="relative min-h-[100svh] flex flex-col justify-end overflow-hidden"
      aria-label="Welcome to The Gables Shopping Centre"
    >
      <Image
        src={images.banner04}
        alt="The Gables Shopping Centre in Ezulwini"
        fill
        priority
        sizes="100vw"
        className="object-cover object-center scale-110 animate-[slow-zoom_32s_ease-in-out_infinite_alternate]"
        quality={90}
      />

      {/* Bold overlay treatment */}
      <div className="absolute inset-0 bg-black/50" />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-br from-[#00b074]/20 via-transparent to-transparent" />

      {/* Large decorative number / mark */}
      <div
        className="absolute top-[18%] right-[-4%] sm:right-[2%] text-[28vw] sm:text-[18vw] font-bold leading-none text-white/[0.04] select-none pointer-events-none tracking-tighter"
        aria-hidden
      >
        96
      </div>

      <div className="relative w-full max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 pb-16 sm:pb-24 pt-32">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-6 items-end">
          <div className="lg:col-span-8">
            <div className="inline-flex items-center gap-3 mb-6 sm:mb-8">
              <span className="h-px w-10 bg-[#17ff49]" />
              <span className="text-[#17ff49] text-[11px] sm:text-xs font-semibold tracking-[0.3em] uppercase">
                Ezulwini · Eswatini
              </span>
            </div>

            <h1 className="text-[clamp(2.75rem,8vw,5.5rem)] font-bold text-white leading-[0.95] tracking-[-0.04em] mb-6 sm:mb-8">
              Shop.
              <br />
              Dine.
              <br />
              <span className="text-[#17ff49]">Experience.</span>
            </h1>

            <p className="text-white/70 text-base sm:text-lg max-w-md leading-relaxed font-light mb-10">
              96+ stores · Cinema · Free secure parking.
              <br className="hidden sm:block" />
              Dutch-inspired architecture in the heart of Shebas Rocks.
            </p>

            <div className="flex flex-wrap gap-3">
              <Link
                href="/directory"
                className="group inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#17ff49] text-slate-950 font-bold text-sm tracking-wide hover:bg-white transition-all duration-300 shadow-[0_0_50px_-10px_rgba(23,255,73,0.6)]"
              >
                Explore stores
                <span className="group-hover:translate-x-1 transition-transform" aria-hidden>
                  →
                </span>
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center px-8 py-4 rounded-full border border-white/30 text-white font-medium text-sm hover:bg-white/10 transition-all duration-300"
              >
                Our story
              </Link>
            </div>
          </div>

          {/* Side meta panel */}
          <div className="lg:col-span-4 hidden lg:flex flex-col gap-4 items-end text-right">
            <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 w-full max-w-xs">
              <p className="text-[#17ff49] text-3xl font-bold tracking-tight mb-1">24,115 m²</p>
              <p className="text-white/50 text-xs uppercase tracking-widest">Retail space</p>
            </div>
            <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 w-full max-w-xs">
              <p className="text-white text-3xl font-bold tracking-tight mb-1">7 days</p>
              <p className="text-white/50 text-xs uppercase tracking-widest">Open weekly</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
