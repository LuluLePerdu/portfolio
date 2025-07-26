'use client';

import styles from './Skills.module.scss';
import { useLanguage } from '@/context/LanguageContext';

const skills = [
  {
    category: 'Frontend',
    technologies: [
      { name: 'React', level: 95, icon: '⚛️' },
      { name: 'Next.js', level: 90, icon: '🔺' },
      { name: 'TypeScript', level: 88, icon: '📘' },
      { name: 'Vue.js', level: 85, icon: '💚' },
      { name: 'Tailwind CSS', level: 92, icon: '🎨' },
      { name: 'SCSS/Sass', level: 90, icon: '💅' },
    ]
  },
  {
    category: 'Backend',
    technologies: [
      { name: 'Node.js', level: 92, icon: '🟢' },
      { name: 'Python', level: 88, icon: '🐍' },
      { name: 'Express.js', level: 90, icon: '🚀' },
      { name: 'PostgreSQL', level: 85, icon: '🐘' },
      { name: 'MongoDB', level: 87, icon: '🍃' },
      { name: 'Redis', level: 80, icon: '🔴' },
    ]
  },
  {
    category: 'DevOps & Cloud',
    technologies: [
      { name: 'Docker', level: 88, icon: '🐳' },
      { name: 'AWS', level: 85, icon: '☁️' },
      { name: 'Kubernetes', level: 82, icon: '⚙️' },
      { name: 'GitHub Actions', level: 90, icon: '🔄' },
      { name: 'Terraform', level: 78, icon: '🏗️' },
      { name: 'Linux', level: 87, icon: '🐧' },
    ]
  }
];

export default function Skills() {
  const { t } = useLanguage();
  
  const getCategoryKey = (category: string) => {
    switch (category) {
      case 'Frontend': return 'skills.frontend';
      case 'Backend': return 'skills.backend';
      case 'DevOps & Cloud': return 'skills.devops';
      default: return 'skills.other';
    }
  };
  
  return (
    <section id="skills" className={styles.skills}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>{t('skills.title')}</h2>
          <p className={styles.subtitle}>
            {t('skills.subtitle')}
          </p>
        </div>
        
        <div className={styles.skillsGrid}>
          {skills.map((category, categoryIndex) => (
            <div key={categoryIndex} className={styles.categoryCard}>
              <h3 className={styles.categoryTitle}>{t(getCategoryKey(category.category))}</h3>
              <div className={styles.skillsList}>
                {category.technologies.map((tech, techIndex) => (
                  <div key={techIndex} className={styles.skillItem}>
                    <div className={styles.skillHeader}>
                      <span className={styles.skillIcon}>{tech.icon}</span>
                      <span className={styles.skillName}>{tech.name}</span>
                      <span className={styles.skillLevel}>{tech.level}%</span>
                    </div>
                    <div className={styles.skillBar}>
                      <div 
                        className={styles.skillProgress}
                        style={{ width: `${tech.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        <div className={styles.additionalSkills}>
          <h3 className={styles.additionalTitle}>{t('skills.additional')}</h3>
          <div className={styles.tagGrid}>
            {[
              'Git & Version Control', 'Agile/Scrum', 'Test-Driven Development',
              'RESTful APIs', 'GraphQL', 'Microservices', 'CI/CD Pipelines',
              'Performance Optimization', 'Security Best Practices', 'UI/UX Design',
              'Photography', 'Adobe Creative Suite'
            ].map((skill, index) => (
              <span key={index} className={styles.skillTag}>
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
