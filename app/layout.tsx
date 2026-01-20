import type { Metadata } from "next";
import { Inter, K2D } from "next/font/google";
import "./globals.css";

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
    "InstallPTC - Premium Pay-Per-Install Network | Monetize Downloads & Earn",
  description:
    "Join the largest pay-per-install network. Monetize your website traffic or promote software installations. Earn up to $4 per install with real-time tracking and fast payouts.",
  keywords: [
    "pay-per-install",
    "PPI network",
    "monetize downloads",
    "software installs",
    "advertising network",
    "publisher earnings",
    "install monetization",
    "traffic monetization",
    "download network",
    "advertiser platform",
  ],
  authors: [{ name: "InstallPTC" }],
  robots: "index, follow",

  icons: {
    icon: [
      { url: "/logos/fav.svg", type: "image/svg+xml" },
      { url: "/favicon.ico", sizes: "any" },
    ],
    apple: [{ url: "/apple-touch-icon.png" }],
  },
  manifest: "/site.webmanifest",

  openGraph: {
    type: "website",
    title: "InstallPTC - Premium Pay-Per-Install Network",
    description:
      "Connect advertisers with publishers for software install monetization. Earn up to $4 per verified install with weekly payouts.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "InstallPTC - Pay-Per-Install Network",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "InstallPTC - Monetize Downloads & Earn",
    description: "Join thousands of publishers earning with our PPI network",
    images: ["/twitter-image.png"],
  },

  // Additional metadata for InstallPTC
  applicationName: "InstallPTC",
  category: "Advertising Technology",
  publisher: "InstallPTC Network",

  // Verification metadata (add your actual values)
  verification: {
    google: "your-google-verification-code", // Replace with actual code
    yandex: "your-yandex-verification-code", // Replace if needed
    yahoo: "your-yahoo-verification-code", // Replace if needed
  },

  // Structured data for better SEO
  alternates: {
    canonical: "https://installptc.com",
  },

  // Mobile app specific metadata
  appleWebApp: {
    capable: true,
    title: "InstallPTC",
    statusBarStyle: "black-translucent",
  },

  // Viewport settings for responsive design
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

        {/* Structured Data for InstallPTC */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "InstallPTC",
              description:
                "Premium Pay-Per-Install Network connecting advertisers and publishers",
              url: "https://installptc.com",
              logo: "https://installptc.com/logo.png",
              sameAs: [
                "https://twitter.com/installptc",
                "https://facebook.com/installptc",
                "https://linkedin.com/company/installptc",
              ],
              contactPoint: {
                "@type": "ContactPoint",
                email: "support@installptc.com",
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
              name: "InstallPTC",
              url: "https://installptc.com",
              potentialAction: {
                "@type": "SearchAction",
                target: "https://installptc.com/search?q={search_term_string}",
                "query-input": "required name=search_term_string",
              },
            }),
          }}
        />
      </head>
      <body className="font-sans antialiased bg-[#f6fbfb] text-[#002525]">
        {children}
      </body>
    </html>
  );
}
