import type { Metadata, Viewport } from "next";
import { IBM_Plex_Mono, Instrument_Serif, Jost } from "next/font/google";
import { notFound } from "next/navigation";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Reveal } from "@/components/Reveal";
import { getDictionary } from "@/content/dictionary";
import { links } from "@/content/path";
import { SITE_URL, isLocale, locales } from "@/lib/i18n";
import "../globals.css";

const jost = Jost({ subsets: ["latin"], weight: ["300", "400", "500"], variable: "--font-jost" });
const instrument = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-instrument",
});
const plexMono = IBM_Plex_Mono({ subsets: ["latin"], weight: ["400", "500"], variable: "--font-plex-mono" });

export const dynamicParams = false;

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params;
  if (!isLocale(lang)) return {};
  const t = getDictionary(lang).meta;
  return {
    metadataBase: new URL(SITE_URL),
    title: { default: t.title, template: "%s — Ludwig-Emmanuel Dufour" },
    description: t.description,
    authors: [{ name: "Ludwig-Emmanuel Dufour" }],
    alternates: {
      canonical: `/${lang}/`,
      languages: { "fr-CA": "/fr/", "en-CA": "/en/", "x-default": "/fr/" },
    },
    openGraph: {
      type: "website",
      url: `/${lang}/`,
      siteName: "Ludwig-Emmanuel Dufour",
      title: t.title,
      description: t.description,
      locale: lang === "fr" ? "fr_CA" : "en_CA",
      images: [{ url: "/og.jpg", width: 1200, height: 630 }],
    },
    twitter: { card: "summary_large_image" },
    icons: { icon: "/icon.svg" },
    verification: { google: "DGp8GwgDzDIzjdZKpHTxNWNV7w4tISny92xLd_bKn3A" },
  };
}

export const viewport: Viewport = {
  viewportFit: "cover",
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#0c0e0d" },
    { media: "(prefers-color-scheme: light)", color: "#ebe9e2" },
  ],
};

/** Tells search engines that this site, the GitHub account and the LinkedIn profile are one person. */
function personSchema(lang: string) {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Ludwig-Emmanuel Dufour",
    alternateName: ["Ludwig Dufour", "Ludwig-E. Dufour"],
    url: `${SITE_URL}/${lang}/`,
    image: `${SITE_URL}/og.jpg`,
    email: `mailto:${links.email}`,
    jobTitle: lang === "fr" ? "Développeur full stack" : "Full stack developer",
    description:
      lang === "fr"
        ? "Étudiant en génie informatique à l'Université de Sherbrooke, développeur full stack et fondateur d'un studio web."
        : "Computer engineering student at Université de Sherbrooke, full stack developer and founder of a web studio.",
    knowsLanguage: ["fr-CA", "en"],
    address: {
      "@type": "PostalAddress",
      addressLocality: "Sherbrooke",
      addressRegion: "QC",
      addressCountry: "CA",
    },
    worksFor: { "@type": "Organization", name: "IBM" },
    alumniOf: [
      { "@type": "CollegeOrUniversity", name: "Université de Sherbrooke" },
      { "@type": "CollegeOrUniversity", name: "Cégep régional de Lanaudière à Joliette" },
    ],
    knowsAbout: [
      "Next.js",
      "Java",
      "Spring Boot",
      "TypeScript",
      "Docker",
      "Proxmox",
      "OPNsense",
      "VHDL",
      "CI/CD",
    ],
    sameAs: [links.github, links.linkedin, links.instagram],
  };
}

// Runs before paint: restores the chosen theme and flags that JS is available for reveal animations.
const bootScript = `(function(){var d=document.documentElement;d.classList.add('js');try{var t=localStorage.getItem('theme');if(t==='brume'||t==='noir')d.dataset.theme=t;}catch(e){}})();`;

export default async function LangLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  const t = getDictionary(lang);

  return (
    <html
      lang={lang === "fr" ? "fr-CA" : "en-CA"}
      data-theme="noir"
      className={`${jost.variable} ${instrument.variable} ${plexMono.variable}`}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: bootScript }} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema(lang)) }}
        />
      </head>
      <body id="top">
        <Header locale={lang} nav={t.nav} />
        <main id="main">{children}</main>
        <Footer t={t.footer} />
        <Reveal />
      </body>
    </html>
  );
}
