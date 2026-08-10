import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Page Not Found",
  description: "The page you are looking for could not be found at The Gables Shopping Centre.",
};

export default function NotFound() {
  return (
    <section className="min-h-[70vh] flex items-center justify-center px-5 py-28">
      <div className="text-center max-w-md">
        <p className="text-[#00b074] dark:text-[#17ff49] font-medium tracking-[0.28em] uppercase text-[11px] sm:text-xs mb-5">
          404
        </p>
        <h1 className="text-4xl sm:text-5xl font-bold tracking-[-0.03em] text-slate-900 dark:text-white mb-5">
          Page not found
        </h1>
        <p className="text-slate-600 dark:text-slate-400 mb-12 leading-relaxed font-light text-lg">
          The page you are looking for doesn&apos;t exist or may have moved.
          Let&apos;s get you back to shopping at The Gables.
        </p>
        <div className="flex flex-wrap gap-3.5 justify-center">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-[#00b074] hover:bg-[#009a62] text-white font-semibold transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#17ff49] focus-visible:ring-offset-2"
          >
            Back to Home
            <span aria-hidden>→</span>
          </Link>
          <Link
            href="/directory"
            className="inline-flex px-8 py-3.5 rounded-full border border-[#00b074]/50 dark:border-[#17ff49]/50 text-[#00b074] dark:text-[#17ff49] font-semibold hover:bg-[#00b074] hover:text-white dark:hover:bg-[#17ff49] dark:hover:text-slate-950 transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#00b074] dark:focus-visible:ring-[#17ff49]"
          >
            Store Directory
          </Link>
        </div>
      </div>
    </section>
  );
}
