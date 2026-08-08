import Image from "next/image";
import Link from "next/link";
import { images } from "@/lib/assets";

export default function MapSection() {
  return (
    <section className="py-20 sm:py-28 bg-slate-50 dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <p className="text-[#00b074] dark:text-[#17ff49] font-semibold tracking-wider uppercase text-sm mb-3">
              Find us
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-6">
              Easy to reach. Hard to leave.
            </h2>
            <p className="text-slate-700 dark:text-slate-300 leading-relaxed mb-6 text-lg">
              MR103, Ezulwini — connected to Mbabane, Matsapha and Manzini.
            </p>
            <ul className="space-y-3 text-slate-700 dark:text-slate-300 mb-8">
              <li className="flex gap-3">
                <span className="text-[#00b074] dark:text-[#17ff49] font-bold">✓</span> Free secure parking
              </li>
              <li className="flex gap-3">
                <span className="text-[#00b074] dark:text-[#17ff49] font-bold">✓</span> On-site police post & 24hr security
              </li>
              <li className="flex gap-3">
                <span className="text-[#00b074] dark:text-[#17ff49] font-bold">✓</span> Open 7 days a week
              </li>
            </ul>
            <Link
              href="/contact"
              className="inline-flex px-6 py-3 rounded-full bg-[#00b074] hover:bg-[#009a62] text-white font-semibold shadow-lg shadow-emerald-500/20 hover:shadow-emerald-500/30 transition-all duration-300"
            >
              Get directions
            </Link>
          </div>
          <div className="relative rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 shadow-2xl shadow-black/5 dark:shadow-black/40 bg-white dark:bg-slate-950 p-4 sm:p-6">
            <Image
              src={images.mapView}
              alt="Centre map"
              width={800}
              height={600}
              className="w-full h-auto rounded-lg"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
