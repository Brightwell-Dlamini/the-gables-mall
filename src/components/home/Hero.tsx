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
        quality={85}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-black/30" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-transparent to-transparent" />
      
      <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20 sm:pb-28">
        <p className="text-[#17ff49] font-semibold tracking-[0.2em] uppercase text-xs sm:text-sm mb-4 drop-shadow-lg">
          Ezulwini · Kingdom of Eswatini
        </p>
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight leading-[1.05] max-w-4xl mb-6 drop-shadow-2xl">
          Your Premier Shopping Destination
        </h1>
        <p className="text-lg sm:text-xl text-white/90 max-w-xl mb-10 leading-relaxed drop-shadow-lg">
          96+ stores · Cinema · Dining · Banking · Free secure parking — nestled
          in Shebas Rocks, minutes from two national parks.
        </p>
        <div className="flex flex-wrap gap-4">
          <Link
            href="/directory"
            className="px-8 py-4 rounded-full bg-gradient-to-r from-[#00b074] to-[#00d4a0] text-white font-semibold shadow-2xl shadow-emerald-900/50 hover:shadow-emerald-900/70 hover:scale-[1.03] transition-all duration-300"
          >
            Explore Stores
          </Link>
          <Link
            href="/gallery"
            className="px-8 py-4 rounded-full border border-white/50 bg-white/10 backdrop-blur-md text-white font-medium hover:bg-white hover:text-slate-900 transition-all duration-300 hover:border-white"
          >
            View Gallery
          </Link>
        </div>
      </div>
    </section>
  );
}
