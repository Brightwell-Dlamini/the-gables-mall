import Image from "next/image";
import Link from "next/link";
import { images } from "@/lib/assets";

export default function LeaseCTA() {
  return (
    <section className="relative py-28 sm:py-40 overflow-hidden" aria-labelledby="lease-heading">
      <Image
        src={images.banner02}
        alt=""
        fill
        sizes="100vw"
        className="object-cover"
        loading="lazy"
        quality={80}
      />
      <div className="absolute inset-0 bg-slate-950/90" />

      <div className="relative max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-[#17ff49] text-[11px] font-semibold tracking-[0.3em] uppercase mb-5">
              Opportunity
            </p>
            <h2
              id="lease-heading"
              className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-[-0.04em] leading-[1.05] text-white mb-6"
            >
              Lease space.
              <br />
              Own the footfall.
            </h2>
            <p className="text-white/60 text-lg font-light leading-relaxed max-w-md mb-10">
              Join one of Eswatini&apos;s busiest centres. High traffic, strong brands, and a location that delivers.
            </p>
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 px-9 py-4 rounded-full bg-[#17ff49] text-slate-950 font-bold text-sm hover:bg-white transition-all duration-300 shadow-[0_0_40px_-8px_rgba(23,255,73,0.5)]"
            >
              Enquire now
              <span className="group-hover:translate-x-1 transition-transform" aria-hidden>
                →
              </span>
            </Link>
          </div>

          <div className="hidden lg:grid grid-cols-2 gap-4">
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur">
              <p className="text-4xl font-bold text-white mb-1">96+</p>
              <p className="text-white/50 text-sm">Current tenants</p>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur mt-8">
              <p className="text-4xl font-bold text-[#17ff49] mb-1">24k</p>
              <p className="text-white/50 text-sm">m² of retail</p>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur -mt-4">
              <p className="text-4xl font-bold text-white mb-1">7</p>
              <p className="text-white/50 text-sm">Days a week</p>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur mt-4">
              <p className="text-4xl font-bold text-white mb-1">Free</p>
              <p className="text-white/50 text-sm">Secure parking</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
