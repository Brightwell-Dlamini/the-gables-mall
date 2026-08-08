"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import ThemeToggle from "./ThemeToggle";
import { images } from "@/lib/assets";
import { Menu, X } from "lucide-react";

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
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <header
      className={`
        fixed top-0 left-0 right-0 z-50 
        transition-all duration-300 ease-in-out
        ${isScrolled 
          ? "bg-white/95 dark:bg-slate-950/95 backdrop-blur-md shadow-lg" 
          : "bg-white/80 dark:bg-slate-950/80 backdrop-blur-sm"
        }
      `}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link
            href="/"
            className="relative h-10 md:h-12 w-28 md:w-36 shrink-0 hover:opacity-80 transition-opacity"
          >
            <Image
              src={images.logo}
              alt="The Gables Shopping Centre"
              fill
              sizes="(max-width: 640px) 112px, 144px"
              className="object-contain object-left"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {nav.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`
                    relative px-3 xl:px-4 py-2 rounded-lg text-sm font-medium
                    transition-all duration-200 ease-in-out
                    ${isActive
                      ? "text-[#00b074] dark:text-[#17ff49]"
                      : "text-slate-700 dark:text-slate-300 hover:text-[#00b074] dark:hover:text-[#17ff49] hover:bg-emerald-50/50 dark:hover:bg-emerald-950/30"
                    }
                  `}
                >
                  {item.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-6 h-0.5 bg-[#00b074] dark:bg-[#17ff49] rounded-full" />
                  )}
                </Link>
              );
            })}
            
            <div className="w-px h-6 bg-slate-200 dark:bg-slate-700 mx-2" />
            
            <ThemeToggle />
            
            <Link
              href="/contact"
              className="ml-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-[#00b074] to-[#00d4a0] text-white text-sm font-medium shadow-md hover:shadow-lg hover:scale-105 transition-all duration-200 ease-in-out"
            >
              Lease Space
            </Link>
          </nav>

          {/* Mobile Controls */}
          <div className="flex items-center gap-2 lg:hidden">
            <ThemeToggle />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              aria-label="Toggle menu"
              aria-expanded={isOpen}
            >
              {isOpen ? (
                <X className="w-6 h-6 text-slate-700 dark:text-slate-300" />
              ) : (
                <Menu className="w-6 h-6 text-slate-700 dark:text-slate-300" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`
          lg:hidden overflow-hidden transition-all duration-300 ease-in-out
          ${isOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"}
        `}
      >
        <div className="border-t border-slate-200/50 dark:border-slate-800/50 bg-white/95 dark:bg-slate-950/95 backdrop-blur-md px-4 py-3">
          <div className="space-y-1 max-h-[calc(100vh-8rem)] overflow-y-auto">
            {nav.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`
                    block px-4 py-3 rounded-lg text-base font-medium
                    transition-all duration-200 ease-in-out
                    ${isActive
                      ? "bg-emerald-50 dark:bg-emerald-950/30 text-[#00b074] dark:text-[#17ff49]"
                      : "text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800/50 hover:text-[#00b074] dark:hover:text-[#17ff49]"
                    }
                  `}
                >
                  {item.label}
                </Link>
              );
            })}
            
            <div className="pt-3 mt-3 border-t border-slate-200/50 dark:border-slate-800/50">
              <Link
                href="/contact"
                className="block w-full text-center px-4 py-3 rounded-lg bg-gradient-to-r from-[#00b074] to-[#00d4a0] text-white font-medium shadow-md hover:shadow-lg transition-all"
              >
                Lease Space
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
