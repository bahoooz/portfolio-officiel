import ContactForm from "@/app/components/ContactComponents/ContactForm";
import { Metadata } from "next";
import ContentContactPage from "@/app/components/ContactComponents/ContentContactPage";

export const metadata: Metadata = {
  title: "Contact Form - Portfolio Bahoz",
  description: "Generated by create next app",
};

export default function ContactEn() {
  return (
    <div className="py-12">
      <ContentContactPage />
      <ContactForm />
    </div>
  );
} 