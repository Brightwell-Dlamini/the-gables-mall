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
    <section className="py-24 sm:py-32 bg-slate-950 text-white" aria-labelledby="anchors-heading">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div>
            <p className="text-[#17ff49] text-[11px] font-semibold tracking-[0.3em] uppercase mb-4">
              Directory
            </p>
            <h2 id="anchors-heading" className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-[-0.03em]">
              Brands you know.
              <br />
              <span className="text-white/40">All in one place.</span>
            </h2>
          </div>
          <Link
            href="/directory"
            className="group inline-flex items-center gap-2 text-[#17ff49] font-semibold text-sm hover:gap-3 transition-all shrink-0"
          >
            Full directory
            <span aria-hidden>→</span>
          </Link>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
          {anchors.map((b) => (
            <div
              key={b.name}
              className="bg-white/[0.03] hover:bg-white/[0.07] border border-white/10 rounded-2xl p-6 sm:p-8 flex items-center justify-center h-28 sm:h-32 transition-all duration-300"
            >
              <Image
                src={`${LOGO_BASE}${b.logo}`}
                alt={b.name}
                width={140}
                height={56}
                className="max-h-12 sm:max-h-14 w-auto object-contain brightness-0 invert opacity-80 hover:opacity-100 transition-opacity"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
