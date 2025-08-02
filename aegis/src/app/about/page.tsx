import { Metadata } from "next";
import { PageLayout } from "@/components/layout";
import About from "@/components/pages/about/About";

export const metadata: Metadata = {
  title: "About Me",
  description: "Learn about Ludwig-E. Dufour, Full-Stack Developer and Computer Engineering student passionate about web development, DevOps, and innovative digital solutions.",
  keywords: [
    "Ludwig Dufour about",
    "Full-Stack Developer bio",
    "Computer Engineering student",
    "DevOps Engineer background",
    "Software developer story",
    "Web development experience",
    "Cégep de Joliette",
    "Université de Sherbrooke",
    "Professional background"
  ],
  openGraph: {
    title: "About Me | Ludwig-E. Dufour",
    description: "Learn about Ludwig-E. Dufour, Full-Stack Developer and Computer Engineering student passionate about creating scalable web solutions.",
    url: '/about',
  },
};

export default function AboutPage() {
  return (
    <PageLayout 
      titleKey="about.title"
      descriptionKey="about.subtitle"
    >
      <About />
    </PageLayout>
  );
}
