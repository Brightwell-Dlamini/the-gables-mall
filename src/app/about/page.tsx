import type { Metadata } from "next";
import Image from "next/image";
import { images } from "@/lib/assets";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about The Gables Shopping Centre in Ezulwini — Dutch-style architecture, 96+ stores, free parking, and CBRE Excellerate property management.",
};

const team = [
  { name: "Carol-Lee Payne", role: "Property Manager", email: "Carol-Lee.Payne@cbreexcellerate.com", phone: "+268 7649 9589" },
  { name: "Livingstone Dlamini", role: "Operations Manager", email: "Livingston.Dlamini@cbreexcellerate.com", phone: "" },
  { name: "Nhlanhla Dlamini", role: "Accountant", email: "nhlanhla.dlamini@cbreexcellerate.com", phone: "+268 7649 9215" },
  { name: "Tengetile Matsenjwa", role: "Property Administrator", email: "tengetile.m@cbreexcellerate.com", phone: "" },
];

export default function AboutPage() {
  return (
    <>
      <section className="relative min-h-[50vh] sm:min-h-[60vh] flex items-end overflow-hidden">
        <Image
          src={images.entrance}
          alt="The Gables entrance"
          fill
          priority
          sizes="100vw"
          className="object-cover"
          quality={85}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-black/20" />
        <div className="relative max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 pb-16 sm:pb-20 w-full">
          <p className="text-[#17ff49] text-[11px] font-semibold tracking-[0.3em] uppercase mb-4">
            Our story
          </p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white tracking-[-0.04em] leading-[1.05] max-w-xl">
            Dutch design.
            <br />
            African soul.
          </h1>
        </div>
      </section>

      <section className="py-20 sm:py-28 max-w-3xl mx-auto px-5 sm:px-8">
        <div className="space-y-6 text-slate-600 dark:text-slate-300 text-lg leading-relaxed font-light">
          <p>
            The Gables Shopping Centre is a retail and office development in a superb location close to two national parks — well connected to Mbabane, Matsapha and Manzini.
          </p>
          <p>
            A value and convenience destination in the heart of Shebas Rocks, Ezulwini. Home to well-known stores, restaurants, a cinema, banks and retail that make shopping memorable.
          </p>
          <p>
            Free secure parking, 24,115 m² of retail space, and over 96 stores. Dutch-style architecture sets the mood — with anchors like Clicks, Pick n Pay, Woolworths and Shoprite.
          </p>
        </div>
      </section>

      <section className="py-16 bg-slate-950 text-white">
        <div className="max-w-3xl mx-auto px-5 text-center">
          <p className="text-[#17ff49] text-[11px] font-semibold tracking-[0.3em] uppercase mb-4">
            Management
          </p>
          <Image
            src={images.cbreLogo}
            alt="CBRE Excellerate"
            width={140}
            height={42}
            className="h-10 w-auto mx-auto mb-5 brightness-0 invert opacity-80"
          />
          <p className="text-white/50 font-light leading-relaxed max-w-lg mx-auto">
            Market leader in commercial real estate services across Africa & the Middle East.
          </p>
        </div>
      </section>

      <section className="py-20 sm:py-28 max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
        <p className="text-[#00b074] dark:text-[#17ff49] text-[11px] font-semibold tracking-[0.3em] uppercase mb-4 text-center">
          Team
        </p>
        <h2 className="text-3xl sm:text-4xl font-bold tracking-[-0.03em] text-center text-slate-900 dark:text-white mb-14">
          Meet the people behind the centre
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {team.map((m) => (
            <div
              key={m.name}
              className="bg-slate-50 dark:bg-slate-900 rounded-3xl p-7 border border-slate-200 dark:border-slate-800 text-center"
            >
              <div className="w-16 h-16 rounded-full bg-slate-950 dark:bg-[#17ff49] mx-auto mb-5 flex items-center justify-center text-white dark:text-slate-950 text-lg font-bold">
                {m.name.split(" ").map((n) => n[0]).join("")}
              </div>
              <h3 className="font-semibold text-slate-900 dark:text-white">{m.name}</h3>
              <p className="text-sm text-[#00b074] dark:text-[#17ff49] mb-3">{m.role}</p>
              <a href={`mailto:${m.email}`} className="text-xs text-slate-500 hover:text-[#00b074] dark:hover:text-[#17ff49] break-all">
                {m.email}
              </a>
              {m.phone && <p className="text-sm text-slate-500 mt-1">{m.phone}</p>}
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
