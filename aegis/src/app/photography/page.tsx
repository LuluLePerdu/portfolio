import { PageLayout } from "@/components/layout";
import UnavailablePage from "@/components/ui/UnavailablePage";

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
