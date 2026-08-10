import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact & Lease",
  description:
    "Contact The Gables Shopping Centre management or enquire about leasing retail space in Ezulwini, Eswatini.",
};

export default function ContactPage() {
  return (
    <>
      <section className="pt-28 sm:pt-36 pb-12 bg-slate-950 text-white">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
          <p className="text-[#17ff49] text-[11px] font-semibold tracking-[0.3em] uppercase mb-4">
            Reach us
          </p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-[-0.04em] leading-[1.05] max-w-xl">
            Contact &
            <br />
            Lease
          </h1>
          <p className="text-white/50 text-lg font-light mt-6 max-w-md">
            Reach management or enquire about available retail space.
          </p>
        </div>
      </section>

      <section className="py-16 sm:py-24 max-w-6xl mx-auto px-5 sm:px-8 lg:px-10">
        <div className="grid md:grid-cols-2 gap-14 lg:gap-20">
          <div>
            <h2 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white mb-8">
              Get in touch
            </h2>
            <ul className="space-y-7 text-slate-600 dark:text-slate-300">
              <li>
                <span className="block text-[11px] font-semibold tracking-[0.2em] uppercase text-slate-400 mb-1.5">
                  Address
                </span>
                The Gables Shopping Centre<br />
                MR103, Ezulwini, Kingdom of Eswatini
              </li>
              <li>
                <span className="block text-[11px] font-semibold tracking-[0.2em] uppercase text-slate-400 mb-1.5">
                  Phone
                </span>
                <a href="tel:+26824171173" className="hover:text-[#00b074] dark:hover:text-[#17ff49] transition-colors">
                  +268 2417 1173
                </a>
              </li>
              <li>
                <span className="block text-[11px] font-semibold tracking-[0.2em] uppercase text-slate-400 mb-1.5">
                  Hours
                </span>
                Mon–Sat 09:00–17:00 · Sun & Holidays 09:00–15:00
              </li>
            </ul>

            <h3 className="text-lg font-bold mt-14 mb-5 text-slate-900 dark:text-white">
              Management
            </h3>
            <ul className="space-y-5 text-sm text-slate-600 dark:text-slate-300">
              <li>
                <span className="font-semibold text-slate-900 dark:text-white">Carol-Lee Payne</span>
                {" "}— Property Manager<br />
                <a href="mailto:Carol-Lee.Payne@cbreexcellerate.com" className="text-[#00b074] dark:text-[#17ff49] hover:underline">
                  Carol-Lee.Payne@cbreexcellerate.com
                </a>
                <span className="text-slate-400"> · </span>
                <a href="tel:+26876499589">+268 7649 9589</a>
              </li>
              <li>
                <span className="font-semibold text-slate-900 dark:text-white">Livingstone Dlamini</span>
                {" "}— Operations Manager<br />
                <a href="mailto:Livingston.Dlamini@cbreexcellerate.com" className="text-[#00b074] dark:text-[#17ff49] hover:underline">
                  Livingston.Dlamini@cbreexcellerate.com
                </a>
              </li>
            </ul>
          </div>

          <div className="bg-slate-50 dark:bg-slate-900 rounded-3xl p-8 sm:p-10 border border-slate-200 dark:border-slate-800">
            <h2 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white mb-2">
              Lease enquiry
            </h2>
            <p className="text-sm text-slate-500 dark:text-slate-400 mb-8 font-light">
              Interested in retail space? Send a message and the team will respond.
            </p>
            <form className="space-y-5" action="#" method="post" noValidate>
              {["name", "email", "phone"].map((field) => (
                <div key={field}>
                  <label htmlFor={field} className="block text-sm font-medium mb-2 text-slate-700 dark:text-slate-200 capitalize">
                    {field === "name" ? "Name" : field === "email" ? "Email" : "Phone"}
                  </label>
                  <input
                    id={field}
                    name={field}
                    type={field === "email" ? "email" : field === "phone" ? "tel" : "text"}
                    autoComplete={field === "name" ? "name" : field === "email" ? "email" : "tel"}
                    required={field !== "phone"}
                    className="w-full px-4 py-3.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-950 text-slate-900 dark:text-white focus:ring-2 focus:ring-[#00b074] dark:focus:ring-[#17ff49] outline-none transition-shadow"
                  />
                </div>
              ))}
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2 text-slate-700 dark:text-slate-200">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  required
                  className="w-full px-4 py-3.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-950 text-slate-900 dark:text-white focus:ring-2 focus:ring-[#00b074] dark:focus:ring-[#17ff49] outline-none transition-shadow resize-y"
                />
              </div>
              <button
                type="submit"
                className="w-full py-4 rounded-full bg-slate-950 dark:bg-[#17ff49] text-white dark:text-slate-950 font-bold hover:opacity-90 transition-opacity"
              >
                Send enquiry
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
