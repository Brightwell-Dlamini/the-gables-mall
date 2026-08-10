import Image from "next/image";
import Link from "next/link";
import { images } from "@/lib/assets";

export default function LeaseCTA() {
  return (
    <section className="relative py-32 sm:py-44 overflow-hidden" aria-labelledby="lease-heading">
      <Image
        src={images.banner02}
        alt=""
        fill
        sizes="100vw"
        className="object-cover scale-105"
        loading="lazy"
        quality={80}
      />
      <div className="absolute inset-0 bg-slate-950/88" />

      <div className="relative max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          <div>
            <p className="text-[#17ff49] text-[11px] font-bold tracking-[0.3em] uppercase mb-5">
              Opportunity
            </p>
            <h2
              id="lease-heading"
              className="text-4xl sm:text-5xl md:text-6xl font-black tracking-[-0.04em] leading-[0.95] text-white mb-6"
            >
              Lease space.
              <br />
              Own the footfall.
            </h2>
            <p className="text-white/45 text-lg font-light leading-relaxed max-w-md mb-10">
              Join one of Eswatini&apos;s busiest centres. High traffic, strong brands, location that delivers.
            </p>
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2.5 px-9 py-4 rounded-full bg-[#17ff49] text-slate-950 font-bold text-sm hover:bg-white transition-all duration-300 shadow-[0_0_50px_-10px_rgba(23,255,73,0.55)]"
            >
              Enquire now
              <span className="group-hover:translate-x-1 transition-transform" aria-hidden>→</span>
            </Link>
          </div>

          <div className="hidden lg:grid grid-cols-2 gap-3">
            {[
              { value: "96+", label: "Current tenants", accent: false },
              { value: "24k", label: "m² of retail", accent: true },
              { value: "7", label: "Days a week", accent: false },
              { value: "Free", label: "Secure parking", accent: false },
            ].map((item, i) => (
              <div
                key={item.label}
                className={`bg-white/[0.05] border border-white/10 rounded-2xl p-6 backdrop-blur ${
                  i === 1 ? "mt-6" : i === 2 ? "-mt-3" : i === 3 ? "mt-3" : ""
                }`}
              >
                <p className={`text-3xl font-black tracking-tight mb-1 ${
                  item.accent ? "text-[#17ff49]" : "text-white"
                }`}>
                  {item.value}
                </p>
                <p className="text-white/40 text-sm">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
