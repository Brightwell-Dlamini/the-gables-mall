import Image from "next/image";
import Link from "next/link";
import { images } from "@/lib/assets";

export default function Hero() {
  return (
    <section
      className="relative h-[100svh] min-h-[600px] max-h-[980px] flex items-end overflow-hidden"
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
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-black/20" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/20 to-transparent" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(0,0,0,0.35)_100%)]" />

      {/* Soft green ambient glow */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[#00b074]/15 to-transparent pointer-events-none" />

      <div className="relative w-full max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 pb-24 sm:pb-32">
        <div className="max-w-3xl">
          <p className="inline-flex items-center gap-2 text-[#17ff49] font-medium tracking-[0.28em] uppercase text-[11px] sm:text-xs mb-6 drop-shadow-lg">
            <span className="w-8 h-px bg-[#17ff49]/80" aria-hidden />
            Ezulwini · Kingdom of Eswatini
          </p>

          <h1 className="text-[2.75rem] sm:text-5xl md:text-6xl lg:text-[4.25rem] font-bold text-white tracking-[-0.03em] leading-[1.02] mb-7 drop-shadow-2xl">
            Your Premier
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-white/80">
              Shopping Destination
            </span>
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-white/85 max-w-lg mb-11 leading-relaxed font-light tracking-wide drop-shadow-lg">
            96+ stores · Cinema · Dining · Banking · Free secure parking —
            nestled in Shebas Rocks, minutes from two national parks.
          </p>

          <div className="flex flex-wrap gap-3.5 sm:gap-4">
            <Link
              href="/directory"
              className="group relative inline-flex items-center justify-center px-9 py-4 rounded-full bg-gradient-to-r from-[#00b074] via-[#00c98a] to-[#17ff49] text-slate-950 font-semibold text-[15px] shadow-[0_0_40px_-8px_rgba(23,255,73,0.55)] hover:shadow-[0_0_50px_-6px_rgba(23,255,73,0.7)] hover:scale-[1.03] active:scale-[0.98] transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#17ff49] focus-visible:ring-offset-2 focus-visible:ring-offset-black/60"
            >
              Explore Stores
              <span className="ml-2 transition-transform duration-300 group-hover:translate-x-0.5" aria-hidden>
                →
              </span>
            </Link>
            <Link
              href="/gallery"
              className="inline-flex items-center justify-center px-9 py-4 rounded-full border border-white/40 bg-white/8 backdrop-blur-md text-white font-medium text-[15px] hover:bg-white hover:text-slate-900 hover:border-white transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black/50"
            >
              View Gallery
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
