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
      <section className="pt-28 pb-12 bg-gradient-to-b from-[#e5f3e8] to-[#FBFBFB] dark:from-[#0f1a14] dark:to-[#0a0f0c]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-slate-900 dark:text-white">
            Contact & Lease
          </h1>
          <p className="text-slate-600 dark:text-slate-400 max-w-xl mx-auto">
            Reach the management team or enquire about available retail space.
          </p>
        </div>
      </section>

      <section className="py-16 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact details */}
          <div>
            <h2 className="text-2xl font-bold mb-6 text-slate-900 dark:text-white">
              Get in Touch
            </h2>
            <ul className="space-y-5 text-slate-600 dark:text-slate-300">
              <li>
                <span className="font-medium text-slate-900 dark:text-white block mb-0.5">
                  Address
                </span>
                The Gables Shopping Centre<br />
                MR103, Ezulwini, Kingdom of Eswatini
              </li>
              <li>
                <span className="font-medium text-slate-900 dark:text-white block mb-0.5">
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
                <span className="font-medium text-slate-900 dark:text-white block mb-0.5">
                  Hours
                </span>
                Mon–Sat 09:00–17:00 · Sun & Holidays 09:00–15:00
              </li>
            </ul>

            <h3 className="text-lg font-semibold mt-10 mb-4 text-slate-900 dark:text-white">
              Management Team
            </h3>
            <ul className="space-y-4 text-sm text-slate-600 dark:text-slate-300">
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

          {/* Lease form */}
          <div className="bg-white dark:bg-[#0f1a14] rounded-2xl border border-[#d1e7d9] dark:border-[#166534] p-8 shadow-sm">
            <h2 className="text-2xl font-bold mb-2 text-slate-900 dark:text-white">
              Lease Enquiry
            </h2>
            <p className="text-sm text-slate-500 dark:text-slate-400 mb-6">
              Interested in retail space? Send a message and the team will respond.
            </p>
            <form className="space-y-4" action="#" method="post" noValidate>
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium mb-1.5 text-slate-700 dark:text-slate-200"
                >
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  required
                  className="w-full px-4 py-2.5 rounded-lg border border-[#d1e7d9] dark:border-[#166534] bg-white dark:bg-[#0a0f0c] text-slate-900 dark:text-white placeholder:text-slate-400 focus:ring-2 focus:ring-[#00b074] dark:focus:ring-[#17ff49] outline-none transition-shadow"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium mb-1.5 text-slate-700 dark:text-slate-200"
                >
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="w-full px-4 py-2.5 rounded-lg border border-[#d1e7d9] dark:border-[#166534] bg-white dark:bg-[#0a0f0c] text-slate-900 dark:text-white placeholder:text-slate-400 focus:ring-2 focus:ring-[#00b074] dark:focus:ring-[#17ff49] outline-none transition-shadow"
                />
              </div>
              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium mb-1.5 text-slate-700 dark:text-slate-200"
                >
                  Phone
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  autoComplete="tel"
                  className="w-full px-4 py-2.5 rounded-lg border border-[#d1e7d9] dark:border-[#166534] bg-white dark:bg-[#0a0f0c] text-slate-900 dark:text-white placeholder:text-slate-400 focus:ring-2 focus:ring-[#00b074] dark:focus:ring-[#17ff49] outline-none transition-shadow"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium mb-1.5 text-slate-700 dark:text-slate-200"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  required
                  className="w-full px-4 py-2.5 rounded-lg border border-[#d1e7d9] dark:border-[#166534] bg-white dark:bg-[#0a0f0c] text-slate-900 dark:text-white placeholder:text-slate-400 focus:ring-2 focus:ring-[#00b074] dark:focus:ring-[#17ff49] outline-none transition-shadow resize-y"
                />
              </div>
              <button
                type="submit"
                className="w-full py-3.5 rounded-full gradient-green text-white font-semibold shadow hover:shadow-lg transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-[#17ff49] focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-offset-[#0f1a14]"
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
