'use client';

import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';
import styles from './UnavailablePage.module.scss';

interface UnavailablePageProps {
  titleKey: string;
  messageKey: string;
}

export default function UnavailablePage({ titleKey, messageKey }: UnavailablePageProps) {
  const { t } = useLanguage();

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.icon}>
          <svg width="64" height="64" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
          </svg>
        </div>
        <h1 className={styles.title}>{t(titleKey)}</h1>
        <p className={styles.message}>{t(messageKey)}</p>
        <div className={styles.actions}>
          <Link href="/" className={styles.homeButton}>
            {t('common.backToHome')}
          </Link>
        </div>
      </div>
    </div>
  );
}
