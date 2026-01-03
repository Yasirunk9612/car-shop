import "./globals.css";
import Header from "../components/Header";

import type { Metadata } from "next";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://dk-motors-dusky.vercel.app";
const siteUrl = new URL(SITE_URL);

export const metadata: Metadata = {
  metadataBase: siteUrl,
  title: {
    default: "DK Motors | Premium Japanese Vehicle Imports",
    template: "%s | DK Motors",
  },
  description:
    "Premium Japanese car & motorcycle imports. Direct from Japan with inspections, shipping, and documentation handled.",
  keywords: [
    "DK Motors",
    "JDM",
    "Japanese cars",
    "Japanese motorcycles",
    "Japan imports",
    "Vehicle import",
    "Auction bidding",
  ],
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    title: "DK Motors | Premium Japanese Vehicle Imports",
    description:
      "Premium Japanese car & motorcycle imports. Direct from Japan with inspections, shipping, and documentation handled.",
    siteName: "DK Motors",
    locale: "en_US",
    url: SITE_URL,
    images: [
      {
        url: "/logo.PNG",
        width: 512,
        height: 512,
        alt: "DK Motors",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "DK Motors | Premium Japanese Vehicle Imports",
    description:
      "Premium Japanese car & motorcycle imports. Direct from Japan with inspections, shipping, and documentation handled.",
    images: ["/logo.PNG"],
  },
  icons: {
    icon: "/logo.PNG",
    apple: "/logo.PNG",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* Make hero video start as quickly as possible */}
        <link rel="preload" as="video" href="/videos/hero.mp4" type="video/mp4" />
        {/* Basic JSON-LD for SEO */}
        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "DK Motors",
              url: SITE_URL,
              logo: `${SITE_URL}/logo.PNG`,
              email: "yasirunisal75@gmail.com",
              telephone: "+94770729275",
            }),
          }}
        />
      </head>
      <body className="bg-black text-white font-sans">
        <Header />
        <div>{children}</div>
      </body>
    </html>
  );
}
