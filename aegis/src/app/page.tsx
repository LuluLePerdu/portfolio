import { Metadata } from "next";
import styles from './page.module.scss'
import { useLanguage } from '@/context/LanguageContext';
import { PortfolioSimple, Skills } from "@/components/pages";

export const metadata: Metadata = {
  title: "Home",
  description: "Welcome to Ludwig-E. Dufour's portfolio. Experienced Full-Stack Developer & DevOps Engineer creating innovative web solutions with modern technologies like React, Next.js, and cloud infrastructure.",
  openGraph: {
    title: "Ludwig-E. Dufour | Full-Stack Developer & DevOps Engineer",
    description: "Welcome to Ludwig-E. Dufour's portfolio. Experienced Full-Stack Developer & DevOps Engineer creating innovative web solutions.",
    url: '/',
  },
};

//export const runtime = 'edge';

'use client';

export default function Home() {
  const { t } = useLanguage();

  return (
    <>
      <main className={styles.container}>
        <div className={styles.hero}>
          <div className={styles.content}>
            <h1 className={styles.title}>
              <span className={styles.greeting}>{t('home.welcome')}</span>
              <span className={styles.greeting}>{t('home.project')}</span>
              <span className={`${styles.brand} ${styles.aegis}`}>Aegis</span>
            </h1>
            <p className={styles.subtitle}>
              {t('home.subtitle')}
            </p>
            <div className={styles.cta}>
              <a href="/work" className={styles.ctaButton}>
                {t('home.viewWork')}
              </a>
              <a href="/about" className={styles.ctaButtonSecondary}>
                {t('home.learnMore')}
              </a>
            </div>
            <div className={styles.divider}></div>
          </div>
          <div className={styles.decoration}>
            <div className={styles.leaf}></div>
            <div className={styles.leaf}></div>
            <div className={styles.leaf}></div>
            <div className={styles.leaf}></div>
            <div className={styles.leaf}></div>
            <div className={styles.leaf}></div>
            <div className={styles.leaf}></div>
            <div className={styles.leaf}></div>
            <div className={styles.leaf}></div>
            <div className={styles.leaf}></div>
          </div>
        </div>
      </main>
      
      {/* Section Skills pour le contenu SEO */}
      <section style={{ position: 'relative', zIndex: 1 }}>
        <Skills />
      </section>
      
      {/* Section Portfolio pour le contenu SEO */}
      <section style={{ position: 'relative', zIndex: 1 }}>
        <PortfolioSimple />
      </section>
    </>
  );
}
