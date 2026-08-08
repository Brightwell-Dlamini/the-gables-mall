import Image from "next/image";
import Link from "next/link";
import { images } from "@/lib/assets";

export default function MapSection() {
  return (
    <section className="py-24 sm:py-36 bg-slate-50 dark:bg-slate-900" aria-labelledby="map-heading">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          <div className="lg:col-span-5">
            <p className="text-[#00b074] dark:text-[#17ff49] text-[11px] font-semibold tracking-[0.3em] uppercase mb-5">
              Location
            </p>
            <h2
              id="map-heading"
              className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-[-0.03em] text-slate-900 dark:text-white leading-tight mb-6"
            >
              Easy to find.
              <br />
              Hard to leave.
            </h2>
            <p className="text-slate-600 dark:text-slate-300 text-lg font-light leading-relaxed mb-8 max-w-sm">
              MR103, Ezulwini — minutes from Mbabane, Matsapha and Manzini.
            </p>

            <ul className="space-y-3 mb-10">
              {["Free secure parking", "On-site police & 24hr security", "Open 7 days a week"].map(
                (item) => (
                  <li key={item} className="flex items-center gap-3 text-slate-700 dark:text-slate-300">
                    <span className="w-6 h-6 rounded-full bg-[#00b074]/15 dark:bg-[#17ff49]/15 flex items-center justify-center text-[#00b074] dark:text-[#17ff49] text-xs font-bold">
                      ✓
                    </span>
                    {item}
                  </li>
                )
              )}
            </ul>

            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-slate-900 dark:bg-white text-white dark:text-slate-950 font-semibold text-sm hover:opacity-90 transition-all"
            >
              Get directions
              <span className="group-hover:translate-x-1 transition-transform" aria-hidden>
                →
              </span>
            </Link>
          </div>

          <div className="lg:col-span-7">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 p-3 sm:p-4">
              <Image
                src={images.mapView}
                alt="Centre map of The Gables"
                width={900}
                height={650}
                className="w-full h-auto rounded-2xl"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
