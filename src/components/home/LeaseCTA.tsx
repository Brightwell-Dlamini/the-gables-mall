import Image from "next/image";
import Link from "next/link";
import { images } from "@/lib/assets";

export default function LeaseCTA() {
  return (
    <section className="relative py-24 sm:py-32 overflow-hidden">
      <Image
        src={images.banner02}
        alt=""
        fill
        sizes="100vw"
        className="object-cover"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-black/70" />
      <div className="relative max-w-3xl mx-auto px-4 text-center text-white">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
          Lease retail space
        </h2>
        <p className="text-white/85 text-lg mb-10 max-w-xl mx-auto">
          Join one of Eswatini’s busiest centres. High footfall, strong brands,
          and a location that delivers.
        </p>
        <Link
          href="/contact"
          className="inline-block px-10 py-4 rounded-full bg-white text-[#00b074] font-bold hover:bg-[#17ff49] hover:text-slate-900 transition-colors shadow-xl"
        >
          Enquire now
        </Link>
      </div>
    </section>
  );
}
