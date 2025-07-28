import { Metadata } from "next";
import { PageLayout } from "@/components/layout";
import UnavailablePage from "@/components/ui/UnavailablePage";

export const metadata: Metadata = {
  title: "Photography Portfolio",
  description: "Explore Ludwig-E. Dufour's photography portfolio showcasing creative visual storytelling and artistic perspectives alongside technical expertise.",
  keywords: [
    "Ludwig Dufour photography",
    "Photography portfolio",
    "Creative photography",
    "Visual storytelling",
    "Developer photographer",
    "Tech photography"
  ],
  openGraph: {
    title: "Photography Portfolio | Ludwig-E. Dufour",
    description: "Explore Ludwig-E. Dufour's photography portfolio showcasing creative visual storytelling and artistic perspectives.",
    url: '/photography',
  },
};

export default function PhotographyPage() {
  return (
    <PageLayout 
      titleKey="photography.title"
      descriptionKey="photography.subtitle"
    >
      <UnavailablePage 
        titleKey="unavailable.photography.title"
        messageKey="unavailable.photography.message"
      />
    </PageLayout>
  );
}
