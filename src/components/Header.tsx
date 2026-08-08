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

const MenuIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
    <line x1="4" y1="7" x2="20" y2="7" />
    <line x1="4" y1="12" x2="20" y2="12" />
    <line x1="4" y1="17" x2="20" y2="17" />
  </svg>
);

const CloseIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
    <path d="M18 6L6 18" />
    <path d="M6 6L18 18" />
  </svg>
);

const ArrowRightIcon = () => (
  <svg
    width="15"
    height="15"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="transition-transform duration-300 group-hover:translate-x-0.5"
  >
    <path d="M5 12h14" />
    <path d="M12 5l7 7-7 7" />
  </svg>
);

export default function Header() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 16);
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
          fixed top-0 left-0 right-0 z-50
          transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]
          ${
            isScrolled
              ? "bg-white/90 dark:bg-slate-950/90 backdrop-blur-xl border-b border-slate-200/60 dark:border-slate-800/60 shadow-sm shadow-black/5"
              : "bg-white/70 dark:bg-slate-950/70 backdrop-blur-md"
          }
        `}
      >
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
          <div className="flex items-center justify-between h-[72px] lg:h-[84px]">
            <Link
              href="/"
              className="relative h-9 lg:h-11 w-[130px] lg:w-[170px] shrink-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#00b074] dark:focus-visible:ring-[#17ff49] rounded"
            >
              <Image
                src={images.logo}
                alt="The Gables Shopping Centre"
                fill
                className="object-contain object-left"
                priority
              />
            </Link>

            <nav className="hidden lg:flex items-center gap-0.5" aria-label="Main">
              {nav.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`
                      px-4 py-2 text-[13px] font-medium rounded-lg tracking-wide
                      transition-all duration-200
                      focus:outline-none focus-visible:ring-2 focus-visible:ring-[#00b074] dark:focus-visible:ring-[#17ff49]
                      ${
                        isActive
                          ? "text-[#00b074] dark:text-[#17ff49] bg-emerald-50/80 dark:bg-emerald-950/40"
                          : "text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100/80 dark:hover:bg-slate-800/50"
                      }
                    `}
                  >
                    {item.label}
                  </Link>
                );
              })}

              <div className="w-px h-5 bg-slate-200 dark:bg-slate-700 mx-3" aria-hidden />

              <ThemeToggle />

              <Link
                href="/contact"
                className="group ml-3 px-5 py-2.5 rounded-full bg-[#00b074] hover:bg-[#009a62] text-white text-[13px] font-semibold transition-all duration-300 shadow-md shadow-emerald-500/20 hover:shadow-lg hover:shadow-emerald-500/30 flex items-center gap-1.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#17ff49] focus-visible:ring-offset-2"
              >
                Lease Space
                <ArrowRightIcon />
              </Link>
            </nav>

            <div className="flex items-center gap-1.5 lg:hidden">
              <ThemeToggle />
              <button
                onClick={() => setIsOpen(!isOpen)}
                className={`
                  w-10 h-10 flex items-center justify-center rounded-xl
                  transition-all duration-200
                  focus:outline-none focus-visible:ring-2 focus-visible:ring-[#00b074] dark:focus-visible:ring-[#17ff49]
                  ${
                    isOpen
                      ? "bg-emerald-50 dark:bg-emerald-950/40 text-[#00b074] dark:text-[#17ff49]"
                      : "text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800"
                  }
                `}
                aria-label="Toggle menu"
                aria-expanded={isOpen}
              >
                {isOpen ? <CloseIcon /> : <MenuIcon />}
              </button>
            </div>
          </div>
        </div>

        <div
          className={`
            lg:hidden fixed inset-0 top-[72px] z-40
            transition-all duration-300
            ${
              isOpen
                ? "opacity-100 pointer-events-auto bg-black/40 dark:bg-black/60 backdrop-blur-sm"
                : "opacity-0 pointer-events-none"
            }
          `}
          onClick={() => setIsOpen(false)}
          aria-hidden
        />

        <div
          className={`
            lg:hidden fixed top-[72px] left-0 right-0 z-50
            transition-all duration-350 ease-[cubic-bezier(0.22,1,0.36,1)]
            ${
              isOpen
                ? "translate-y-0 opacity-100"
                : "-translate-y-3 opacity-0 pointer-events-none"
            }
          `}
        >
          <div className="mx-4 p-2.5 bg-white/95 dark:bg-slate-950/95 backdrop-blur-xl rounded-2xl border border-slate-200/80 dark:border-slate-800 shadow-2xl shadow-black/10">
            <div className="max-h-[calc(100vh-120px)] overflow-y-auto">
              {nav.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`
                      flex items-center justify-between px-4 py-3.5 rounded-xl
                      transition-all duration-200
                      focus:outline-none focus-visible:ring-2 focus-visible:ring-[#00b074] dark:focus-visible:ring-[#17ff49]
                      ${
                        isActive
                          ? "bg-emerald-50 dark:bg-emerald-950/40 text-[#00b074] dark:text-[#17ff49]"
                          : "text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800/60"
                      }
                    `}
                  >
                    <span className="font-medium text-[15px]">{item.label}</span>
                    {isActive && (
                      <span className="w-1.5 h-1.5 rounded-full bg-[#00b074] dark:bg-[#17ff49]" />
                    )}
                  </Link>
                );
              })}

              <div className="p-2 mt-1.5 border-t border-slate-200/80 dark:border-slate-800">
                <Link
                  href="/contact"
                  className="flex items-center justify-center gap-2 w-full px-6 py-3.5 rounded-xl bg-[#00b074] hover:bg-[#009a62] text-white font-semibold transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#17ff49]"
                >
                  Lease Space
                  <ArrowRightIcon />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="h-[72px] lg:h-[84px]" />
    </>
  );
}
