import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { images } from "@/lib/assets";

export const metadata: Metadata = {
  title: "Home",
  description:
    "The Gables Shopping Centre — Ezulwini’s premier destination. 96+ stores, cinema, dining, free parking.",
  openGraph: {
    images: [{ url: images.entrance, width: 1200, height: 630 }],
  },
};

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

const LOGO_BASE =
  "https://raw.githubusercontent.com/Brightwell-Dlamini/thegables-new/main/img/logos/";

export default function Home() {
  return (
    <>
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
            Where Eswatini
            <br />
            <span className="bg-clip-text text-transparent gradient-green">Comes to Shop</span>
          </h1>
          <p className="text-lg sm:text-xl text-white/80 max-w-xl mb-10 leading-relaxed">
            96+ stores · Cinema · Dining · Banking · Free secure parking — nestled in Shebas Rocks,
            minutes from two national parks.
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

      <section className="relative z-10 -mt-8 sm:-mt-12">
        <div className="max-w-5xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 rounded-2xl bg-[var(--card)] border border-[var(--border)] shadow-2xl shadow-black/20 p-4 sm:p-6">
            {[
              { value: "24,115 m²", label: "Retail Space" },
              { value: "96+", label: "Tenants" },
              { value: "7 Days", label: "Open Weekly" },
              { value: "Free", label: "Secure Parking" },
            ].map((s) => (
              <div key={s.label} className="text-center py-2">
                <p className="text-xl sm:text-2xl md:text-3xl font-bold text-[#00b074] dark:text-[#17ff49]">
                  {s.value}
                </p>
                <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">
            <div className="lg:col-span-5 order-2 lg:order-1">
              <p className="text-[#00b074] dark:text-[#17ff49] font-semibold tracking-wider uppercase text-sm mb-3">
                The Centre of Choice
              </p>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-6 leading-tight">
                Dutch-inspired design. African heart.
              </h2>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-4 text-lg">
                In the heart of Shebas Rocks, Ezulwini, The Gables brings together fashion, food,
                entertainment and essential services under one distinctive roof.
              </p>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-8">
                From Pick n Pay and Woolworths to Movie Zone and Spur, every visit is designed to
                feel effortless.
              </p>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 text-[#00b074] dark:text-[#17ff49] font-semibold text-lg hover:gap-3 transition-all"
              >
                Discover our story <span aria-hidden>→</span>
              </Link>
            </div>
           
            </div>
          </div>
        </div>
      </section>

      <section className="py-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-1 sm:gap-2 px-1 sm:px-2">
          {[images.banner01, images.banner02, images.banner03, images.banner04].map((src, i) => (
            <div key={i} className="relative aspect-[4/3] overflow-hidden rounded-lg sm:rounded-xl group">
              <Image src={src} alt={`Atmosphere ${i + 1}`} fill sizes="25vw" className="object-cover transition-transform duration-700 group-hover:scale-105" quality={70} loading="lazy" />
            </div>
          ))}
        </div>
      </section>

      <section className="py-20 sm:py-28 bg-[var(--card)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-[#00b074] dark:text-[#17ff49] font-semibold tracking-wider uppercase text-sm mb-3">Directory</p>
            <h2 className="text-3xl sm:text-4xl font-bold">Anchor brands</h2>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6">
            {anchors.map((b) => (
              <div key={b.name} className="bg-[var(--background)] rounded-2xl p-6 sm:p-8 flex items-center justify-center h-28 sm:h-32 border border-[var(--border)] hover:border-[#00b074]/50 transition-all hover:shadow-lg">
                <Image src={`${LOGO_BASE}${b.logo}`} alt={b.name} width={140} height={56} className="max-h-14 w-auto object-contain" loading="lazy" />
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link href="/directory" className="inline-flex px-8 py-3.5 rounded-full border-2 border-[#00b074] dark:border-[#17ff49] text-[#00b074] dark:text-[#17ff49] font-semibold hover:bg-[#00b074] hover:text-white dark:hover:bg-[#17ff49] dark:hover:text-slate-900 transition-all">
              Full store directory
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <p className="text-[#00b074] dark:text-[#17ff49] font-semibold tracking-wider uppercase text-sm mb-3">Find us</p>
              <h2 className="text-3xl sm:text-4xl font-bold mb-6">Easy to reach. Hard to leave.</h2>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-6 text-lg">
                MR103, Ezulwini — connected to Mbabane, Matsapha and Manzini.
              </p>
              <ul className="space-y-3 text-slate-600 dark:text-slate-300 mb-8">
                <li className="flex gap-3"><span className="text-[#17ff49]">✓</span> Free secure parking</li>
                <li className="flex gap-3"><span className="text-[#17ff49]">✓</span> On-site police post & 24hr security</li>
                <li className="flex gap-3"><span className="text-[#17ff49]">✓</span> Open 7 days a week</li>
              </ul>
              <Link href="/contact" className="inline-flex px-6 py-3 rounded-full gradient-green text-white font-semibold shadow-lg">Get directions</Link>
            </div>
            <div className="relative rounded-2xl overflow-hidden border border-[var(--border)] shadow-2xl bg-[var(--card)] p-4 sm:p-6">
              <Image src={images.mapView} alt="Centre map" width={800} height={600} className="w-full h-auto rounded-lg" loading="lazy" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-24 bg-[var(--card)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <p className="text-[#00b074] dark:text-[#17ff49] font-semibold tracking-wider uppercase text-sm mb-3">What’s on</p>
              <h2 className="text-3xl sm:text-4xl font-bold">Events & news</h2>
            </div>
            <Link href="/events" className="text-[#00b074] dark:text-[#17ff49] font-semibold hover:underline">All events →</Link>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { img: images.banner01, title: "Solar Initiative", body: "Rooftop solar is coming — cleaner energy for Eswatini." },
              { img: images.banner02, title: "School Excursions", body: "We welcome schools and tour groups. Book your visit." },
              { img: images.banner03, title: "Centre Promotions", body: "Seasonal campaigns and tenant offers throughout the year." },
            ].map((card) => (
              <article key={card.title} className="group rounded-2xl overflow-hidden border border-[var(--border)] bg-[var(--background)] hover:shadow-xl transition-shadow">
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image src={card.img} alt="" fill sizes="33vw" className="object-cover transition-transform duration-500 group-hover:scale-105" loading="lazy" />
                </div>
                <div className="p-6">
                  <h3 className="font-semibold text-lg mb-2">{card.title}</h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400">{card.body}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-24 sm:py-32 overflow-hidden">
        <Image src={images.banner02} alt="" fill sizes="100vw" className="object-cover" loading="lazy" />
        <div className="absolute inset-0 bg-black/70" />
        <div className="relative max-w-3xl mx-auto px-4 text-center text-white">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">Lease retail space</h2>
          <p className="text-white/85 text-lg mb-10 max-w-xl mx-auto">
            Join one of Eswatini’s busiest centres. High footfall, strong brands, and a location that delivers.
          </p>
          <Link href="/contact" className="inline-block px-10 py-4 rounded-full bg-white text-[#00b074] font-bold hover:bg-[#17ff49] hover:text-slate-900 transition-colors shadow-xl">
            Enquire now
          </Link>
        </div>
      </section>

      <section className="py-16 border-t border-[var(--border)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-10">
          <div className="flex items-center gap-6">
            <Image src={images.cbreLogo} alt="CBRE Excellerate" width={120} height={40} className="h-10 w-auto" loading="lazy" />
            <Image src={images.cbreSlogan} alt="CBRE" width={200} height={40} className="h-8 w-auto opacity-80 hidden sm:block" loading="lazy" />
          </div>
          <Image src={images.mapVector} alt="Site plan" width={280} height={140} className="h-24 sm:h-28 w-auto opacity-70" loading="lazy" />
        </div>
      </section>
    </>
  );
}
