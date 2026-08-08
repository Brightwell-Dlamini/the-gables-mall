import Image from "next/image";
import Link from "next/link";
import { images } from "@/lib/assets";

const cards = [
  {
    img: images.banner01,
    title: "Solar Initiative",
    body: "Rooftop solar is coming — cleaner energy for Eswatini.",
  },
  {
    img: images.banner02,
    title: "School Excursions",
    body: "We welcome schools and tour groups. Book your visit.",
  },
  {
    img: images.banner03,
    title: "Centre Promotions",
    body: "Seasonal campaigns and tenant offers throughout the year.",
  },
];

export default function EventsTeaser() {
  return (
    <section className="py-24 sm:py-32 bg-white dark:bg-slate-950" aria-labelledby="events-teaser-heading">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div>
            <p className="inline-flex items-center gap-2 text-[#00b074] dark:text-[#17ff49] font-medium tracking-[0.22em] uppercase text-[11px] sm:text-xs mb-4">
              <span className="w-6 h-px bg-current opacity-70" aria-hidden />
              What’s on
            </p>
            <h2
              id="events-teaser-heading"
              className="text-3xl sm:text-4xl font-bold tracking-[-0.03em] text-slate-900 dark:text-white"
            >
              Events & news
            </h2>
          </div>
          <Link
            href="/events"
            className="group inline-flex items-center gap-2 text-[#00b074] dark:text-[#17ff49] font-semibold text-[15px] hover:gap-3 transition-all focus:outline-none focus-visible:underline"
          >
            All events
            <span className="transition-transform duration-300 group-hover:translate-x-0.5" aria-hidden>
              →
            </span>
          </Link>
        </div>

        <div className="grid md:grid-cols-3 gap-5 sm:gap-6">
          {cards.map((card) => (
            <article
              key={card.title}
              className="group rounded-2xl sm:rounded-3xl overflow-hidden border border-slate-200/80 dark:border-slate-800 bg-white dark:bg-slate-950 hover:shadow-2xl hover:shadow-black/5 dark:hover:shadow-black/40 transition-all duration-500 hover:-translate-y-1"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src={card.img}
                  alt=""
                  fill
                  sizes="33vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div className="p-6 sm:p-7">
                <h3 className="font-semibold text-lg mb-2 text-slate-900 dark:text-white tracking-tight">
                  {card.title}
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  {card.body}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
