"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import type { Dictionary } from "@/content/dictionary";
import { type Locale, other } from "@/lib/i18n";
import { Mark } from "./Mark";

type Theme = "noir" | "brume";

function readTheme(): Theme {
  return document.documentElement.dataset.theme === "brume" ? "brume" : "noir";
}

export function Header({ locale, nav }: { locale: Locale; nav: Dictionary["nav"] }) {
  const pathname = usePathname();
  const [solid, setSolid] = useState(false);
  const [open, setOpen] = useState(false);
  const [theme, setTheme] = useState<Theme>("noir");

  useEffect(() => setTheme(readTheme()), []);

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 48);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const toggleTheme = () => {
    const next: Theme = theme === "noir" ? "brume" : "noir";
    document.documentElement.dataset.theme = next;
    try {
      localStorage.setItem("theme", next);
    } catch {}
    setTheme(next);
  };

  const home = `/${locale}/`;
  const links = [
    { href: `${home}#profil`, label: nav.about },
    { href: `${home}#projets`, label: nav.work },
    { href: `${home}#parcours`, label: nav.path },
    { href: `/${locale}/odyssey/`, label: nav.odyssey },
    { href: `${home}#contact`, label: nav.contact },
  ];
  const altLocale = other(locale);
  const altPath = pathname.replace(/^\/(fr|en)(?=\/|$)/, `/${altLocale}`);

  const tools = (
    <>
      <button type="button" className="tool" onClick={toggleTheme} aria-label={nav.theme}>
        <span className="tool__dot" aria-hidden="true" />
        {theme === "noir" ? nav.themeLight : nav.themeDark}
      </button>
      <Link className="tool" href={altPath} hrefLang={altLocale} lang={altLocale}>
        {nav.lang}
      </Link>
    </>
  );

  return (
    <>
      <a className="skip" href="#main">
        {nav.skip}
      </a>
      <header className="header" data-solid={solid} data-over-photo={!solid}>
        <div className="wrap header__inner">
          <Link href={home} className="brand" aria-label="Ludwig-Emmanuel Dufour">
            <Mark className="brand__mark" />
            <span className="brand__name">L—E Dufour</span>
          </Link>
          <nav className="nav" aria-label="Principal">
            <ul className="nav__links">
              {links.map((l) => (
                <li key={l.href}>
                  <Link href={l.href}>{l.label}</Link>
                </li>
              ))}
            </ul>
            <div className="nav__tools">{tools}</div>
            <Link
              className="tool nav__lang"
              href={altPath}
              hrefLang={altLocale}
              lang={altLocale}
              aria-label={nav.lang}
            >
              {altLocale.toUpperCase()}
            </Link>
            <button
              type="button"
              className="menu-btn"
              aria-expanded={open}
              aria-controls="drawer"
              onClick={() => setOpen(true)}
            >
              {nav.menu}
              <span className="menu-btn__lines" aria-hidden="true" />
            </button>
          </nav>
        </div>
      </header>

      <div id="drawer" className="drawer" data-open={open} aria-hidden={!open} inert={!open}>
        <div className="drawer__top">
          <Link href={home} className="brand" aria-label="Ludwig-Emmanuel Dufour">
            <Mark className="brand__mark" />
            <span className="brand__name">L—E Dufour</span>
          </Link>
          <button type="button" className="menu-btn" onClick={() => setOpen(false)}>
            {nav.close}
          </button>
        </div>
        <nav className="drawer__links" aria-label="Mobile">
          {links.map((l, i) => (
            <Link key={l.href} href={l.href} onClick={() => setOpen(false)}>
              <span>0{i + 1}</span>
              {l.label}
            </Link>
          ))}
        </nav>
        <div className="drawer__tools">{tools}</div>
      </div>
    </>
  );
}
