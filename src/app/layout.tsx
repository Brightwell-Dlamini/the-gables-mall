import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import DutchDivider from "@/components/DutchDivider";
import { ThemeProvider } from "@/components/ThemeProvider";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.thegables.co.sz"),
  title: {
    default: "The Gables Shopping Centre | Ezulwini, Eswatini",
    template: "%s | The Gables",
  },
  description:
    "The Gables Shopping Centre in Ezulwini, Eswatini — 96+ stores, Pick n Pay, Woolworths, Shoprite, Clicks, cinema, restaurants, banking and free secure parking. Dutch-style architecture near two national parks.",
  keywords: [
    "The Gables",
    "Ezulwini",
    "Eswatini",
    "shopping mall",
    "Pick n Pay",
    "Woolworths",
    "Shoprite",
    "Clicks",
    "cinema",
    "free parking",
    "Shebas Rocks",
  ],
  authors: [{ name: "The Gables Shopping Centre" }],
  openGraph: {
    title: "The Gables Shopping Centre",
    description: "Your premier shopping destination in the heart of Ezulwini, Eswatini.",
    url: "https://www.thegables.co.sz",
    siteName: "The Gables",
    locale: "en_SZ",
    type: "website",
    images: [
      {
        url: "https://raw.githubusercontent.com/Brightwell-Dlamini/the-gables-mall/main/src/thegables-entrance.jpg",
        width: 1200,
        height: 630,
        alt: "The Gables Shopping Centre",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "The Gables Shopping Centre",
    description: "Premier shopping in Ezulwini, Eswatini — 96+ stores, free parking, cinema.",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://www.thegables.co.sz",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#FBFBFB" },
    { media: "(prefers-color-scheme: dark)", color: "#0a0f0c" },
  ],
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased dark`}
      suppressHydrationWarning
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('color-theme');if(t==='light'){document.documentElement.classList.remove('dark');document.documentElement.classList.add('light');}else{document.documentElement.classList.add('dark');document.documentElement.classList.remove('light');}}catch(e){document.documentElement.classList.add('dark');}})();`,
          }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-[var(--background)] text-[var(--foreground)]">
        <ThemeProvider>
          <Header />
          <main className="flex-1">{children}</main>
          <DutchDivider />
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
