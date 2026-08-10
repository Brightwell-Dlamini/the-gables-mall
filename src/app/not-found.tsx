import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Page Not Found",
  description: "The page you are looking for could not be found at The Gables Shopping Centre.",
};

export default function NotFound() {
  return (
    <section className="min-h-[75vh] flex items-center justify-center px-5 py-28 bg-slate-950 text-white">
      <div className="text-center max-w-lg">
        <p className="text-[clamp(5rem,15vw,9rem)] font-black leading-none tracking-tighter text-white/5 mb-2 select-none" aria-hidden>
          404
        </p>
        <h1 className="text-3xl sm:text-4xl font-bold tracking-[-0.03em] mb-4 -mt-8 relative">
          Page not found
        </h1>
        <p className="text-white/40 mb-12 font-light leading-relaxed">
          This page doesn&apos;t exist or may have moved.
          Let&apos;s get you back.
        </p>
        <div className="flex flex-wrap gap-3 justify-center">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-[#17ff49] text-slate-950 font-bold text-sm hover:bg-white transition-colors"
          >
            Back to Home →
          </Link>
          <Link
            href="/directory"
            className="inline-flex px-8 py-3.5 rounded-full border border-white/20 text-white font-medium text-sm hover:bg-white/10 transition-colors"
          >
            Store Directory
          </Link>
        </div>
      </div>
    </section>
  );
}
