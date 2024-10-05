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
