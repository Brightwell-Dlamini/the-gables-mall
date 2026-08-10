const blocks = [
  {
    title: "General",
    items: ["24,115 m² retail", "96+ tenants", "Open 7 days", "Flexible hours"],
  },
  {
    title: "Retail",
    items: ["Fashion", "Food & dining", "Healthcare", "Home & tech"],
  },
  {
    title: "Business",
    items: ["Banking", "Utilities", "Legal", "Consultations"],
  },
  {
    title: "Safety",
    items: ["Police post", "24hr security", "Free parking", "Easy access"],
  },
];

export default function ServicesFacilities() {
  return (
    <section className="py-28 sm:py-36 bg-slate-50 dark:bg-slate-900" aria-labelledby="services-heading">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
        <div className="mb-16 max-w-xl">
          <p className="text-[#00b074] dark:text-[#17ff49] text-[11px] font-bold tracking-[0.3em] uppercase mb-4">
            Amenities
          </p>
          <h2
            id="services-heading"
            className="text-3xl sm:text-4xl md:text-5xl font-black tracking-[-0.035em] text-slate-900 dark:text-white leading-[1.05]"
          >
            Everything you need.
            <br />
            <span className="text-slate-300 dark:text-slate-600">Nothing you don’t.</span>
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {blocks.map((block, i) => (
            <div
              key={block.title}
              className={`
                p-7 sm:p-8 rounded-3xl transition-all duration-300
                ${i === 0
                  ? "bg-slate-950 text-white dark:bg-[#17ff49] dark:text-slate-950"
                  : "bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 hover:border-slate-400 dark:hover:border-slate-600"
                }
              `}
            >
              <h3 className={`font-bold text-lg mb-5 tracking-tight ${i === 0 ? "" : "text-slate-900 dark:text-white"}`}>
                {block.title}
              </h3>
              <ul className="space-y-2.5">
                {block.items.map((item) => (
                  <li
                    key={item}
                    className={`text-sm ${i === 0 ? "text-white/60 dark:text-slate-800" : "text-slate-500 dark:text-slate-400"}`}
                  >
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
