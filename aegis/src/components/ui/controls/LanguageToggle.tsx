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
      onTouchStart={(e) => {
        // Améliorer la réactivité sur mobile
        e.currentTarget.style.transform = 'scale(0.95)';
      }}
      onTouchEnd={(e) => {
        // Remettre l'échelle normale après le touch
        e.currentTarget.style.transform = '';
      }}
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
