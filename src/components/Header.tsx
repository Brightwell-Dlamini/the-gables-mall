"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import ThemeToggle from "./ThemeToggle";
import { images } from "@/lib/assets";

const nav = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/directory", label: "Directory" },
  { href: "/gallery", label: "Gallery" },
  { href: "/events", label: "Events" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? "bg-white/90 dark:bg-slate-950/90 backdrop-blur-md shadow-sm" 
          : "bg-white/70 dark:bg-slate-950/70 backdrop-blur-sm"
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            <Link href="/" className="relative h-10 w-32 lg:h-12 lg:w-40 shrink-0">
              <Image
                src={images.logo}
                alt="The Gables"
                fill
                className="object-contain object-left"
                priority
              />
            </Link>

            <nav className="hidden lg:flex items-center gap-8 text-sm">
              {nav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`transition-colors duration-200 ${
                    pathname === item.href
                      ? "text-[#00b074] dark:text-[#17ff49]"
                      : "text-slate-600 dark:text-slate-300 hover:text-[#00b074] dark:hover:text-[#17ff49]"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
              <ThemeToggle />
              <Link
                href="/contact"
                className="px-5 py-2 rounded-full bg-[#00b074] text-white text-sm hover:bg-[#009a64] transition-colors"
              >
                Lease Space
              </Link>
            </nav>

            <div className="flex items-center gap-1 lg:hidden">
              <ThemeToggle />
              <button
                onClick={() => setOpen(!open)}
                className="p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                aria-label="Menu"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  {open ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>

        {open && (
          <div className="lg:hidden border-t border-slate-200/50 dark:border-slate-800/50 bg-white/95 dark:bg-slate-950/95 backdrop-blur-md px-4 py-3">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`block py-3 text-sm transition-colors ${
                  pathname === item.href
                    ? "text-[#00b074] dark:text-[#17ff49]"
                    : "text-slate-600 dark:text-slate-300 hover:text-[#00b074] dark:hover:text-[#17ff49]"
                }`}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="block w-full text-center mt-3 px-4 py-2.5 rounded-lg bg-[#00b074] text-white text-sm"
            >
              Lease Space
            </Link>
          </div>
        )}
      </header>
      <div className="h-16 lg:h-20" />
    </>
  );
}
