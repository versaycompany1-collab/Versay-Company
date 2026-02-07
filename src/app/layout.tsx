import type { Metadata, Viewport } from "next";
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

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0A1628" },
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL("https://versay-eg.com"),
  title: {
    default: "Versay Company | شركة فرساي للتجارة والمقاولات والتشكيلات المعدنية",
    template: "%s | Versay Company",
  },
  description:
    "Versay Company for Trading, Contracting, and Metal Formations. Excellence in metal furniture, structural metal works, custom formations, gates, handrails, and architectural metalwork in Egypt. ISO 9001, 14001, 45001 Certified.",
  keywords: [
    "metal formations",
    "steel structures",
    "gates",
    "handrails",
    "metal furniture",
    "Egypt contracting",
    "CNC laser cutting",
    "stainless steel works",
    "forged iron",
    "pergolas",
    "industrial hangars",
    "تشكيلات معدنية",
    "شركة فرساي",
    "مقاولات",
    "بوابات",
    "هاندريلات",
    "أعمال الليزر",
    "استانلس ستيل",
  ],
  authors: [{ name: "Versay Company", url: "https://versay-eg.com" }],
  creator: "Versay Company",
  publisher: "Versay Company",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: "/",
    languages: {
      "en-US": "/",
      "ar-EG": "/",
    },
  },
  openGraph: {
    title: "Versay Company | Metal Formations & Contracting",
    description:
      "Excellence in metal formations, trading, and contracting since 2012. ISO Certified. 500+ projects completed across Egypt.",
    type: "website",
    locale: "en_US",
    alternateLocale: "ar_EG",
    url: "https://versay-eg.com",
    siteName: "Versay Company",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Versay Company - Metal Formations & Contracting",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Versay Company | Metal Formations & Contracting",
    description:
      "Excellence in metal formations, trading, and contracting since 2012. ISO Certified.",
    images: ["/images/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  manifest: "/manifest.json",
  icons: {
    icon: "/images/logo.png",
    shortcut: "/images/logo.png",
    apple: "/images/logo.png",
  },
  category: "business",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${cairo.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
