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
        quality={92}
      />

      <div className="absolute inset-0 bg-black/45" />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-tr from-[#00b074]/25 via-transparent to-transparent" />

      {/* Giant watermark */}
      <div
        className="absolute top-[12%] right-[-6%] sm:right-0 text-[32vw] sm:text-[22vw] font-black leading-none text-white/[0.05] select-none pointer-events-none tracking-tighter"
        aria-hidden
      >
        96
      </div>

      <div className="relative w-full max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 pb-14 sm:pb-20 md:pb-24 pt-28">
        <div className="grid lg:grid-cols-12 gap-10 items-end">
          <div className="lg:col-span-7">
            <div className="flex items-center gap-3 mb-6">
              <span className="h-[2px] w-8 bg-[#17ff49]" />
              <span className="text-[#17ff49] text-[11px] font-bold tracking-[0.35em] uppercase">
                Ezulwini · Eswatini
              </span>
            </div>

            <h1 className="text-[clamp(3rem,9vw,6rem)] font-black text-white leading-[0.9] tracking-[-0.045em] mb-7">
              Shop.
              <br />
              Dine.
              <br />
              <span className="text-[#17ff49]">Experience.</span>
            </h1>

            <p className="text-white/60 text-base sm:text-lg max-w-sm leading-relaxed font-light mb-10">
              96+ stores · Cinema · Free parking.
              Dutch-inspired architecture in Shebas Rocks.
            </p>

            <div className="flex flex-wrap gap-3">
              <Link
                href="/directory"
                className="group inline-flex items-center gap-2.5 px-8 py-4 rounded-full bg-[#17ff49] text-slate-950 font-bold text-sm tracking-wide hover:bg-white transition-all duration-300 shadow-[0_0_60px_-12px_rgba(23,255,73,0.7)]"
              >
                Explore stores
                <span className="group-hover:translate-x-1 transition-transform" aria-hidden>→</span>
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center px-8 py-4 rounded-full border border-white/25 text-white font-medium text-sm hover:bg-white/10 hover:border-white/40 transition-all duration-300"
              >
                Our story
              </Link>
            </div>
          </div>

          <div className="lg:col-span-5 hidden lg:flex flex-col gap-3 items-stretch">
            {[
              { value: "24,115 m²", label: "Retail space" },
              { value: "7 days", label: "Open weekly" },
              { value: "Free", label: "Secure parking" },
            ].map((item) => (
              <div
                key={item.label}
                className="bg-white/[0.06] backdrop-blur-md border border-white/10 rounded-2xl px-6 py-5 flex items-baseline justify-between gap-4"
              >
                <p className="text-white text-2xl font-bold tracking-tight">{item.value}</p>
                <p className="text-white/40 text-xs uppercase tracking-widest text-right">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
