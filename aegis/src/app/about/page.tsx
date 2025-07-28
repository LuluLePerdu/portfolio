import { Metadata } from "next";
import { PageLayout } from "@/components/layout";
import UnavailablePage from "@/components/ui/UnavailablePage";

export const metadata: Metadata = {
  title: "About Me",
  description: "Learn about Ludwig-E. Dufour, an experienced Full-Stack Developer and DevOps Engineer passionate about creating scalable web solutions and cloud infrastructure.",
  keywords: [
    "Ludwig Dufour about",
    "Full-Stack Developer bio",
    "DevOps Engineer background",
    "Software developer story",
    "Web development experience",
    "Professional background"
  ],
  openGraph: {
    title: "About Me | Ludwig-E. Dufour",
    description: "Learn about Ludwig-E. Dufour, an experienced Full-Stack Developer and DevOps Engineer passionate about creating scalable web solutions.",
    url: '/about',
  },
};

export default function AboutPage() {
  return (
    <PageLayout 
      titleKey="about.title"
      descriptionKey="about.subtitle"
    >
      <UnavailablePage 
        titleKey="unavailable.about.title"
        messageKey="unavailable.about.message"
      />
    </PageLayout>
  );
}
