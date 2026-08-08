import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Page Not Found",
  description: "The page you are looking for could not be found at The Gables Shopping Centre.",
};

export default function NotFound() {
  return (
    <section className="min-h-[70vh] flex items-center justify-center px-4 py-24">
      <div className="text-center max-w-lg">
        <p className="text-[#00b074] dark:text-[#17ff49] font-semibold tracking-wider uppercase text-sm mb-3">
          404
        </p>
        <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white mb-4">
          Page not found
        </h1>
        <p className="text-slate-600 dark:text-slate-400 mb-10 leading-relaxed">
          The page you are looking for doesn’t exist or may have moved.
          Let’s get you back to shopping at The Gables.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <Link
            href="/"
            className="inline-flex px-8 py-3.5 rounded-full bg-[#00b074] hover:bg-[#009a62] text-white font-semibold transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-[#17ff49] focus-visible:ring-offset-2"
          >
            Back to Home
          </Link>
          <Link
            href="/directory"
            className="inline-flex px-8 py-3.5 rounded-full border-2 border-[#00b074] dark:border-[#17ff49] text-[#00b074] dark:text-[#17ff49] font-semibold hover:bg-[#00b074] hover:text-white dark:hover:bg-[#17ff49] dark:hover:text-slate-900 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-[#00b074] dark:focus-visible:ring-[#17ff49]"
          >
            Store Directory
          </Link>
        </div>
      </div>
    </section>
  );
}
