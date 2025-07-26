import { Experience } from "@/components/pages";
import { PageLayout } from "@/components/layout";

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
