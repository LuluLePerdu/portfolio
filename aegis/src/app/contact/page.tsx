import { Contact } from "@/components/pages";
import { PageLayout } from "@/components/layout";

export default function ContactPage() {
  return (
    <PageLayout 
      titleKey="contact.title"
      descriptionKey="contact.subtitle"
    >
      <Contact />
    </PageLayout>
  );
}
