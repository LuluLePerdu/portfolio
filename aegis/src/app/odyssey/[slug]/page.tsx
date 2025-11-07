import { Metadata } from "next";
import { PageLayout } from "@/components/layout";
import SantaCruzBlog from "@/components/pages/odyssey/SantaCruzBlog";

export const runtime = 'edge';

export const metadata: Metadata = {
  title: "Trek Santa Cruz | Ludwig-E. Dufour",
  description: "Une aventure inoubliable à travers la Cordillère Blanche, Pérou. Quatre jours de trek entre lacs turquoise, glaciers majestueux et sommets enneigés.",
  keywords: [
    "Trek Santa Cruz",
    "Cordillère Blanche",
    "Pérou",
    "Photographie de voyage",
    "Aventure",
    "Montagne"
  ],
  openGraph: {
    title: "Trek Santa Cruz | Ludwig-E. Dufour",
    description: "Une aventure inoubliable à travers la Cordillère Blanche, Pérou",
    url: '/odyssey/santa-cruz-peru',
  },
};

export default function SantaCruzPage() {
  return (
    <PageLayout 
      titleKey="odyssey.santaCruz.title"
      descriptionKey="odyssey.santaCruz.subtitle"
    >
      <SantaCruzBlog />
    </PageLayout>
  );
}
