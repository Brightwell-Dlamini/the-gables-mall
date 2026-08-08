import Image from "next/image";
import Link from "next/link";
import { images } from "@/lib/assets";

const cards = [
  {
    img: images.banner01,
    title: "Solar Initiative",
    body: "Rooftop solar is coming — cleaner energy for Eswatini.",
    tag: "Ongoing",
  },
  {
    img: images.banner02,
    title: "School Excursions",
    body: "We welcome schools and tour groups. Book your visit.",
    tag: "Year-round",
  },
  {
    img: images.banner03,
    title: "Centre Promotions",
    body: "Seasonal campaigns and tenant offers throughout the year.",
    tag: "Seasonal",
  },
];

export default function EventsTeaser() {
  return (
    <section className="py-24 sm:py-36 bg-white dark:bg-slate-950" aria-labelledby="events-teaser-heading">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
        <div className="mb-14 sm:mb-16 max-w-2xl">
          <p className="text-[#00b074] dark:text-[#17ff49] text-[11px] font-semibold tracking-[0.3em] uppercase mb-4">
            What’s on
          </p>
          <h2
            id="events-teaser-heading"
            className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-[-0.03em] text-slate-900 dark:text-white leading-tight"
          >
            Events that pull
            <br />
            the centre together.
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-5 sm:gap-6">
          {cards.map((card, i) => (
            <article
              key={card.title}
              className={`group relative rounded-3xl overflow-hidden bg-slate-100 dark:bg-slate-900 ${i === 0 ? "md:row-span-1" : ""}`}
            >
              <div className="relative aspect-[4/5] overflow-hidden">
                <Image
                  src={card.img}
                  alt=""
                  fill
                  sizes="33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-7">
                  <span className="inline-block text-[10px] font-semibold tracking-widest uppercase text-[#17ff49] mb-2">
                    {card.tag}
                  </span>
                  <h3 className="text-xl font-bold text-white mb-1.5 tracking-tight">
                    {card.title}
                  </h3>
                  <p className="text-sm text-white/60 leading-relaxed">
                    {card.body}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/events"
            className="group inline-flex items-center gap-2 text-slate-900 dark:text-white font-semibold border-b-2 border-[#00b074] dark:border-[#17ff49] pb-1 hover:gap-3 transition-all"
          >
            View all events
            <span className="text-[#00b074] dark:text-[#17ff49]" aria-hidden>
              →
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
