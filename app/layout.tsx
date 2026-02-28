import type { Metadata } from "next";
import { Inter, K2D } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const k2d = K2D({
  weight: ["400", "500", "600", "700", "800"],
  subsets: ["latin"],
  variable: "--font-k2d",
});

export const metadata: Metadata = {
  title:
    "Adsnes - Premium Performance Advertising Network | Monetize Traffic & Earn",
  description:
    "Join the largest performance-based advertising network. Monetize your website traffic or promote campaigns with CPC, CPI & CPM. Real-time tracking and fast payouts.",
  keywords: [
    "pay-per-install",
    "PPI network",
    "monetize traffic",
    "CPC network",
    "CPI network",
    "advertising network",
    "publisher earnings",
    "advertiser platform",
    "performance marketing",
    "digital advertising",
  ],
  authors: [{ name: "Adsnes" }],
  robots: "index, follow",

  icons: {
    icon: [{ url: "/logos/favicon.ico", type: "image/jpeg" }],
    apple: [{ url: "/logos/favicon.ico" }],
    shortcut: ["/logos/favicon.ico"],
  },
  manifest: "/site.webmanifest",

  openGraph: {
    type: "website",
    title: "Adsnes - Premium Performance Advertising Network",
    description:
      "Connect advertisers with publishers for performance-based campaigns. Real-time tracking with transparent reporting.",
    images: [
      {
        url: "/logo.jpeg",
        width: 1200,
        height: 630,
        alt: "Adsnes - Performance Advertising Network",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Adsnes - Monetize Traffic & Earn",
    description:
      "Join thousands of publishers and advertisers growing with Adsnes",
    images: ["/logo.jpeg"],
  },

  applicationName: "Adsnes",
  category: "Advertising Technology",
  publisher: "Adsnes Network",

  alternates: {
    canonical: "https://adsnes.com",
  },

  appleWebApp: {
    capable: true,
    title: "Adsnes",
    statusBarStyle: "black-translucent",
  },

  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${k2d.variable}`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <meta name="theme-color" content="#014d4e" />
        <meta name="msapplication-TileColor" content="#014d4e" />

        {/* Structured Data for Adsnes */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Adsnes",
              description:
                "Premium Performance Advertising Network connecting advertisers and publishers",
              url: "https://adsnes.com",
              logo: "https://adsnes.com/logo.jpeg",
              sameAs: [
                "https://www.facebook.com/adsnes/",
                "https://discord.gg/R9U9eJYdbr",
                "https://t.me/adsnes_support",
              ],
              contactPoint: {
                "@type": "ContactPoint",
                email: "support@adsnes.com",
                contactType: "customer service",
              },
            }),
          }}
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "Adsnes",
              url: "https://adsnes.com",
              potentialAction: {
                "@type": "SearchAction",
                target: "https://adsnes.com/search?q={search_term_string}",
                "query-input": "required name=search_term_string",
              },
            }),
          }}
        />
      </head>
      <body className="font-sans antialiased bg-[#f6fbfb] text-[#002525]">
        <Navigation />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
