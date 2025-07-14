import ContactForm from "@/app/components/ContactComponents/ContactForm";
import ContentContactPage from "@/app/components/ContactComponents/ContentContactPage";
import { contactPageMetadata } from "@/lib/metadata/en/contactpage";

export const metadata = contactPageMetadata;

export default function ContactEn() {
  return (
    <div className="py-12">
      <ContentContactPage />
      <ContactForm />
    </div>
  );
}
