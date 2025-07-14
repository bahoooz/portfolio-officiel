import React from "react";
import ContentPortfolioPage from "../components/PortfolioComponents/ContentPortfolioPage";
import { portfolioPageMetadata } from "@/lib/metadata/portfoliopage";

export const metadata = portfolioPageMetadata;

export default function Portfolio() {
  return <ContentPortfolioPage title="Galerie des projets" />;
}
