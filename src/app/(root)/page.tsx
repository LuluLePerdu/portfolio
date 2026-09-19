import type { Metadata } from "next";
import { SITE_URL } from "@/lib/i18n";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Ludwig-Emmanuel Dufour",
  alternates: {
    canonical: "/fr/",
    languages: { "fr-CA": "/fr/", "en-CA": "/en/", "x-default": "/fr/" },
  },
  robots: { index: false, follow: true },
};

// The site lives under /fr/ and /en/. Pick one from the browser language, French by default.
const pick = `(function(){var l=(navigator.languages&&navigator.languages[0])||navigator.language||'';location.replace(/^en/i.test(l)?'/en/':'/fr/');})();`;

export default function RootPage() {
  return (
    <>
      <script dangerouslySetInnerHTML={{ __html: pick }} />
      <noscript>
        <meta httpEquiv="refresh" content="0; url=/fr/" />
      </noscript>
      <p style={{ fontFamily: "system-ui", color: "#aeaca3", padding: 24 }}>
        <a href="/fr/" style={{ color: "#e8e5dc" }}>
          Français
        </a>{" "}
        ·{" "}
        <a href="/en/" style={{ color: "#e8e5dc" }}>
          English
        </a>
      </p>
    </>
  );
}
