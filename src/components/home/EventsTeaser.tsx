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
    <section className="py-20 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <p className="text-[#00b074] dark:text-[#17ff49] font-semibold tracking-wider uppercase text-sm mb-3">
              What’s on
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold">Events & news</h2>
          </div>
          <Link
            href="/events"
            className="text-[#00b074] dark:text-[#17ff49] font-semibold hover:underline"
          >
            All events →
          </Link>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {cards.map((card) => (
            <article
              key={card.title}
              className="group rounded-2xl overflow-hidden border border-[var(--border)] bg-[var(--card)] hover:shadow-xl transition-shadow"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src={card.img}
                  alt=""
                  fill
                  sizes="33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
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
  );
}
