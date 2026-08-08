import Image from "next/image";
import Link from "next/link";
import { images } from "@/lib/assets";

export default function MapSection() {
  return (
    <section className="py-24 sm:py-32 bg-slate-50 dark:bg-slate-900/60" aria-labelledby="map-heading">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <p className="inline-flex items-center gap-2 text-[#00b074] dark:text-[#17ff49] font-medium tracking-[0.22em] uppercase text-[11px] sm:text-xs mb-5">
              <span className="w-6 h-px bg-current opacity-70" aria-hidden />
              Find us
            </p>
            <h2
              id="map-heading"
              className="text-3xl sm:text-4xl font-bold tracking-[-0.03em] text-slate-900 dark:text-white mb-6 leading-tight"
            >
              Easy to reach.
              <br />
              Hard to leave.
            </h2>
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-8 text-lg font-light">
              MR103, Ezulwini — connected to Mbabane, Matsapha and Manzini.
            </p>
            <ul className="space-y-3.5 text-slate-700 dark:text-slate-300 mb-10">
              <li className="flex gap-3 items-center">
                <span className="flex items-center justify-center w-5 h-5 rounded-full bg-[#00b074]/15 dark:bg-[#17ff49]/15 text-[#00b074] dark:text-[#17ff49] text-xs font-bold" aria-hidden>
                  ✓
                </span>
                Free secure parking
              </li>
              <li className="flex gap-3 items-center">
                <span className="flex items-center justify-center w-5 h-5 rounded-full bg-[#00b074]/15 dark:bg-[#17ff49]/15 text-[#00b074] dark:text-[#17ff49] text-xs font-bold" aria-hidden>
                  ✓
                </span>
                On-site police post & 24hr security
              </li>
              <li className="flex gap-3 items-center">
                <span className="flex items-center justify-center w-5 h-5 rounded-full bg-[#00b074]/15 dark:bg-[#17ff49]/15 text-[#00b074] dark:text-[#17ff49] text-xs font-bold" aria-hidden>
                  ✓
                </span>
                Open 7 days a week
              </li>
            </ul>
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[#00b074] hover:bg-[#009a62] text-white font-semibold text-[15px] shadow-lg shadow-emerald-500/20 hover:shadow-emerald-500/30 transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#17ff49] focus-visible:ring-offset-2"
            >
              Get directions
              <span className="transition-transform duration-300 group-hover:translate-x-0.5" aria-hidden>
                →
              </span>
            </Link>
          </div>

          <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden border border-slate-200 dark:border-slate-800 shadow-2xl shadow-black/5 dark:shadow-black/40 bg-white dark:bg-slate-950 p-3 sm:p-5 ring-1 ring-black/5 dark:ring-white/5">
            <Image
              src={images.mapView}
              alt="Centre map of The Gables Shopping Centre"
              width={800}
              height={600}
              className="w-full h-auto rounded-xl"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
