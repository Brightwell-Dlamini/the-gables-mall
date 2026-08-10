"use client";

import Image from "next/image";
import { useState, useMemo } from "react";

const LOGO_BASE =
  "https://raw.githubusercontent.com/Brightwell-Dlamini/thegables-new/main/img/logos/";

type Store = {
  name: string;
  category: string;
  shop: string;
  logo?: string;
  tel?: string;
};

const stores: Store[] = [
  { name: "Pick n Pay", category: "Grocery", shop: "04", logo: "pnp.png", tel: "+268 7802 6816" },
  { name: "Pick n Pay Clothing", category: "Fashion", shop: "03", logo: "pnpc.png" },
  { name: "Woolworths", category: "Fashion & Food", shop: "24", logo: "woolworths.png", tel: "+268 2416 2087" },
  { name: "Shoprite", category: "Grocery", shop: "G19-G20", logo: "shoprite.png", tel: "+268 2416 3441" },
  { name: "Shoprite Checkers Bottle Store", category: "Liquor", shop: "G18", logo: "liquor.jpg", tel: "+268 2416 3349" },
  { name: "Clicks", category: "Health", shop: "29", logo: "clicks.png", tel: "+268 2416 2751" },
  { name: "Movie Zone", category: "Entertainment", shop: "11 & 12", logo: "movie.png", tel: "+268 7602 2890" },
  { name: "Mugg & Bean", category: "Dining", shop: "G58", logo: "mugg.png", tel: "+268 7644 6464" },
  { name: "KFC Drive Thru", category: "Dining", shop: "SH100", logo: "kfc.png", tel: "+268 2416 2917" },
  { name: "Debonairs", category: "Dining", shop: "17", logo: "debonairs.png", tel: "+268 7602 0008" },
  { name: "Jet", category: "Fashion", shop: "G36", logo: "jet.png", tel: "+268 2416 1618" },
  { name: "Pep", category: "Fashion", shop: "G38", logo: "pep.png", tel: "+268 2416 1349" },
  { name: "Mr Price Apparel", category: "Fashion", shop: "G56", logo: "mrprice.png", tel: "+268 2417 1881" },
  { name: "Foschini", category: "Fashion", shop: "G72", logo: "foschini.png", tel: "+268 7647 6313" },
  { name: "Exact!", category: "Fashion", shop: "G76", logo: "exact.png", tel: "+268 2416 3067" },
  { name: "Milady's", category: "Fashion", shop: "G34", logo: "miladys.png", tel: "+268 2417 1458" },
  { name: "Studio 88", category: "Fashion", shop: "G50", logo: "studio.png", tel: "+268 7699 8074" },
  { name: "Sportscene", category: "Fashion", shop: "G78", logo: "sportscene.jpg", tel: "+268 7850 4141" },
  { name: "Markham", category: "Fashion", shop: "G80", logo: "markham.png" },
  { name: "Footgear", category: "Fashion", shop: "G82", logo: "footgear.png" },
  { name: "The Fix", category: "Fashion", shop: "G40" },
  { name: "American Swiss Jewellers", category: "Jewellery", shop: "G86", logo: "swiss.png" },
  { name: "Standard Bank Limited Eswatini", category: "Banking", shop: "35-37", logo: "standard.png", tel: "+268 7602 6718" },
  { name: "Nedbank", category: "Banking", shop: "40", logo: "nedbank.png", tel: "+268 2404 8249" },
  { name: "FNB", category: "Banking", shop: "49", logo: "fnb.png" },
  { name: "Eswatini Bank", category: "Banking", shop: "34", logo: "swazibank.png", tel: "+268 7602 6202" },
  { name: "Eswatini Building Society", category: "Banking", shop: "43-47", logo: "society.png", tel: "+268 2416 1913" },
  { name: "MTN", category: "Telecom", shop: "06", logo: "mtn.png", tel: "+268 7606 1600" },
  { name: "Eswatini Mobile", category: "Telecom", shop: "22", logo: "szmobile.png", tel: "+268 7901 1000" },
  { name: "OK Furniture", category: "Home", shop: "G34", logo: "ok.png", tel: "+268 2416 2141" },
  { name: "Sheet Street", category: "Home", shop: "G52", logo: "sheet.png", tel: "+268 7830 5313" },
  { name: "Dulux Paint Centre", category: "Home", shop: "", logo: "dulux.png" },
  { name: "Shebas Rock Spur", category: "Dining", shop: "01", logo: "sheba.png", tel: "+268 7602 0008" },
  { name: "Oryx Restaurant", category: "Dining", shop: "14 & 15" },
  { name: "Char.co Restaurant", category: "Dining", shop: "21", tel: "+268 7811 6648" },
  { name: "Amigos Restaurant", category: "Dining", shop: "Cd106 & 107", tel: "+268 7606 0211" },
  { name: "Portia M", category: "Beauty", shop: "16", logo: "portia.png", tel: "+268 7667 1267" },
  { name: "Essence of Life Salon", category: "Beauty", shop: "09", tel: "+268 7604 5323" },
  { name: "The Royal Tirta Ayu Spa", category: "Beauty", shop: "G62", tel: "+268 7979 4033" },
  { name: "House Of Oud", category: "Beauty", shop: "50", tel: "+268 7606 6010" },
  { name: "The Health Shop", category: "Health", shop: "G70", tel: "+268 7851 8940" },
  { name: "Waterman", category: "Services", shop: "07", logo: "water.png", tel: "+268 7671 6139" },
  { name: "Seeff Properties", category: "Services", shop: "Office 05", logo: "seeff.png", tel: "+268 2416 3205" },
  { name: "Postnet", category: "Services", shop: "38", tel: "+268 2417 1672" },
  { name: "NOSA", category: "Services", shop: "Office 03", tel: "+268 7602 1388" },
];

const categories = [
  "All", "Grocery", "Fashion", "Dining", "Banking", "Entertainment", "Health", "Telecom", "Jewellery", "Home", "Beauty", "Services", "Liquor",
];

export default function DirectoryPage() {
  const [filter, setFilter] = useState("All");
  const [q, setQ] = useState("");

  const filtered = useMemo(() => {
    return stores.filter((s) => {
      const matchCat =
        filter === "All" ||
        s.category === filter ||
        s.category.toLowerCase().includes(filter.toLowerCase());
      const matchQ =
        !q ||
        s.name.toLowerCase().includes(q.toLowerCase()) ||
        s.shop.toLowerCase().includes(q.toLowerCase()) ||
        (s.category && s.category.toLowerCase().includes(q.toLowerCase()));
      return matchCat && matchQ;
    });
  }, [filter, q]);

  return (
    <>
      <section className="pt-28 sm:pt-36 pb-16 bg-slate-950 text-white">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
          <p className="text-[#17ff49] text-[11px] font-semibold tracking-[0.3em] uppercase mb-4">
            Find your store
          </p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-[-0.04em] leading-[1.05] mb-6 max-w-2xl">
            Store Directory
          </h1>
          <p className="text-white/50 text-lg font-light max-w-md mb-10">
            {stores.length}+ tenants across fashion, food, banking, entertainment and more.
          </p>
          <div className="relative max-w-lg">
            <input
              type="search"
              placeholder="Search name, category or shop…"
              value={q}
              onChange={(e) => setQ(e.target.value)}
              className="w-full px-6 py-4 rounded-full bg-white/5 border border-white/15 text-white placeholder:text-white/30 focus:outline-none focus:ring-2 focus:ring-[#17ff49] focus:border-transparent text-[15px]"
              aria-label="Search stores"
            />
            {q && (
              <button
                type="button"
                onClick={() => setQ("")}
                className="absolute right-5 top-1/2 -translate-y-1/2 text-white/40 hover:text-white text-sm"
              >
                Clear
              </button>
            )}
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16 max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
        <div className="flex flex-wrap gap-2 mb-10" role="group" aria-label="Filter by category">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                filter === cat
                  ? "bg-slate-950 dark:bg-[#17ff49] text-white dark:text-slate-950"
                  : "bg-slate-100 dark:bg-slate-900 text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-800"
              }`}
              aria-pressed={filter === cat}
            >
              {cat}
            </button>
          ))}
        </div>

        <p className="text-sm text-slate-500 dark:text-slate-400 mb-8" aria-live="polite">
          {filtered.length} of {stores.length} stores
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-4">
          {filtered.map((store) => (
            <article
              key={`${store.name}-${store.shop}`}
              className="group p-5 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 hover:border-slate-900 dark:hover:border-[#17ff49]/40 transition-all flex gap-4 items-center"
            >
              <div className="w-12 h-12 shrink-0 bg-slate-50 dark:bg-slate-900 rounded-xl flex items-center justify-center p-1.5 overflow-hidden">
                {store.logo ? (
                  <Image
                    src={`${LOGO_BASE}${store.logo}`}
                    alt=""
                    width={40}
                    height={32}
                    className="max-h-8 w-auto object-contain"
                  />
                ) : (
                  <span className="text-xs font-bold text-[#00b074] dark:text-[#17ff49]">
                    {store.name.slice(0, 2).toUpperCase()}
                  </span>
                )}
              </div>
              <div className="min-w-0 flex-1">
                <h3 className="font-semibold text-slate-900 dark:text-white truncate text-[15px]">
                  {store.name}
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400">{store.category}</p>
                <div className="flex flex-wrap gap-x-3 mt-0.5 text-xs">
                  {store.shop && (
                    <span className="text-[#00b074] dark:text-[#17ff49] font-medium">
                      Shop {store.shop}
                    </span>
                  )}
                  {store.tel && (
                    <a href={`tel:${store.tel.replace(/\s/g, "")}`} className="text-slate-400 hover:text-[#00b074] dark:hover:text-[#17ff49]">
                      {store.tel}
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-20">
            <p className="text-slate-500 text-lg mb-6 font-light">No stores match.</p>
            <button
              type="button"
              onClick={() => { setQ(""); setFilter("All"); }}
              className="px-6 py-3 rounded-full bg-slate-950 dark:bg-[#17ff49] text-white dark:text-slate-950 text-sm font-semibold"
            >
              Reset filters
            </button>
          </div>
        )}
      </section>
    </>
  );
}
