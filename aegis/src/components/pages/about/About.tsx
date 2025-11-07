'use client';

import { useLanguage } from '@/context/LanguageContext';
import { useLeafEcosystem } from '@/hooks/useLeafEcosystem';
import styles from './About.module.scss';

const About = () => {
  const { language, t } = useLanguage();
  

  useLeafEcosystem();


  const skills = [
    { name: t('about.skills.webdev.name'), level: t('about.skills.webdev.level') },
    { name: t('about.skills.architecture.name'), level: t('about.skills.architecture.level') },
    { name: t('about.skills.devops.name'), level: t('about.skills.devops.level') },
    { name: t('about.skills.networking.name'), level: t('about.skills.networking.level') }
  ];


  const techByType = [
    {
      type: t('about.tech.frontend.title'),
      techs: ['Angular', 'Next.js', 'TypeScript', 'SCSS',]
    },
    {
      type: t('about.tech.backend.title'), 
      techs: ['Java', 'PHP', 'C#', 'C++', 'GoLang', 'Python', 'Node.js']
    },
    {
      type: t('about.tech.frameworks.title'),
      techs: ['Laravel', 'Spring Boot', 'ASP.NET', 'Express.js']
    },
    {
      type: t('about.tech.cloud.title'),
      techs: ['Docker', 'Azure', 'AWS', 'Kubernetes', 'GitLab CI/CD', 'Proxmox', 'Terraform']
    },
    {
      type: t('about.tech.databases.title'),
      techs: ['PostgreSQL', 'MongoDB', 'MySQL', 'SQL Server']
    },
    {
      type: t('about.tech.mobile.title'),
      techs: ['Flutter', 'Kotlin']
    }
  ];

  const highlights = [
    { icon: "◆", title: t('about.highlights.student.title'), desc: t('about.highlights.student.desc') },
    { icon: "∞", title: t('about.highlights.cloud.title'), desc: t('about.highlights.cloud.desc') },
    { icon: "※", title: t('about.highlights.network.title'), desc: t('about.highlights.network.desc') }
  ];

  const metrics = {
    years: { number: t('about.metrics.years.number'), label: t('about.metrics.years.label') },
    projects: { number: t('about.metrics.projects.number'), label: t('about.metrics.projects.label') },
    technologies: { number: t('about.metrics.technologies.number'), label: t('about.metrics.technologies.label') },
    certifications: { number: t('about.metrics.certifications.number'), label: t('about.metrics.certifications.label') }
  };

  const achievements = [
    { icon: "◇", text: t('about.achievements.performance.text'), desc: t('about.achievements.performance.desc') },
    { icon: "◈", text: t('about.achievements.cloud.text'), desc: t('about.achievements.cloud.desc') },
    { icon: "◆", text: t('about.achievements.network.text'), desc: t('about.achievements.network.desc') }
  ];

  const interests = [
    {
      category: t('about.interests.tech.title'),
      items: [
        t('about.interests.tech.production'),
        t('about.interests.tech.architecture'),
        t('about.interests.tech.deployment'),
        t('about.interests.tech.cloud')
      ]
    },
    {
      category: t('about.interests.creative.title'), 
      items: [
        t('about.interests.creative.photography'),
        t('about.interests.creative.art'),
        t('about.interests.creative.design')
      ]
    },
    {
      category: t('about.interests.outdoor.title'),
      items: [
        t('about.interests.outdoor.climbing'),
        t('about.interests.outdoor.motorcycle'),
        t('about.interests.outdoor.nature')
      ]
    }
  ];

  return (
    <div className={styles.about}>
      {}
      <div className={styles.leafEcosystem}>
        {}
        <div className={`${styles.leafCluster} ${styles.cornerTopLeft}`}>
          <div className={`${styles.leafMicro} ${styles.small}`}></div>
          <div className={`${styles.leafMicro} ${styles.medium}`}></div>
        </div>
        
        {}
        <div className={`${styles.leafCluster} ${styles.cornerTopRight}`}>
          <div className={`${styles.leafMicro} ${styles.medium}`}></div>
          <div className={`${styles.leafMicro} ${styles.small}`}></div>
        </div>
        
        {}
        <div className={`${styles.leafCluster} ${styles.cornerBottomLeft}`}>
          <div className={`${styles.leafMicro} ${styles.large}`}></div>
          <div className={`${styles.leafMicro} ${styles.medium}`}></div>
        </div>
        
        {}
        <div className={`${styles.leafCluster} ${styles.cornerBottomRight}`}>
          <div className={`${styles.leafMicro} ${styles.medium}`}></div>
          <div className={`${styles.leafMicro} ${styles.small}`}></div>
        </div>
      </div>
      
      <div className={styles.container}>
        <div className={styles.bentoGrid}>
          
          {}
          <div className={`${styles.card} ${styles.intro}`}>
            <div className={styles.greeting}>{t('about.greeting')}</div>
            <h1 className={styles.name}>
              {t('about.name')}
              <br />
              <span className={styles.highlight}>{t('about.surname')}</span>
            </h1>
            <h2 className={styles.role}>{t('about.role')}</h2>
            <p className={styles.description} dangerouslySetInnerHTML={{ __html: t('about.description') }}></p>
            
            <div className={styles.highlights}>
              {highlights.map((highlight, index) => (
                <div key={index} className={styles.highlightItem}>
                  <span className={styles.icon}>{highlight.icon}</span>
                  <div className={styles.title}>{highlight.title}</div>
                  <div className={styles.desc}>{highlight.desc}</div>
                </div>
              ))}
            </div>
            
            <div className={styles.personalStatement}>
              <h4>{t('about.visionTitle')}</h4>
              <p>{t('about.visionDescription')}</p>
            </div>
            
            <a href="/experience" className={styles.cta}>
              {language === 'fr' ? 'Voir mes projets' : 'View my work'}
              <span>→</span>
            </a>
          </div>

          {}
          <div className={`${styles.card} ${styles.profile}`}>
            <div className={styles.avatar}>
              <img 
                src="/images/profile.jpg" 
                alt={`${t('about.name')} ${t('about.surname')}`}
                className={styles.profileImage}
              />
            </div>
            <div className={styles.status}>{t('about.status')}</div>
            <div className={styles.metrics}>
              <div className={styles.metric}>
                <span className={styles.number}>{metrics.years.number}</span>
                <span className={styles.label}>{metrics.years.label}</span>
              </div>
              <div className={styles.metric}>
                <span className={styles.number}>{metrics.projects.number}</span>
                <span className={styles.label}>{metrics.projects.label}</span>
              </div>
              <div className={styles.metric}>
                <span className={styles.number}>{metrics.technologies.number}</span>
                <span className={styles.label}>{metrics.technologies.label}</span>
              </div>
              <div className={styles.metric}>
                <span className={styles.number}>{metrics.certifications.number}</span>
                <span className={styles.label}>{metrics.certifications.label}</span>
              </div>
            </div>
            <div className={styles.achievements}>
              {achievements.map((achievement, index) => (
                <div key={index} className={styles.achievement}>
                  <span className={styles.achievementIcon}>{achievement.icon}</span>
                  <div className={styles.achievementContent}>
                    <span className={styles.achievementText}>{achievement.text}</span>
                    <span className={styles.achievementDesc}>{achievement.desc}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {}
          <div className={`${styles.card} ${styles.skills}`}>
            <h3>{t('about.skillsTitle')}</h3>
            <div className={styles.skillsList}>
              {skills.map((skill, index) => (
                <div key={index} className={styles.skill}>
                  <span className={styles.name}>{skill.name}</span>
                  <span className={styles.level}>{skill.level}</span>
                </div>
              ))}
            </div>
          </div>

          {}
          <div className={`${styles.card} ${styles.technologies}`}>
            <h3>{language === 'fr' ? 'Technologies' : 'Technologies'}</h3>
            <div className={styles.techFlow}>
              {techByType.map((category, categoryIndex) => (
                <div key={categoryIndex} className={styles.techSection}>
                  <span className={styles.techType}>{category.type}</span>
                  <div className={styles.techItems}>
                    {category.techs.map((tech, techIndex) => (
                      <span key={techIndex} className={styles.techBadge}>{tech}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {}
          <div className={`${styles.card} ${styles.journey}`}>
            <h3>{t('about.journeyTitle')}</h3>
            <div className={styles.redirectMessage}>
              <p>{t('about.journeyDescription')}</p>
              <a href="/experience" className={styles.redirectBtn}>
                {t('about.journeyButtonText')}
              </a>
            </div>
          </div>

          {}
          <div className={`${styles.card} ${styles.interests}`}>
            <h3>{t('about.interests.title')}</h3>
            <div className={styles.interestsList}>
              {interests.map((interestGroup, index) => (
                <div key={index} className={styles.interestCategory}>
                  <div className={styles.categoryTitle}>{interestGroup.category}</div>
                  <div className={styles.interestItems}>
                    {interestGroup.items.map((item, itemIndex) => (
                      <span key={itemIndex} className={styles.interestItem}>{item}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {}
          <div className={`${styles.card} ${styles.contact}`}>
            <h3>{t('about.contactTitle')}</h3>
            <p className={styles.message}>{t('about.contactMessage')}</p>
            <div className={styles.actions}>
              <a href="/contact" className={`${styles.btn} ${styles.primary}`}>
                {t('about.contactButton')}
              </a>
              <a href="/cv.pdf" className={`${styles.btn} ${styles.secondary}`} target="_blank" rel="noopener noreferrer">
                {t('about.cvButton')}
              </a>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default About;
