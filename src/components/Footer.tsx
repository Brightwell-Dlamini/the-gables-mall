import Image from "next/image";
import Link from "next/link";
import { images } from "@/lib/assets";
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Facebook, 
  Instagram, 
  Twitter, 
  Youtube 
} from "lucide-react";

const socialLinks = [
  { href: "#", icon: Facebook, label: "Facebook" },
  { href: "#", icon: Instagram, label: "Instagram" },
  { href: "#", icon: Twitter, label: "Twitter" },
  { href: "#", icon: Youtube, label: "YouTube" },
];

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
                  <Clock className="w-4 h-4 text-[#00b074] dark:text-[#17ff49] mt-0.5 shrink-0" />
                  <div>
                    <p className="text-sm text-slate-600 dark:text-slate-400">
                      <span className="text-slate-900 dark:text-white font-medium">Mon–Sat</span>
                      <br />
                      9:00 – 17:00
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Clock className="w-4 h-4 text-[#00b074] dark:text-[#17ff49] mt-0.5 shrink-0" />
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
                  <MapPin className="w-4 h-4 text-[#00b074] dark:text-[#17ff49] mt-0.5 shrink-0" />
                  <span className="text-sm text-slate-600 dark:text-slate-400">
                    MR103, Ezulwini, Eswatini
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Phone className="w-4 h-4 text-[#00b074] dark:text-[#17ff49] mt-0.5 shrink-0" />
                  <a
                    href="tel:+26824171173"
                    className="text-sm text-slate-600 dark:text-slate-400 hover:text-[#00b074] dark:hover:text-[#17ff49] transition-colors"
                  >
                    +268 2417 1173
                  </a>
                </li>
                <li className="flex items-start gap-3">
                  <Mail className="w-4 h-4 text-[#00b074] dark:text-[#17ff49] mt-0.5 shrink-0" />
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
                        <Icon className="w-4 h-4" />
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
