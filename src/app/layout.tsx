import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  weight: ["300", "600"],
  subsets: ["latin"],
  variable: "--font-cormorant",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Restaurant Habesha | Zürich",
  description:
    "Authentische Spezialitäten aus Äthiopien & Eritrea. Schreinerstrasse 64, 8004 Zürich.",
  metadataBase: new URL("https://restaurant-habesha.ch"),
  openGraph: {
    title: "Restaurant Habesha | Zürich",
    description:
      "Authentische Spezialitäten aus Äthiopien & Eritrea. A Taste of East Africa.",
    locale: "de_CH",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <body
        className={`${inter.variable} ${cormorant.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
