import Link from "next/link";
import { ContactForm } from "@/components/ContactForm";
import { Arrow } from "@/components/Icons";
import { Photo } from "@/components/Photo";
import { Topo } from "@/components/Topo";
import { getDictionary } from "@/content/dictionary";
import { heroPhoto, me, stories } from "@/content/odyssey";
import { certifications, education, jobs, languages, links, skills } from "@/content/path";
import { projects } from "@/content/projects";
import { type Locale } from "@/lib/i18n";

export default async function Home({ params }: { params: Promise<{ lang: string }> }) {
  const locale = (await params).lang as Locale;
  const t = getDictionary(locale);
  const story = stories[0];

  return (
    <>
      {/* ---------------------------------------------------------------- Hero */}
      <section className="hero" aria-labelledby="hero-name">
        <Photo photo={heroPhoto} locale={locale} sizes="100vw" className="hero__photo" priority />
        <div className="hero__veil" aria-hidden="true" />

        <div className="wrap hero__center">
          <p className="label hero__kicker">{t.hero.kicker}</p>
          <h1 id="hero-name" className="hero__name">
            <span>Ludwig-Emmanuel</span>
            <span>Dufour</span>
          </h1>
          <p className="hero__role">{t.hero.role}</p>
        </div>

        <div className="wrap hero__foot">
          <ul className="hero__motto">
            {t.hero.motto.map((w) => (
              <li key={w}>{w}</li>
            ))}
          </ul>
          <a href="#profil" className="scroll-cue">
            {t.hero.scroll}
          </a>
          <p className="hero__coords">
            45.40° N — 71.89° {locale === "fr" ? "O" : "W"}
            <br />
            Sherbrooke, QC
          </p>
        </div>
      </section>

      {/* ---------------------------------------------------------------- Profile */}
      <section id="profil" className="section" aria-labelledby="profil-title">
        <div className="wrap about">
          <div className="about__aside reveal">
            <Photo
              photo={me.portrait}
              locale={locale}
              sizes="(max-width: 820px) 320px, 420px"
              className="about__portrait"
            />
            <p className="about__caption label">
              <span>L—E. Dufour</span>
              <span>
                <b>01</b> / {t.about.label}
              </span>
            </p>
          </div>

          <div className="about__body">
            <div className="reveal">
              <p className="greeting">{t.about.greeting}</p>
              <h2 id="profil-title" className="lead">
                {t.about.lead}
              </h2>
            </div>
            <div className="about__text reveal">
              {t.about.body.map((p) => (
                <p key={p.slice(0, 24)}>{p}</p>
              ))}
            </div>
            <dl className="facts reveal">
              {t.about.facts.map(([k, v]) => (
                <div key={k}>
                  <dt className="label">{k}</dt>
                  <dd>{v}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------------------- Interlude */}
      <figure className="band reveal" aria-label={me.ridge.caption[locale]}>
        <Photo photo={me.ridge} locale={locale} sizes="(max-width: 1600px) 100vw, 1600px" />
        <figcaption className="wrap band__caption">
          <span className="serif">{t.about.band}</span>
        </figcaption>
      </figure>

      {/* ---------------------------------------------------------------- Work */}
      <section id="projets" className="section" aria-labelledby="work-title" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="section__head reveal">
            <div>
              <p className="label">
                <b>02</b> / {t.nav.work}
              </p>
              <h2 id="work-title" className="section__title" style={{ marginTop: 16 }}>
                {t.work.label}
              </h2>
            </div>
            <p className="section__intro">{t.work.intro}</p>
          </div>

          <ol className="work">
            {projects.map((p, i) => (
              <li key={p.slug} className="reveal">
                <Link href={`/${locale}/work/${p.slug}/`} className="work__item" aria-label={`${p.title} — ${t.work.open}`}>
                  <span className="work__num">{String(i + 1).padStart(2, "0")}</span>
                  <span>
                    <span className="work__title">{p.title}</span>
                    <span className="work__kind label">{p.kind[locale]}</span>
                  </span>
                  <span className="work__summary">{p.summary[locale]}</span>
                  <span className="work__year">{p.year}</span>
                  <Arrow className="work__arrow" />
                </Link>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ---------------------------------------------------------------- Path */}
      <section id="parcours" className="section section--forest" aria-labelledby="path-title">
        <Topo seed="parcours" className="topo--path" rings={14} cx={0.86} cy={0.12} />
        <div className="wrap" style={{ position: "relative" }}>
          <div className="section__head reveal">
            <div>
              <p className="label">
                <b>03</b> / {t.nav.path}
              </p>
              <h2 id="path-title" className="section__title" style={{ marginTop: 16 }}>
                {t.path.label}
              </h2>
            </div>
            <p className="section__intro">{t.path.intro}</p>
          </div>

          <div className="path">
            <div>
              <h3 className="label path__col-title">{t.path.experience}</h3>
              <ol className="jobs">
                {jobs.map((job) => (
                  <li key={job.org} className="job reveal">
                    <p className="job__period">
                      {job.period[locale]}
                      {job.current && (
                        <>
                          <br />
                          <span className="now">{t.path.present}</span>
                        </>
                      )}
                    </p>
                    <div>
                      <h4 className="job__org">{job.org}</h4>
                      <p className="job__role">
                        {job.role[locale]} — {job.place}
                      </p>
                      <ul className="job__points">
                        {job.points.map((pt) => (
                          <li key={pt.en.slice(0, 24)}>{pt[locale]}</li>
                        ))}
                      </ul>
                      {job.stack && (
                        <ul className="chips" aria-label={t.work.stack}>
                          {job.stack.map((s) => (
                            <li key={s} className="chip">
                              {s}
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </li>
                ))}
              </ol>
            </div>

            <aside>
              <div className="side-block reveal">
                <h3 className="label path__col-title">{t.path.education}</h3>
                <ul className="side-list">
                  {education.map((e) => (
                    <li key={e.school}>
                      <span>{e.title[locale]}</span>
                      <span className="muted">{e.school}</span>
                      <span className="label">{e.period[locale]}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="side-block reveal">
                <h3 className="label path__col-title">{t.path.skills}</h3>
                <dl className="skills">
                  {skills.map((s) => (
                    <div key={s.group.en}>
                      <dt className="label">{s.group[locale]}</dt>
                      <dd>{s.items.join(" · ")}</dd>
                    </div>
                  ))}
                </dl>
              </div>

              <div className="side-block reveal">
                <h3 className="label path__col-title">{t.path.certifications}</h3>
                <ul className="side-list">
                  {certifications.map((c) => (
                    <li key={c.name.en} className="row">
                      <span>{c.name[locale]}</span>
                      <span className="label">{c.year}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="side-block reveal">
                <h3 className="label path__col-title">{t.path.languages}</h3>
                <ul className="side-list">
                  {languages.map((l) => (
                    <li key={l.name.en} className="row">
                      <span>{l.name[locale]}</span>
                      <span className="muted">{l.level[locale]}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="side-block reveal">
                <a className="btn" href="/cv.pdf" download="CV-Ludwig-Emmanuel-Dufour.pdf">
                  {t.path.cv}
                  <Arrow className="arrow" dir="out" />
                </a>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------------------- Odyssey */}
      <section className="teaser" aria-labelledby="teaser-title">
        <Photo photo={story.cover} locale={locale} sizes="100vw" />
        <div className="teaser__veil" aria-hidden="true" />
        <div className="wrap teaser__inner">
          <div className="reveal">
            <p className="label">
              <b>04</b> / {t.odyssey.label}
            </p>
            <h2 id="teaser-title" className="teaser__title">
              {story.title}
            </h2>
            <p className="teaser__place">{story.place[locale]}</p>
          </div>
          <div className="reveal" style={{ "--d": "0.15s" } as React.CSSProperties}>
            <p className="teaser__body">{story.summary[locale]}</p>
            <div className="teaser__actions">
              <Link className="btn" href={`/${locale}/odyssey/${story.slug}/`}>
                {t.odyssey.open}
                <Arrow className="arrow" />
              </Link>
              {stories.length > 1 && (
                <Link className="label link" href={`/${locale}/odyssey/`}>
                  {t.odyssey.all}
                </Link>
              )}
            </div>
            <dl className="stats">
              {story.stats.map(([k, v]) => (
                <div key={k.en}>
                  <dt className="label">{k[locale]}</dt>
                  <dd>{v[locale]}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------------------- Contact */}
      <section id="contact" className="section" aria-labelledby="contact-title">
        <div className="wrap contact">
          <div className="reveal">
            <p className="label">
              <b>05</b> / {t.contact.label}
            </p>
            <h2 id="contact-title" className="contact__title">
              {t.contact.title}
            </h2>
            <p className="contact__intro">{t.contact.intro}</p>
            <a className="contact__mail link" href={`mailto:${links.email}`}>
              {links.email}
            </a>
            <nav className="elsewhere" aria-label={t.contact.elsewhere}>
              <a href={links.linkedin} target="_blank" rel="noopener noreferrer">
                LinkedIn <Arrow dir="out" />
              </a>
              <a href={links.github} target="_blank" rel="noopener noreferrer">
                GitHub <Arrow dir="out" />
              </a>
              <a href={links.instagram} target="_blank" rel="noopener noreferrer">
                Instagram <Arrow dir="out" />
              </a>
            </nav>
          </div>
          <div className="reveal" style={{ "--d": "0.1s" } as React.CSSProperties}>
            <ContactForm t={t.contact} locale={locale} />
          </div>
        </div>
      </section>
    </>
  );
}
