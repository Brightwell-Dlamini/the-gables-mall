const blocks = [
  {
    title: "General Info",
    items: ["24,115 m² retail space", "96+ tenants", "Open 7 days", "09:00 – 17:00 (varies)"],
  },
  {
    title: "Retail",
    items: ["Fashion", "Food & Dining", "Healthcare", "Homeware & Tech"],
  },
  {
    title: "Business",
    items: ["Banking", "Utilities", "Legal services", "Consultations"],
  },
  {
    title: "Safety & Convenience",
    items: ["On-site Police Post", "24hr Security", "Secure free parking", "Easy access"],
  },
];

export default function ServicesFacilities() {
  return (
    <section className="py-20 sm:py-28 bg-white dark:bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-[#00b074] dark:text-[#17ff49] font-semibold tracking-wider uppercase text-sm mb-3">
            Amenities
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white">
            Services & Facilities
          </h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {blocks.map((block) => (
            <div
              key={block.title}
              className="p-5 sm:p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-md transition-shadow"
            >
              <h3 className="font-semibold text-base sm:text-lg mb-3 sm:mb-4 text-[#00b074] dark:text-[#17ff49]">
                {block.title}
              </h3>
              <ul className="space-y-2">
                {block.items.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2 text-sm text-slate-700 dark:text-slate-300"
                  >
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#00b074] dark:bg-[#17ff49] shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
