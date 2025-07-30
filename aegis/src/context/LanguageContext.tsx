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
    'about.title': 'About Me',
    'about.subtitle': 'Learn more about my journey, skills, and passion for creating digital experiences.',
    'about.description': 'Passionate developer and visual storyteller crafting digital experiences',
    'about.intro': 'Hello! I\'m Ludwig-E. Dufour, a passionate Full-Stack Developer and DevOps Engineer with a creative eye for photography.',
    'about.passion': 'My passion lies in creating innovative digital solutions that bridge the gap between functionality and aesthetics.',
    'about.skills': 'My Skills',
    'about.downloadCV': 'Download CV',
    'about.hireMeBtn': 'Hire Me',
    'about.badges.fullstack': 'Full-Stack',
    'about.badges.devops': 'DevOps',
    'about.badges.photographer': 'Photographer',
    'about.description.paragraph1': 'Passionate Full-Stack Developer with over 5 years of experience crafting innovative digital solutions. I specialize in modern web technologies, cloud architecture, and creating seamless user experiences.',
    'about.description.paragraph2': 'When I\'m not coding, you\'ll find me behind a camera lens, capturing the beauty of the world through photography. This artistic perspective enriches my approach to design and user interface development.',
    'about.description.paragraph3': 'I believe in clean code, scalable architecture, and the power of collaboration to bring exceptional ideas to life.',
    'about.stats.projects': 'Projects Completed',
    'about.stats.experience': 'Years Experience',
    'about.stats.technologies': 'Technologies',
    'about.actions.contact': 'Get In Touch',
    'about.actions.downloadCV': 'Download CV',
    
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
    'footer.heart': '❤️',
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
    
    // About
    'about.title': 'À Propos',
    'about.subtitle': 'Découvrez mon parcours, mes compétences et ma passion pour créer des expériences numériques.',
    'about.description': 'Développeur passionné et conteur visuel créant des expériences numériques',
    'about.intro': 'Joyeux matin ! Je suis Ludwig-E. Dufour, un Développeur Full-Stack et étudiant en Génie Informatique.',
    'about.passion': 'Passionné de réseautique, rajouter du texte ici',
    'about.skills': 'Mes Compétences',
    'about.downloadCV': 'Télécharger CV',
    'about.hireMeBtn': 'Embauchez-moi *please',
    'about.badges.fullstack': 'Full-Stack',
    'about.badges.devops': 'DevOps',
    'about.badges.photographer': 'Photographe',
    'about.description.paragraph1': 'Développeur Full-Stack passionné avec plus de 5 ans d\'expérience dans la création de solutions numériques innovantes. Je me spécialise dans les technologies web modernes, l\'architecture cloud et la création d\'expériences utilisateur fluides.',
    'about.description.paragraph2': 'Quand je ne code pas, vous me trouverez derrière un objectif d\'appareil photo, capturant la beauté du monde à travers la photographie. Cette perspective artistique enrichit mon approche du design et du développement d\'interfaces utilisateur.',
    'about.description.paragraph3': 'Je crois en un code propre, une architecture évolutive et le pouvoir de la collaboration pour donner vie à des idées exceptionnelles.',
    'about.stats.projects': 'Projets Réalisés',
    'about.stats.experience': 'Années d\'Expérience',
    'about.stats.technologies': 'Technologies',
    'about.actions.contact': 'Prendre Contact',
    'about.actions.downloadCV': 'Télécharger CV',
    
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
    'footer.heart': '❤️',
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
