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
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 12);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <>
      <header
        className={`
          fixed top-0 left-0 right-0 z-50 transition-all duration-400
          ${
            isScrolled
              ? "bg-white/95 dark:bg-slate-950/95 backdrop-blur-xl border-b border-slate-200/50 dark:border-slate-800/50 shadow-sm"
              : "bg-transparent"
          }
        `}
      >
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
          <div className="flex items-center justify-between h-16 sm:h-20">
            <Link href="/" className="relative h-8 sm:h-9 w-[120px] sm:w-[150px] shrink-0">
              <Image
                src={images.logo}
                alt="The Gables"
                fill
                className={`object-contain object-left transition-all ${
                  !isScrolled && pathname === "/" ? "brightness-0 invert" : ""
                } dark:brightness-0 dark:invert`}
                priority
              />
            </Link>

            <nav className="hidden lg:flex items-center gap-1" aria-label="Main">
              {nav.map((item) => {
                const isActive = pathname === item.href;
                const lightOnHero = !isScrolled && pathname === "/";
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`
                      px-3.5 py-2 text-[13px] font-medium rounded-lg transition-colors
                      ${
                        isActive
                          ? lightOnHero
                            ? "text-[#17ff49]"
                            : "text-[#00b074] dark:text-[#17ff49]"
                          : lightOnHero
                            ? "text-white/80 hover:text-white"
                            : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
                      }
                    `}
                  >
                    {item.label}
                  </Link>
                );
              })}
              <div className="w-px h-4 bg-slate-300 dark:bg-slate-700 mx-2" />
              <ThemeToggle />
              <Link
                href="/contact"
                className="ml-2 px-5 py-2 rounded-full bg-[#17ff49] text-slate-950 text-[13px] font-bold hover:bg-white transition-colors"
              >
                Lease
              </Link>
            </nav>

            <div className="flex items-center gap-1 lg:hidden">
              <ThemeToggle />
              <button
                onClick={() => setIsOpen(!isOpen)}
                className={`w-10 h-10 flex items-center justify-center rounded-xl ${
                  !isScrolled && pathname === "/" ? "text-white" : "text-slate-800 dark:text-slate-200"
                }`}
                aria-label="Menu"
                aria-expanded={isOpen}
              >
                {isOpen ? (
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M18 6L6 18M6 6l12 12" />
                  </svg>
                ) : (
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M4 7h16M4 12h16M4 17h16" />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        {isOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-white dark:bg-slate-950 border-b border-slate-200 dark:border-slate-800 shadow-xl">
            <div className="px-4 py-3 space-y-1">
              {nav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`block px-4 py-3 rounded-xl font-medium ${
                    pathname === item.href
                      ? "bg-slate-100 dark:bg-slate-900 text-[#00b074] dark:text-[#17ff49]"
                      : "text-slate-700 dark:text-slate-300"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
              <Link
                href="/contact"
                className="block mx-1 mt-2 px-4 py-3.5 rounded-xl bg-[#17ff49] text-slate-950 font-bold text-center"
              >
                Lease Space
              </Link>
            </div>
          </div>
        )}
      </header>

      {/* Spacer only when not on home (hero is full-bleed) */}
      {pathname !== "/" && <div className="h-16 sm:h-20" />}
    </>
  );
}
