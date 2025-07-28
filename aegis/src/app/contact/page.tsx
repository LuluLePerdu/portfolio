import { Metadata } from "next";
import { Contact } from "@/components/pages";
import { PageLayout } from "@/components/layout";

export const metadata: Metadata = {
  title: "Contact Me",
  description: "Get in touch with Ludwig-E. Dufour for freelance projects, collaboration opportunities, or technical consulting. Available for Full-Stack Development and DevOps projects.",
  keywords: [
    "Contact Ludwig Dufour",
    "Hire Full-Stack Developer",
    "DevOps Engineer contact",
    "Freelance developer",
    "Technical consulting",
    "Web development services",
    "Software engineering contact"
  ],
  openGraph: {
    title: "Contact Me | Ludwig-E. Dufour",
    description: "Get in touch with Ludwig-E. Dufour for freelance projects, collaboration opportunities, or technical consulting.",
    url: '/contact',
  },
};

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
