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

// Elegant SVG Icons
const MenuIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
    <line x1="4" y1="7" x2="20" y2="7" />
    <line x1="4" y1="12" x2="20" y2="12" />
    <line x1="4" y1="17" x2="20" y2="17" />
  </svg>
);

const CloseIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
    <path d="M18 6L6 18" />
    <path d="M6 6L18 18" />
  </svg>
);

const ArrowRightIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 12h14" />
    <path d="M12 5l7 7-7 7" />
  </svg>
);

export default function Header() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
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
          transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]
          ${isScrolled 
            ? "bg-white/90 dark:bg-slate-950/90 backdrop-blur-xl border-b border-slate-200/20 dark:border-slate-800/20 shadow-[0_8px_32px_rgba(0,0,0,0.08)]" 
            : "bg-transparent"
          }
        `}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-[72px] lg:h-[88px]">
            {/* Logo */}
            <Link
              href="/"
              className="relative h-10 lg:h-12 w-[140px] lg:w-[180px] shrink-0 group"
            >
              <Image
                src={images.logo}
                alt="The Gables Shopping Centre"
                fill
                className={`object-contain object-left transition-all duration-500 ${
                  isScrolled ? "opacity-100" : "opacity-90"
                }`}
                priority
              />
              <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-gradient-to-r from-[#00b074] to-[#00d4a0] transition-all duration-300 group-hover:w-full" />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1">
              {nav.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`
                      relative px-4 py-2.5 text-sm font-medium tracking-wide
                      transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]
                      ${isActive
                        ? "text-[#00b074] dark:text-[#17ff49]"
                        : "text-slate-700/80 dark:text-slate-300/80 hover:text-slate-900 dark:hover:text-white"
                      }
                    `}
                  >
                    <span className="relative z-10">{item.label}</span>
                    {isActive && (
                      <span className="absolute inset-0 bg-emerald-50/50 dark:bg-emerald-950/30 rounded-lg -z-0" />
                    )}
                    <span className={`
                      absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 rounded-full
                      bg-gradient-to-r from-[#00b074] to-[#00d4a0]
                      transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]
                      ${isActive ? "w-6" : "w-0 group-hover:w-4"}
                    `} />
                  </Link>
                );
              })}
              
              <div className="w-px h-8 bg-slate-200/50 dark:bg-slate-700/50 mx-3" />
              
              <ThemeToggle />
              
              <Link
                href="/contact"
                className="group relative ml-3 px-6 py-2.5 rounded-full overflow-hidden bg-gradient-to-r from-[#00b074] to-[#00d4a0] text-white text-sm font-medium tracking-wide shadow-lg shadow-emerald-500/25 hover:shadow-xl hover:shadow-emerald-500/30 transition-all duration-300"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Lease Space
                  <ArrowRightIcon />
                </span>
                <span className="absolute inset-0 bg-gradient-to-r from-[#00d4a0] to-[#00b074] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </Link>
            </nav>

            {/* Mobile Controls */}
            <div className="flex items-center gap-2 lg:hidden">
              <ThemeToggle />
              <button
                onClick={() => setIsOpen(!isOpen)}
                className={`
                  relative w-10 h-10 flex items-center justify-center rounded-full
                  transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]
                  ${isOpen 
                    ? "bg-emerald-50 dark:bg-emerald-950/30 text-[#00b074] dark:text-[#17ff49]" 
                    : "hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300"
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

        {/* Mobile Navigation Overlay */}
        <div
          className={`
            lg:hidden fixed inset-0 top-[72px] z-40
            transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]
            ${isOpen 
              ? "opacity-100 pointer-events-auto" 
              : "opacity-0 pointer-events-none"
            }
          `}
          style={{
            background: isOpen 
              ? "rgba(0,0,0,0.4)" 
              : "rgba(0,0,0,0)",
            backdropFilter: isOpen ? "blur(12px)" : "none",
          }}
          onClick={() => setIsOpen(false)}
        />

        {/* Mobile Navigation Panel */}
        <div
          className={`
            lg:hidden fixed top-[72px] left-0 right-0 z-50
            transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]
            ${isOpen 
              ? "translate-y-0 opacity-100" 
              : "-translate-y-8 opacity-0 pointer-events-none"
            }
          `}
        >
          <div className="mx-4 p-2 rounded-2xl bg-white/95 dark:bg-slate-950/95 backdrop-blur-xl border border-slate-200/20 dark:border-slate-800/20 shadow-2xl">
            <div className="max-h-[calc(100vh-120px)] overflow-y-auto">
              {nav.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`
                      group flex items-center justify-between px-4 py-3.5 rounded-xl
                      transition-all duration-200 ease-[cubic-bezier(0.22,1,0.36,1)]
                      ${isActive
                        ? "bg-emerald-50 dark:bg-emerald-950/30 text-[#00b074] dark:text-[#17ff49]"
                        : "text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800/50"
                      }
                    `}
                  >
                    <span className="font-medium">{item.label}</span>
                    {isActive && (
                      <span className="w-1.5 h-1.5 rounded-full bg-[#00b074] dark:bg-[#17ff49]" />
                    )}
                  </Link>
                );
              })}
              
              <div className="p-2 mt-1">
                <Link
                  href="/contact"
                  className="flex items-center justify-center gap-2 w-full px-6 py-3.5 rounded-xl bg-gradient-to-r from-[#00b074] to-[#00d4a0] text-white font-medium shadow-lg shadow-emerald-500/25 hover:shadow-xl hover:shadow-emerald-500/30 transition-all duration-300"
                >
                  Lease Space
                  <ArrowRightIcon />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Spacer to prevent content from hiding under fixed header */}
      <div className="h-[72px] lg:h-[88px]" />
    </>
  );
}
