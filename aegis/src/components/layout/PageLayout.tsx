'use client';

import styles from './PageLayout.module.scss';
import { useLanguage } from '@/context/LanguageContext';

interface PageLayoutProps {
  children: React.ReactNode;
  titleKey?: string;
  descriptionKey?: string;
  title?: string;
  description?: string;
}

export default function PageLayout({ 
  children, 
  titleKey, 
  descriptionKey, 
  title, 
  description 
}: PageLayoutProps) {
  const { t } = useLanguage();
  
  const displayTitle = titleKey ? t(titleKey) : title;
  const displayDescription = descriptionKey ? t(descriptionKey) : description;

  return (
    <div className={styles.pageContainer}>
      {displayTitle && (
        <div className={styles.pageHeader}>
          <h1 className={styles.pageTitle}>{displayTitle}</h1>
          {displayDescription && <p className={styles.pageDescription}>{displayDescription}</p>}
        </div>
      )}
      <div className={styles.pageContent}>
        {children}
      </div>
    </div>
  );
}
