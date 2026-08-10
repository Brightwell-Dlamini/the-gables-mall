import Image from "next/image";
import Link from "next/link";
import { images } from "@/lib/assets";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/directory", label: "Directory" },
  { href: "/gallery", label: "Gallery" },
  { href: "/events", label: "Events" },
  { href: "/contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-white">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
        {/* Top band */}
        <div className="py-16 sm:py-20 grid grid-cols-1 md:grid-cols-12 gap-12 border-b border-white/10">
          <div className="md:col-span-5">
            <Link href="/" className="inline-block mb-6">
              <Image
                src={images.logo}
                alt="The Gables"
                width={150}
                height={44}
                className="h-11 w-auto brightness-0 invert"
                loading="lazy"
              />
            </Link>
            <p className="text-white/40 text-sm leading-relaxed max-w-xs font-light mb-8">
              Premier shopping destination in Ezulwini, Kingdom of Eswatini.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#17ff49] text-slate-950 font-bold text-sm hover:bg-white transition-colors"
            >
              Lease space →
            </Link>
          </div>

          <div className="md:col-span-2">
            <p className="text-[11px] font-semibold tracking-[0.2em] uppercase text-white/30 mb-5">Navigate</p>
            <ul className="space-y-2.5">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-sm text-white/60 hover:text-[#17ff49] transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-2">
            <p className="text-[11px] font-semibold tracking-[0.2em] uppercase text-white/30 mb-5">Hours</p>
            <ul className="space-y-3 text-sm text-white/60">
              <li>
                <span className="text-white block">Mon – Sat</span>
                9:00 – 17:00
              </li>
              <li>
                <span className="text-white block">Sun & Holidays</span>
                9:00 – 15:00
              </li>
            </ul>
          </div>

          <div className="md:col-span-3">
            <p className="text-[11px] font-semibold tracking-[0.2em] uppercase text-white/30 mb-5">Visit</p>
            <ul className="space-y-3 text-sm text-white/60">
              <li>MR103, Ezulwini, Eswatini</li>
              <li>
                <a href="tel:+26824171173" className="hover:text-[#17ff49] transition-colors">
                  +268 2417 1173
                </a>
              </li>
              <li>
                <a href="mailto:info@thegables.co.sz" className="hover:text-[#17ff49] transition-colors">
                  info@thegables.co.sz
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="py-6 flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="text-xs text-white/30">
            © {new Date().getFullYear()} The Gables™. All rights reserved.
          </p>
          <p className="text-xs text-white/30">
            Designed with <span className="text-[#17ff49]">♥</span> by{" "}
            <a href="https://www.sm3-creative.com" target="_blank" rel="noopener noreferrer" className="text-white/50 hover:text-[#17ff49] transition-colors">
              SM3 Creative
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
