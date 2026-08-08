import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "The Gables Shopping Centre | Ezulwini, Eswatini",
    template: "%s | The Gables",
  },
  description:
    "The Gables Shopping Centre in Ezulwini, Eswatini — 96+ stores, Pick n Pay, Woolworths, Shoprite, Clicks, cinema, restaurants, banking and free secure parking. Dutch-style architecture near two national parks.",
  openGraph: {
    title: "The Gables Shopping Centre",
    description: "Your premier shopping destination in the heart of Ezulwini, Eswatini.",
    url: "https://www.thegables.co.sz",
    siteName: "The Gables",
    locale: "en_SZ",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#FBFBFB] text-slate-900">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
