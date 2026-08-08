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
      <section className="pt-28 pb-12 bg-gradient-to-b from-[#e5f3e8] to-[#FBFBFB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact & Lease</h1>
          <p className="text-slate-600 max-w-xl mx-auto">
            Reach the management team or enquire about available retail space.
          </p>
        </div>
      </section>

      <section className="py-16 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-bold mb-6">Get in Touch</h2>
            <ul className="space-y-4 text-slate-600">
              <li>
                <span className="font-medium text-slate-900 block">Address</span>
                The Gables Shopping Centre<br />
                MR103, Ezulwini, Kingdom of Eswatini
              </li>
              <li>
                <span className="font-medium text-slate-900 block">Phone</span>
                <a href="tel:+26824171173" className="hover:text-[#00b074]">+268 2417 1173</a>
              </li>
              <li>
                <span className="font-medium text-slate-900 block">Hours</span>
                Mon–Sat 09:00–17:00 · Sun & Holidays 09:00–15:00
              </li>
            </ul>

            <h3 className="text-lg font-semibold mt-10 mb-4">Management Team</h3>
            <ul className="space-y-3 text-sm text-slate-600">
              <li>
                <span className="font-medium text-slate-900">Carol-Lee Payne</span> — Property Manager<br />
                <a href="mailto:Carol-Lee.Payne@cbreexcellerate.com" className="text-[#00b074]">Carol-Lee.Payne@cbreexcellerate.com</a>
                · +268 7649 9589
              </li>
              <li>
                <span className="font-medium text-slate-900">Livingstone Dlamini</span> — Operations Manager<br />
                <a href="mailto:Livingston.Dlamini@cbreexcellerate.com" className="text-[#00b074]">Livingston.Dlamini@cbreexcellerate.com</a>
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-2xl border border-[#d1e7d9] p-8 shadow-sm">
            <h2 className="text-2xl font-bold mb-2">Lease Enquiry</h2>
            <p className="text-sm text-slate-500 mb-6">
              Interested in retail space? Send a message and the team will respond.
            </p>
            <form className="space-y-4" action="#" method="post">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-1">Name</label>
                <input id="name" name="name" type="text" className="w-full px-4 py-2.5 rounded-lg border border-[#d1e7d9] focus:ring-2 focus:ring-[#22c55e] outline-none" required />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-1">Email</label>
                <input id="email" name="email" type="email" className="w-full px-4 py-2.5 rounded-lg border border-[#d1e7d9] focus:ring-2 focus:ring-[#22c55e] outline-none" required />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium mb-1">Phone</label>
                <input id="phone" name="phone" type="tel" className="w-full px-4 py-2.5 rounded-lg border border-[#d1e7d9] focus:ring-2 focus:ring-[#22c55e] outline-none" />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-1">Message</label>
                <textarea id="message" name="message" rows={4} className="w-full px-4 py-2.5 rounded-lg border border-[#d1e7d9] focus:ring-2 focus:ring-[#22c55e] outline-none" required />
              </div>
              <button type="submit" className="w-full py-3 rounded-full gradient-green text-white font-semibold shadow hover:shadow-lg transition-all">
                Send Enquiry
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
