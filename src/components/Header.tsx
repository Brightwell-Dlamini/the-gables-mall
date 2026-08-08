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

// Refined, elegant icons with subtle animations
const MenuIcon = () => (
  <svg 
    width="24" 
    height="24" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="1.5" 
    strokeLinecap="round"
    className="transition-transform duration-300"
  >
    <line x1="4" y1="7" x2="20" y2="7" className="origin-center transition-transform duration-300" />
    <line x1="4" y1="12" x2="20" y2="12" className="origin-center transition-transform duration-300" />
    <line x1="4" y1="17" x2="20" y2="17" className="origin-center transition-transform duration-300" />
  </svg>
);

const CloseIcon = () => (
  <svg 
    width="24" 
    height="24" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="1.5" 
    strokeLinecap="round"
    className="transition-transform duration-300 rotate-90"
  >
    <path d="M18 6L6 18" className="transition-all duration-300" />
    <path d="M6 6L18 18" className="transition-all duration-300" />
  </svg>
);

const ArrowRightIcon = () => (
  <svg 
    width="16" 
    height="16" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round"
    className="transition-transform duration-300 group-hover:translate-x-1"
  >
    <path d="M5 12h14" />
    <path d="M12 5l7 7-7 7" />
  </svg>
);

// Decorative accent line
const AccentLine = () => (
  <span className="absolute -bottom-0.5 left-0 w-full h-[2px] bg-gradient-to-r from-[#00b074] via-[#00d4a0] to-[#00b074] bg-[length:200%_100%] animate-shimmer" />
);

export default function Header() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <>
      <header
        className={`
          fixed top-0 left-0 right-0 z-50
          transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]
          ${isScrolled 
            ? "bg-white/85 dark:bg-slate-950/85 backdrop-blur-2xl border-b border-slate-200/10 dark:border-slate-800/10 shadow-[0_8px_40px_rgba(0,0,0,0.06)]" 
            : "bg-transparent"
          }
        `}
      >
        {/* Subtle gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-[72px] lg:h-[88px] relative">
            {/* Logo with refined hover effect */}
            <Link
              href="/"
              className="relative h-10 lg:h-12 w-[140px] lg:w-[180px] shrink-0 group"
            >
              <Image
                src={images.logo}
                alt="The Gables Shopping Centre"
                fill
                className={`object-contain object-left transition-all duration-700 ${
                  isScrolled ? "opacity-100 scale-100" : "opacity-95 scale-[0.98]"
                } group-hover:scale-[1.02]`}
                priority
              />
              <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-gradient-to-r from-[#00b074] to-[#00d4a0] transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:w-full" />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-0.5">
              {nav.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`
                      relative px-5 py-2.5 text-sm font-medium tracking-wide
                      transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]
                      ${isActive
                        ? "text-[#00b074] dark:text-[#17ff49]"
                        : "text-slate-600/90 dark:text-slate-300/90 hover:text-slate-900 dark:hover:text-white"
                      }
                      before:absolute before:inset-0 before:rounded-xl before:transition-all before:duration-500
                      ${isActive 
                        ? "before:bg-emerald-50/60 dark:before:bg-emerald-950/20 before:scale-100" 
                        : "before:bg-slate-100/0 dark:before:bg-slate-800/0 before:scale-95 hover:before:bg-slate-100/50 dark:hover:before:bg-slate-800/30 hover:before:scale-100"
                      }
                    `}
                  >
                    <span className="relative z-10">{item.label}</span>
                    <span className={`
                      absolute bottom-1 left-1/2 -translate-x-1/2 h-0.5 rounded-full
                      bg-gradient-to-r from-[#00b074] to-[#00d4a0]
                      transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]
                      ${isActive ? "w-5 opacity-100" : "w-0 opacity-0 group-hover:w-3 group-hover:opacity-100"}
                    `} />
                  </Link>
                );
              })}
              
              <div className="w-px h-6 bg-gradient-to-b from-transparent via-slate-300/30 dark:via-slate-600/30 to-transparent mx-4" />
              
              <ThemeToggle />
              
              {/* Enhanced CTA button */}
              <Link
                href="/contact"
                className="group relative ml-4 px-7 py-2.5 rounded-full overflow-hidden bg-gradient-to-r from-[#00b074] to-[#00d4a0] text-white text-sm font-medium tracking-wide shadow-lg shadow-emerald-500/20 hover:shadow-2xl hover:shadow-emerald-500/30 transition-all duration-500 hover:scale-[1.02] active:scale-[0.98]"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Lease Space
                  <ArrowRightIcon />
                </span>
                <span className="absolute inset-0 bg-gradient-to-r from-[#00d4a0] to-[#00b074] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <span className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl" />
              </Link>
            </nav>

            {/* Mobile Controls with refined styling */}
            <div className="flex items-center gap-1 lg:hidden">
              <ThemeToggle />
              <button
                onClick={() => setIsOpen(!isOpen)}
                className={`
                  relative w-10 h-10 flex items-center justify-center rounded-full
                  transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]
                  ${isOpen 
                    ? "bg-emerald-50/80 dark:bg-emerald-950/30 text-[#00b074] dark:text-[#17ff49] scale-95" 
                    : "hover:bg-slate-100/80 dark:hover:bg-slate-800/50 text-slate-700 dark:text-slate-300"
                  }
                  hover:scale-105 active:scale-95
                `}
                aria-label="Toggle menu"
                aria-expanded={isOpen}
              >
                {isOpen ? <CloseIcon /> : <MenuIcon />}
              </button>
            </div>
          </div>
        </div>

        {/* Enhanced Mobile Navigation Overlay */}
        <div
          className={`
            lg:hidden fixed inset-0 top-[72px] z-40
            transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]
            ${isOpen 
              ? "opacity-100 pointer-events-auto" 
              : "opacity-0 pointer-events-none"
            }
          `}
          style={{
            background: isOpen 
              ? "rgba(0,0,0,0.3)" 
              : "rgba(0,0,0,0)",
            backdropFilter: isOpen ? "blur(16px)" : "none",
            WebkitBackdropFilter: isOpen ? "blur(16px)" : "none",
          }}
          onClick={() => setIsOpen(false)}
        />

        {/* Refined Mobile Navigation Panel */}
        <div
          className={`
            lg:hidden fixed top-[72px] left-0 right-0 z-50
            transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]
            ${isOpen 
              ? "translate-y-0 opacity-100" 
              : "-translate-y-4 opacity-0 pointer-events-none"
            }
          `}
        >
          <div className="mx-4 p-2 rounded-3xl bg-white/95 dark:bg-slate-950/95 backdrop-blur-2xl border border-slate-200/10 dark:border-slate-800/10 shadow-2xl shadow-black/5">
            <div className="max-h-[calc(100vh-120px)] overflow-y-auto scrollbar-thin scrollbar-thumb-slate-200 dark:scrollbar-thumb-slate-700">
              {nav.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`
                      group relative flex items-center justify-between px-5 py-4 rounded-2xl
                      transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]
                      ${isActive
                        ? "bg-gradient-to-r from-emerald-50/80 to-emerald-50/40 dark:from-emerald-950/30 dark:to-emerald-950/10 text-[#00b074] dark:text-[#17ff49]"
                        : "text-slate-700 dark:text-slate-300 hover:bg-slate-50/80 dark:hover:bg-slate-800/40"
                      }
                      hover:pl-6
                    `}
                  >
                    <span className="font-medium">{item.label}</span>
                    {isActive ? (
                      <span className="w-2 h-2 rounded-full bg-[#00b074] dark:bg-[#17ff49] shadow-lg shadow-emerald-500/30" />
                    ) : (
                      <span className="w-2 h-2 rounded-full bg-slate-200/50 dark:bg-slate-700/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    )}
                  </Link>
                );
              })}
              
              <div className="p-3 mt-1">
                <Link
                  href="/contact"
                  className="flex items-center justify-center gap-2 w-full px-6 py-4 rounded-2xl bg-gradient-to-r from-[#00b074] to-[#00d4a0] text-white font-medium shadow-lg shadow-emerald-500/25 hover:shadow-2xl hover:shadow-emerald-500/30 transition-all duration-500 hover:scale-[1.02] active:scale-[0.98]"
                >
                  Lease Space
                  <ArrowRightIcon />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Spacer with smooth transition */}
      <div className="h-[72px] lg:h-[88px] transition-all duration-700" />
    </>
  );
}
