'use client';

import { useState, useMemo } from 'react';
import styles from './Portfolio.module.scss';
import { useLanguage } from '@/context/LanguageContext';
import { projects, ProjectCategory } from '@/data/projects';

const categories: { key: ProjectCategory | 'all'; labelKey: string }[] = [
  { key: 'all', labelKey: 'work.categories.all' },
  { key: 'academic', labelKey: 'work.categories.academic' },
  { key: 'personal', labelKey: 'work.categories.personal' },
  { key: 'web', labelKey: 'work.categories.web' },
  { key: 'infrastructure', labelKey: 'work.categories.infrastructure' },
  { key: 'mobile', labelKey: 'work.categories.mobile' },
  { key: 'backend', labelKey: 'work.categories.backend' },
];

export default function Portfolio() {
  const { t } = useLanguage();
  const [activeCategory, setActiveCategory] = useState<ProjectCategory | 'all'>('all');

  const getCategoryLabel = (category: ProjectCategory) => {
    const categoryItem = categories.find(cat => cat.key === category);
    return categoryItem ? t(categoryItem.labelKey) : category;
  };

  const filteredProjects = useMemo(() => {
    if (activeCategory === 'all') {
      return projects;
    }
    return projects.filter(project => project.categories.includes(activeCategory));
  }, [activeCategory]);

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'completed':
        return (
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
            <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        );
      case 'in-progress':
        return (
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
            <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
            <path d="M12 6V12L16 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        );
      default:
        return null;
    }
  };

  const getProjectIcon = (category: ProjectCategory) => {
    switch (category) {
      case 'academic':
        return (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M22 10v6M2 10l10-5 10 5-10 5z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M6 12v5c3 3 9 3 12 0v-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        );
      case 'mobile':
        return (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <rect x="5" y="2" width="14" height="20" rx="2" ry="2" stroke="currentColor" strokeWidth="2"/>
            <line x1="12" y1="18" x2="12.01" y2="18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        );
      case 'web':
        return (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
            <line x1="2" y1="12" x2="22" y2="12" stroke="currentColor" strokeWidth="2"/>
            <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" stroke="currentColor" strokeWidth="2"/>
          </svg>
        );
      case 'infrastructure':
        return (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <rect x="2" y="3" width="20" height="14" rx="2" ry="2" stroke="currentColor" strokeWidth="2"/>
            <line x1="8" y1="21" x2="16" y2="21" stroke="currentColor" strokeWidth="2"/>
            <line x1="12" y1="17" x2="12" y2="21" stroke="currentColor" strokeWidth="2"/>
          </svg>
        );
      case 'backend':
        return (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <ellipse cx="12" cy="5" rx="9" ry="3" stroke="currentColor" strokeWidth="2"/>
            <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" stroke="currentColor" strokeWidth="2"/>
            <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" stroke="currentColor" strokeWidth="2"/>
          </svg>
        );
      case 'personal':
        return (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <circle cx="12" cy="7" r="4" stroke="currentColor" strokeWidth="2"/>
          </svg>
        );
      default:
        return (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <rect x="3" y="3" width="18" height="18" rx="2" ry="2" stroke="currentColor" strokeWidth="2"/>
            <line x1="9" y1="15" x2="15" y2="9" stroke="currentColor" strokeWidth="2"/>
          </svg>
        );
    }
  };

  return (
    <section id="work" className={styles.portfolio}>
      <div className={styles.container}>
        <div className={styles.filters}>
          {categories.map((category) => (
            <button
              key={category.key}
              className={`${styles.filterBtn} ${activeCategory === category.key ? styles.active : ''}`}
              onClick={() => setActiveCategory(category.key)}
            >
              {t(category.labelKey)}
            </button>
          ))}
        </div>

        <div className={styles.projectsGrid}>
          {filteredProjects.map((project) => (
              <div key={project.id} className={styles.projectCard}>
                {}
                {project.featured && (
                  <div className={styles.featuredBadge}>
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                      <polygon points="12,2 15.09,8.26 22,9 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9 8.91,8.26"/>
                    </svg>
                  </div>
                )}
                
                {}
                <div className={styles.cardHeader}>
                  <div className={styles.titleSection}>
                    <h3 className={styles.projectTitle}>{t(project.titleKey)}</h3>
                    <div className={styles.projectMeta}>
                      <span className={styles.projectType}>{t(`work.project.${project.type}`)}</span>
                      <span className={styles.projectYear}>{project.year}</span>
                    </div>
                  </div>
                  
                  <div className={styles.statusBadge}>
                    {getStatusIcon(project.status)}
                    <span>{t(`work.status.${project.status === 'in-progress' ? 'inProgress' : project.status}`)}</span>
                  </div>
                </div>

                {}
                <p className={styles.description}>
                  {t(project.descriptionKey)}
                </p>

                {}
                <div className={styles.categories}>
                  {project.categories.slice(0, 3).map((category, catIndex) => (
                    <span key={catIndex} className={styles.categoryTag}>
                      {getProjectIcon(category)}
                      {getCategoryLabel(category)}
                    </span>
                  ))}
                  {project.categories.length > 3 && (
                    <span className={styles.categoryMore}>+{project.categories.length - 3}</span>
                  )}
                </div>

                {}
                <div className={styles.techStack}>
                  {project.technologies.slice(0, 6).map((tech, techIndex) => (
                    <span 
                      key={techIndex} 
                      className={styles.techBadge}
                      style={{ '--tech-color': tech.color } as React.CSSProperties}
                    >
                      {tech.name}
                    </span>
                  ))}
                  {project.technologies.length > 6 && (
                    <span className={styles.techMore}>+{project.technologies.length - 6}</span>
                  )}
                </div>

                {}
                <div className={styles.cardActions}>
                  {project.githubUrl && (
                    <a 
                      href={project.githubUrl} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className={styles.actionLink}
                    >
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 0C5.374 0 0 5.373 0 12 0 17.302 3.438 21.8 8.207 23.387c.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
                      </svg>
                      Code
                    </a>
                  )}
                  {project.liveUrl && (
                    <a 
                      href={project.liveUrl} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className={`${styles.actionLink} ${styles.primary}`}
                    >
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                        <polyline points="15,3 21,3 21,9"/>
                        <line x1="10" y1="14" x2="21" y2="3"/>
                      </svg>
                      Demo
                    </a>
                  )}
                  {!project.githubUrl && !project.liveUrl && (
                    <span className={styles.comingSoon}>
                      {t('work.comingSoon')}
                    </span>
                  )}
                </div>
              </div>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className={styles.emptyState}>
            <div className={styles.emptyIcon}>
              <svg width="64" height="64" viewBox="0 0 24 24" fill="none">
                <circle cx="11" cy="11" r="8" stroke="currentColor" strokeWidth="2"/>
                <path d="M21 21L16.65 16.65" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <h3 className={styles.emptyTitle}>No projects found</h3>
            <p className={styles.emptyDescription}>
              Try selecting a different category to see more projects.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
