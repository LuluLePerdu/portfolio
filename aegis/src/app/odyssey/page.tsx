import { Metadata } from "next";
import { Odyssey } from "@/components/pages";
import { PageLayout } from "@/components/layout";

export const metadata: Metadata = {
    title: "My Odyssey - Work in Progress",
    description: "Explore Ludwig-E. Dufour's work in progress on the Odyssey page. Discover upcoming features and projects related to his travel adventures.",
    keywords: [
        "Ludwig Dufour Odyssey",
        "Work in progress",
    ],
};

export default function WorkPage() {
  return (
    <PageLayout 
      titleKey="odyssey.title"
      descriptionKey="odyssey.subtitle"
    >
      <Odyssey />
    </PageLayout>
  );
}
