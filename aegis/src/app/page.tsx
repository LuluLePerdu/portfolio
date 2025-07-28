'use client';

import styles from './page.module.scss'
import { useLanguage } from '@/context/LanguageContext';
import { PortfolioSimple, Skills } from "@/components/pages";

//export const runtime = 'edge';

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
    
    </>
  );
}
