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
      <section className="relative h-[40vh] min-h-[280px] flex items-end">
        <Image
          src={images.exterior}
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover"
          quality={75}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-black/30" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 w-full">
          <p className="text-[#17ff49] font-semibold tracking-wider uppercase text-sm mb-2">
            What’s on
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-white">Events & News</h1>
        </div>
      </section>

      <section className="py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10">
          {eventsList.map((ev, i) => (
            <article
              key={ev.title}
              className={`grid md:grid-cols-2 gap-6 md:gap-10 items-center ${
                i % 2 === 1 ? "md:[&>*:first-child]:order-2" : ""
              }`}
            >
              <div className="relative aspect-[16/10] rounded-2xl overflow-hidden shadow-xl border border-[var(--border)]">
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
                <p className="text-[#00b074] dark:text-[#17ff49] text-sm font-semibold mb-2">
                  {ev.date}
                </p>
                <h2 className="text-2xl sm:text-3xl font-bold mb-4">{ev.title}</h2>
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-lg">
                  {ev.body}
                </p>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-20 text-center rounded-3xl gradient-green p-10 sm:p-14 text-white">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">Host an event with us</h2>
          <p className="text-white/90 mb-8 max-w-lg mx-auto">
            Activations, pop-ups and community gatherings — talk to centre management.
          </p>
          <Link
            href="/contact"
            className="inline-block px-8 py-3.5 bg-white text-[#00b074] font-bold rounded-full hover:bg-slate-100 transition-colors"
          >
            Contact management
          </Link>
        </div>
      </section>
    </>
  );
}
