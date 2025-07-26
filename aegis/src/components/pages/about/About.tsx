'use client';

import styles from './About.module.scss';
import { useLanguage } from '@/context/LanguageContext';

export default function About() {
  const { t } = useLanguage();
  return (
    <section id="about" className={styles.about}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.imageSection}>
            <div className={styles.imageWrapper}>
              <div className={styles.imagePlaceholder}>
                <svg width="80" height="80" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                </svg>
              </div>
            </div>
            <div className={styles.badges}>
              <span className={styles.badge}>{t('about.badges.fullstack')}</span>
              <span className={styles.badge}>{t('about.badges.devops')}</span>
              <span className={styles.badge}>{t('about.badges.photographer')}</span>
            </div>
          </div>
          
          <div className={styles.textSection}>
            <h2 className={styles.title}>{t('about.title')}</h2>
            <div className={styles.description}>
              <p>
                {t('about.description.paragraph1')}
              </p>
              <p>
                {t('about.description.paragraph2')}
              </p>
              <p>
                {t('about.description.paragraph3')}
              </p>
            </div>
            
            <div className={styles.stats}>
              <div className={styles.stat}>
                <span className={styles.number}>50+</span>
                <span className={styles.label}>{t('about.stats.projects')}</span>
              </div>
              <div className={styles.stat}>
                <span className={styles.number}>5+</span>
                <span className={styles.label}>{t('about.stats.experience')}</span>
              </div>
              <div className={styles.stat}>
                <span className={styles.number}>15+</span>
                <span className={styles.label}>{t('about.stats.technologies')}</span>
              </div>
            </div>
            
            <div className={styles.actions}>
              <a href="#contact" className={styles.primaryBtn}>
                {t('about.actions.contact')}
              </a>
              <a href="/resume.pdf" className={styles.secondaryBtn} target="_blank">
                {t('about.actions.downloadCV')}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
