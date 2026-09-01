import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

const playfairDisplay = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://cottonpatchrvpark.com"),
  title: "Cottonpatch RV Park | Monthly RV Sites in Rayville, LA",
  description:
    "Cottonpatch RV Park offers newly built monthly RV sites in Rayville, Louisiana with 30/50 amp hookups, water, sewer, high-speed internet, 24/7 laundry and private bathrooms. Located approximately 2 miles from the Meta data center project.",
  keywords: [
    "RV park Rayville LA",
    "monthly RV sites Louisiana",
    "RV park near Meta data center",
    "long term RV park Rayville",
    "Cottonpatch RV Park",
    "full hookup RV sites Louisiana",
  ],
  openGraph: {
    title: "Cottonpatch RV Park | Monthly RV Sites in Rayville, LA",
    description:
      "Newly built monthly RV sites with full hookups, high-speed internet, 24/7 laundry and private bathrooms. Just 2 miles from the Meta data center project in Rayville, Louisiana.",
    url: "https://cottonpatchrvpark.com",
    siteName: "Cottonpatch RV Park",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/images/01-pavilion-sunset-hero.jpg",
        width: 1200,
        height: 630,
        alt: "Cottonpatch RV Park pavilion at sunset in Rayville, Louisiana",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Cottonpatch RV Park | Monthly RV Sites in Rayville, LA",
    description:
      "Newly built monthly RV sites in Rayville, LA. Full hookups, internet, 24/7 laundry. ~2 miles from Meta data center project.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "RVPark",
  name: "Cottonpatch RV Park",
  address: {
    "@type": "PostalAddress",
    streetAddress: "160 Caston Rd",
    addressLocality: "Rayville",
    addressRegion: "LA",
    postalCode: "71269",
    addressCountry: "US",
  },
  telephone: "+1-318-417-8435",
  openingHours: "Mo-Su 00:00-24:00",
  priceRange: "$1,000/month",
  amenityFeature: [
    { "@type": "LocationFeatureSpecification", name: "30 Amp Hookups", value: true },
    { "@type": "LocationFeatureSpecification", name: "50 Amp Hookups", value: true },
    { "@type": "LocationFeatureSpecification", name: "Water Hookups", value: true },
    { "@type": "LocationFeatureSpecification", name: "Sewer Hookups", value: true },
    { "@type": "LocationFeatureSpecification", name: "High-Speed Internet", value: true },
    { "@type": "LocationFeatureSpecification", name: "Private Bathrooms", value: true },
    { "@type": "LocationFeatureSpecification", name: "Laundry Facility", value: true },
    { "@type": "LocationFeatureSpecification", name: "Convenience Store", value: true },
    { "@type": "LocationFeatureSpecification", name: "Covered Pavilion", value: true },
    { "@type": "LocationFeatureSpecification", name: "Food Truck Area", value: true },
  ],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${playfairDisplay.variable} ${inter.variable} h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-cream text-navy">{children}</body>
    </html>
  );
}
