import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { images } from "@/lib/assets";

export const metadata: Metadata = {
  title: "Events",
  description: "Events, promotions and news at The Gables Shopping Centre, Ezulwini.",
};

const eventsList = [
  {
    title: "Solar Initiative — Coming Soon",
    date: "Ongoing",
    body: "Rooftop solar panels are being prepared for installation — a major step toward cleaner energy for The Gables and Eswatini.",
    img: images.banner01,
  },
  {
    title: "School & Tour Excursions",
    date: "Year-round",
    body: "We welcome school groups and tour buses. Experience shopping, dining and cinema in one memorable stop.",
    img: images.banner02,
  },
  {
    title: "Seasonal Centre Promotions",
    date: "Seasonal",
    body: "From spring campaigns to holiday markets, follow our social channels and in-centre screens for the latest offers.",
    img: images.banner03,
  },
  {
    title: "Movie Zone Screenings",
    date: "Weekly",
    body: "Catch the latest films at Movie Zone inside The Gables — perfect for families and date nights.",
    img: images.banner04,
  },
];

export default function EventsPage() {
  return (
    <>
      <section className="relative h-[42vh] min-h-[300px] flex items-end overflow-hidden" aria-label="Events hero">
        <Image
          src={images.exterior}
          alt="The Gables Shopping Centre exterior"
          fill
          priority
          sizes="100vw"
          className="object-cover scale-105"
          quality={80}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-black/20" />
        <div className="relative max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 pb-14 w-full">
          <p className="text-[#17ff49] font-medium tracking-[0.22em] uppercase text-[11px] sm:text-xs mb-3">
            What’s on
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-white tracking-[-0.03em]">Events & News</h1>
        </div>
      </section>

      <section className="py-20 sm:py-28 max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
        <div className="grid gap-14 sm:gap-16">
          {eventsList.map((ev, i) => (
            <article
              key={ev.title}
              className={`grid md:grid-cols-2 gap-8 md:gap-12 items-center ${
                i % 2 === 1 ? "md:[&>*:first-child]:order-2" : ""
              }`}
            >
              <div className="relative aspect-[16/10] rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl shadow-black/10 dark:shadow-black/40 border border-slate-200/50 dark:border-slate-800 ring-1 ring-black/5 dark:ring-white/5">
                <Image
                  src={ev.img}
                  alt=""
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                  loading="lazy"
                />
              </div>
              <div>
                <p className="text-[#00b074] dark:text-[#17ff49] text-sm font-semibold mb-3 tracking-wide">
                  {ev.date}
                </p>
                <h2 className="text-2xl sm:text-3xl font-bold mb-5 tracking-[-0.02em] text-slate-900 dark:text-white leading-tight">
                  {ev.title}
                </h2>
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-lg font-light">
                  {ev.body}
                </p>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-24 text-center rounded-3xl gradient-green p-12 sm:p-16 text-white shadow-2xl shadow-emerald-500/20">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4 tracking-tight">Host an event with us</h2>
          <p className="text-white/90 mb-10 max-w-md mx-auto font-light leading-relaxed">
            Activations, pop-ups and community gatherings — talk to centre management.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-9 py-4 bg-white text-[#00b074] font-bold rounded-full hover:bg-slate-50 transition-all duration-300 shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#00b074]"
          >
            Contact management
            <span aria-hidden>→</span>
          </Link>
        </div>
      </section>
    </>
  );
}
