import { type Photo as PhotoData, photoInfo, src, srcSet } from "@/content/odyssey";
import type { Locale } from "@/lib/i18n";

interface Props {
  photo: PhotoData;
  locale: Locale;
  sizes: string;
  className?: string;
  priority?: boolean;
  /** Keep the natural aspect ratio instead of filling the parent. */
  natural?: boolean;
}

export function Photo({ photo, locale, sizes, className, priority, natural }: Props) {
  const { w, h } = photoInfo(photo);
  return (
    <div className={`photo ${className ?? ""}`} style={natural ? { aspectRatio: `${w} / ${h}` } : undefined}>
      {/* Static export: no image optimizer, so the variants are pre-built by scripts/optimize-images.mjs */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={src(photo)}
        srcSet={srcSet(photo)}
        sizes={sizes}
        width={w}
        height={h}
        alt={photo.caption[locale]}
        loading={priority ? "eager" : "lazy"}
        fetchPriority={priority ? "high" : undefined}
        decoding="async"
      />
    </div>
  );
}
