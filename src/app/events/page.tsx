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
      <section className="pt-28 sm:pt-36 pb-12 bg-slate-950 text-white">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
          <p className="text-[#17ff49] text-[11px] font-semibold tracking-[0.3em] uppercase mb-4">
            What’s on
          </p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-[-0.04em] leading-[1.05] max-w-xl">
            Events &
            <br />
            News
          </h1>
        </div>
      </section>

      <section className="py-16 sm:py-24 max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
        <div className="space-y-16 sm:space-y-24">
          {eventsList.map((ev, i) => (
            <article
              key={ev.title}
              className={`grid md:grid-cols-2 gap-8 md:gap-14 items-center ${
                i % 2 === 1 ? "md:[&>*:first-child]:order-2" : ""
              }`}
            >
              <div className="relative aspect-[16/10] rounded-3xl overflow-hidden">
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
                <p className="text-[#00b074] dark:text-[#17ff49] text-xs font-semibold tracking-widest uppercase mb-3">
                  {ev.date}
                </p>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-[-0.03em] text-slate-900 dark:text-white mb-4 leading-tight">
                  {ev.title}
                </h2>
                <p className="text-slate-600 dark:text-slate-400 text-lg font-light leading-relaxed">
                  {ev.body}
                </p>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-24 sm:mt-32 rounded-3xl bg-slate-950 text-white p-12 sm:p-16 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-[-0.03em] mb-4">
            Host an event with us
          </h2>
          <p className="text-white/50 mb-10 max-w-md mx-auto font-light">
            Activations, pop-ups and community gatherings — talk to centre management.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-9 py-4 bg-[#17ff49] text-slate-950 font-bold rounded-full hover:bg-white transition-colors"
          >
            Contact management
            <span aria-hidden>→</span>
          </Link>
        </div>
      </section>
    </>
  );
}
