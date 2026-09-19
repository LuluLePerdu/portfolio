import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Arrow } from "@/components/Icons";
import { Photo } from "@/components/Photo";
import { getDictionary } from "@/content/dictionary";
import { getStory, photoInfo, stories } from "@/content/odyssey";
import { type Locale, locales } from "@/lib/i18n";

type Params = Promise<{ lang: string; slug: string }>;

export const dynamicParams = false;

export function generateStaticParams() {
  return locales.flatMap((lang) => stories.map((s) => ({ lang, slug: s.slug })));
}

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { lang, slug } = await params;
  const story = getStory(slug);
  if (!story) return {};
  const locale = lang as Locale;
  return {
    title: `${story.title} — ${story.place[locale]}`,
    description: story.summary[locale],
    alternates: {
      canonical: `/${lang}/odyssey/${slug}/`,
      languages: { "fr-CA": `/fr/odyssey/${slug}/`, "en-CA": `/en/odyssey/${slug}/`, "x-default": `/fr/odyssey/${slug}/` },
    },
  };
}

export default async function StoryPage({ params }: { params: Params }) {
  const { lang, slug } = await params;
  const locale = lang as Locale;
  const story = getStory(slug);
  if (!story) notFound();

  const t = getDictionary(locale).odyssey;
  const index = stories.indexOf(story);
  const next = stories.length > 1 ? stories[(index + 1) % stories.length] : null;
  let n = 0;

  return (
    <>
      <section className="o-hero" aria-labelledby="o-title">
        <Photo photo={story.hero} locale={locale} sizes="100vw" priority />
        <div className="o-hero__veil" aria-hidden="true" />
        <div className="wrap o-hero__inner">
          <Link href={`/${locale}/odyssey/`} className="label link o-hero__back">
            <Arrow dir="left" /> {t.back}
          </Link>
          <h1 id="o-title" className="teaser__title">
            {story.title}
          </h1>
          <p className="teaser__place">{story.place[locale]}</p>
          <dl className="stats">
            {story.stats.map(([k, v]) => (
              <div key={k.en}>
                <dt className="label">{k[locale]}</dt>
                <dd>{v[locale]}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <div className="section" style={{ paddingTop: "clamp(48px, 8vw, 112px)" }}>
        <div className="wrap">
          <p className="lead o-intro reveal">{story.summary[locale]}</p>
        </div>
      </div>

      <div className="section" style={{ paddingTop: 0 }}>
        <div className="wrap">
          {story.chapters.map((chapter, c) => (
            <section key={chapter.title.en} className="chapter" aria-labelledby={`ch-${c}`}>
              <header className="chapter__head reveal">
                <div>
                  <p className="label">
                    <b>{String(c + 1).padStart(2, "0")}</b> / {String(story.chapters.length).padStart(2, "0")}
                  </p>
                  <h2 id={`ch-${c}`} className="chapter__title">
                    {chapter.title[locale]}
                  </h2>
                </div>
                <p className="chapter__text">{chapter.text[locale]}</p>
              </header>

              {chapter.rows.map((row, r) => {
                const total = row.reduce((sum, photo) => {
                  const { w, h } = photoInfo(photo);
                  return sum + w / h;
                }, 0);
                return (
                  <div key={r} className="gallery">
                    {row.map((photo) => {
                      n += 1;
                      const { w, h } = photoInfo(photo);
                      const ratio = w / h;
                      // Share of the row this photo takes, so the browser picks a sharp enough variant.
                      const share = Math.round((ratio / total) * 100);
                      return (
                        <figure
                          key={photo.id}
                          className="shot reveal"
                          style={{ "--r": ratio.toFixed(3) } as React.CSSProperties}
                        >
                          <Photo
                            photo={photo}
                            locale={locale}
                            natural
                            sizes={`(max-width: 560px) 100vw, ${Math.max(share, 20)}vw`}
                          />
                          <figcaption>
                            <span>{String(n).padStart(2, "0")}</span>
                            {photo.caption[locale]}
                          </figcaption>
                        </figure>
                      );
                    })}
                  </div>
                );
              })}
            </section>
          ))}

          <div className="o-foot reveal">
            <Link href={`/${locale}/odyssey/`} className="btn">
              <Arrow dir="left" /> {t.back}
            </Link>
            {next && (
              <Link href={`/${locale}/odyssey/${next.slug}/`} className="btn">
                {next.title} <Arrow className="arrow" />
              </Link>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
