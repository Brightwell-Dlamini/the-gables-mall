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
  <svg 
    width="24" 
    height="24" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round"
  >
    <line x1="4" y1="7" x2="20" y2="7" />
    <line x1="4" y1="12" x2="20" y2="12" />
    <line x1="4" y1="17" x2="20" y2="17" />
  </svg>
);

const CloseIcon = () => (
  <svg 
    width="24" 
    height="24" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round"
  >
    <path d="M18 6L6 18" />
    <path d="M6 6L18 18" />
  </svg>
);

const ArrowRightIcon = () => (
  <svg 
    width="16" 
    height="16" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2.5" 
    strokeLinecap="round" 
    strokeLinejoin="round"
    className="transition-transform duration-300 group-hover:translate-x-1"
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
          transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]
          ${isScrolled 
            ? "bg-white dark:bg-slate-950 border-b border-slate-200 dark:border-slate-800 shadow-sm dark:shadow-none" 
            : "bg-white/80 dark:bg-slate-950/80 backdrop-blur-md"
          }
        `}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-[72px] lg:h-[88px]">
            {/* Logo */}
            <Link
              href="/"
              className="relative h-10 lg:h-12 w-[140px] lg:w-[180px] shrink-0"
            >
              <Image
                src={images.logo}
                alt="The Gables Shopping Centre"
                fill
                className="object-contain object-left"
                priority
              />
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
                      relative px-5 py-2.5 text-sm font-medium tracking-wide rounded-lg
                      transition-all duration-300
                      ${isActive
                        ? "text-[#00b074] dark:text-[#17ff49] bg-emerald-50/80 dark:bg-emerald-950/30"
                        : "text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800/50"
                      }
                    `}
                  >
                    {item.label}
                  </Link>
                );
              })}
              
              <div className="w-px h-6 bg-slate-200 dark:bg-slate-700 mx-3" />
              
              <ThemeToggle />
              
              <Link
                href="/contact"
                className="group relative ml-3 px-6 py-2.5 rounded-full bg-[#00b074] hover:bg-[#009a62] dark:bg-[#00b074] dark:hover:bg-[#009a62] text-white text-sm font-medium transition-all duration-300 shadow-md hover:shadow-lg"
              >
                <span className="flex items-center gap-2">
                  Lease Space
                  <ArrowRightIcon />
                </span>
              </Link>
            </nav>

            {/* Mobile Controls */}
            <div className="flex items-center gap-2 lg:hidden">
              <ThemeToggle />
              <button
                onClick={() => setIsOpen(!isOpen)}
                className={`
                  w-10 h-10 flex items-center justify-center rounded-lg
                  transition-all duration-300
                  ${isOpen 
                    ? "bg-emerald-50 dark:bg-emerald-950/30 text-[#00b074] dark:text-[#17ff49]" 
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

        {/* Mobile Overlay */}
        <div
          className={`
            lg:hidden fixed inset-0 top-[72px] z-40
            transition-all duration-300
            ${isOpen 
              ? "opacity-100 pointer-events-auto bg-black/30 dark:bg-black/50" 
              : "opacity-0 pointer-events-none"
            }
          `}
          onClick={() => setIsOpen(false)}
        />

        {/* Mobile Menu */}
        <div
          className={`
            lg:hidden fixed top-[72px] left-0 right-0 z-50
            transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]
            ${isOpen 
              ? "translate-y-0 opacity-100" 
              : "-translate-y-4 opacity-0 pointer-events-none"
            }
          `}
        >
          <div className="mx-4 p-3 bg-white dark:bg-slate-950 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-xl">
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
                      ${isActive
                        ? "bg-emerald-50 dark:bg-emerald-950/30 text-[#00b074] dark:text-[#17ff49]"
                        : "text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800/50"
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
              
              <div className="p-2 mt-2 border-t border-slate-200 dark:border-slate-800">
                <Link
                  href="/contact"
                  className="flex items-center justify-center gap-2 w-full px-6 py-3.5 rounded-xl bg-[#00b074] hover:bg-[#009a62] dark:bg-[#00b074] dark:hover:bg-[#009a62] text-white font-medium transition-colors"
                >
                  Lease Space
                  <ArrowRightIcon />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="h-[72px] lg:h-[88px]" />
    </>
  );
}
