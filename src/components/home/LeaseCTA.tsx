import Image from "next/image";
import Link from "next/link";
import { images } from "@/lib/assets";

export default function LeaseCTA() {
  return (
    <section className="relative py-24 sm:py-32 overflow-hidden" aria-labelledby="lease-heading">
      <Image
        src={images.banner02}
        alt=""
        fill
        sizes="100vw"
        className="object-cover"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-black/75" />
      <div className="relative max-w-3xl mx-auto px-4 text-center text-white">
        <h2 id="lease-heading" className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 drop-shadow-lg">
          Lease retail space
        </h2>
        <p className="text-white/90 text-lg mb-10 max-w-xl mx-auto drop-shadow-lg">
          Join one of Eswatini&apos;s busiest centres. High footfall, strong brands,
          and a location that delivers.
        </p>
        <Link
          href="/contact"
          className="inline-block px-10 py-4 rounded-full bg-white text-[#00b074] font-bold hover:bg-[#17ff49] hover:text-slate-900 transition-all duration-300 shadow-2xl hover:scale-105 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black/50"
        >
          Enquire now
        </Link>
      </div>
    </section>
  );
}
