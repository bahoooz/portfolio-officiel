import ContentPortfolioPage from "@/app/components/PortfolioComponents/ContentPortfolioPage";
import { portfolioPageMetadata } from "@/lib/metadata/en/portfoliopage";
import React from "react";

export const metadata = portfolioPageMetadata;

export default function PortfolioEn() {
  return <ContentPortfolioPage title="Projects gallery" />;
}
