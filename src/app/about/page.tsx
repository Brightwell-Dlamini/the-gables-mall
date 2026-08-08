import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about The Gables Shopping Centre in Ezulwini — Dutch-style architecture, 96+ stores, free parking, and CBRE Excellerate property management.",
  openGraph: {
    title: "About The Gables Shopping Centre",
    description: "Value and convenience shopping in the heart of Shebas Rocks, Ezulwini, Eswatini.",
  },
};

const ENTRANCE =
  "https://raw.githubusercontent.com/Brightwell-Dlamini/thegables-new/main/img/thegables-entrance.jpg";
const CBRE =
  "https://raw.githubusercontent.com/Brightwell-Dlamini/thegables-new/main/img/cbre-logo.png";

const team = [
  { name: "Carol-Lee Payne", role: "Property Manager", email: "Carol-Lee.Payne@cbreexcellerate.com", phone: "+268 7649 9589" },
  { name: "Livingstone Dlamini", role: "Operations Manager", email: "Livingston.Dlamini@cbreexcellerate.com", phone: "" },
  { name: "Nhlanhla Dlamini", role: "Accountant", email: "nhlanhla.dlamini@cbreexcellerate.com", phone: "+268 7649 9215" },
  { name: "Tengetile Matsenjwa", role: "Property Administrator", email: "tengetile.m@cbreexcellerate.com", phone: "" },
];

export default function AboutPage() {
  return (
    <>
      <section className="relative h-64 md:h-80 flex items-center justify-center">
        <Image
          src={ENTRANCE}
          alt="The Gables entrance"
          fill
          priority
          sizes="100vw"
          className="object-cover"
          quality={70}
        />
        <div className="absolute inset-0 bg-black/50" />
        <h1 className="relative text-4xl md:text-5xl font-bold text-white tracking-tight">About Us</h1>
      </section>

      <section className="py-16 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-8 bg-clip-text text-transparent gradient-green">
          Welcome to The Gables Shopping Center
        </h2>
        <div className="space-y-4 text-slate-600 leading-relaxed">
          <p>
            The Gables Shopping Center is a retail and office development, situated in a superb,
            convenient location, close to two national parks. The center is in close proximity to
            Mbabane, Matsapha and Manzini and is well connected with public transport and plenty of
            accommodation options in the vicinity.
          </p>
          <p>
            The Gables Shopping Center is a value and convenience inspired shopping destination
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

      <section className="py-12 bg-[#e5f3e8]/50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold mb-4">Property Management</h2>
          <Image src={CBRE} alt="CBRE Excellerate" width={160} height={48} className="h-12 w-auto mx-auto mb-4" />
          <p className="text-slate-600 max-w-2xl mx-auto">
            We are the market leader in commercial real estate services and investments.
            With services, insights and data that span every dimension of the industry,
            we create solutions for clients of every size across Africa & the Middle East.
          </p>
        </div>
      </section>

      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">Meet Our Team</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((m) => (
            <div key={m.name} className="bg-white rounded-2xl p-6 border border-[#d1e7d9] text-center shadow-sm">
              <div className="w-20 h-20 rounded-full gradient-green mx-auto mb-4 flex items-center justify-center text-white text-2xl font-bold">
                {m.name.split(" ").map((n) => n[0]).join("")}
              </div>
              <h3 className="font-semibold text-lg">{m.name}</h3>
              <p className="text-sm text-[#00b074] mb-2">{m.role}</p>
              <a href={`mailto:${m.email}`} className="text-xs text-slate-500 hover:text-[#00b074] break-all">
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
