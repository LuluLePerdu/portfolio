'use client';

import { useLanguage } from '@/context/LanguageContext';
import styles from './About.module.scss';

const About = () => {
  const { language } = useLanguage();

  const content = {
    fr: {
      greeting: "Je suis",
      name: "Ludwig-Emmanuel",
      surname: "Dufour",
      role: "Étudiant en Génie Informatique & Développeur Full Stack",
      description: "Passionné par l'infrastructure <span class='highlight-cloud'>cloud</span>, la <span class='highlight-network'>réseautique</span> et les systèmes distribués. J'étudie à l'<span class='highlight-udes'>UdeS</span> et je crée des solutions web innovantes qui allient <span class='highlight-performance'>performance technique</span> et expérience utilisateur exceptionnelle.",
      ctaText: "Voir mes projets",
      
      status: "Étudiant à l'UdeS",
      
      skillsTitle: "Expertise",
      journeyTitle: "Mon Parcours",
      expertiseTitle: "Technologies",
      contactTitle: "Collaborons ensemble",
      contactMessage: "Toujours enthousiaste à l'idée de travailler sur de nouveaux projets et d'explorer des solutions innovantes. Que ce soit du développement full-stack, de l'automatisation DevOps, ou des expériences numériques créatives.",
      
      skills: [
        { name: "React / Next.js", level: "Expert" },
        { name: "Cloud & DevOps", level: "Avancé" },
        { name: "Réseautique", level: "Avancé" },
        { name: "TypeScript", level: "Avancé" }
      ],
      
      timeline: [
        {
          year: "2022+",
          title: "Voir mon expérience complète",
          desc: "Parcours détaillé et projets"
        }
      ],
      
      categories: [
        {
          name: "Cloud & Infrastructure",
          techs: ["AWS", "Docker", "Kubernetes", "CI/CD", "Terraform"]
        },
        {
          name: "Frontend",
          techs: ["React", "Next.js", "TypeScript", "SCSS", "Tailwind"]
        },
        {
          name: "Backend & Réseaux",
          techs: ["Node.js", "Go", "PostgreSQL", "MongoDB", "Nginx"]
        }
      ],
      
      interestsTitle: "Ce qui me Passionne",
      interests: [
        {
          category: "Passion Technologique",
          items: ["Processus de déploiement en production", "Design d'architecture logicielle", "CI/CD et automatisation", "Infrastructure cloud et réseau"]
        },
        {
          category: "Pursuits Créatifs", 
          items: ["Photographie et arts visuels", "Art numérique et design", "UI/UX et solutions créatives"]
        },
        {
          category: "Activités Extérieures",
          items: ["Escalade", "Moto", "Exploration de la nature"]
        }
      ],
      
      // Highlights section
      highlights: [
        { icon: "◆", title: "Étudiant UdeS", desc: "Génie informatique" },
        { icon: "∞", title: "Cloud & DevOps", desc: "AWS, Docker, K8s" },
        { icon: "※", title: "Réseautique", desc: "Systèmes distribués" }
      ],
      
      visionTitle: "Vision & Approche",
      
      // Journey section
      journeyDescription: "Découvrez mon parcours académique complet, mes expériences professionnelles et les projets qui ont façonné ma carrière en génie informatique.",
      journeyButtonText: "Voir mon expérience complète →",
      
      // Métriques
      metrics: {
        years: { number: "4+", label: "Années" },
        projects: { number: "20+", label: "Projets" },
        technologies: { number: "12+", label: "Technologies" },
        certifications: { number: "3", label: "Certifications" }
      },
      
      // Achievements section
      achievements: [
        { icon: "◇", text: "Optimisation Performance", desc: "Applications web haute performance" },
        { icon: "◈", text: "Architecture Cloud", desc: "Solutions AWS & DevOps scalables" },
        { icon: "◆", text: "Réseaux Modernes", desc: "Infrastructure distribuée & sécurisée" }
      ],
      
      contactButton: "Démarrer un projet",
      cvButton: "Télécharger CV"
    },
    en: {
      greeting: "Hey there!",
      name: "Ludwig-Emmanuel",
      surname: "Dufour",
      role: "Computer Engineering Student & Full Stack Developer",
      description: "Passionate about <span class='highlight-cloud'>cloud infrastructure</span>, <span class='highlight-network'>networking</span>, and distributed systems. Studying at <span class='highlight-udes'>UdeS</span> and creating innovative web solutions that combine <span class='highlight-performance'>technical performance</span> with exceptional user experience.",
      ctaText: "View my work",
      
      status: "Student at UdeS",
      
      skillsTitle: "Expertise",
      journeyTitle: "Experience",
      expertiseTitle: "Technologies",
      contactTitle: "Let's collaborate",
      contactMessage: "Always enthusiastic about working on new projects and exploring innovative solutions. Whether it's full-stack development, DevOps automation, or creative digital experiences.",
      
      skills: [
        { name: "React / Next.js", level: "Expert" },
        { name: "Cloud & DevOps", level: "Advanced" },
        { name: "Networking", level: "Advanced" },
        { name: "TypeScript", level: "Advanced" }
      ],
      
      timeline: [
        {
          year: "2022+",
          title: "View my complete experience",
          desc: "Detailed background and projects"
        }
      ],
      
      categories: [
        {
          name: "Cloud & Infrastructure",
          techs: ["AWS", "Docker", "Kubernetes", "CI/CD", "Terraform"]
        },
        {
          name: "Frontend",
          techs: ["React", "Next.js", "TypeScript", "SCSS", "Tailwind"]
        },
        {
          name: "Backend & Networks",
          techs: ["Node.js", "Go", "PostgreSQL", "MongoDB", "Nginx"]
        }
      ],
      
      interestsTitle: "What Drives Me",
      interests: [
        {
          category: "Technology Passion",
          items: ["Production deployment processes", "Software architecture design", "CI/CD and automation", "Cloud and network infrastructure"]
        },
        {
          category: "Creative Pursuits", 
          items: ["Photography and visual arts", "Digital art and design", "UI/UX and creative solutions"]
        },
        {
          category: "Outdoor Activities",
          items: ["Rock climbing", "Motorcycle riding", "Nature exploration"]
        }
      ],
      
      // Highlights section
      highlights: [
        { icon: "◆", title: "UdeS Student", desc: "Computer Engineering" },
        { icon: "∞", title: "Cloud & DevOps", desc: "AWS, Docker, K8s" },
        { icon: "※", title: "Networking", desc: "Distributed Systems" }
      ],
      
      visionTitle: "Vision & Approach",
      
      // Journey section
      journeyDescription: "Discover my complete academic background, professional experiences and projects that have shaped my career in computer engineering.",
      journeyButtonText: "View my complete experience →",
      
      // Metrics
      metrics: {
        years: { number: "4+", label: "Years" },
        projects: { number: "20+", label: "Projects" },
        technologies: { number: "12+", label: "Technologies" },
        certifications: { number: "3", label: "Certifications" }
      },
      
      // Achievements section
      achievements: [
        { icon: "◇", text: "Performance Optimization", desc: "High-performance web applications" },
        { icon: "◈", text: "Cloud Architecture", desc: "Scalable AWS & DevOps solutions" },
        { icon: "◆", text: "Modern Networks", desc: "Distributed & secure infrastructure" }
      ],
      
      contactButton: "Start a project",
      cvButton: "Download Resume"
    }
  };

  const t = content[language as keyof typeof content];

  return (
    <div className={styles.about}>
      {/* Animation de feuilles */}
      <div className={styles.leaf}></div>
      <div className={styles.leaf}></div>
      <div className={styles.leaf}></div>
      <div className={styles.leaf}></div>
      <div className={styles.leaf}></div>
      
      <div className={styles.container}>
        <div className={styles.bentoGrid}>
          
          {/* Introduction principale */}
          <div className={`${styles.card} ${styles.intro}`}>
            <div className={styles.greeting}>{t.greeting}</div>
            <h1 className={styles.name}>
              {t.name} <span className={styles.highlight}>{t.surname}</span>
            </h1>
            <h2 className={styles.role}>{t.role}</h2>
            <p className={styles.description} dangerouslySetInnerHTML={{ __html: t.description }}></p>
            
            <div className={styles.highlights}>
              {t.highlights.map((highlight, index) => (
                <div key={index} className={styles.highlightItem}>
                  <span className={styles.icon}>{highlight.icon}</span>
                  <div className={styles.title}>{highlight.title}</div>
                  <div className={styles.desc}>{highlight.desc}</div>
                </div>
              ))}
            </div>
            
            <div className={styles.personalStatement}>
              <h4>{t.visionTitle}</h4>
              <p>
                {language === 'fr' 
                  ? "Passionné par l'innovation technologique, je me spécialise dans l'architecture cloud et les solutions réseau modernes. Mon approche combine expertise technique approfondie et vision stratégique pour créer des systèmes robustes et évolutifs."
                  : "Passionate about technological innovation, I specialize in cloud architecture and modern network solutions. My approach combines deep technical expertise with strategic vision to create robust and scalable systems."
                }
              </p>
            </div>
            
            <a href="/experience" className={styles.cta}>
              {t.ctaText}
              <span>→</span>
            </a>
          </div>

          {/* Profile */}
          <div className={`${styles.card} ${styles.profile}`}>
            <div className={styles.avatar}>LE</div>
            <div className={styles.status}>{t.status}</div>
            <div className={styles.metrics}>
              <div className={styles.metric}>
                <span className={styles.number}>{t.metrics.years.number}</span>
                <span className={styles.label}>{t.metrics.years.label}</span>
              </div>
              <div className={styles.metric}>
                <span className={styles.number}>{t.metrics.projects.number}</span>
                <span className={styles.label}>{t.metrics.projects.label}</span>
              </div>
              <div className={styles.metric}>
                <span className={styles.number}>{t.metrics.technologies.number}</span>
                <span className={styles.label}>{t.metrics.technologies.label}</span>
              </div>
              <div className={styles.metric}>
                <span className={styles.number}>{t.metrics.certifications.number}</span>
                <span className={styles.label}>{t.metrics.certifications.label}</span>
              </div>
            </div>
            <div className={styles.achievements}>
              {t.achievements.map((achievement, index) => (
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

          {/* Compétences principales */}
          <div className={`${styles.card} ${styles.skills}`}>
            <h3>{t.skillsTitle}</h3>
            <div className={styles.skillsList}>
              {t.skills.map((skill, index) => (
                <div key={index} className={styles.skill}>
                  <span className={styles.name}>{skill.name}</span>
                  <span className={styles.level}>{skill.level}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Parcours - Redirection vers Expérience */}
          <div className={`${styles.card} ${styles.journey}`}>
            <h3>{t.journeyTitle}</h3>
            <div className={styles.redirectMessage}>
              <p>{t.journeyDescription}</p>
              <a href="/experience" className={styles.redirectBtn}>
                {t.journeyButtonText}
              </a>
            </div>
          </div>

          {/* Technologies */}
          <div className={`${styles.card} ${styles.expertise}`}>
            <h3>{t.expertiseTitle}</h3>
            <div className={styles.categories}>
              {t.categories.map((category, index) => (
                <div key={index} className={styles.category}>
                  <div className={styles.name}>{category.name}</div>
                  <div className={styles.techs}>
                    {category.techs.map((tech, techIndex) => (
                      <span key={techIndex} className={styles.tech}>{tech}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Passions */}
          <div className={`${styles.card} ${styles.interests}`}>
            <h3>{t.interestsTitle}</h3>
            <div className={styles.interestsList}>
              {t.interests.map((interestGroup, index) => (
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

          {/* Contact */}
          <div className={`${styles.card} ${styles.contact}`}>
            <h3>{t.contactTitle}</h3>
            <p className={styles.message}>{t.contactMessage}</p>
            <div className={styles.actions}>
              <a href="/contact" className={`${styles.btn} ${styles.primary}`}>
                {t.contactButton}
              </a>
              <a href="/cv.pdf" className={`${styles.btn} ${styles.secondary}`} target="_blank" rel="noopener noreferrer">
                {t.cvButton}
              </a>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default About;
