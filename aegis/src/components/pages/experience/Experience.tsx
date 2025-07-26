'use client';

import styles from './Experience.module.scss';
import { useLanguage } from '@/context/LanguageContext';

const experiences = [
  {
    id: 1,
    position: 'Tech support',
    company: 'Cooptel',
    location: 'Valcourt, QC',
    period: '2024 - Present',
    startDate: '2024-01-01',
    type: 'Part-time',
    description: 'Providing technical support and troubleshooting for residential and business customers. Assisting with internet, phone, and TV services, ensuring high customer satisfaction.',
    technologies: ['Customer Service', 'Troubleshooting', 'Networking', 'VoIP'],
  },
  {
    id: 2,
    position: 'Full-Stack Developer',
    company: 'Centre de service scolaire des Samares',
    location: 'St-Félix-de-Valois, QC',
    period: 'March 2024 - July 2024',
    startDate: '2024-03-01',
    type: 'Full-time internship',
    description: 'Developed and maintained web applications for administrative purposes.',
    achievements: [
      'Created an internal tool for managment of student data',
      'Participated in code reviews and contributed to team knowledge sharing',
      'Developed and maintained RESTful APIs for data exchange between front-end and back-end systems'
    ],
    technologies: ['C#', 'ASP.NET Core', 'Entity Framework', 'SQL Server', 'Azure DevOps'],
  },
  {
    id: 3,
    position: 'Backend Developer',
    company: 'Blanko création numérique',
    location: 'Joliette, QC',
    period: 'summer 2023',
    startDate: '2023-06-01',
    type: 'Full-time internship',
    description: 'Worked on backend development for various city web applications and implemented dynamic features.',
    achievements: [
      'Implemented a dynamic form builder for city applications',
      'Developed RESTful APIs for data management',
      'Collaborated with front-end developers to integrate APIs with user interfaces'
    ],
    technologies: ['PHP', 'Laravel', 'JavaScript', 'Docker'],
  },
  {
    id: 4,
    position: 'Developer',
    company: 'CGI',
    location: 'Sherbrooke, QC',
    period: 'Summer 2025',
    startDate: '2025-06-01',
    type: 'Full-time internship',
    description: 'Developed and maintained web applications and created/maintained pipelines for CI/CD processes.',
    achievements: [
      'Developed a web application for internal use',
      'Created CI/CD pipelines using GitLab CI',
      'Collaborated with international cross-functional teams to deliver high-quality software solutions'
    ],
    technologies: ['Angular', 'Node.js', 'GitLab CI/CD', 'Java', 'Spring Boot', 'MySQL'],
  },
];

export default function Experience() {
  const { t } = useLanguage();
  
  const sortedExperiences = [...experiences].sort((a, b) => {
    const aIsPresent = a.period.toLowerCase().includes('present');
    const bIsPresent = b.period.toLowerCase().includes('present');
    
    if (aIsPresent && !bIsPresent) return -1;
    if (!aIsPresent && bIsPresent) return 1; 
    
    return new Date(b.startDate).getTime() - new Date(a.startDate).getTime();
  });
  return (
    <section id="experience" className={styles.experience}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>{t('experience.title')}</h2>
          <p className={styles.subtitle}>
            {t('experience.subtitle')}
          </p>
        </div>

        <div className={styles.timeline}>
          {sortedExperiences.map((exp, index) => (
            <div key={exp.id} className={styles.timelineItem}>
              <div className={styles.timelineMarker}>
                <div className={styles.markerDot}></div>
                {index < sortedExperiences.length - 1 && <div className={styles.timelineLine}></div>}
              </div>
              
              <div className={styles.experienceCard}>
                <div className={styles.cardHeader}>
                  <div className={styles.titleSection}>
                    <h3 className={styles.position}>{exp.position}</h3>
                    <div className={styles.companyInfo}>
                      <span className={styles.company}>{exp.company}</span>
                      <span className={styles.location}>{exp.location}</span>
                    </div>
                  </div>
                  <div className={styles.periodSection}>
                    <span className={styles.period}>{exp.period}</span>
                    <span className={`${styles.type} ${exp.type === 'Contract' ? styles.contract : styles.fulltime}`}>
                      {exp.type}
                    </span>
                  </div>
                </div>
                
                <p className={styles.description}>
                  {exp.description}
                </p>
                
                {exp.achievements && (
                  <div className={styles.achievements}>
                    <h4 className={styles.achievementsTitle}>{t('experience.achievements')}:</h4>
                    <ul className={styles.achievementsList}>
                      {exp.achievements.map((achievement, achIndex) => (
                        <li key={achIndex} className={styles.achievementItem}>
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                
                <div className={styles.technologies}>
                  <span className={styles.techLabel}>{t('experience.technologies')}:</span>
                  <div className={styles.techTags}>
                    {exp.technologies.map((tech, techIndex) => (
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
