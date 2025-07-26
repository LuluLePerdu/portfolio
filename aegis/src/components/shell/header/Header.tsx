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

  const navLinks = [
    { href: '/work', label: t('header.work'), disabled: false },
    { href: '/about', label: t('header.about'), disabled: true },
    { href: '/photography', label: t('header.photography'), disabled: true },
    { href: '/experience', label: t('header.experience'), disabled: false },
    { href: '/contact', label: t('header.contact'), disabled: false }
  ];

  const isActive = (href: string) => pathname === href;

  return (
    <header className={`${styles.header} ${isScrolled ? styles.scrolled : ''}`}>      
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
              link.disabled ? (
                <span
                  key={link.href}
                  className={`${styles.navLink} ${styles.disabled}`}
                >
                  <span className={styles.navText}>{link.label}</span>
                  <div className={styles.navIndicator}></div>
                </span>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`${styles.navLink} ${isActive(link.href) ? styles.active : ''}`}
                >
                  <span className={styles.navText}>{link.label}</span>
                  <div className={styles.navIndicator}></div>
                </Link>
              )
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
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
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
              link.disabled ? (
                <span
                  key={link.href}
                  className={`${styles.mobileNavLink} ${styles.disabled}`}
                >
                  {link.label}
                </span>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`${styles.mobileNavLink} ${isActive(link.href) ? styles.active : ''}`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              )
            ))}
            
            {/* Mobile actions */}
            <div className={styles.mobileActions}>
              <LanguageToggle />
              <ThemeToggle />
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}