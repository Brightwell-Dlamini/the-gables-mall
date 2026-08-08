import Image from "next/image";
import Link from "next/link";
import { images } from "@/lib/assets";

export default function Hero() {
  return (
    <section className="relative h-[100svh] min-h-[560px] max-h-[920px] flex items-end">
      <Image
        src={images.banner04}
        alt="The Gables Shopping Centre"
        fill
        priority
        sizes="100vw"
        className="object-cover"
        quality={80}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-black/20" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-transparent" />
      <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20 sm:pb-28">
        <p className="text-[#17ff49] font-semibold tracking-[0.2em] uppercase text-xs sm:text-sm mb-4">
          Ezulwini · Kingdom of Eswatini
        </p>
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight leading-[1.05] max-w-4xl mb-6">
          Your Premier Shopping Destination
        </h1>
        <p className="text-lg sm:text-xl text-white/80 max-w-xl mb-10 leading-relaxed">
          96+ stores · Cinema · Dining · Banking · Free secure parking — nestled
          in Shebas Rocks, minutes from two national parks.
        </p>
        <div className="flex flex-wrap gap-4">
          <Link
            href="/directory"
            className="px-8 py-4 rounded-full gradient-green text-white font-semibold shadow-2xl shadow-green-900/40 hover:scale-[1.03] transition-transform"
          >
            Explore Stores
          </Link>
          <Link
            href="/gallery"
            className="px-8 py-4 rounded-full border border-white/40 bg-white/10 backdrop-blur-md text-white font-medium hover:bg-white hover:text-slate-900 transition-all"
          >
            View Gallery
          </Link>
        </div>
      </div>
    </section>
  );
}
