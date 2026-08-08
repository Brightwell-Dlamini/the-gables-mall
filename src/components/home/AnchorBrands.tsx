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
    <section className="py-20 sm:py-28 bg-white dark:bg-slate-950" aria-labelledby="anchors-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-[#00b074] dark:text-[#17ff49] font-semibold tracking-wider uppercase text-sm mb-3">
            Directory
          </p>
          <h2 id="anchors-heading" className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white">
            Anchor brands
          </h2>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6">
          {anchors.map((b) => (
            <div
              key={b.name}
              className="bg-white dark:bg-slate-900 rounded-2xl p-6 sm:p-8 flex items-center justify-center h-28 sm:h-32 border border-slate-200 dark:border-slate-800 hover:border-[#00b074]/50 dark:hover:border-[#17ff49]/50 transition-all hover:shadow-lg hover:shadow-black/5 dark:hover:shadow-black/40"
            >
              <Image
                src={`${LOGO_BASE}${b.logo}`}
                alt={b.name}
                width={140}
                height={56}
                className="max-h-14 w-auto object-contain"
                loading="lazy"
              />
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <Link
            href="/directory"
            className="inline-flex px-8 py-3.5 rounded-full border-2 border-[#00b074] dark:border-[#17ff49] text-[#00b074] dark:text-[#17ff49] font-semibold hover:bg-[#00b074] hover:text-white dark:hover:bg-[#17ff49] dark:hover:text-slate-900 transition-all duration-300 hover:scale-105 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#00b074] dark:focus-visible:ring-[#17ff49] focus-visible:ring-offset-2"
          >
            Full store directory
          </Link>
        </div>
      </div>
    </section>
  );
}
