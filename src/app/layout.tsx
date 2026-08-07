import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "The Gables Shopping Centre | Premier Shopping Destination in Ezulwini, Eswatini",
  description: "Discover The Gables Shopping Centre in Ezulwini, Eswatini. Home to 96+ stores including Pick n Pay, Woolworths, Shoprite, Clicks, cinema, restaurants, banking and free secure parking.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
