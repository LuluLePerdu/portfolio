'use client';

import { useState, useEffect } from 'react';
import styles from './Header.module.scss';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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
              <h1 className={styles.logoTitle}>Ludwig-E. Dufour</h1>
              <span className={styles.logoSubtitle}>Full-Stack Developer & Photographer</span>
            </div>
          </div>

          {/* Navigation portfolio */}
          <nav className={styles.nav}>
            <a href="#work" className={styles.navLink}>
              <span className={styles.navText}>Work</span>
              <div className={styles.navIndicator}></div>
            </a>
            <a href="#about" className={styles.navLink}>
              <span className={styles.navText}>About</span>
              <div className={styles.navIndicator}></div>
            </a>
            <a href="#photography" className={styles.navLink}>
              <span className={styles.navText}>Photography</span>
              <div className={styles.navIndicator}></div>
            </a>
            <a href="#experience" className={styles.navLink}>
              <span className={styles.navText}>Experience</span>
              <div className={styles.navIndicator}></div>
            </a>
            <a href="#contact" className={styles.navLink}>
              <span className={styles.navText}>Contact</span>
              <div className={styles.navIndicator}></div>
            </a>
          </nav>

          {/* Call to action */}
          <div className={styles.headerActions}>
            <a href="#contact" className={styles.ctaButton}>
              Let&apos;s Talk
            </a>
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
            <a href="#work" className={styles.mobileNavLink} onClick={() => setIsMobileMenuOpen(false)}>
              Work
            </a>
            <a href="#about" className={styles.mobileNavLink} onClick={() => setIsMobileMenuOpen(false)}>
              About
            </a>
            <a href="#photography" className={styles.mobileNavLink} onClick={() => setIsMobileMenuOpen(false)}>
              Photography
            </a>
            <a href="#experience" className={styles.mobileNavLink} onClick={() => setIsMobileMenuOpen(false)}>
              Experience
            </a>
            <a href="#contact" className={styles.mobileNavLink} onClick={() => setIsMobileMenuOpen(false)}>
              Contact
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}