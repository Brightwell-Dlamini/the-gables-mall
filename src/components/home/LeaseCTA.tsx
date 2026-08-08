import Image from "next/image";
import Link from "next/link";
import { images } from "@/lib/assets";

export default function LeaseCTA() {
  return (
    <section className="relative py-28 sm:py-36 overflow-hidden" aria-labelledby="lease-heading">
      <Image
        src={images.banner02}
        alt=""
        fill
        sizes="100vw"
        className="object-cover scale-105"
        loading="lazy"
        quality={80}
      />
      <div className="absolute inset-0 bg-black/80" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#00b074]/20 via-transparent to-transparent" />

      <div className="relative max-w-3xl mx-auto px-5 text-center text-white">
        <p className="text-[#17ff49] font-medium tracking-[0.22em] uppercase text-[11px] sm:text-xs mb-5">
          Opportunity
        </p>
        <h2
          id="lease-heading"
          className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-[-0.03em] mb-6 leading-tight"
        >
          Lease retail space
        </h2>
        <p className="text-white/80 text-lg mb-12 max-w-md mx-auto font-light leading-relaxed">
          Join one of Eswatini&apos;s busiest centres. High footfall, strong brands,
          and a location that delivers.
        </p>
        <Link
          href="/contact"
          className="group inline-flex items-center gap-2 px-10 py-4 rounded-full bg-white text-[#00b074] font-bold text-[15px] hover:bg-[#17ff49] hover:text-slate-950 transition-all duration-300 shadow-2xl hover:scale-[1.03] focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black/60"
        >
          Enquire now
          <span className="transition-transform duration-300 group-hover:translate-x-0.5" aria-hidden>
            →
          </span>
        </Link>
      </div>
    </section>
  );
}
