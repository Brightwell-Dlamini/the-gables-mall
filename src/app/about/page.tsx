import type { Metadata } from "next";
import Image from "next/image";
import { images } from "@/lib/assets";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about The Gables Shopping Centre in Ezulwini — Dutch-style architecture, 96+ stores, free parking, and CBRE Excellerate property management.",
  openGraph: {
    title: "About The Gables Shopping Centre",
    description: "Value and convenience shopping in the heart of Shebas Rocks, Ezulwini, Eswatini.",
  },
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
      <section className="relative h-72 md:h-96 flex items-center justify-center overflow-hidden">
        <Image
          src={images.entrance}
          alt="The Gables Shopping Centre entrance"
          fill
          priority
          sizes="100vw"
          className="object-cover scale-105"
          quality={80}
        />
        <div className="absolute inset-0 bg-black/55" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
        <div className="relative text-center px-5">
          <p className="text-[#17ff49] font-medium tracking-[0.22em] uppercase text-[11px] sm:text-xs mb-3">
            Our story
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-white tracking-[-0.03em]">About Us</h1>
        </div>
      </section>

      <section className="py-20 sm:py-28 max-w-3xl mx-auto px-5 sm:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-10 tracking-[-0.03em] bg-clip-text text-transparent gradient-green">
          Welcome to The Gables
        </h2>
        <div className="space-y-5 text-slate-600 dark:text-slate-300 leading-relaxed text-lg font-light">
          <p>
            The Gables Shopping Centre is a retail and office development, situated in a superb,
            convenient location, close to two national parks. The centre is in close proximity to
            Mbabane, Matsapha and Manzini and is well connected with public transport and plenty of
            accommodation options in the vicinity.
          </p>
          <p>
            The Gables Shopping Centre is a value and convenience inspired shopping destination
            located in the heart of Shebas Rocks, Ezulwini in The Kingdom of Eswatini. Home to a
            variety of well-known convenient stores, restaurants, a cinema, banks and a variety of
            retail stores to make shopping more memorable!
          </p>
          <p>
            The Gables Shopping Centre offers free and secure parking to shoppers with a total area
            of 24,115.31 m² retail space and is home to over 96 stores. In addition to a vast array
            of local and international brands, the Shopping Centre has uniquely identified court
            areas that make easy shopping navigation, as well as exceptional access, location, and
            visibility. The architectural aspects of the Shopping Centre of choice demonstrate the
            Dutch Style architecture that sets the mood.
          </p>
          <p>
            With big brands in our corridors like Clicks, Pick n Pay, Woolworths, and Shoprite, you
            can be sure that shopping at The Gables is everything you can expect and more.
          </p>
        </div>
      </section>

      <section className="py-16 bg-slate-50/80 dark:bg-[#0f1a14]/60">
        <div className="max-w-3xl mx-auto px-5 text-center">
          <h2 className="text-2xl font-bold mb-6 tracking-tight text-slate-900 dark:text-white">
            Property Management
          </h2>
          <Image
            src={images.cbreLogo}
            alt="CBRE Excellerate"
            width={160}
            height={48}
            className="h-12 w-auto mx-auto mb-5 dark:brightness-0 dark:invert opacity-80"
          />
          <p className="text-slate-600 dark:text-slate-300 max-w-xl mx-auto font-light leading-relaxed">
            We are the market leader in commercial real estate services and investments.
            With services, insights and data that span every dimension of the industry,
            we create solutions for clients of every size across Africa & the Middle East.
          </p>
        </div>
      </section>

      <section className="py-20 sm:py-28 max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
        <div className="text-center mb-14">
          <p className="inline-flex items-center gap-2 text-[#00b074] dark:text-[#17ff49] font-medium tracking-[0.22em] uppercase text-[11px] sm:text-xs mb-4">
            <span className="w-6 h-px bg-current opacity-70" aria-hidden />
            Team
            <span className="w-6 h-px bg-current opacity-70" aria-hidden />
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-[-0.03em] text-slate-900 dark:text-white">
            Meet Our Team
          </h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {team.map((m) => (
            <div
              key={m.name}
              className="bg-white dark:bg-slate-950 rounded-2xl sm:rounded-3xl p-7 border border-slate-200/80 dark:border-slate-800 text-center shadow-sm hover:shadow-xl hover:shadow-black/5 dark:hover:shadow-black/30 transition-all duration-300 hover:-translate-y-0.5"
            >
              <div className="w-20 h-20 rounded-full gradient-green mx-auto mb-5 flex items-center justify-center text-white text-xl font-bold shadow-lg shadow-emerald-500/20">
                {m.name.split(" ").map((n) => n[0]).join("")}
              </div>
              <h3 className="font-semibold text-lg text-slate-900 dark:text-white tracking-tight">{m.name}</h3>
              <p className="text-sm text-[#00b074] dark:text-[#17ff49] mb-3">{m.role}</p>
              <a
                href={`mailto:${m.email}`}
                className="text-xs text-slate-500 dark:text-slate-400 hover:text-[#00b074] dark:hover:text-[#17ff49] break-all transition-colors"
              >
                {m.email}
              </a>
              {m.phone && (
                <p className="text-sm text-slate-500 dark:text-slate-400 mt-1.5">{m.phone}</p>
              )}
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
