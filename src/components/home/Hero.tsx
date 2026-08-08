import Image from "next/image";
import Link from "next/link";
import { images } from "@/lib/assets";

export default function Hero() {
  return (
    <section
      className="relative h-[100svh] min-h-[580px] max-h-[960px] flex items-end overflow-hidden"
      aria-label="Welcome to The Gables Shopping Centre"
    >
      <Image
        src={images.banner04}
        alt="Aerial and entrance view of The Gables Shopping Centre in Ezulwini"
        fill
        priority
        sizes="100vw"
        className="object-cover scale-105 animate-[slow-zoom_28s_ease-in-out_infinite_alternate]"
        quality={90}
      />

      {/* Layered cinematic gradients */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-black/15" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/65 via-black/15 to-transparent" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_70%_30%,transparent_0%,rgba(0,0,0,0.3)_100%)]" />

      {/* Soft green ambient glow at base */}
      <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-[#00b074]/12 to-transparent pointer-events-none" />

      <div className="relative w-full max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 pb-20 sm:pb-28 md:pb-32">
        <div className="max-w-3xl">
          <p className="inline-flex items-center gap-2.5 text-[#17ff49] font-medium tracking-[0.26em] uppercase text-[10px] sm:text-[11px] mb-5 sm:mb-6 drop-shadow-lg">
            <span className="w-7 h-px bg-[#17ff49]/70" aria-hidden />
            Ezulwini · Kingdom of Eswatini
          </p>

          <h1 className="text-[2.5rem] sm:text-5xl md:text-6xl lg:text-[4.1rem] font-bold text-white tracking-[-0.035em] leading-[1.05] mb-6 sm:mb-7 drop-shadow-2xl">
            Your Premier
            <br />
            Shopping Destination
          </h1>

          <p className="text-[15px] sm:text-lg md:text-xl text-white/80 max-w-md sm:max-w-lg mb-9 sm:mb-11 leading-relaxed font-light drop-shadow-lg">
            96+ stores · Cinema · Dining · Banking · Free secure parking —
            nestled in Shebas Rocks, minutes from two national parks.
          </p>

          <div className="flex flex-wrap gap-3 sm:gap-4">
            <Link
              href="/directory"
              className="group relative inline-flex items-center justify-center px-8 sm:px-9 py-3.5 sm:py-4 rounded-full bg-gradient-to-r from-[#00b074] via-[#00c98a] to-[#17ff49] text-slate-950 font-semibold text-sm sm:text-[15px] shadow-[0_0_36px_-8px_rgba(23,255,73,0.5)] hover:shadow-[0_0_48px_-6px_rgba(23,255,73,0.65)] hover:scale-[1.03] active:scale-[0.98] transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#17ff49] focus-visible:ring-offset-2 focus-visible:ring-offset-black/60"
            >
              Explore Stores
              <span className="ml-2 transition-transform duration-300 group-hover:translate-x-0.5" aria-hidden>
                →
              </span>
            </Link>
            <Link
              href="/gallery"
              className="inline-flex items-center justify-center px-8 sm:px-9 py-3.5 sm:py-4 rounded-full border border-white/35 bg-white/[0.07] backdrop-blur-md text-white font-medium text-sm sm:text-[15px] hover:bg-white hover:text-slate-900 hover:border-white transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black/50"
            >
              View Gallery
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
