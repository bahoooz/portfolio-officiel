// components/ClientLayout.tsx
"use client";

import { usePathname } from "next/navigation";
import { Providers } from "../providers";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Analytics } from "@vercel/analytics/react";

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const isEnglish = pathname.startsWith("/en");

  return (
    <html lang={isEnglish ? "en" : "fr"} suppressHydrationWarning>
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
          <Navbar get_quote={isEnglish ? "Get a quote" : "Obtenir un devis"} />
          {children}
          <Footer
            home_link={isEnglish ? "Home" : "Accueil"}
            find_me_link={isEnglish ? "Where to find me" : "Où me retrouver"}
          />
          <Analytics />
        </Providers>
      </body>
    </html>
  );
}
