//export const runtime = 'edge';

import styles from './page.module.scss'

export default function Home() {
  return (
    <main className={styles.container}>
      <div className={styles.hero}>
        <div className={styles.content}>
          <h1 className={styles.title}>
            <span className={styles.greeting}>Welcome to</span>
            <span className={styles.brand}>Aegis</span>
          </h1>
          <p className={styles.subtitle}>
            A digital sanctuary showcasing the craft of a Full-Stack Developer, 
            DevOps Engineer, and Cloud Enthusiast.
          </p>
          <div className={styles.divider}></div>
        </div>
        <div className={styles.decoration}>
          <div className={styles.leaf}></div>
          <div className={styles.leaf}></div>
          <div className={styles.leaf}></div>
        </div>
      </div>
    </main>
  );
}
