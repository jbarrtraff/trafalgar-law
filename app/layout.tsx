import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AnnouncementBar from "@/components/AnnouncementBar";
import MobileCallBar from "@/components/MobileCallBar";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://trafalgarlawtx.com"),
  title: {
    default: "Austin Personal Injury Lawyer | Trafalgar Law",
    template: "%s | Trafalgar Law",
  },
  description:
    "Trafalgar Law is an Austin personal injury law firm serving Austin and San Antonio, TX. Car accidents, slip and fall, wrongful death, and more. Free consultation. No fee unless we win.",
  keywords: [
    "Austin personal injury lawyer",
    "Austin car accident attorney",
    "San Antonio personal injury lawyer",
    "Texas slip and fall attorney",
    "wrongful death lawyer Austin TX",
    "pedestrian accident attorney Austin",
    "commercial accident lawyer Texas",
    "Trafalgar Law",
    "Joseph Barrientos attorney",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://trafalgarlawtx.com",
    siteName: "Trafalgar Law Personal Injury",
    title: "Austin Personal Injury Lawyer | Trafalgar Law",
    description:
      "Committed. Relentless. Strategic. Trafalgar Law fights for injury victims across Austin and San Antonio, TX.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Austin Personal Injury Lawyer | Trafalgar Law",
    description:
      "Committed. Relentless. Strategic. No fee unless we win. Serving Austin & San Antonio, TX.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
};

const schemaOrg = {
  "@context": "https://schema.org",
  "@type": ["LegalService", "LocalBusiness"],
  name: "Trafalgar Law Personal Injury",
  description:
    "Personal injury law firm serving Austin and San Antonio, Texas. Car accidents, slip and fall, commercial accidents, pedestrian accidents, and wrongful death.",
  url: "https://trafalgarlawtx.com",
  telephone: "+17372912767",
  priceRange: "No fee unless we win",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Austin",
    addressRegion: "TX",
    addressCountry: "US",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 30.2672,
    longitude: -97.7431,
  },
  founder: {
    "@type": "Person",
    name: "Joseph Barrientos",
    jobTitle: "Personal Injury Attorney",
  },
  areaServed: [
    { "@type": "City", name: "Austin", containedInPlace: { "@type": "State", name: "Texas" } },
    { "@type": "City", name: "San Antonio", containedInPlace: { "@type": "State", name: "Texas" } },
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Vehicle Collision Claims" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Slip and Fall Claims" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Commercial Accident Claims" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Pedestrian Accident Claims" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Wrongful Death Claims" } },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${inter.variable} h-full`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaOrg) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-brand-black text-brand-cream antialiased">
        <AnnouncementBar />
        <Navbar />
        <main className="flex-1 pt-20">{children}</main>
        <Footer />
        <MobileCallBar />
      </body>
    </html>
  );
}
