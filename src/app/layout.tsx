import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://drhomaazadi.ir"),
  title: {
    default: "دکتر هما آزادی | روان‌شناس و مشاور خانواده در اصفهان",
    template: "%s | دکتر هما آزادی",
  },
  description:
    "دکتر هما آزادی، روان‌شناس دکترا با بیش از ۱۵ سال تجربه در مشاوره پیش از ازدواج، زوج‌درمانی، مشاوره فردی، خانواده‌درمانی، سکس‌تراپی و درمان وسواس (OCD) در اصفهان.",
  keywords: [
    "روان‌شناس اصفهان",
    "مشاوره خانواده اصفهان",
    "زوج درمانی اصفهان",
    "مشاوره پیش از ازدواج اصفهان",
    "درمان وسواس اصفهان",
    "سکس تراپی اصفهان",
    "دکتر هما آزادی",
  ],
  authors: [{ name: "دکتر هما آزادی" }],
  openGraph: {
    type: "website",
    locale: "fa_IR",
    siteName: "دکتر هما آزادی",
    title: "دکتر هما آزادی | روان‌شناس و مشاور خانواده در اصفهان",
    description:
      "فضایی امن، علمی و بدون قضاوت برای مشاوره روان‌شناسی در اصفهان",
  },
  twitter: {
    card: "summary_large_image",
    title: "دکتر هما آزادی | روان‌شناس اصفهان",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fa" dir="rtl">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Vazirmatn:wght@300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "دکتر هما آزادی - روان‌شناس",
              image: "https://drhomaazadi.ir/og-image.jpg",
              "@id": "https://drhomaazadi.ir",
              url: "https://drhomaazadi.ir",
              telephone: "+98-XXXXXXXXXX",
              address: {
                "@type": "PostalAddress",
                addressLocality: "اصفهان",
                addressCountry: "IR",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: 32.6539,
                longitude: 51.668,
              },
              openingHoursSpecification: [
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: [
                    "Saturday",
                    "Sunday",
                    "Monday",
                    "Tuesday",
                    "Wednesday",
                  ],
                  opens: "09:00",
                  closes: "18:00",
                },
              ],
              sameAs: [],
            }),
          }}
        />
      </head>
      <body className="font-persian antialiased">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:right-4 focus:z-50 focus:bg-brand-primary focus:text-white focus:px-4 focus:py-2 focus:rounded-lg"
        >
          رفتن به محتوای اصلی
        </a>
        <Navbar />
        <main id="main-content">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
