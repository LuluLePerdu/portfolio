import { WorkSimple } from "@/components/pages";
import { PageLayout } from "@/components/layout";

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
