import type { Metadata } from "next";
import Link from "next/link";
import { Arrow } from "@/components/Icons";
import { Photo } from "@/components/Photo";
import { Topo } from "@/components/Topo";
import { getDictionary } from "@/content/dictionary";
import { stories } from "@/content/odyssey";
import type { Locale } from "@/lib/i18n";

type Params = Promise<{ lang: string }>;

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { lang } = await params;
  const t = getDictionary(lang as Locale).odyssey;
  return {
    title: t.title,
    description: t.intro,
    alternates: {
      canonical: `/${lang}/odyssey/`,
      languages: { "fr-CA": "/fr/odyssey/", "en-CA": "/en/odyssey/" },
    },
  };
}

export default async function OdysseyIndex({ params }: { params: Params }) {
  const locale = (await params).lang as Locale;
  const t = getDictionary(locale).odyssey;

  return (
    <>
      <header className="p-hero">
        <Topo seed="odyssey" />
        <div className="wrap" style={{ position: "relative" }}>
          <p className="label">
            <b>{String(stories.length).padStart(2, "0")}</b> / {t.label}
          </p>
          <h1 className="p-title">{t.title}</h1>
          <p className="p-summary">{t.intro}</p>
        </div>
      </header>

      <div className="section">
        <div className="wrap stories">
          {stories.map((story, i) => {
            const photoCount = story.chapters.reduce((sum, c) => sum + c.rows.flat().length, 0);
            return (
              <Link
                key={story.slug}
                href={`/${locale}/odyssey/${story.slug}/`}
                className="story-card reveal"
                style={{ "--d": `${i * 0.08}s` } as React.CSSProperties}
              >
                <Photo photo={story.cover} locale={locale} sizes="(max-width: 820px) 100vw, 50vw" />
                <span className="story-card__body">
                  <span className="label">
                    {story.year} · {photoCount} {t.photos}
                  </span>
                  <span className="story-card__title">{story.title}</span>
                  <span className="teaser__place">{story.place[locale]}</span>
                  <span className="story-card__summary">{story.summary[locale]}</span>
                  <span className="story-card__cta label">
                    {t.open} <Arrow />
                  </span>
                </span>
              </Link>
            );
          })}
        </div>
      </div>
    </>
  );
}
