import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Cairo } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const cairo = Cairo({
  variable: "--font-cairo",
  subsets: ["arabic", "latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Versay Company | شركة فرساي للتجارة والمقاولات والتشكيلات المعدنية",
  description:
    "Versay Company for Trading, Contracting, and Metal Formations. Excellence in metal furniture, structural metal works, custom formations, gates, handrails, and architectural metalwork in Egypt.",
  keywords: [
    "metal formations",
    "steel structures",
    "gates",
    "handrails",
    "metal furniture",
    "Egypt contracting",
    "تشكيلات معدنية",
    "شركة فرساي",
    "مقاولات",
    "بوابات",
    "هاندريلات",
  ],
  authors: [{ name: "Versay Company" }],
  openGraph: {
    title: "Versay Company | Metal Formations & Contracting",
    description:
      "Excellence in metal formations, trading, and contracting since 2012.",
    type: "website",
    locale: "en_US",
    alternateLocale: "ar_EG",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${cairo.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
