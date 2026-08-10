const stats = [
  { value: "96+", label: "Tenants" },
  { value: "24k", label: "m² retail" },
  { value: "Free", label: "Parking" },
  { value: "7", label: "Days open" },
];

export default function Stats() {
  return (
    <section className="relative z-10 -mt-10 sm:-mt-14 px-5 sm:px-8" aria-label="Key statistics">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-px bg-slate-200 dark:bg-slate-800 rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl shadow-black/20 dark:shadow-black/60">
          {stats.map((s) => (
            <div
              key={s.label}
              className="bg-white dark:bg-slate-950 py-8 sm:py-10 px-4 text-center"
            >
              <p className="text-3xl sm:text-4xl font-black tracking-tight text-slate-900 dark:text-white">
                {s.value}
              </p>
              <p className="text-[11px] uppercase tracking-[0.2em] text-slate-400 dark:text-slate-500 mt-2 font-medium">
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
