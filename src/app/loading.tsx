export default function Loading() {
  return (
    <div className="min-h-[50vh] flex items-center justify-center" aria-busy="true" aria-label="Loading">
      <div className="flex flex-col items-center gap-4">
        <div className="w-10 h-10 rounded-full border-2 border-[#00b074]/30 border-t-[#00b074] dark:border-[#17ff49]/30 dark:border-t-[#17ff49] animate-spin" />
        <p className="text-sm text-slate-500 dark:text-slate-400">Loading…</p>
      </div>
    </div>
  );
}
