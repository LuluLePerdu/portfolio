import { Metadata } from "next";
import { Experience } from "@/components/pages";
import { PageLayout } from "@/components/layout";

export const metadata: Metadata = {
  title: "Professional Experience",
  description: "Discover Ludwig-E. Dufour's professional journey as a Full-Stack Developer and DevOps Engineer. Career timeline, skills, and achievements in web development and cloud technologies.",
  keywords: [
    "Ludwig Dufour experience",
    "Full-Stack Developer career",
    "DevOps Engineer experience",
    "Professional timeline",
    "Software development career",
    "Cloud engineering experience",
    "Tech industry experience"
  ],
  openGraph: {
    title: "Professional Experience | Ludwig-E. Dufour",
    description: "Discover Ludwig-E. Dufour's professional journey as a Full-Stack Developer and DevOps Engineer.",
    url: '/experience',
  },
};

export default function ExperiencePage() {
  return (
    <PageLayout 
      titleKey="experience.title"
      descriptionKey="experience.subtitle"
    >
      <Experience />
    </PageLayout>
  );
}
