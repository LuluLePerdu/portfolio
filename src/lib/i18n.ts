export const locales = ["fr", "en"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "fr";

/** A string that exists in both languages. */
export type T = Record<Locale, string>;

export function isLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}

export function other(locale: Locale): Locale {
  return locale === "fr" ? "en" : "fr";
}

export const SITE_URL = "https://ludwig-emmanuel.dev";
