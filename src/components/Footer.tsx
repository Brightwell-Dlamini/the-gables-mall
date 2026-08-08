import Image from "next/image";
import Link from "next/link";

const LOGO =
  "https://raw.githubusercontent.com/Brightwell-Dlamini/thegables-new/main/img/the-gables-logo.png";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 py-16 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-10 mb-12">
          <div className="md:col-span-1">
            <Image src={LOGO} alt="The Gables" width={140} height={48} className="h-12 w-auto mb-4 brightness-0 invert" />
            <p className="text-sm leading-relaxed">
              Premier shopping destination in Ezulwini, Kingdom of Eswatini.
              Value, convenience and community under one roof.
            </p>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Explore</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/" className="hover:text-[#17ff49]">Home</Link></li>
              <li><Link href="/about" className="hover:text-[#17ff49]">About</Link></li>
              <li><Link href="/directory" className="hover:text-[#17ff49]">Store Directory</Link></li>
              <li><Link href="/contact" className="hover:text-[#17ff49]">Contact & Lease</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Hours</h4>
            <ul className="space-y-2 text-sm">
              <li>Monday – Saturday: <span className="text-white">9:00 – 17:00</span></li>
              <li>Sundays & Holidays: <span className="text-white">9:00 – 15:00</span></li>
              <li className="text-slate-500 italic text-xs mt-1">May vary by store</li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-sm">
              <li>MR103, Ezulwini, Eswatini</li>
              <li>+268 2417 1173</li>
              <li>Managed by CBRE Excellerate</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-slate-700 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm">
          <p>© {new Date().getFullYear()} The Gables Shopping Centre. All rights reserved.</p>
          <p className="text-slate-500">Ezulwini · Kingdom of Eswatini</p>
        </div>
      </div>
    </footer>
  );
}
