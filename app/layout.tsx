import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "./providers";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Analytics } from "@vercel/analytics/react";

export const metadata: Metadata = {
  title: "Accueil - Portfolio Bahoz",
  description:
    "Développeur web parisien de 18 ans, découvrez mon portfolio et travaillons ensemble !",
  icons: {
    icon: "/assets/diamond_icon.png",
  },
  keywords: [
    "Développeur web",
    "Portfolio",
    "Paris",
    "Bahoz",
    "Web development",
    "Freelance",
    "Web",
    "Development",
  ],
  authors: [{ name: "Bahoz" }],
  openGraph: {
    title: "Accueil - Portfolio Bahoz",
    description:
      "Développeur web parisien de 18 ans, découvrez mon portfolio et travaillons ensemble !",
    url: "https://www.bahoz-dev.com",
    siteName: "Portfolio Bahoz",
    images: [
      {
        url: "/assets/diamond_icon.png",
        width: 1200,
        height: 630,
        alt: "Portfolio Bahoz",
      },
    ],
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Accueil - Portfolio Bahoz",
    description:
      "Découvrez le portfolio de Bahoz, un développeur web parisien de 18 ans, et commencez à travailler ensemble sur vos projets.",
    images: ["/assets/diamond_icon.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://www.bahoz-dev.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.bahoz-dev.com" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="fr_FR" />
        <meta property="og:title" content="Portfolio Bahoz" />
        <meta
          property="og:description"
          content="Développeur web parisien de 18 ans, découvrez mon portfolio et travaillons ensemble !"
        />
        <meta name="twitter:image" content="/assets/diamond_icon.png" />
        <link rel="sitemap" type="application/xml" href="/sitemap.xml" />
        <link rel="icon" href="/assets/diamond_icon.png" />
        <link rel="apple-touch-icon" href="/assets/diamond_icon.png" />
      </head>
      <body
        className={
          "antialiased dark:bg-bgColorDark bg-bgColorLight relative font-title"
        }
      >
        <Providers>
          <Navbar />
          {children}
          <Footer />
          <Analytics />
        </Providers>
      </body>
    </html>
  );
}
