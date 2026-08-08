import Image from "next/image";
import Link from "next/link";
import { images } from "@/lib/assets";

// Elegant SVG Icons
const MapPinIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);

const PhoneIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
  </svg>
);

const MailIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
    <polyline points="22,6 12,13 2,6" />
  </svg>
);

const ClockIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" />
    <polyline points="12 6 12 12 16 14" />
  </svg>
);

const FacebookIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
  </svg>
);

const InstagramIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
  </svg>
);

const TwitterIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
  </svg>
);

const YoutubeIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
  </svg>
);

const ArrowUpRightIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M7 7h10v10" />
    <path d="M7 17L17 7" />
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
    <footer className="relative bg-gradient-to-b from-white to-slate-50/80 dark:from-slate-950 dark:to-slate-900/80 border-t border-slate-200/20 dark:border-slate-800/20">
      {/* Decorative gradient line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#00b074]/20 dark:via-[#17ff49]/20 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="py-16 lg:py-24">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
            {/* Brand Column */}
            <div className="space-y-6">
              <Link href="/" className="inline-block group">
                <Image
                  src={images.logo}
                  alt="The Gables Shopping Centre"
                  width={160}
                  height={48}
                  className="h-12 w-auto dark:brightness-0 dark:invert transition-all duration-300 group-hover:opacity-80"
                  loading="lazy"
                />
              </Link>
              <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed max-w-xs">
                Premier shopping destination in Ezulwini, Kingdom of Eswatini.
              </p>
              <div className="pt-2">
                <Image
                  src={images.cbreLogo}
                  alt="CBRE Excellerate"
                  width={120}
                  height={36}
                  className="h-9 w-auto opacity-60 dark:brightness-0 dark:invert transition-opacity hover:opacity-100"
                  loading="lazy"
                />
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-slate-900 dark:text-white font-semibold text-xs uppercase tracking-[0.15em] mb-6">
                Quick Links
              </h4>
              <ul className="space-y-3">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="group flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400 hover:text-[#00b074] dark:hover:text-[#17ff49] transition-colors duration-200"
                    >
                      <ArrowUpRightIcon />
                      <span>{link.label}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Opening Hours */}
            <div>
              <h4 className="text-slate-900 dark:text-white font-semibold text-xs uppercase tracking-[0.15em] mb-6">
                Opening Hours
              </h4>
              <ul className="space-y-4">
                <li className="flex items-start gap-4">
                  <div className="mt-0.5 text-[#00b074] dark:text-[#17ff49]">
                    <ClockIcon />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-slate-900 dark:text-white">Monday – Saturday</p>
                    <p className="text-sm text-slate-600 dark:text-slate-400">9:00 AM – 5:00 PM</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="mt-0.5 text-[#00b074] dark:text-[#17ff49]">
                    <ClockIcon />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-slate-900 dark:text-white">Sunday & Holidays</p>
                    <p className="text-sm text-slate-600 dark:text-slate-400">9:00 AM – 3:00 PM</p>
                  </div>
                </li>
              </ul>
            </div>

            {/* Contact & Social */}
            <div>
              <h4 className="text-slate-900 dark:text-white font-semibold text-xs uppercase tracking-[0.15em] mb-6">
                Get in Touch
              </h4>
              <ul className="space-y-4">
                <li className="flex items-start gap-4">
                  <div className="mt-0.5 text-[#00b074] dark:text-[#17ff49]">
                    <MapPinIcon />
                  </div>
                  <span className="text-sm text-slate-600 dark:text-slate-400">
                    MR103, Ezulwini, Eswatini
                  </span>
                </li>
                <li className="flex items-start gap-4">
                  <div className="mt-0.5 text-[#00b074] dark:text-[#17ff49]">
                    <PhoneIcon />
                  </div>
                  <a
                    href="tel:+26824171173"
                    className="text-sm text-slate-600 dark:text-slate-400 hover:text-[#00b074] dark:hover:text-[#17ff49] transition-colors"
                  >
                    +268 2417 1173
                  </a>
                </li>
                <li className="flex items-start gap-4">
                  <div className="mt-0.5 text-[#00b074] dark:text-[#17ff49]">
                    <MailIcon />
                  </div>
                  <a
                    href="mailto:info@thegables.co.sz"
                    className="text-sm text-slate-600 dark:text-slate-400 hover:text-[#00b074] dark:hover:text-[#17ff49] transition-colors"
                  >
                    info@thegables.co.sz
                  </a>
                </li>
              </ul>

              {/* Social Links */}
              <div className="mt-8">
                <div className="flex items-center gap-2">
                  {socialLinks.map((social) => {
                    const Icon = social.icon;
                    return (
                      <a
                        key={social.label}
                        href={social.href}
                        aria-label={social.label}
                        className="p-2.5 rounded-full bg-slate-100 dark:bg-slate-800/50 text-slate-600 dark:text-slate-400 hover:bg-[#00b074] hover:text-white dark:hover:bg-[#17ff49] dark:hover:text-slate-950 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-[#00b074]/20"
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
        <div className="border-t border-slate-200/20 dark:border-slate-800/20 py-6 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-slate-500 dark:text-slate-500 tracking-wide">
            © {new Date().getFullYear()} The Gables™. All rights reserved.
          </p>
          <p className="text-xs text-slate-500 dark:text-slate-500 tracking-wide">
            Designed with{" "}
            <span className="text-[#00b074] dark:text-[#17ff49]">♥</span> by{" "}
            <a
              href="https://www.sm3-creative.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-700 dark:text-slate-300 hover:text-[#00b074] dark:hover:text-[#17ff49] font-medium transition-colors"
            >
              SM3 Creative
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
