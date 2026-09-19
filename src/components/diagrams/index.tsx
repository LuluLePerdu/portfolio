import type { Locale } from "@/lib/i18n";
import { NetworkDiagram } from "./NetworkDiagram";
import { PixelPipeline } from "./PixelPipeline";

const byProject: Record<string, (props: { locale: Locale }) => React.ReactElement> = {
  "aether-homelab": NetworkDiagram,
  "fpga-retro": PixelPipeline,
};

export function ProjectDiagram({ slug, locale }: { slug: string; locale: Locale }) {
  const Diagram = byProject[slug];
  return Diagram ? <Diagram locale={locale} /> : null;
}
