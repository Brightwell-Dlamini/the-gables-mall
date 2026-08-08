import Image from "next/image";
import Link from "next/link";
import { images } from "@/lib/assets";

export default function Footer() {
  return (
    <footer className="bg-white dark:bg-slate-950 text-slate-600 dark:text-slate-300 border-t border-[var(--border)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          <div className="col-span-2 md:col-span-1">
            <Image
              src={images.logo}
              alt="The Gables"
              width={140}
              height={48}
              className="h-10 sm:h-12 w-auto mb-4 dark:brightness-0 dark:invert"
              loading="lazy"
            />
            <p className="text-sm leading-relaxed mb-4">
              Premier shopping destination in Ezulwini, Kingdom of Eswatini.
            </p>
            <Image
              src={images.cbreLogo}
              alt="CBRE Excellerate"
              width={100}
              height={32}
              className="h-8 w-auto opacity-80"
              loading="lazy"
            />
          </div>
          <div>
            <h4 className="text-slate-900 dark:text-white font-semibold mb-4 text-sm uppercase tracking-wide">
              Explore
            </h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/" className="hover:text-[#00b074] dark:hover:text-[#17ff49]">Home</Link></li>
              <li><Link href="/about" className="hover:text-[#00b074] dark:hover:text-[#17ff49]">About</Link></li>
              <li><Link href="/directory" className="hover:text-[#00b074] dark:hover:text-[#17ff49]">Directory</Link></li>
              <li><Link href="/gallery" className="hover:text-[#00b074] dark:hover:text-[#17ff49]">Gallery</Link></li>
              <li><Link href="/events" className="hover:text-[#00b074] dark:hover:text-[#17ff49]">Events</Link></li>
              <li><Link href="/contact" className="hover:text-[#00b074] dark:hover:text-[#17ff49]">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-slate-900 dark:text-white font-semibold mb-4 text-sm uppercase tracking-wide">
              Hours
            </h4>
            <ul className="space-y-2 text-sm">
              <li>Mon–Sat: <span className="text-slate-900 dark:text-white">9:00–17:00</span></li>
              <li>Sun & Holidays: <span className="text-slate-900 dark:text-white">9:00–15:00</span></li>
            </ul>
          </div>
          <div>
            <h4 className="text-slate-900 dark:text-white font-semibold mb-4 text-sm uppercase tracking-wide">
              Contact
            </h4>
            <ul className="space-y-2 text-sm">
              <li>MR103, Ezulwini, Eswatini</li>
              <li><a href="tel:+26824171173" className="hover:text-[#00b074]">+268 2417 1173</a></li>
              <li><a href="mailto:info@thegables.co.sz" className="hover:text-[#00b074]">info@thegables.co.sz</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-slate-200 dark:border-slate-800 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm">
          <p>© {new Date().getFullYear()} The Gables™. All rights reserved.</p>
          <p className="text-slate-500">
            Designed with{" "}
            <a href="https://www.sm3-creative.com" className="text-[#00b074] dark:text-[#17ff49] hover:underline">
              SM3 Creative
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
