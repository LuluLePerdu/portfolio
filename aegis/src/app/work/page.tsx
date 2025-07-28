import { Metadata } from "next";
import { WorkSimple } from "@/components/pages";
import { PageLayout } from "@/components/layout";

export const metadata: Metadata = {
  title: "Projects & Work",
  description: "Explore Ludwig-E. Dufour's portfolio of full-stack web applications, DevOps solutions, and innovative software projects. Featuring React, Next.js, TypeScript, and cloud technologies.",
  keywords: [
    "Ludwig Dufour projects",
    "Full-Stack projects",
    "React applications",
    "Next.js portfolio",
    "DevOps projects",
    "Web development portfolio",
    "Software engineering",
    "Cloud applications"
  ],
  openGraph: {
    title: "Projects & Work | Ludwig-E. Dufour",
    description: "Explore Ludwig-E. Dufour's portfolio of full-stack web applications, DevOps solutions, and innovative software projects.",
    url: '/work',
  },
};

export default function WorkPage() {
  return (
    <PageLayout 
      titleKey="work.title"
      descriptionKey="work.subtitle"
    >
      <WorkSimple />
    </PageLayout>
  );
}
