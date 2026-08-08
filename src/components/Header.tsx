"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

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
        <div className="flex items-center justify-between h-16 md:h-20">
          <Link href="/" className="flex items-center gap-2 shrink-0">
            <img
              src={LOGO}
              alt="The Gables Shopping Centre"
              className="h-10 md:h-12 w-auto object-contain"
            />
          </Link>

          <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`transition-colors hover:text-[#00b074] ${
                  pathname === item.href ? "text-[#00b074] font-semibold" : "text-slate-700"
                }`}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="px-5 py-2.5 rounded-full gradient-green text-white shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all"
            >
              Lease Space
            </Link>
          </nav>

          <button
            className="md:hidden p-2 rounded-lg hover:bg-[#e5f3e8]"
            onClick={() => setOpen(!open)}
            aria-label="Menu"
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

      {open && (
        <div className="md:hidden border-t border-[#d1e7d9] bg-white/95 px-4 py-4 space-y-1">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="block py-2.5 px-3 rounded-lg text-sm font-medium hover:bg-[#e5f3e8] hover:text-[#00b074]"
              onClick={() => setOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
