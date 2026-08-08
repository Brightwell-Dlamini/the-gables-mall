"use client";

import { useState } from "react";

const stores = [
  { name: "Pick n Pay", category: "Grocery", shop: "04" },
  { name: "Woolworths", category: "Fashion & Food", shop: "24" },
  { name: "Shoprite", category: "Grocery", shop: "G19-G20" },
  { name: "Clicks", category: "Health", shop: "29" },
  { name: "Movie Zone", category: "Entertainment", shop: "11 & 12" },
  { name: "Mugg & Bean", category: "Dining", shop: "G58" },
  { name: "KFC", category: "Dining", shop: "SH100" },
  { name: "Jet", category: "Fashion", shop: "G36" },
  { name: "Pep", category: "Fashion", shop: "G38" },
  { name: "Mr Price", category: "Fashion", shop: "G56" },
  { name: "Foschini", category: "Fashion", shop: "G72" },
  { name: "Standard Bank", category: "Banking", shop: "35-37" },
  { name: "Nedbank", category: "Banking", shop: "40" },
  { name: "FNB", category: "Banking", shop: "49" },
  { name: "MTN", category: "Telecom", shop: "06" },
  { name: "Debonairs", category: "Dining", shop: "17" },
  { name: "Studio 88", category: "Fashion", shop: "G50" },
  { name: "American Swiss", category: "Jewellery", shop: "G86" },
];

const categories = [
  "All",
  "Grocery",
  "Fashion",
  "Dining",
  "Banking",
  "Entertainment",
  "Health",
  "Telecom",
  "Jewellery",
];

export default function Home() {
  const [filter, setFilter] = useState("All");
  const [menuOpen, setMenuOpen] = useState(false);

  const filtered =
    filter === "All" ? stores : stores.filter((s) => s.category.includes(filter) || s.category === filter);

  return (
    <div className="min-h-screen bg-[#FBFBFB] text-slate-900">
      {/* Navigation */}
      <header className="fixed top-0 left-0 right-0 z-50 glass">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            <a href="#" className="flex items-center gap-2.5">
              <div className="w-10 h-10 rounded-full gradient-green flex items-center justify-center text-white font-bold text-lg shadow-md">
                TG
              </div>
              <span className="font-semibold text-lg tracking-tight hidden sm:block">
                The Gables
              </span>
            </a>

            <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
              <a href="#stores" className="hover:text-[#22c55e] transition-colors">
                Stores
              </a>
              <a href="#about" className="hover:text-[#22c55e] transition-colors">
                About
              </a>
              <a href="#facilities" className="hover:text-[#22c55e] transition-colors">
                Facilities
              </a>
              <a href="#news" className="hover:text-[#22c55e] transition-colors">
                News
              </a>
              <a href="#lease" className="hover:text-[#22c55e] transition-colors">
                Lease
              </a>
              <a
                href="#contact"
                className="px-5 py-2.5 rounded-full gradient-green text-white shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all"
              >
                Contact
              </a>
            </nav>

            <button
              className="md:hidden p-2 rounded-lg hover:bg-[#e5f3e8] transition-colors"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {menuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {menuOpen && (
          <div className="md:hidden border-t border-[#d1e7d9] bg-white/95 px-4 py-4 space-y-1">
            {["Stores", "About", "Facilities", "News", "Lease", "Contact"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="block py-2.5 px-3 rounded-lg text-sm font-medium hover:bg-[#e5f3e8] hover:text-[#22c55e] transition-colors"
                onClick={() => setMenuOpen(false)}
              >
                {item}
              </a>
            ))}
          </div>
        )}
      </header>

      {/* Hero */}
      <section className="relative pt-28 pb-20 md:pt-40 md:pb-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#e5f3e8] via-[#FBFBFB] to-[#f0fdf4]" />
        <div className="absolute top-24 right-0 w-[28rem] h-[28rem] bg-[#17ff49]/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#22c55e]/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-[#00b074] font-medium tracking-wider uppercase text-sm mb-4">
              Ezulwini · Kingdom of Eswatini
            </p>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-[1.1] mb-6">
              Your Premier Shopping{" "}
              <span className="bg-clip-text text-transparent gradient-green">
                Destination
              </span>
            </h1>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed max-w-xl">
              Home to 96+ stores, restaurants, a cinema, banking and free secure parking —
              nestled in the heart of Shebas Rocks, Ezulwini, close to two national parks.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="#stores"
                className="px-8 py-3.5 rounded-full gradient-green text-white font-medium shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all"
              >
                Explore Stores
              </a>
              <a
                href="#about"
                className="px-8 py-3.5 rounded-full border-2 border-[#22c55e] text-[#22c55e] font-medium hover:bg-[#22c55e] hover:text-white transition-all"
              >
                Learn More
              </a>
            </div>
          </div>

          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {[
              { label: "Retail Space", value: "24,115 m²" },
              { label: "Tenants", value: "96+" },
              { label: "Open", value: "7 Days" },
              { label: "Parking", value: "Free & Secure" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="bg-white rounded-2xl p-5 shadow-sm border border-[#d1e7d9] hover:border-[#22c55e]/40 transition-colors"
              >
                <p className="text-2xl md:text-3xl font-bold text-[#22c55e]">{stat.value}</p>
                <p className="text-sm text-slate-500 mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stores Directory */}
      <section id="stores" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-3">Our Stores</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              From fashion and groceries to dining and entertainment — everything under one roof.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  filter === cat
                    ? "gradient-green text-white shadow"
                    : "bg-[#e5f3e8] text-slate-700 hover:bg-[#d1e7d9]"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {filtered.map((store) => (
              <div
                key={store.name}
                className="group p-5 rounded-2xl border border-[#d1e7d9] bg-[#FBFBFB] hover:border-[#22c55e] hover:shadow-md transition-all"
              >
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h3 className="font-semibold group-hover:text-[#22c55e] transition-colors">
                      {store.name}
                    </h3>
                    <p className="text-sm text-slate-500 mt-0.5">{store.category}</p>
                  </div>
                  <span className="text-xs font-medium bg-[#e5f3e8] text-[#00b074] px-2.5 py-1 rounded-full whitespace-nowrap">
                    Shop {store.shop}
                  </span>
                </div>
              </div>
            ))}
          </div>

          <p className="text-center text-sm text-slate-500 mt-8">
            Showing a selection of our 96+ tenants. Full directory available in-centre.
          </p>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-20 bg-[#e5f3e8]/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">About The Gables</h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                The Gables Shopping Centre is a retail and office development situated in a superb,
                convenient location close to two national parks. Located in the heart of Shebas Rocks,
                Ezulwini, it is well connected with public transport and plenty of accommodation options nearby.
              </p>
              <p className="text-slate-600 leading-relaxed mb-4">
                With major brands including Clicks, Pick n Pay, Woolworths and Shoprite, plus a cinema,
                restaurants and full banking services, The Gables offers a complete shopping experience
                inspired by value and convenience.
              </p>
              <p className="text-slate-600 leading-relaxed">
                The architectural character draws on Dutch Style influences, creating distinctive court
                areas that make navigation easy and the overall experience memorable.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { title: "Fashion", desc: "Latest trends from local & international brands" },
                { title: "Food & Dining", desc: "From quick bites to sit-down restaurants" },
                { title: "Entertainment", desc: "Cinema and family-friendly activities" },
                { title: "Services", desc: "Banking, health, telecom & more" },
              ].map((item) => (
                <div
                  key={item.title}
                  className="bg-white p-5 rounded-2xl shadow-sm border border-[#d1e7d9]"
                >
                  <h3 className="font-semibold text-[#22c55e] mb-1">{item.title}</h3>
                  <p className="text-sm text-slate-600">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Facilities */}
      <section id="facilities" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Services & Facilities
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "General Info",
                items: ["24,115.31 m² retail space", "96+ tenants", "Open 7 days / week", "09:00 – 17:00 (varies)"],
              },
              {
                title: "Retail Services",
                items: ["Fashion", "Food & Dining", "Healthcare", "Homeware & Tech"],
              },
              {
                title: "Business Services",
                items: ["Banking", "Utilities", "Legal Services", "Business Consultations"],
              },
              {
                title: "Safety & Convenience",
                items: ["On-site Police Post", "24hr Security", "Secure Free Parking", "Easy Access"],
              },
            ].map((block) => (
              <div
                key={block.title}
                className="p-6 rounded-2xl bg-[#FBFBFB] border border-[#d1e7d9]"
              >
                <h3 className="font-semibold text-lg mb-4 text-[#00b074]">{block.title}</h3>
                <ul className="space-y-2">
                  {block.items.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-slate-600">
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

      {/* News */}
      <section id="news" className="py-20 bg-[#FBFBFB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Latest at The Gables
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "The Gables Solar — Coming Soon",
                body: "We are installing rooftop solar panels, taking a major step toward cleaner energy and a greener future for Eswatini.",
                gradient: "gradient-green",
              },
              {
                title: "Gables Excursions",
                body: "We welcome school excursions and tour buses. The centre of choice for memorable group visits.",
                gradient: "bg-gradient-to-br from-[#85d32c] to-[#22c55e]",
              },
              {
                title: "Spring into Action",
                body: "Come shop and celebrate the arrival of spring at The Gables Shopping Centre.",
                gradient: "bg-gradient-to-br from-[#17ff49] to-[#00b074]",
              },
            ].map((card) => (
              <article
                key={card.title}
                className="bg-white rounded-2xl overflow-hidden shadow-sm border border-[#d1e7d9] hover:shadow-md transition-shadow"
              >
                <div className={`h-40 ${card.gradient}`} />
                <div className="p-6">
                  <h3 className="font-semibold text-lg mb-2">{card.title}</h3>
                  <p className="text-sm text-slate-600">{card.body}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Lease CTA */}
      <section id="lease" className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="rounded-3xl gradient-green p-10 md:p-14 text-white shadow-xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Lease Retail Space</h2>
            <p className="text-white/90 mb-8 max-w-xl mx-auto">
              Join one of Eswatini’s premier shopping destinations. High footfall, excellent
              location and a thriving community of brands.
            </p>
            <a
              href="#contact"
              className="inline-block px-8 py-3.5 bg-white text-[#22c55e] font-semibold rounded-full hover:bg-slate-50 transition-colors"
            >
              Enquire Now
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-slate-900 text-slate-300 py-16 mt-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-10 mb-12">
            <div>
              <div className="flex items-center gap-2.5 mb-4">
                <div className="w-9 h-9 rounded-full gradient-green flex items-center justify-center text-white font-bold text-sm">
                  TG
                </div>
                <span className="text-white font-semibold">The Gables</span>
              </div>
              <p className="text-sm leading-relaxed">
                Premier shopping destination in Ezulwini, Kingdom of Eswatini.
                Value, convenience and community under one roof.
              </p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Contact</h4>
              <ul className="space-y-2 text-sm">
                <li>The Gables Shopping Centre</li>
                <li>MR103, Ezulwini, Eswatini</li>
                <li>+268 2417 1173</li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Management</h4>
              <ul className="space-y-2 text-sm">
                <li>Property Manager: Carol-Lee Payne</li>
                <li>Operations: Manqoba Dlamini</li>
                <li>CBRE Excellerate</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-700 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm">
            <p>© {new Date().getFullYear()} The Gables Shopping Centre. All rights reserved.</p>
            <p className="text-slate-500">Ezulwini · Eswatini</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
