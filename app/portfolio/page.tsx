import React from "react";
import { Metadata } from "next";
import ContentPortfolioPage from "../components/PortfolioComponents/ContentPortfolioPage";

export const metadata: Metadata = {
  title: "Galerie des projets - Portfolio Bahoz",
  description: "Tous les projets réalisés par Bahoz disponible sur cette page",
  keywords: "portfolio, projets, Bahoz, développement web, développement mobile, IA",
};

export default function Portfolio() {
  return <ContentPortfolioPage />;
}
