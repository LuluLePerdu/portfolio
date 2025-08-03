'use client';

import { useLanguage } from '@/context/LanguageContext';
import styles from './LanguageToggle.module.scss';

export default function LanguageToggle() {
  const { language, setLanguage } = useLanguage();

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'fr' : 'en');
  };

  return (
    <button 
      onClick={toggleLanguage}
      type="button"
      className={styles.languageToggle}
      aria-label={`Switch to ${language === 'en' ? 'French' : 'English'}`}
    >
      <div className={styles.languageDisplay}>
        <span className={styles.currentLanguage}>
          {language.toUpperCase()}
        </span>
        <span className={styles.languageIcon}>
          {language === 'en' ? '🇫🇷' : 'en'}
        </span>
      </div>
    </button>
  );
}
