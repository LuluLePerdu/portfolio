'use client';

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

type Language = 'en' | 'fr';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  en: {
    // Header
    'header.work': 'Work',
    'header.about': 'About',
    'header.photography': 'Photography',
    'header.experience': 'Experience',
    'header.contact': 'Contact',
    'header.cta': "Let's Talk",
    
    // Common
    'common.backToHome': 'Back to Home',
    
    // Unavailable Pages
    'unavailable.photography.title': 'Page Unavailable',
    'unavailable.photography.message': 'The photography section is currently under development. Please check back later to discover my photographic work.',
    'unavailable.about.title': 'Page Unavailable',
    'unavailable.about.message': 'The about section is currently under development. Please check back later to learn more about my journey and background.',
    
    // Home
    'home.welcome': 'Welcome to',
    'home.project': 'Project',
    'home.subtitle': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    'home.viewWork': 'View My Work',
    'home.learnMore': 'Learn More About Me',
    
    // Work
    'work.title': 'My Work',
    'work.subtitle': 'Coming Soon - A curated selection of projects showcasing my expertise in full-stack development, DevOps automation, and creative solutions.',
    'work.construction': 'Portfolio Under Construction',
    'work.constructionText': "I'm currently crafting an exceptional showcase of my best work. Each project will tell a story of innovation, problem-solving, and technical excellence.",
    'work.projectsCompleted': 'Projects Completed',
    'work.technologiesUsed': 'Technologies Used',
    'work.yearsExperience': 'Years Experience',
    
    // About
    'about.subtitle': 'Learn more about my journey, skills, and passion for creating digital experiences.',
    'about.description': 'Passionate developer and visual storyteller crafting digital experiences',
    'about.intro': 'Hello! I\'m Ludwig-E. Dufour, a passionate Full-Stack Developer and DevOps Engineer with a creative eye for photography.',
    'about.passion': 'My passion lies in creating innovative digital solutions that bridge the gap between functionality and aesthetics.',
    'about.skills': 'My Skills',
    'about.downloadCV': 'Download CV',
    'about.hireMeBtn': 'Hi! I\'m',
    'about.badges.fullstack': 'Full-Stack',
    'about.badges.devops': 'DevOps',
    'about.badges.student': 'Student',
    
    // New About content - version française plus humaine
    // New About content - English version more human
    'about.title': 'About',
    'about.greeting': 'Hi!',
    'about.mainDescription': 'Computer Engineering student at Université de Sherbrooke with a passion for creating digital solutions that make a difference and exploring cutting-edge technologies.',
    'about.currentStatus': 'Current Status',
    'about.statusValue': 'Computer Engineering Student',
    'about.location': 'Location', 
    'about.locationValue': 'Sherbrooke, QC',
    'about.focus': 'Focus',
    'about.focusValue': 'Full-stack & DevOps',
    'about.journey.title': 'My Journey',
    'about.journey.story': 'After discovering my passion for programming at Cégep de Joliette, I decided to pursue computer engineering. What really drives me is seeing how technology can simplify people\'s lives.',
    'about.journey.passion': 'I have a particular passion for infrastructure and distributed systems. There\'s nothing more satisfying than seeing an application run perfectly in production!',
    'about.timeline.university.title': 'Computer Engineering',
    'about.timeline.university.period': '2022 - 2026',
    'about.timeline.university.description': 'Université de Sherbrooke - Specializing in systems and networks',
    'about.timeline.cegep.title': 'Computer Programming',
    'about.timeline.cegep.period': '2020 - 2022',
    'about.timeline.cegep.description': 'Cégep de Joliette - Application development profile',
    'about.techStack.title': 'Technologies I Use',
    'about.techStack.favorites': 'My Favorites',
    'about.techStack.exploring': 'Currently Exploring',
    'about.personal.title': 'Personal Side',
    'about.personal.photography': 'Photography',
    'about.personal.climbing': 'Rock Climbing',
    'about.personal.motorcycle': 'Motorcycle',
    'about.current.title': 'What I\'m Working On',
    'about.current.portfolio.title': 'This Portfolio',
    'about.current.portfolio.description': 'Built with Next.js and TypeScript, hosted on Vercel',
    'about.current.learning.title': 'Continuous Learning',
    'about.current.learning.description': 'Kubernetes, cloud architecture, and network engineering',
    'about.current.building.title': 'Personal Projects',
    'about.current.building.description': 'Go microservices and DevOps automation',
    'about.connect.title': 'Let\'s Connect!',
    'about.connect.description': 'Always open to discussing tech, interesting projects, or just chatting.',
    'about.connect.contact': 'Contact Me',
    'about.connect.resume': 'Download Resume',
    
    // Interests
    'about.interests.title': 'What Drives Me',
    'about.interests.tech.title': 'Technology Passion',
    'about.interests.tech.production': 'Production deployment processes',
    'about.interests.tech.architecture': 'Software architecture design',
    'about.interests.tech.deployment': 'CI/CD and automation',
    'about.interests.tech.cloud': 'Cloud and network infrastructure',
    'about.interests.creative.title': 'Creative Pursuits',
    'about.interests.creative.photography': 'Photography and visual arts',
    'about.interests.creative.art': 'Digital art and design',
    'about.interests.creative.design': 'UI/UX and creative solutions',
    'about.interests.outdoor.title': 'Outdoor Activities',
    'about.interests.outdoor.climbing': 'Rock climbing',
    'about.interests.outdoor.motorcycle': 'Motorcycle riding',
    'about.interests.outdoor.nature': 'Nature exploration',
    
    // Stats
    'about.stats.internships': 'Internships',
    'about.stats.graduated': 'Graduated',
    'about.stats.technologies': 'Technologies',
    
    // CTA
    'about.cta.title': 'Let\'s Build Something Amazing',
    'about.cta.description': 'I\'m always excited to work on new projects and explore innovative solutions. Whether it\'s full-stack development, DevOps automation, or creative digital experiences.',
    'about.cta.contact': 'Get In Touch',
    'about.cta.downloadCV': 'Download CV',
    
    // Photography
    'photography.title': 'Photography',
    'photography.subtitle': 'A visual journey through my lens, capturing moments and stories in light and shadow.',
    'photography.description': 'Capturing moments through the lens of creativity',
    'photography.all': 'All',
    'photography.nature': 'Nature',
    'photography.portrait': 'Portrait',
    'photography.street': 'Street',
    'photography.architecture': 'Architecture',
    'photography.viewGallery': 'View Full Gallery',
    
    // Experience
    'experience.title': 'Experience',
    'experience.subtitle': 'My professional journey and milestones in technology, development, and creative projects.',
    'experience.description': 'My professional journey and achievements',
    'experience.current': 'Current',
    'experience.years': 'years',
    'experience.achievements': 'Key Achievements',
    'experience.technologies': 'Technologies',
    
    // Contact
    'contact.title': 'Get In Touch',
    'contact.subtitle': 'Let\'s collaborate and bring your ideas to life. I\'m always excited to work on new projects.',
    'contact.description': 'Let\'s create something amazing together',
    'contact.name': 'Your Name',
    'contact.email': 'Your Email',
    'contact.subject': 'Subject',
    'contact.message': 'Your Message',
    'contact.send': 'Send Message',
    'contact.sending': 'Sending...',
    'contact.success': 'Message sent successfully!',
    'contact.error': 'Error sending message. Please try again.',
    'contact.phone': 'Phone',
    'contact.location': 'Location',
    'contact.followMe': 'Follow Me',
    
    // Page Layout
    'page.loading': 'Loading...',
    'page.backToTop': 'Back to Top',
    
    // Footer
    'footer.rights': 'All rights reserved',
    'footer.madeWith': 'Made with',
    'footer.heart': '♥',
    'footer.by': 'by',
  },
  fr: {
    // Header
    'header.work': 'Travaux',
    'header.about': 'À propos',
    'header.photography': 'Photographie',
    'header.experience': 'Expérience',
    'header.contact': 'Contact',
    'header.cta': 'Discutons',
    
    // Common
    'common.backToHome': 'Retour à l\'Accueil',
    
    // Unavailable Pages
    'unavailable.photography.title': 'Page Non Disponible',
    'unavailable.photography.message': 'La section photographie est actuellement en cours de développement. Veuillez revenir plus tard pour découvrir mon travail photographique.',
    'unavailable.about.title': 'Page Non Disponible',
    'unavailable.about.message': 'La section à propos est actuellement en cours de développement. Veuillez revenir plus tard pour en savoir plus sur mon parcours et mon background.',
    
    // Home
    'home.welcome': 'Bienvenue sur',
    'home.project': 'Projet',
    'home.subtitle': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    'home.viewWork': 'Voir Mes Projets',
    'home.learnMore': 'En Savoir Plus Sur Moi',
    
    // Work
    'work.title': 'Mes projets',
    'work.subtitle': 'Bientôt Disponible - Une sélection soignée de projets démontrant mon expertise en développement full-stack, automatisation DevOps et solutions créatives.',
    'work.construction': 'Portfolio En Construction',
    'work.constructionText': 'Je suis actuellement en train de créer une vitrine exceptionnelle de mes meilleurs travaux. Chaque projet racontera une histoire d\'innovation, de résolution de problèmes et d\'excellence technique.',
    'work.projectsCompleted': 'Projets Réalisés',
    'work.technologiesUsed': 'Technologies Utilisées',
    'work.yearsExperience': 'Années d\'Expérience',
    
    // About - Version française plus humaine
    'about.title': 'À Propos',
    'about.subtitle': 'Apprenez-en plus sur mon parcours, mes compétences et ma passion pour la création d\'expériences numériques.',
    'about.greeting': 'Joyeux matin! Moi c\'est Ludwig',
    'about.mainDescription': 'Étudiant passionné en génie informatique à l\'Université de Sherbrooke. J\'adore créer des solutions numériques qui font la différence et explorer les dernières technologies.',
    'about.currentStatus': 'Statut actuel',
    'about.statusValue': 'Étudiant en génie informatique',
    'about.location': 'Localisation', 
    'about.locationValue': 'Sherbrooke, QC',
    'about.focus': 'Focus',
    'about.focusValue': 'Full-stack & DevOps',
    'about.journey.title': 'Mon parcours',
    'about.journey.story': 'Après avoir découvert ma passion pour la programmation au Cégep de Joliette, j\'ai décidé de poursuivre mes études en génie informatique. Ce qui m\'anime vraiment, c\'est de voir comment la technologie peut simplifier la vie des gens.',
    'about.journey.passion': 'J\'ai une passion particulière pour l\'infrastructure et les systèmes distribués. Il n\'y a rien de plus satisfaisant que de voir une application fonctionner parfaitement en production !',
    'about.timeline.university.title': 'Génie Informatique',
    'about.timeline.university.period': '2022 - 2026',
    'about.timeline.university.description': 'Université de Sherbrooke - Spécialisation en systèmes et réseaux',
    'about.timeline.cegep.title': 'Techniques de l\'informatique',
    'about.timeline.cegep.period': '2020 - 2022',
    'about.timeline.cegep.description': 'Cégep de Joliette - Profil développement d\'applications',
    'about.techStack.title': 'Technologies que j\'utilise',
    'about.techStack.favorites': 'Mes préférées',
    'about.techStack.exploring': 'J\'explore actuellement',
    'about.personal.title': 'Côté personnel',
    'about.personal.photography': 'Photographie',
    'about.personal.climbing': 'Escalade',
    'about.personal.motorcycle': 'Moto',
    'about.current.title': 'Ce sur quoi je travaille',
    'about.current.portfolio.title': 'Ce portfolio',
    'about.current.portfolio.description': 'Développé avec Next.js et TypeScript, hébergé sur Vercel',
    'about.current.learning.title': 'Apprentissage continu',
    'about.current.learning.description': 'Kubernetes, architecture cloud et ingénierie réseau',
    'about.current.building.title': 'Projets personnels',
    'about.current.building.description': 'Microservices en Go et automatisation DevOps',
    'about.connect.title': 'Connectons-nous !',
    'about.connect.description': 'Toujours ouvert à discuter de tech, de projets intéressants ou simplement pour échanger.',
    'about.connect.contact': 'Me contacter',
    'about.connect.resume': 'Télécharger mon CV',
    
    // Interests in French
    'about.interests.title': 'Ce qui me Passionne',
    'about.interests.tech.title': 'Passion Technologique',
    'about.interests.tech.production': 'Processus de déploiement en production',
    'about.interests.tech.architecture': 'Design d\'architecture logicielle',
    'about.interests.tech.deployment': 'CI/CD et automatisation',
    'about.interests.tech.cloud': 'Infrastructure cloud et réseau',
    'about.interests.creative.title': 'Pursuits Créatifs',
    'about.interests.creative.photography': 'Photographie et arts visuels',
    'about.interests.creative.art': 'Art numérique et design',
    'about.interests.creative.design': 'UI/UX et solutions créatives',
    'about.interests.outdoor.title': 'Activités Extérieures',
    'about.interests.outdoor.climbing': 'Escalade',
    'about.interests.outdoor.motorcycle': 'Moto',
    'about.interests.outdoor.nature': 'Exploration de la nature',
    
    // Stats in French
    'about.stats.internships': 'Stages',
    'about.stats.graduated': 'Gradué',
    'about.stats.technologies': 'Technologies',
    
    // CTA in French
    'about.cta.title': 'Construisons Quelque Chose d\'Incroyable',
    'about.cta.description': 'Je suis toujours enthousiaste à l\'idée de travailler sur de nouveaux projets et d\'explorer des solutions innovantes. Que ce soit du développement full-stack, de l\'automatisation DevOps, ou des expériences numériques créatives.',
    'about.cta.contact': 'Prendre Contact',
    'about.cta.downloadCV': 'Télécharger CV',
    
    // Photography
    'photography.title': 'Photographie',
    'photography.subtitle': 'Un voyage visuel à travers mon objectif, capturant des moments et des histoires en lumière et ombre.',
    'photography.description': 'Capturer des moments à travers l\'objectif de la créativité',
    'photography.all': 'Tout',
    'photography.nature': 'Nature',
    'photography.portrait': 'Portrait',
    'photography.street': 'Rue',
    'photography.architecture': 'Architecture',
    'photography.viewGallery': 'Voir la Galerie Complète',
    
    // Experience
    'experience.title': 'Expérience',
    'experience.subtitle': 'Mon parcours professionnel et mes étapes importantes en technologie, développement et projets créatifs.',
    'experience.description': 'Mon parcours professionnel et mes réalisations',
    'experience.current': 'Actuel',
    'experience.years': 'ans',
    'experience.achievements': 'Réalisations Clés',
    'experience.technologies': 'Technologies',
    
    // Contact
    'contact.title': 'Contactez-moi',
    'contact.subtitle': 'Collaborons et donnons vie à vos idées. Je suis toujours enthousiaste à l\'idée de travailler sur de nouveaux projets.',
    'contact.description': 'Créons quelque chose d\'extraordinaire ensemble',
    'contact.name': 'Votre Nom',
    'contact.email': 'Votre Email',
    'contact.subject': 'Sujet',
    'contact.message': 'Votre Message',
    'contact.send': 'Envoyer le Message',
    'contact.sending': 'Envoi en cours...',
    'contact.success': 'Message envoyé avec succès !',
    'contact.error': 'Erreur lors de l\'envoi. Veuillez réessayer.',
    'contact.phone': 'Téléphone',
    'contact.location': 'Localisation',
    'contact.followMe': 'Suivez-moi',
    
    // Page Layout
    'page.loading': 'Chargement...',
    'page.backToTop': 'Retour en Haut',
    
    // Footer
    'footer.rights': 'Tous droits réservés',
    'footer.madeWith': 'Fait avec',
    'footer.heart': '♥',
    'footer.by': 'par',
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('en');

  useEffect(() => {
    // Check for saved language preference
    const savedLanguage = localStorage.getItem('language') as Language;
    if (savedLanguage && (savedLanguage === 'en' || savedLanguage === 'fr')) {
      setLanguage(savedLanguage);
    } else {
      // Detect browser language
      const browserLang = navigator.language.startsWith('fr') ? 'fr' : 'en';
      setLanguage(browserLang);
    }
  }, []);

  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang);
    localStorage.setItem('language', lang);
  };

  const t = (key: string): string => {
    const translation = translations[language] as Record<string, string>;
    return translation[key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage: handleSetLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
