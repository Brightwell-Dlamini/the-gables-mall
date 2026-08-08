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
    <section className="py-24 sm:py-32 bg-white dark:bg-slate-950" aria-labelledby="services-heading">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
        <div className="text-center mb-14">
          <p className="inline-flex items-center gap-2 text-[#00b074] dark:text-[#17ff49] font-medium tracking-[0.22em] uppercase text-[11px] sm:text-xs mb-4">
            <span className="w-6 h-px bg-current opacity-70" aria-hidden />
            Amenities
            <span className="w-6 h-px bg-current opacity-70" aria-hidden />
          </p>
          <h2
            id="services-heading"
            className="text-3xl sm:text-4xl font-bold tracking-[-0.03em] text-slate-900 dark:text-white"
          >
            Services & Facilities
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {blocks.map((block) => (
            <div
              key={block.title}
              className="group p-6 sm:p-7 rounded-2xl sm:rounded-3xl bg-slate-50/80 dark:bg-slate-900/60 border border-slate-200/80 dark:border-slate-800 hover:border-[#00b074]/30 dark:hover:border-[#17ff49]/30 transition-all duration-300 hover:shadow-xl hover:shadow-black/5 dark:hover:shadow-black/30 hover:-translate-y-0.5"
            >
              <h3 className="font-semibold text-base sm:text-lg mb-4 text-[#00b074] dark:text-[#17ff49] tracking-tight">
                {block.title}
              </h3>
              <ul className="space-y-2.5">
                {block.items.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2.5 text-sm text-slate-600 dark:text-slate-300"
                  >
                    <span
                      className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#00b074] dark:bg-[#17ff49] shrink-0 opacity-80"
                      aria-hidden
                    />
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
