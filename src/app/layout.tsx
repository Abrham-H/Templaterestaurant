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
  title: "Restaurant Vorlage | Muster",
  description:
    "Neutrale Restaurant-Website-Vorlage mit Platzhaltertext, Musterbildern und Beispiel-Videos.",
  metadataBase: new URL("https://example.com"),
  openGraph: {
    title: "Restaurant Vorlage | Muster",
    description:
      "Neutrale Restaurant-Website-Vorlage — Texte, Bilder und Videos anpassen.",
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
