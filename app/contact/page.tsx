/* eslint-disable react/no-unescaped-entities */

import ContactForm from "../components/ContactComponents/ContactForm";
import ContentContactPage from "../components/ContactComponents/ContentContactPage";
import { contactPageMetadata } from "@/lib/metadata/contactpage";

export const metadata = contactPageMetadata;

export default function Contact() {
  return (
    <div className="py-12">
      <ContentContactPage />
      <ContactForm />
    </div>
  );
}
