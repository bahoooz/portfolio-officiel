import React from "react";
import { Metadata } from "next";
import ContentPortfolioPage from "../components/PortfolioComponents/ContentPortfolioPage";

export const metadata: Metadata = {
  title: "Galerie des projets - Portfolio Bahoz",
  description: "Tous les projets réalisés par Bahoz disponible sur cette page.",
  keywords: [
    "portfolio",
    "projets",
    "Bahoz",
    "développement web",
    "développement mobile",
    "IA",
    "UI",
    "UX",
    "React",
    "Next.js",
    "projets freelance",
  ],
  openGraph: {
    title: "Galerie des projets - Portfolio Bahoz",
    description:
      "Tous les projets réalisés par Bahoz disponible sur cette page.",
    url: "https://www.bahoz-dev.com/portfolio",
    siteName: "Portfolio Bahoz",
    images: [
      {
        url: "/assets/logo-diamond.png",
        width: 1024,
        height: 1024,
        alt: "Portfolio Bahoz",
      },
    ],
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Portfolio - Réalisations de Bahoz",
    description:
      "Découvrez les projets de Bahoz, développeur web freelance à Paris.",
    images: ["/assets/logo-diamond.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://www.bahoz-dev.com/portfolio",
  },
};

export default function Portfolio() {
  return <ContentPortfolioPage title="Galerie des projets" />;
}
