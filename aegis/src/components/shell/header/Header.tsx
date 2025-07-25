import styles from './Header.module.scss';

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.headerContainer}>
        <div className={styles.headerContent}>
          {/* Logo/Name avec style mythologique */}
          <div className={styles.logo}>
            <h1 className={styles.logoTitle}>Aegis</h1>
            <span className={styles.logoSubtitle}>Digital Sanctuary</span>
          </div>

          {/* Navigation épurée */}
          <nav className={styles.nav}>
            <a href="#about" className={styles.navLink}>About</a>
            <a href="#projects" className={styles.navLink}>Projects</a>
            <a href="#skills" className={styles.navLink}>Skills</a>
            <a href="#contact" className={styles.navLink}>Contact</a>
          </nav>

          {/* Mobile menu button */}
          <button className={styles.mobileMenuBtn}>
            <svg className={styles.hamburger} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
}