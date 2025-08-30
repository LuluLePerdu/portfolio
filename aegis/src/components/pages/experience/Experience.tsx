'use client';

import styles from './Experience.module.scss';
import { useLanguage } from '@/context/LanguageContext';


const jobsConfig = [
  {
    id: 1,
    key: 'cooptel',
    startDate: '2024-07-12',
    technologies: ['Customer Service', 'Troubleshooting', 'Networking', 'VoIP'],
    technologiesFr: ['Service Client', 'Dépannage', 'Réseautique', 'VoIP'],
    hasAchievements: false,
  },
  {
    id: 2,
    key: 'css',
    startDate: '2024-03-01',
    technologies: ['C#', 'ASP.NET Core', 'Entity Framework', 'SQL Server', 'Azure DevOps'],
    technologiesFr: ['C#', 'ASP.NET Core', 'Entity Framework', 'SQL Server', 'Azure DevOps'],
    hasAchievements: true,
    achievements: ['achievement1', 'achievement2', 'achievement3'],
  },
  {
    id: 3,
    key: 'blanko',
    startDate: '2023-06-01',
    technologies: ['PHP', 'Laravel', 'JavaScript', 'Docker'],
    technologiesFr: ['PHP', 'Laravel', 'JavaScript', 'Docker'],
    hasAchievements: true,
    achievements: ['achievement1', 'achievement2', 'achievement3'],
  },
  {
    id: 4,
    key: 'cgi',
    startDate: '2025-06-01',
    technologies: ['Angular', 'Node.js', 'GitLab CI/CD', 'Java', 'Spring Boot', 'MySQL'],
    technologiesFr: ['Angular', 'Node.js', 'GitLab CI/CD', 'Java', 'Spring Boot', 'MySQL'],
    hasAchievements: true,
    achievements: ['achievement1', 'achievement2', 'achievement3'],
  },
];

export default function Experience() {
  const { t, language } = useLanguage();
  
  const sortedJobs = [...jobsConfig].sort((a, b) => {
    const aPeriod = t(`experience.jobs.${a.key}.period`);
    const bPeriod = t(`experience.jobs.${b.key}.period`);
    
    const aIsPresent = aPeriod.toLowerCase().includes('present') || aPeriod.toLowerCase().includes('présent');
    const bIsPresent = bPeriod.toLowerCase().includes('present') || bPeriod.toLowerCase().includes('présent');
    
    if (aIsPresent && !bIsPresent) return -1;
    if (!aIsPresent && bIsPresent) return 1; 
    
    return new Date(b.startDate).getTime() - new Date(a.startDate).getTime();
  });
  
  return (
    <section id="experience" className={styles.experience}>
      {}
      <div className={styles.textureLayer}></div>
      <div className={styles.accentLayer}></div>
      
      <div className={styles.container}>
        <div className={styles.timeline}>
          {sortedJobs.map((job, index) => (
            <div key={job.id} className={styles.timelineItem}>
              <div className={styles.timelineMarker}>
                <div className={styles.markerDot}></div>
                {index < sortedJobs.length - 1 && <div className={styles.timelineLine}></div>}
              </div>

              <div className={styles.experienceCard}>
                <div className={styles.cardHeader}>
                  <div className={styles.titleSection}>
                    <h3 className={styles.position}>
                      {t(`experience.jobs.${job.key}.position`)}
                    </h3>
                    <div className={styles.companyInfo}>
                      <span className={styles.company}>
                        {t(`experience.jobs.${job.key}.company`)}
                      </span>
                      <span className={styles.location}>
                        {t(`experience.jobs.${job.key}.location`)}
                      </span>
                    </div>
                  </div>
                  <div className={styles.periodSection}>
                    <span className={styles.period}>
                      {t(`experience.jobs.${job.key}.period`)}
                    </span>
                    <span className={`${styles.type} ${t(`experience.jobs.${job.key}.type`).toLowerCase().includes('contract') ? styles.contract : styles.fulltime}`}>
                      {t(`experience.jobs.${job.key}.type`)}
                    </span>
                  </div>
                </div>
                
                <p className={styles.description}>
                  {t(`experience.jobs.${job.key}.description`)}
                </p>
                
                {job.hasAchievements && job.achievements && (
                  <div className={styles.achievements}>
                    <h4 className={styles.achievementsTitle}>{t('experience.achievements')}:</h4>
                    <ul className={styles.achievementsList}>
                      {job.achievements.map((achievementKey: string, achIndex: number) => (
                        <li key={achIndex} className={styles.achievementItem}>
                          {t(`experience.jobs.${job.key}.${achievementKey}`)}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                
                <div className={styles.technologies}>
                  <span className={styles.techLabel}>{t('experience.technologies')}:</span>
                  <div className={styles.techTags}>
                    {(language === 'fr' ? job.technologiesFr : job.technologies).map((tech: string, techIndex: number) => (
                      <span key={techIndex} className={styles.techTag}>
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
