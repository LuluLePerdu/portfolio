'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from './Header.module.scss';
import ThemeToggle from '@/components/ui/controls/ThemeToggle';
import LanguageToggle from '@/components/ui/controls/LanguageToggle';
import { useLanguage } from '@/context/LanguageContext';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const pathname = usePathname();
  const { t } = useLanguage();

  useEffect(() => {
    let ticking = false;
    
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          setIsScrolled(window.scrollY > 50);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Surveiller l'ouverture/fermeture des modals
  useEffect(() => {
    const observer = new MutationObserver(() => {
      const hasModalOpen = document.body.classList.contains('modal-open');
      setIsModalOpen(hasModalOpen);
    });

    observer.observe(document.body, { 
      attributes: true, 
      attributeFilter: ['class'] 
    });

    // Vérification initiale
    setIsModalOpen(document.body.classList.contains('modal-open'));

    return () => observer.disconnect();
  }, []);

  const navLinks = [
    { href: '/work', label: t('header.work') },
    { href: '/about', label: t('header.about') },
    { href: '/photography', label: t('header.photography') },
    { href: '/experience', label: t('header.experience') },
    { href: '/contact', label: t('header.contact') }
  ];

  const isActive = (href: string) => pathname === href;

  return (
    <header className={`${styles.header} ${isScrolled ? styles.scrolled : ''} ${isModalOpen ? styles.modalOpen : ''}`}>      
      <div className={styles.headerContainer}>
        <div className={styles.headerContent}>
          {/* Logo portfolio professionnel */}
          <div className={styles.logo}>
            <div className={styles.logoIcon}>
              <span className={styles.initials}>LD</span>
            </div>
            <div className={styles.logoText}>
              <Link href="/" className={styles.logoLink}>
                <h1 className={styles.logoTitle}>Ludwig-E. Dufour</h1>
                <span className={styles.logoSubtitle}>Full-Stack Developer & Photographer</span>
              </Link>
            </div>
          </div>

          {/* Navigation portfolio */}
          <nav className={styles.nav}>
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`${styles.navLink} ${isActive(link.href) ? styles.active : ''}`}
              >
                <span className={styles.navText}>{link.label}</span>
                <div className={styles.navIndicator}></div>
              </Link>
            ))}
          </nav>

          {/* Call to action */}
          <div className={styles.headerActions}>
            <LanguageToggle />
            <ThemeToggle />
            <Link href="/contact" className={styles.ctaButton}>
              {t('header.cta')}
            </Link>
          </div>

          {/* Mobile menu button */}
          <button 
            className={styles.mobileMenuBtn}
            onClick={() => {
              console.log('Mobile menu button clicked', { isMobileMenuOpen, isModalOpen });
              setIsMobileMenuOpen(!isMobileMenuOpen);
            }}
            aria-label="Toggle menu"
          >
            <div className={`${styles.hamburger} ${isMobileMenuOpen ? styles.hamburgerOpen : ''}`}>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </button>
        </div>
      </div>

      {/* Menu mobile overlay */}
      {isMobileMenuOpen && (
        <div className={styles.mobileMenu}>
          <nav className={styles.mobileNav}>
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`${styles.mobileNavLink} ${isActive(link.href) ? styles.active : ''}`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </nav>
          
          {/* Contrôles mobiles pour langue et thème */}
          <div className={styles.mobileControls}>
            <LanguageToggle />
            <ThemeToggle />
          </div>
        </div>
      )}
    </header>
  );
}