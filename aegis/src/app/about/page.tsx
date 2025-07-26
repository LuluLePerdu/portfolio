import { PageLayout } from "@/components/layout";
import UnavailablePage from "@/components/ui/UnavailablePage";

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
