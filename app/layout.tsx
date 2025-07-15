import type { Metadata } from "next";
import "./globals.css";
import ClientLayout from "./components/ClientLayout";

export const metadata: Metadata = {
  icons: {
    icon: [
      { url: "/assets/favicon.ico", sizes: "32x32", type: "image/x-icon" },
      { url: "/assets/logo_192x192.png", sizes: "192x192", type: "image/png" },
      { url: "/assets/logo_512x512.png", sizes: "512x512", type: "image/png" },
    ],
    shortcut: "/assets/favicon.ico",
    apple: "/assets/apple-touch-icon.png"
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <ClientLayout>{children}</ClientLayout>;
}
