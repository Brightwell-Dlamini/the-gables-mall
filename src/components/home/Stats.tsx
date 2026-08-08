const stats = [
  { value: "24,115 m²", label: "Retail Space" },
  { value: "96+", label: "Tenants" },
  { value: "7 Days", label: "Open Weekly" },
  { value: "Free", label: "Secure Parking" },
];

export default function Stats() {
  return (
    <section className="relative z-10 -mt-10 sm:-mt-14" aria-label="Key statistics">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-px rounded-2xl sm:rounded-3xl overflow-hidden bg-slate-200/60 dark:bg-slate-800/60 shadow-2xl shadow-black/15 dark:shadow-black/50 ring-1 ring-black/5 dark:ring-white/5">
          {stats.map((s) => (
            <div
              key={s.label}
              className="bg-white/95 dark:bg-slate-950/95 backdrop-blur-sm text-center py-6 sm:py-8 px-3 transition-colors hover:bg-white dark:hover:bg-slate-900"
            >
              <p className="text-xl sm:text-2xl md:text-3xl font-bold tracking-tight text-[#00b074] dark:text-[#17ff49]">
                {s.value}
              </p>
              <p className="text-[11px] sm:text-xs uppercase tracking-[0.14em] text-slate-500 dark:text-slate-400 font-medium mt-2">
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
