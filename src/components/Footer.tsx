import Image from "next/image";
import Link from "next/link";
import { images } from "@/lib/assets";

// SVG Icons
const MapPinIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
);

const PhoneIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
  </svg>
);

const MailIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
  </svg>
);

const ClockIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

const FacebookIcon = () => (
  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
  </svg>
);

const InstagramIcon = () => (
  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
  </svg>
);

const TwitterIcon = () => (
  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
  </svg>
);

const YoutubeIcon = () => (
  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
    <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
  </svg>
);

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/directory", label: "Directory" },
  { href: "/gallery", label: "Gallery" },
  { href: "/events", label: "Events" },
  { href: "/contact", label: "Contact" },
];

const socialLinks = [
  { href: "#", icon: FacebookIcon, label: "Facebook" },
  { href: "#", icon: InstagramIcon, label: "Instagram" },
  { href: "#", icon: TwitterIcon, label: "Twitter" },
  { href: "#", icon: YoutubeIcon, label: "YouTube" },
];

export default function Footer() {
  return (
    <footer className="bg-slate-50 dark:bg-slate-950 border-t border-slate-200/50 dark:border-slate-800/50">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-12 md:py-16 lg:py-20">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
            {/* Brand Column */}
            <div className="space-y-4">
              <Link href="/" className="inline-block hover:opacity-80 transition-opacity">
                <Image
                  src={images.logo}
                  alt="The Gables Shopping Centre"
                  width={160}
                  height={48}
                  className="h-12 w-auto dark:brightness-0 dark:invert"
                  loading="lazy"
                />
              </Link>
              <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed max-w-xs">
                Premier shopping destination in Ezulwini, Kingdom of Eswatini.
              </p>
              <Image
                src={images.cbreLogo}
                alt="CBRE Excellerate"
                width={120}
                height={36}
                className="h-9 w-auto opacity-70 dark:brightness-0 dark:invert"
                loading="lazy"
              />
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-slate-900 dark:text-white font-semibold text-sm uppercase tracking-wider mb-4">
                Quick Links
              </h4>
              <ul className="space-y-2.5">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-slate-600 dark:text-slate-400 hover:text-[#00b074] dark:hover:text-[#17ff49] transition-colors duration-200"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Opening Hours */}
            <div>
              <h4 className="text-slate-900 dark:text-white font-semibold text-sm uppercase tracking-wider mb-4">
                Opening Hours
              </h4>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-[#00b074] dark:text-[#17ff49] mt-0.5 shrink-0">
                    <ClockIcon />
                  </span>
                  <div>
                    <p className="text-sm text-slate-600 dark:text-slate-400">
                      <span className="text-slate-900 dark:text-white font-medium">Mon–Sat</span>
                      <br />
                      9:00 – 17:00
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#00b074] dark:text-[#17ff49] mt-0.5 shrink-0">
                    <ClockIcon />
                  </span>
                  <div>
                    <p className="text-sm text-slate-600 dark:text-slate-400">
                      <span className="text-slate-900 dark:text-white font-medium">Sun & Holidays</span>
                      <br />
                      9:00 – 15:00
                    </p>
                  </div>
                </li>
              </ul>
            </div>

            {/* Contact & Social */}
            <div>
              <h4 className="text-slate-900 dark:text-white font-semibold text-sm uppercase tracking-wider mb-4">
                Get in Touch
              </h4>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-[#00b074] dark:text-[#17ff49] mt-0.5 shrink-0">
                    <MapPinIcon />
                  </span>
                  <span className="text-sm text-slate-600 dark:text-slate-400">
                    MR103, Ezulwini, Eswatini
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#00b074] dark:text-[#17ff49] mt-0.5 shrink-0">
                    <PhoneIcon />
                  </span>
                  <a
                    href="tel:+26824171173"
                    className="text-sm text-slate-600 dark:text-slate-400 hover:text-[#00b074] dark:hover:text-[#17ff49] transition-colors"
                  >
                    +268 2417 1173
                  </a>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#00b074] dark:text-[#17ff49] mt-0.5 shrink-0">
                    <MailIcon />
                  </span>
                  <a
                    href="mailto:info@thegables.co.sz"
                    className="text-sm text-slate-600 dark:text-slate-400 hover:text-[#00b074] dark:hover:text-[#17ff49] transition-colors"
                  >
                    info@thegables.co.sz
                  </a>
                </li>
              </ul>

              {/* Social Links */}
              <div className="mt-6">
                <div className="flex items-center gap-3">
                  {socialLinks.map((social) => {
                    const Icon = social.icon;
                    return (
                      <a
                        key={social.label}
                        href={social.href}
                        aria-label={social.label}
                        className="p-2 rounded-full bg-slate-200/50 dark:bg-slate-800/50 text-slate-600 dark:text-slate-400 hover:bg-[#00b074] hover:text-white dark:hover:bg-[#17ff49] dark:hover:text-slate-950 transition-all duration-200 hover:scale-110"
                      >
                        <Icon />
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-200/50 dark:border-slate-800/50 py-6 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-slate-500 dark:text-slate-400 text-center sm:text-left">
            © {new Date().getFullYear()} The Gables™. All rights reserved.
          </p>
          <p className="text-sm text-slate-500 dark:text-slate-400 text-center sm:text-right">
            Designed with{" "}
            <span className="text-[#00b074] dark:text-[#17ff49]">❤</span> by{" "}
            <a
              href="https://www.sm3-creative.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#00b074] dark:text-[#17ff49] hover:underline font-medium transition-colors"
            >
              SM3 Creative
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
