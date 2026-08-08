const stats = [
  { value: "24,115 m²", label: "Retail Space" },
  { value: "96+", label: "Tenants" },
  { value: "7 Days", label: "Open Weekly" },
  { value: "Free", label: "Secure Parking" },
];

export default function Stats() {
  return (
    <section className="relative z-10 -mt-8 sm:-mt-12" aria-label="Key statistics">
      <div className="max-w-5xl mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 rounded-2xl bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 shadow-xl shadow-black/10 dark:shadow-black/40 p-4 sm:p-6">
          {stats.map((s) => (
            <div key={s.label} className="text-center py-2">
              <p className="text-xl sm:text-2xl md:text-3xl font-bold text-[#00b074] dark:text-[#17ff49]">
                {s.value}
              </p>
              <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-400 font-medium mt-1">
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
