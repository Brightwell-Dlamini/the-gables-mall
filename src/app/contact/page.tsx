import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact & Lease",
  description:
    "Contact The Gables Shopping Centre management or enquire about leasing retail space in Ezulwini, Eswatini.",
  openGraph: {
    title: "Contact & Lease | The Gables",
    description: "Reach CBRE Excellerate management or enquire about available retail space.",
  },
};

export default function ContactPage() {
  return (
    <>
      <section className="pt-32 pb-14 bg-gradient-to-b from-[#e5f3e8] via-[#f0f9f2] to-[#FBFBFB] dark:from-[#0f1a14] dark:via-[#0c140f] dark:to-[#0a0f0c]">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 text-center">
          <p className="inline-flex items-center gap-2 text-[#00b074] dark:text-[#17ff49] font-medium tracking-[0.22em] uppercase text-[11px] sm:text-xs mb-4">
            <span className="w-6 h-px bg-current opacity-70" aria-hidden />
            Reach us
            <span className="w-6 h-px bg-current opacity-70" aria-hidden />
          </p>
          <h1 className="text-4xl md:text-5xl font-bold tracking-[-0.03em] mb-5 text-slate-900 dark:text-white">
            Contact & Lease
          </h1>
          <p className="text-slate-600 dark:text-slate-400 max-w-lg mx-auto font-light text-lg">
            Reach the management team or enquire about available retail space.
          </p>
        </div>
      </section>

      <section className="py-20 sm:py-24 max-w-5xl mx-auto px-5 sm:px-8 lg:px-10">
        <div className="grid md:grid-cols-2 gap-14 lg:gap-16">
          <div>
            <h2 className="text-2xl font-bold mb-8 tracking-tight text-slate-900 dark:text-white">
              Get in Touch
            </h2>
            <ul className="space-y-6 text-slate-600 dark:text-slate-300">
              <li>
                <span className="font-medium text-slate-900 dark:text-white block mb-1 text-sm uppercase tracking-wider">
                  Address
                </span>
                The Gables Shopping Centre<br />
                MR103, Ezulwini, Kingdom of Eswatini
              </li>
              <li>
                <span className="font-medium text-slate-900 dark:text-white block mb-1 text-sm uppercase tracking-wider">
                  Phone
                </span>
                <a
                  href="tel:+26824171173"
                  className="hover:text-[#00b074] dark:hover:text-[#17ff49] transition-colors focus:outline-none focus-visible:underline"
                >
                  +268 2417 1173
                </a>
              </li>
              <li>
                <span className="font-medium text-slate-900 dark:text-white block mb-1 text-sm uppercase tracking-wider">
                  Hours
                </span>
                Mon–Sat 09:00–17:00 · Sun & Holidays 09:00–15:00
              </li>
            </ul>

            <h3 className="text-lg font-semibold mt-12 mb-5 text-slate-900 dark:text-white tracking-tight">
              Management Team
            </h3>
            <ul className="space-y-5 text-sm text-slate-600 dark:text-slate-300">
              <li>
                <span className="font-medium text-slate-900 dark:text-white">
                  Carol-Lee Payne
                </span>{" "}
                — Property Manager<br />
                <a
                  href="mailto:Carol-Lee.Payne@cbreexcellerate.com"
                  className="text-[#00b074] dark:text-[#17ff49] hover:underline"
                >
                  Carol-Lee.Payne@cbreexcellerate.com
                </a>
                <span className="text-slate-400 dark:text-slate-500"> · </span>
                <a
                  href="tel:+26876499589"
                  className="hover:text-[#00b074] dark:hover:text-[#17ff49] transition-colors"
                >
                  +268 7649 9589
                </a>
              </li>
              <li>
                <span className="font-medium text-slate-900 dark:text-white">
                  Livingstone Dlamini
                </span>{" "}
                — Operations Manager<br />
                <a
                  href="mailto:Livingston.Dlamini@cbreexcellerate.com"
                  className="text-[#00b074] dark:text-[#17ff49] hover:underline"
                >
                  Livingston.Dlamini@cbreexcellerate.com
                </a>
              </li>
            </ul>
          </div>

          <div className="bg-white dark:bg-slate-950 rounded-2xl sm:rounded-3xl border border-slate-200/80 dark:border-slate-800 p-8 sm:p-10 shadow-xl shadow-black/5 dark:shadow-black/30">
            <h2 className="text-2xl font-bold mb-2 tracking-tight text-slate-900 dark:text-white">
              Lease Enquiry
            </h2>
            <p className="text-sm text-slate-500 dark:text-slate-400 mb-8 font-light">
              Interested in retail space? Send a message and the team will respond.
            </p>
            <form className="space-y-5" action="#" method="post" noValidate>
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium mb-2 text-slate-700 dark:text-slate-200"
                >
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  required
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-white placeholder:text-slate-400 focus:ring-2 focus:ring-[#00b074] dark:focus:ring-[#17ff49] outline-none transition-shadow"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium mb-2 text-slate-700 dark:text-slate-200"
                >
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-white placeholder:text-slate-400 focus:ring-2 focus:ring-[#00b074] dark:focus:ring-[#17ff49] outline-none transition-shadow"
                />
              </div>
              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium mb-2 text-slate-700 dark:text-slate-200"
                >
                  Phone
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  autoComplete="tel"
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-white placeholder:text-slate-400 focus:ring-2 focus:ring-[#00b074] dark:focus:ring-[#17ff49] outline-none transition-shadow"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium mb-2 text-slate-700 dark:text-slate-200"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  required
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-white placeholder:text-slate-400 focus:ring-2 focus:ring-[#00b074] dark:focus:ring-[#17ff49] outline-none transition-shadow resize-y"
                />
              </div>
              <button
                type="submit"
                className="w-full py-4 rounded-full gradient-green text-white font-semibold shadow-lg shadow-emerald-500/20 hover:shadow-emerald-500/30 transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#17ff49] focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-offset-slate-950"
              >
                Send Enquiry
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
