import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
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
  title: "The Gables Shopping Centre | Premier Shopping Destination in Ezulwini, Eswatini",
  description:
    "Discover The Gables Shopping Centre in Ezulwini, Eswatini. Home to 96+ stores including Pick n Pay, Woolworths, Shoprite, Clicks, cinema, restaurants, banking and free secure parking. Open 7 days a week.",
  keywords: [
    "The Gables",
    "Ezulwini",
    "Eswatini",
    "shopping mall",
    "Pick n Pay",
    "Woolworths",
    "Shoprite",
    "cinema",
    "free parking",
  ],
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
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
