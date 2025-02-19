import type { Metadata } from "next";
import "./globals.css";
import ClientLayout from "./components/ClientLayout";

export const metadata: Metadata = {
  title: "Accueil - Portfolio Bahoz",
  description:
    "Développeur web parisien de 18 ans, découvrez mon portfolio et travaillons ensemble !",
  icons: {
    icon: "/assets/icon_website.png",
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
    "Développeur",
    "Next.js",
    "NextJS",
    "React",
    "ReactJS",
    "TailwindCSS",
    "Tailwind",
    "Typescript",
    "Node.js",
    "Express",
    "MongoDB",
    "Javascript",
    "HTML",
    "CSS",
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
        url: "/assets/icon_website.png",
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
      "Développeur web parisien de 18 ans, découvrez mon portfolio et travaillons ensemble !",
    images: ["/assets/icon_website.png"],
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
  return <ClientLayout>{children}</ClientLayout>;
}
