const stats = [
  { value: "96+", label: "Tenants", sub: "Local & international" },
  { value: "24k", label: "m² retail", sub: "Spacious centre" },
  { value: "Free", label: "Parking", sub: "Secure & on-site" },
  { value: "7", label: "Days open", sub: "Every week" },
];

export default function Stats() {
  return (
    <section className="relative z-10 -mt-8 sm:-mt-12 px-5 sm:px-8" aria-label="Key statistics">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
          {stats.map((s, i) => (
            <div
              key={s.label}
              className={`
                relative overflow-hidden rounded-2xl p-5 sm:p-7
                border border-slate-200/80 dark:border-slate-800
                bg-white dark:bg-slate-950
                shadow-xl shadow-black/5 dark:shadow-black/40
                ${i === 0 ? "lg:col-span-1 ring-1 ring-[#00b074]/20 dark:ring-[#17ff49]/15" : ""}
              `}
            >
              <p className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white mb-1">
                {s.value}
              </p>
              <p className="text-sm font-semibold text-[#00b074] dark:text-[#17ff49] mb-0.5">
                {s.label}
              </p>
              <p className="text-xs text-slate-500 dark:text-slate-400 font-light">
                {s.sub}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
