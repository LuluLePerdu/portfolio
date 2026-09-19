import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ProjectDiagram } from "@/components/diagrams";
import { Arrow } from "@/components/Icons";
import { Topo } from "@/components/Topo";
import { getDictionary } from "@/content/dictionary";
import { getProject, projects } from "@/content/projects";
import { type Locale, type T, locales } from "@/lib/i18n";

type Params = Promise<{ lang: string; slug: string }>;

export const dynamicParams = false;

export function generateStaticParams() {
  return locales.flatMap((lang) => projects.map((p) => ({ lang, slug: p.slug })));
}

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { lang, slug } = await params;
  const project = getProject(slug);
  if (!project) return {};
  const locale = lang as Locale;
  return {
    title: project.title,
    description: project.summary[locale],
    alternates: {
      canonical: `/${lang}/work/${slug}/`,
      languages: { "fr-CA": `/fr/work/${slug}/`, "en-CA": `/en/work/${slug}/` },
    },
  };
}

const text = (cell: string | T, locale: Locale) => (typeof cell === "string" ? cell : cell[locale]);

export default async function ProjectPage({ params }: { params: Params }) {
  const { lang, slug } = await params;
  const locale = lang as Locale;
  const project = getProject(slug);
  if (!project) notFound();

  const t = getDictionary(locale).work;
  const index = projects.indexOf(project);
  const next = projects[(index + 1) % projects.length];
  const [head, ...rows] = project.table?.rows ?? [];

  return (
    <article>
      <header className="p-hero">
        <Topo seed={project.slug} />
        <div className="wrap" style={{ position: "relative" }}>
          <Link href={`/${locale}/#projets`} className="p-back label link">
            <Arrow dir="left" /> {t.back}
          </Link>
          <p className="label">
            <b>{String(index + 1).padStart(2, "0")}</b> / {project.kind[locale]}
          </p>
          <h1 className="p-title">{project.title}</h1>
          <p className="p-summary">{project.summary[locale]}</p>

          <dl className="p-meta">
            <div>
              <dt className="label">{t.year}</dt>
              <dd>
                {project.year} · {t.status[project.status]}
              </dd>
            </div>
            <div>
              <dt className="label">{t.role}</dt>
              <dd>{project.role[locale]}</dd>
            </div>
            <div>
              <dt className="label">{t.team}</dt>
              <dd>{project.team[locale]}</dd>
            </div>
            <div>
              <dt className="label">{t.duration}</dt>
              <dd>{project.duration[locale]}</dd>
            </div>
          </dl>
        </div>
      </header>

      <div className="section">
        <div className="wrap">
          <section className="p-body reveal">
            <h2 className="label">{t.context}</h2>
            <div>
              <p className="lead" style={{ fontSize: "clamp(1.4rem, 2.6vw, 2.2rem)" }}>
                {project.context[locale]}
              </p>
            </div>
          </section>

          <div className="p-figure reveal">
            <ProjectDiagram slug={project.slug} locale={locale} />
          </div>

          <section className="p-body reveal">
            <h2 className="label">{t.approach}</h2>
            <div>
              <ol className="steps">
                {project.approach.map((step) => (
                  <li key={step.en.slice(0, 24)}>{step[locale]}</li>
                ))}
              </ol>
              {project.table && (
                <div className="table-wrap" style={{ marginTop: 48 }}>
                  <table className="table">
                    <caption className="label">{project.table.caption[locale]}</caption>
                    <thead>
                      <tr>
                        {head.map((cell, i) => (
                          <th key={i} scope="col">
                            {text(cell, locale)}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {rows.map((row, r) => (
                        <tr key={r}>
                          {row.map((cell, i) => (
                            <td key={i}>{text(cell, locale)}</td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </div>
          </section>

          <section className="p-body reveal">
            <h2 className="label">{t.outcome}</h2>
            <div>
              <p className="p-text">{project.outcome[locale]}</p>
            </div>
          </section>

          <section className="p-body reveal">
            <h2 className="label">{t.stack}</h2>
            <div>
              <ul className="chips" style={{ marginTop: 0 }}>
                {project.stack.map((s) => (
                  <li key={s} className="chip">
                    {s}
                  </li>
                ))}
              </ul>
              {(project.source || project.live) && (
                <div className="p-links" style={{ marginTop: 40 }}>
                  {project.live && (
                    <a className="btn btn--solid" href={project.live} target="_blank" rel="noopener noreferrer">
                      {t.live} <Arrow className="arrow" dir="out" />
                    </a>
                  )}
                  {project.source && (
                    <a className="btn" href={project.source} target="_blank" rel="noopener noreferrer">
                      {t.source} <Arrow className="arrow" dir="out" />
                    </a>
                  )}
                </div>
              )}
            </div>
          </section>
        </div>
      </div>

      <Link href={`/${locale}/work/${next.slug}/`} className="p-next">
        <span className="wrap" style={{ display: "block" }}>
          <span className="label">{t.next}</span>
          <span className="p-next__title">
            {next.title}
            <Arrow />
          </span>
        </span>
      </Link>
    </article>
  );
}
