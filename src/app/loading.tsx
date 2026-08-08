export default function Loading() {
  return (
    <div
      className="min-h-[55vh] flex items-center justify-center"
      aria-busy="true"
      aria-label="Loading"
    >
      <div className="flex flex-col items-center gap-5">
        <div className="relative w-11 h-11">
          <div className="absolute inset-0 rounded-full border-2 border-[#00b074]/20 dark:border-[#17ff49]/20" />
          <div className="absolute inset-0 rounded-full border-2 border-transparent border-t-[#00b074] dark:border-t-[#17ff49] animate-spin" />
        </div>
        <p className="text-sm text-slate-500 dark:text-slate-400 tracking-wide font-light">
          Loading…
        </p>
      </div>
    </div>
  );
}
