"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import ThemeToggle from "./ThemeToggle";

const nav = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/directory", label: "Directory" },
  { href: "/contact", label: "Contact" },
];

const LOGO =
  "https://raw.githubusercontent.com/Brightwell-Dlamini/thegables-new/main/img/the-gables-logo.png";

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14 sm:h-16 md:h-20">
          <Link
            href="/"
            className="relative h-9 sm:h-10 md:h-12 w-24 sm:w-28 md:w-36 shrink-0"
          >
            <Image
              src={LOGO}
              alt="The Gables Shopping Centre"
              fill
              sizes="(max-width: 640px) 96px, 144px"
              className="object-contain object-left"
              priority
            />
          </Link>

          <nav className="hidden md:flex items-center gap-6 lg:gap-8 text-sm font-medium">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`transition-colors hover:text-[#00b074] dark:hover:text-[#17ff49] ${
                  pathname === item.href
                    ? "text-[#00b074] dark:text-[#17ff49] font-semibold"
                    : "text-slate-700 dark:text-slate-200"
                }`}
              >
                {item.label}
              </Link>
            ))}
            <ThemeToggle />
            <Link
              href="/contact"
              className="px-4 lg:px-5 py-2 lg:py-2.5 rounded-full gradient-green text-white text-sm shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all"
            >
              Lease Space
            </Link>
          </nav>

          <div className="flex items-center gap-1 md:hidden">
            <ThemeToggle />
            <button
              className="p-2 rounded-lg hover:bg-[#e5f3e8] dark:hover:bg-[#14532d]"
              onClick={() => setOpen(!open)}
              aria-label="Menu"
              aria-expanded={open}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {open ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-[var(--border)] bg-[var(--card)]/95 px-4 py-4 space-y-1">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="block py-2.5 px-3 rounded-lg text-sm font-medium hover:bg-[#e5f3e8] dark:hover:bg-[#14532d] hover:text-[#00b074] dark:hover:text-[#17ff49]"
              onClick={() => setOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="block py-2.5 px-3 rounded-lg text-sm font-medium text-[#00b074] dark:text-[#17ff49]"
            onClick={() => setOpen(false)}
          >
            Lease Space
          </Link>
        </div>
      )}
    </header>
  );
}
