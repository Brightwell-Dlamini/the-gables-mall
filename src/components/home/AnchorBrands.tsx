import Image from "next/image";
import Link from "next/link";

const LOGO_BASE =
  "https://raw.githubusercontent.com/Brightwell-Dlamini/thegables-new/main/img/logos/";

const anchors = [
  { name: "Pick n Pay", logo: "pnp.png" },
  { name: "Woolworths", logo: "woolworths.png" },
  { name: "Shoprite", logo: "shoprite.png" },
  { name: "Clicks", logo: "clicks.png" },
  { name: "Movie Zone", logo: "movie.png" },
  { name: "Mr Price", logo: "mrprice.png" },
  { name: "Standard Bank", logo: "standard.png" },
  { name: "MTN", logo: "mtn.png" },
];

export default function AnchorBrands() {
  return (
    <section className="py-24 sm:py-32 bg-slate-50/80 dark:bg-slate-900/50" aria-labelledby="anchors-heading">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
        <div className="text-center mb-14">
          <p className="inline-flex items-center gap-2 text-[#00b074] dark:text-[#17ff49] font-medium tracking-[0.22em] uppercase text-[11px] sm:text-xs mb-4">
            <span className="w-6 h-px bg-current opacity-70" aria-hidden />
            Directory
            <span className="w-6 h-px bg-current opacity-70" aria-hidden />
          </p>
          <h2 id="anchors-heading" className="text-3xl sm:text-4xl font-bold tracking-[-0.03em] text-slate-900 dark:text-white">
            Anchor brands
          </h2>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-5">
          {anchors.map((b) => (
            <div
              key={b.name}
              className="group bg-white/80 dark:bg-slate-950/80 backdrop-blur-sm rounded-2xl p-6 sm:p-8 flex items-center justify-center h-28 sm:h-36 border border-slate-200/80 dark:border-slate-800 hover:border-[#00b074]/40 dark:hover:border-[#17ff49]/40 transition-all duration-300 hover:shadow-xl hover:shadow-black/5 dark:hover:shadow-black/30 hover:-translate-y-0.5"
            >
              <Image
                src={`${LOGO_BASE}${b.logo}`}
                alt={b.name}
                width={140}
                height={56}
                className="max-h-12 sm:max-h-14 w-auto object-contain opacity-90 group-hover:opacity-100 transition-opacity duration-300"
                loading="lazy"
              />
            </div>
          ))}
        </div>

        <div className="text-center mt-14">
          <Link
            href="/directory"
            className="group inline-flex items-center gap-2 px-8 py-3.5 rounded-full border border-[#00b074]/40 dark:border-[#17ff49]/40 text-[#00b074] dark:text-[#17ff49] font-semibold text-[15px] hover:bg-[#00b074] hover:text-white dark:hover:bg-[#17ff49] dark:hover:text-slate-950 transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#00b074] dark:focus-visible:ring-[#17ff49] focus-visible:ring-offset-2"
          >
            Full store directory
            <span className="transition-transform duration-300 group-hover:translate-x-0.5" aria-hidden>
              →
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
