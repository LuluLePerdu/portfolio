'use client';

import styles from './Portfolio.module.scss';
import { useLanguage } from '@/context/LanguageContext';

export default function WorkSimple() {
  const { t } = useLanguage();

  return (
    <section className={styles.portfolio}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.placeholder}>
            <div className={styles.placeholderIcon}>
              <svg width="64" height="64" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <h3 className={styles.placeholderTitle}>{t('work.construction')}</h3>
            <p className={styles.placeholderText}>
              {t('work.constructionText')}
            </p>
            <div className={styles.placeholderStats}>
              <div className={styles.stat}>
                <span className={styles.statNumber}>20+</span>
                <span className={styles.statLabel}>{t('work.projectsCompleted')}</span>
              </div>
              <div className={styles.stat}>
                <span className={styles.statNumber}>25+</span>
                <span className={styles.statLabel}>{t('work.technologiesUsed')}</span>
              </div>
              <div className={styles.stat}>
                <span className={styles.statNumber}>2+</span>
                <span className={styles.statLabel}>{t('work.yearsExperience')}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
