/* eslint-disable react/no-unescaped-entities */

import ContactForm from "../components/ContactComponents/ContactForm";
import { Metadata } from "next";
import ContentContactPage from "../components/ContactComponents/ContentContactPage";

export const metadata: Metadata = {
  title: "Formulaire de contact - Portfolio Bahoz",
  description:
    "Contactez moi, développeur web freelance à Paris. Discutons de vos projets et travaillons ensemble.",
  keywords: [
    "Contact développeur web",
    "Freelance Paris",
    "Bahoz",
    "Projets web",
    "Développement web",
    "Développeur web",
    "Contact",
  ],
  openGraph: {
    title: "Contact - Portfolio Bahoz",
    description:
      "Contactez moi, développeur web freelance à Paris. Discutons de vos projets et travaillons ensemble.",
    url: "https://www.bahoz-dev.com/contact",
    siteName: "Portfolio Bahoz",
    images: [
      {
        url: "/assets/logo-diamond.png",
        width: 1024,
        height: 1024,
        alt: "Contactez Bahoz",
      },
    ],
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact - Portfolio Bahoz",
    description:
      "Contactez moi, développeur web freelance à Paris. Discutons de vos projets et travaillons ensemble.",
    images: ["/assets/logo-diamond.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://www.bahoz-dev.com/contact",
  },
};

export default function Contact() {
  return (
    <div className="py-12">
      <ContentContactPage />
      <ContactForm />
    </div>
  );
}
