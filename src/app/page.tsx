import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home",
  description:
    "The Gables Shopping Centre in Ezulwini, Eswatini — 96+ stores including Pick n Pay, Woolworths, Shoprite, Clicks, cinema, restaurants and free secure parking.",
  openGraph: {
    title: "The Gables Shopping Centre | Premier Destination in Ezulwini",
    description: "96+ stores, free parking, cinema and dining near two national parks.",
    images: [
      {
        url: "https://raw.githubusercontent.com/Brightwell-Dlamini/thegables-new/main/img/thegables-entrance.jpg",
        width: 1200,
        height: 630,
        alt: "The Gables Shopping Centre entrance",
      },
    ],
  },
};

const ENTRANCE =
  "https://raw.githubusercontent.com/Brightwell-Dlamini/thegables-new/main/img/thegables-entrance.jpg";
const AERIAL =
  "https://raw.githubusercontent.com/Brightwell-Dlamini/thegables-new/main/img/thegables-aerialview.jpg";

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

export default function Home() {
  return (
    <>
      <section className="relative h-[70vh] min-h-[420px] sm:min-h-[480px] md:h-[85vh] flex items-end">
        <Image
          src={ENTRANCE}
          alt="The Gables Shopping Centre entrance, Ezulwini"
          fill
          priority
          sizes="100vw"
          className="object-cover"
          quality={75}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 sm:pb-16 md:pb-24 w-full">
          <p className="text-[#17ff49] font-medium tracking-wider uppercase text-xs sm:text-sm mb-3">
            Ezulwini · Kingdom of Eswatini
          </p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-[1.1] max-w-3xl mb-4">
            Your Premier Shopping Destination
          </h1>
          <p className="text-base sm:text-lg text-white/85 max-w-xl mb-6 sm:mb-8">
            96+ stores · Free secure parking · Cinema · Dining · Banking —
            nestled in the heart of Shebas Rocks, close to two national parks.
          </p>
          <div className="flex flex-wrap gap-3 sm:gap-4">
            <Link
              href="/directory"
              className="px-6 sm:px-8 py-3 sm:py-3.5 rounded-full gradient-green text-white font-medium shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all text-sm sm:text-base"
            >
              Explore Stores
            </Link>
            <Link
              href="/about"
              className="px-6 sm:px-8 py-3 sm:py-3.5 rounded-full border-2 border-white/80 text-white font-medium hover:bg-white hover:text-slate-900 transition-all text-sm sm:text-base"
            >
              About The Gables
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-white dark:bg-[var(--card)] border-b border-[var(--border)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 text-center">
            {[
              { value: "24,115 m²", label: "Retail Space" },
              { value: "96+", label: "Tenants" },
              { value: "7 Days", label: "Open Weekly" },
              { value: "Free", label: "Secure Parking" },
            ].map((s) => (
              <div key={s.label}>
                <p className="text-xl sm:text-2xl md:text-3xl font-bold text-[#00b074] dark:text-[#17ff49]">{s.value}</p>
                <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6">The Centre of Choice</h2>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                The Gables Shopping Centre is a retail and office development situated in a superb,
                convenient location close to two national parks. Located in the heart of Shebas Rocks,
                Ezulwini, it is well connected with public transport and accommodation options nearby.
              </p>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
                Dutch-style architecture, uniquely identified court areas, and a strong mix of local
                and international brands create a memorable shopping experience for families,
                tourists and daily shoppers alike.
              </p>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 text-[#00b074] dark:text-[#17ff49] font-semibold hover:underline"
              >
                Read more about us <span aria-hidden>→</span>
              </Link>
            </div>
            <div className="relative rounded-2xl overflow-hidden shadow-lg border border-[var(--border)] h-56 sm:h-72 md:h-96">
              <Image
                src={AERIAL}
                alt="Aerial view of The Gables Shopping Centre"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
                quality={70}
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16 bg-[#e5f3e8]/40 dark:bg-[#14532d]/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-center mb-8 sm:mb-10">Featured Brands</h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-6">
            {anchors.map((b) => (
              <div
                key={b.name}
                className="bg-white dark:bg-[var(--card)] rounded-xl p-4 sm:p-6 flex items-center justify-center h-24 sm:h-28 border border-[var(--border)] shadow-sm hover:shadow-md transition-shadow"
              >
                <Image
                  src={`https://raw.githubusercontent.com/Brightwell-Dlamini/thegables-new/main/img/logos/${b.logo}`}
                  alt={b.name}
                  width={120}
                  height={48}
                  className="max-h-12 sm:max-h-16 w-auto object-contain"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
          <div className="text-center mt-8 sm:mt-10">
            <Link
              href="/directory"
              className="px-5 sm:px-6 py-2.5 sm:py-3 rounded-full border-2 border-[#00b074] text-[#00b074] dark:border-[#17ff49] dark:text-[#17ff49] font-medium hover:bg-[#00b074] hover:text-white dark:hover:bg-[#17ff49] dark:hover:text-slate-900 transition-all text-sm sm:text-base"
            >
              View Full Directory
            </Link>
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16 md:py-20 bg-white dark:bg-[var(--card)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 sm:mb-12">Services & Facilities</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {[
              { title: "General Info", items: ["24,115 m² retail space", "96+ tenants", "Open 7 days", "09:00 – 17:00 (varies)"] },
              { title: "Retail", items: ["Fashion", "Food & Dining", "Healthcare", "Homeware & Tech"] },
              { title: "Business", items: ["Banking", "Utilities", "Legal services", "Consultations"] },
              { title: "Safety & Convenience", items: ["On-site Police Post", "24hr Security", "Secure free parking", "Easy access"] },
            ].map((block) => (
              <div key={block.title} className="p-5 sm:p-6 rounded-2xl bg-[var(--background)] border border-[var(--border)]">
                <h3 className="font-semibold text-base sm:text-lg mb-3 sm:mb-4 text-[#00b074] dark:text-[#17ff49]">{block.title}</h3>
                <ul className="space-y-2">
                  {block.items.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-slate-600 dark:text-slate-300">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#22c55e] shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16 md:py-20 bg-[var(--background)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 sm:mb-12">Latest at The Gables</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
            {[
              { title: "Solar Initiative", body: "Rooftop solar panels are coming soon — a major step toward cleaner energy for Eswatini." },
              { title: "School & Tour Excursions", body: "We welcome school groups and tour buses. The centre of choice for memorable visits." },
              { title: "Dutch-Style Architecture", body: "Distinctive court areas and Dutch architectural character make navigation easy and the experience unique." },
            ].map((card) => (
              <article key={card.title} className="bg-white dark:bg-[var(--card)] rounded-2xl overflow-hidden shadow-sm border border-[var(--border)] hover:shadow-md transition-shadow">
                <div className="h-2 gradient-green" />
                <div className="p-5 sm:p-6">
                  <h3 className="font-semibold text-base sm:text-lg mb-2">{card.title}</h3>
                  <p className="text-sm text-slate-600 dark:text-slate-300">{card.body}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="rounded-2xl sm:rounded-3xl gradient-green p-8 sm:p-10 md:p-14 text-white shadow-xl">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">Lease Retail Space</h2>
            <p className="text-white/90 mb-6 sm:mb-8 max-w-xl mx-auto text-sm sm:text-base">
              Join one of Eswatini’s premier shopping destinations. High footfall,
              excellent location and a thriving community of brands.
            </p>
            <Link
              href="/contact"
              className="inline-block px-6 sm:px-8 py-3 sm:py-3.5 bg-white text-[#00b074] font-semibold rounded-full hover:bg-slate-50 transition-colors"
            >
              Enquire Now
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
