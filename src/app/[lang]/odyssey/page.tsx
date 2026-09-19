import type { Metadata } from "next";
import Link from "next/link";
import { Arrow } from "@/components/Icons";
import { Photo } from "@/components/Photo";
import { getDictionary } from "@/content/dictionary";
import { chapters, journalHero } from "@/content/odyssey";
import type { Locale } from "@/lib/i18n";

type Params = Promise<{ lang: string }>;

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { lang } = await params;
  const t = getDictionary(lang as Locale).odyssey;
  return {
    title: `${t.teaserTitle} — ${t.teaserPlace}`,
    description: t.teaserBody,
    alternates: {
      canonical: `/${lang}/odyssey/`,
      languages: { "fr-CA": "/fr/odyssey/", "en-CA": "/en/odyssey/" },
    },
  };
}


export default async function OdysseyPage({ params }: { params: Params }) {
  const locale = (await params).lang as Locale;
  const t = getDictionary(locale).odyssey;
  let n = 0;

  return (
    <>
      <section className="o-hero" aria-labelledby="o-title">
        <Photo photo={journalHero} locale={locale} sizes="100vw" priority />
        <div className="o-hero__veil" aria-hidden="true" />
        <div className="wrap o-hero__inner">
          <p className="label">
            <b>—</b> {t.label}
          </p>
          <h1 id="o-title" className="teaser__title">
            {t.teaserTitle}
          </h1>
          <p className="teaser__place">{t.teaserPlace}</p>
          <dl className="stats">
            {t.stats.map(([k, v]) => (
              <div key={k}>
                <dt className="label">{k}</dt>
                <dd>{v}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <div className="section" style={{ paddingTop: "clamp(48px, 8vw, 112px)" }}>
        <div className="wrap">
          <p className="lead o-intro reveal">{t.teaserBody}</p>
        </div>
      </div>

      <div className="section" style={{ paddingTop: 0 }}>
        <div className="wrap">
          {chapters.map((chapter, c) => (
            <section key={chapter.title.en} className="chapter" aria-labelledby={`ch-${c}`}>
              <header className="chapter__head reveal">
                <div>
                  <p className="label">
                    <b>{String(c + 1).padStart(2, "0")}</b> / {String(chapters.length).padStart(2, "0")}
                  </p>
                  <h2 id={`ch-${c}`} className="chapter__title">
                    {chapter.title[locale]}
                  </h2>
                </div>
                <p className="chapter__text">{chapter.text[locale]}</p>
              </header>

              {chapter.rows.map((row, r) => (
                <div key={r} className="gallery">
                  {row.map((photo) => {
                    n += 1;
                    const ratio = photo.w / photo.h;
                    return (
                      <figure
                        key={photo.file}
                        className="shot reveal"
                        style={{ "--r": ratio.toFixed(3) } as React.CSSProperties}
                      >
                        <Photo
                          photo={photo}
                          locale={locale}
                          natural
                          sizes={ratio > 1.2 ? "(max-width: 560px) 100vw, 900px" : "(max-width: 560px) 100vw, 480px"}
                        />
                        <figcaption>
                          <span>{String(n).padStart(2, "0")}</span>
                          {photo.caption[locale]}
                        </figcaption>
                      </figure>
                    );
                  })}
                </div>
              ))}
            </section>
          ))}

          <div style={{ marginTop: "clamp(80px, 12vw, 160px)" }} className="reveal">
            <Link href={`/${locale}/`} className="btn">
              <Arrow dir="left" /> {t.back}
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
