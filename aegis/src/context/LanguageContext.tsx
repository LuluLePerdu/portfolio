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

    'header.work': 'Work',
    'header.about': 'About',
    'header.odyssey': 'Odyssey',
    'header.experience': 'Experience',
    'header.contact': 'Contact',
    'header.cta': "Let's Talk",
    

    'common.backToHome': 'Back to Home',
    

    'pages.odyssey.title': 'My Odyssey',
    'pages.odyssey.comingSoon': 'My travel odyssey is currently under development. Come back soon to discover my adventures, stories, and journey planning insights from around the world.',
    

    'unavailable.photography.title': 'Page Unavailable',
    'unavailable.photography.message': 'My travel odyssey is currently under development. Come back soon to discover my adventures, stories, and journey planning insights from around the world.',
    'unavailable.about.title': 'Page Unavailable',
    'unavailable.about.message': 'The about section is currently under development. Please check back later to learn more about my journey and background.',
    

    'home.welcome': 'Welcome to',
    'home.project': 'Project',
    'home.subtitle': 'My personal project in development',
    'home.viewWork': 'View My Work',
    'home.learnMore': 'Learn More About Me',
    

    'work.title': 'My Projects',
    'work.subtitle': 'A curated selection of academic and personal projects showcasing innovation, problem-solving, and technical excellence.',
    'work.construction': 'Portfolio Under Construction',
    'work.constructionText': "I'm currently crafting an exceptional showcase of my best work. Each project will tell a story of innovation, problem-solving, and technical excellence.",
    'work.projectsCompleted': 'Projects Completed',
    'work.technologiesUsed': 'Technologies Used',
    'work.yearsExperience': 'Years Experience',
    

    'work.categories.all': 'All Projects',
    'work.categories.academic': 'Academic',
    'work.categories.personal': 'Personal',
    'work.categories.web': 'Web Development',
    'work.categories.infrastructure': 'Infrastructure',
    'work.categories.mobile': 'Mobile',
    'work.categories.backend': 'Backend',
    

    'work.status.completed': 'Completed',
    'work.status.inProgress': 'In Progress',
    'work.status.planned': 'Planned',
    

    'work.viewProject': 'View Project',
    'work.viewCode': 'View Code',
    'work.viewDemo': 'Live Demo',
    'work.learnMore': 'Learn More',
    'work.comingSoon': 'Coming Soon',
    'work.featured': 'Featured',
    'work.inProgress': 'Work in Progress',
    'work.showMore': 'Show More',
    'work.showLess': 'Show Less',
    

    'work.challenge': 'Challenge',
    'work.solution': 'Solution',
    'work.technologies': 'Technologies',
    'work.duration': 'Duration',
    'work.team': 'Team',
    'work.role': 'My Role',
    'work.highlights': 'Key Highlights',
    

    'work.project.viewDetails': 'View Details',
    'work.project.viewCode': 'View Code',
    'work.project.liveDemo': 'Live Demo',
    'work.project.inProgress': 'In Progress',
    'work.project.completed': 'Completed',
    'work.project.academic': 'Academic Project',
    'work.project.personal': 'Personal Project',
    'work.project.infrastructure': 'Infrastructure',
    'work.project.duration': 'Duration',
    'work.project.team': 'Team',
    'work.project.role': 'My Role',
    'work.project.challenges': 'Key Challenges',
    'work.project.achievements': 'Achievements',
    'work.project.technologies': 'Technologies Used',
    'work.project.architecture': 'Architecture',
    'work.project.features': 'Key Features',
    

    'work.projects.robotDrawing.title': 'Robot Drawing App',
    'work.projects.robotDrawing.description': 'Mobile application in Flutter allowing users to create drawings and transfer them to a robot for physical reproduction.',
    'work.projects.robotDrawing.challenge': 'Integrating mobile UI with robotic hardware communication',
    'work.projects.robotDrawing.achievement': 'Successfully bridged digital art creation with physical robot execution',
    
    'work.projects.blackjack.title': 'Blackjack API Game',
    'work.projects.blackjack.description': 'Complete Blackjack game implementation in Go with RESTful API architecture for card management and game logic.',
    'work.projects.blackjack.challenge': 'Designing scalable API architecture for real-time game state management',
    'work.projects.blackjack.achievement': 'Built robust game engine with proper API design patterns',
    
    'work.projects.portfolio.title': 'Portfolio Website',
    'work.projects.portfolio.description': 'Modern, responsive portfolio website built with Next.js, TypeScript, and SCSS featuring dark/light themes and internationalization.',
    'work.projects.portfolio.challenge': 'Creating a unique design system while maintaining performance and accessibility',
    'work.projects.portfolio.achievement': 'Achieved perfect performance scores and responsive design across all devices',
    
    'work.projects.homelab.title': 'Homelab Infrastructure',
    'work.projects.homelab.description': 'Personal server setup with Proxmox virtualization hosting multiple services and ongoing development projects.',
    'work.projects.homelab.challenge': 'Managing complex virtualized infrastructure and service orchestration',
    'work.projects.homelab.achievement': 'Built scalable home infrastructure supporting multiple concurrent projects',
    

    'work.wip.title': 'Work in Progress',
    'work.wip.subtitle': 'Current projects and exciting developments',
    'work.wip.description': 'Always working on something new and exciting!',
    

    'about.title': 'About',
    'about.subtitle': 'Learn more about my journey, skills, and passion for creating digital experiences.',
    'about.greeting': 'Hi! I\'m',
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
    'about.personal.photography': 'Travel & Backpacking',
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
    'about.interests.title': 'What Drives Me',
    'about.interests.tech.title': 'Technology Passion',
    'about.interests.tech.production': 'Production deployment processes',
    'about.interests.tech.architecture': 'Software architecture design',
    'about.interests.tech.deployment': 'CI/CD and automation',
    'about.interests.tech.cloud': 'Cloud and network infrastructure',
    'about.interests.creative.title': 'Creative Pursuits',
    'about.interests.creative.photography': 'Travel photography and adventures',
    'about.interests.creative.art': 'Digital art and design',
    'about.interests.creative.design': 'UI/UX and creative solutions',
    'about.interests.outdoor.title': 'Outdoor Activities',
    'about.interests.outdoor.climbing': 'Rock climbing',
    'about.interests.outdoor.motorcycle': 'Motorcycle riding',
    'about.interests.outdoor.nature': 'Nature exploration',
    'about.stats.internships': 'Internships',
    'about.stats.graduated': 'Graduated',
    'about.stats.technologies': 'Technologies',
    'about.cta.title': 'Let\'s Build Something Amazing',
    'about.cta.description': 'I\'m always excited to work on new projects and explore innovative solutions. Whether it\'s full-stack development, DevOps automation, or creative digital experiences.',
    'about.cta.contact': 'Get In Touch',
    'about.cta.downloadCV': 'Download CV',
    

    'about.name': 'Ludwig-Emmanuel',
    'about.surname': 'Dufour',
    'about.role': 'Computer Engineering Student & Full Stack Developer',
    'about.description': 'Passionate about <span class=\'highlight-cloud\'>cloud infrastructure</span>, <span class=\'highlight-network\'>networking</span>, and distributed systems. Studying at <span class=\'highlight-udes\'>UdeS</span> and creating innovative web solutions that combine <span class=\'highlight-performance\'>technical performance</span> with exceptional user experience.',
    'about.status': 'Student at UdeS',
    'about.skillsTitle': 'Expertise',
    'about.journeyTitle': 'Experience',
    'about.expertiseTitle': 'Technologies',
    'about.contactTitle': 'Let\'s collaborate',
    'about.contactMessage': 'Always enthusiastic about working on new projects and exploring innovative solutions. Whether it\'s full-stack development, DevOps automation, or creative digital experiences.',
    'about.visionTitle': 'Vision & Approach',
    'about.visionDescription': 'Passionate about technological innovation, I specialize in cloud architecture and modern network solutions. My approach combines deep technical expertise with strategic vision to create robust and scalable systems.',
    'about.journeyDescription': 'Discover my complete academic background, professional experiences and projects that have shaped my career in computer engineering.',
    'about.journeyButtonText': 'View my complete experience →',
    'about.metrics.years.number': '4+',
    'about.metrics.years.label': 'Years',
    'about.metrics.projects.number': '20+',
    'about.metrics.projects.label': 'Projects',
    'about.metrics.technologies.number': '12+',
    'about.metrics.technologies.label': 'Technologies',
    'about.metrics.certifications.number': '3',
    'about.metrics.certifications.label': 'Certifications',
    'about.highlights.student.title': 'UdeS Student',
    'about.highlights.student.desc': 'Computer Engineering',
    'about.highlights.cloud.title': 'Cloud & DevOps',
    'about.highlights.cloud.desc': 'AWS, Docker, K8s',
    'about.highlights.network.title': 'Networking',
    'about.highlights.network.desc': 'Distributed Systems',
    'about.achievements.performance.text': 'Technical Creativity',
    'about.achievements.performance.desc': 'Innovative and elegant solutions',
    'about.achievements.cloud.text': 'Infrastructure Passion',
    'about.achievements.cloud.desc': 'Homelab and distributed systems',
    'about.achievements.network.text': 'Continuous Learning',
    'about.achievements.network.desc': 'Exploring new technologies',
    'about.skills.webdev.name': 'Web Development',
    'about.skills.webdev.level': '4 years',
    'about.skills.architecture.name': 'System Architecture',
    'about.skills.architecture.level': '3 years',
    'about.skills.devops.name': 'DevOps & Automation',
    'about.skills.devops.level': '1 year',
    'about.skills.networking.name': 'Network Engineering',
    'about.skills.networking.level': '2 years',
    'about.categories.cloud.name': 'Cloud & Infrastructure',
    'about.categories.frontend.name': 'Frontend',
    'about.categories.backend.name': 'Backend & Networks',
    'about.categories.database.name': 'Databases',
    'about.categories.mobile.name': 'Mobile & Others',
    

    'about.tech.frontend.title': 'Frontend Development',
    'about.tech.backend.title': 'Backend Languages', 
    'about.tech.frameworks.title': 'Web Frameworks',
    'about.tech.cloud.title': 'Cloud & Infrastructure',
    'about.tech.databases.title': 'Databases & Storage',
    'about.tech.mobile.title': 'Mobile Development',
    
    'about.contactButton': 'Start a project',
    'about.cvButton': 'Download Resume',
    

    'odyssey.title': 'My Odyssey',
    'odyssey.subtitle': 'Travel stories, adventures, and journey planning - exploring the world one destination at a time.',
    'odyssey.description': 'Adventures, stories & planning for the wandering soul',
    'odyssey.all': 'All Adventures',
    'odyssey.nature': 'Nature',
    'odyssey.portrait': 'People & Culture',
    'odyssey.street': 'Urban Life',
    'odyssey.architecture': 'Architecture',
    'odyssey.viewGallery': 'Explore My Complete Journey',

    'odyssey.comingSoon': 'My travel odyssey is currently under development. Come back soon to discover my adventures, stories, and journey planning insights from around the world.',
    'odyssey.unavailableTitle': 'Page Unavailable',

    'odyssey.stories.title': 'Travel Stories',
    'odyssey.stories.subtitle': 'Adventures and experiences from around the world',
    'odyssey.planning.title': 'Journey Planning',
    'odyssey.planning.subtitle': 'Tips, guides, and resources for your next adventure',
    'odyssey.upcoming.title': 'Upcoming Adventures',
    'odyssey.upcoming.subtitle': 'Dreams and plans for future journeys',
    'odyssey.gallery.title': 'Visual Stories',
    'odyssey.gallery.subtitle': 'Photos and videos from my travels',
    

    'odyssey.readMore': 'Read More',
    'odyssey.readLess': 'Read Less',
    'odyssey.viewPhotos': 'View Photos',
    'odyssey.watchVideo': 'Watch Video',
    'odyssey.planningTips': 'Planning Tips',
    'odyssey.duration': 'Duration',
    'odyssey.budget': 'Budget',
    'odyssey.highlights': 'Highlights',
    'odyssey.lessons': 'Lessons Learned',
    'odyssey.status.completed': 'Completed',
    'odyssey.status.upcoming': 'Upcoming',
    'odyssey.status.planning': 'Planning',
    'odyssey.status.dreaming': 'Dreaming',
    

    'odyssey.planning.budgetCalculator': 'Budget Calculator',
    'odyssey.planning.packingList': 'Packing Lists',
    'odyssey.planning.resources': 'Travel Resources',
    'odyssey.planning.tips': 'Pro Tips',
    

    'experience.title': 'Experience',
    'experience.subtitle': 'My professional journey and milestones in technology, development, and creative projects.',
    'experience.description': 'My professional journey and achievements',
    'experience.current': 'Current',
    'experience.years': 'years',
    'experience.achievements': 'Key Achievements',
    'experience.technologies': 'Technologies',
    

    'experience.jobs.cooptel.position': 'Tech support',
    'experience.jobs.cooptel.company': 'Cooptel',
    'experience.jobs.cooptel.location': 'Valcourt, QC',
    'experience.jobs.cooptel.period': 'July 2024 - August 2025',
    'experience.jobs.cooptel.type': 'Part-time',
    'experience.jobs.cooptel.description': 'Providing technical support and troubleshooting for residential and business customers. Assisting with internet, phone, and TV services, ensuring high customer satisfaction.',
    
    'experience.jobs.css.position': 'Full-Stack Developer',
    'experience.jobs.css.company': 'Centre de service scolaire des Samares',
    'experience.jobs.css.location': 'St-Félix-de-Valois, QC',
    'experience.jobs.css.period': 'March 2024 - July 2024',
    'experience.jobs.css.type': 'Full-time internship',
    'experience.jobs.css.description': 'Developed and maintained web applications for administrative purposes.',
    'experience.jobs.css.achievement1': 'Created an internal tool for management of student data',
    'experience.jobs.css.achievement2': 'Participated in code reviews and contributed to team knowledge sharing',
    'experience.jobs.css.achievement3': 'Developed and maintained RESTful APIs for data exchange between front-end and back-end systems',
    
    'experience.jobs.blanko.position': 'Backend Developer',
    'experience.jobs.blanko.company': 'Blanko création numérique',
    'experience.jobs.blanko.location': 'Joliette, QC',
    'experience.jobs.blanko.period': 'summer 2023',
    'experience.jobs.blanko.type': 'Full-time internship',
    'experience.jobs.blanko.description': 'Worked on backend development for various city web applications and implemented dynamic features.',
    'experience.jobs.blanko.achievement1': 'Implemented a dynamic form builder for city applications',
    'experience.jobs.blanko.achievement2': 'Developed RESTful APIs for data management',
    'experience.jobs.blanko.achievement3': 'Collaborated with front-end developers to integrate APIs with user interfaces',
    
    'experience.jobs.cgi.position': 'Developer',
    'experience.jobs.cgi.company': 'CGI',
    'experience.jobs.cgi.location': 'Sherbrooke, QC',
    'experience.jobs.cgi.period': 'Summer 2025 - Present',
    'experience.jobs.cgi.type': 'Full-time internship & part-time job',
    'experience.jobs.cgi.description': 'Developed and maintained web applications and created/maintained pipelines for CI/CD processes.',
    'experience.jobs.cgi.achievement1': 'Developed a web application for internal use',
    'experience.jobs.cgi.achievement2': 'Created CI/CD pipelines using GitLab CI',
    'experience.jobs.cgi.achievement3': 'Collaborated with international cross-functional teams to deliver high-quality software solutions',
    

    'contact.title': 'Get In Touch',
    'contact.subtitle': 'Let\'s collaborate and bring your ideas to life. I\'m always excited to work on new projects.',
    'contact.description': 'Let\'s create something amazing together',
    'contact.name': 'Name',
    'contact.email': 'Email',
    'contact.subject': 'Subject',
    'contact.message': 'Your Message',
    'contact.namePlaceholder': 'Your full name',
    'contact.emailPlaceholder': 'your.email@example.com',
    'contact.subjectPlaceholder': 'What\'s this about?',
    'contact.messagePlaceholder': 'Tell me about your project or idea...',
    'contact.send': 'Send Message',
    'contact.sending': 'Sending...',
    'contact.success': 'Message sent successfully!',
    'contact.error': 'Error sending message. Please try again.',
    'contact.phone': 'Phone',
    'contact.location': 'Location',
    'contact.followMe': 'Follow Me',
    'contact.downloadCV': 'Download my current CV',
    'contact.cv': 'Curriculum Vitae',
    

    'email.modal.title': 'Email Not Available',
    'email.modal.message': 'The email functionality is currently not implemented. However, you can reach me directly at:',
    'email.modal.directEmail': 'ludwig-emmanuel@hotmail.com',
    

    'page.loading': 'Loading...',
    'page.backToTop': 'Back to Top',
    

    'footer.rights': 'All rights reserved',
    'footer.madeWith': 'Made with',
    'footer.heart': '♥',
    'footer.by': 'by',
    'footer.brand.subtitle': 'Digital Sanctuary',
    'footer.quote': '"Good morning | It\'s probably morning somewhere in the world"',
    'footer.connect': 'Connect',
    'footer.copyright': 'Built with Joyeux Matin!',
    'footer.scrollTop': 'Scroll to top',
  },
  fr: {

    'header.work': 'Travaux',
    'header.about': 'À propos',
    'header.odyssey': 'Odyssée',
    'header.experience': 'Expérience',
    'header.contact': 'Contact',
    'header.cta': 'Discutons',
    

    'common.backToHome': 'Retour à l\'Accueil',
    

    'pages.odyssey.title': 'Mon Odyssée',
    'pages.odyssey.comingSoon': 'Mon odyssée de voyage est actuellement en développement. Revenez bientôt pour découvrir mes aventures, histoires et conseils de planification de voyage à travers le monde.',
    

    'unavailable.photography.title': 'Page Non Disponible',
    'unavailable.photography.message': 'Mon odyssée de voyage est actuellement en développement. Revenez bientôt pour découvrir mes aventures, histoires et conseils de planification de voyage à travers le monde.',
    'unavailable.about.title': 'Page Non Disponible',
    'unavailable.about.message': 'La section à propos est actuellement en cours de développement. Veuillez revenir plus tard pour en savoir plus sur mon parcours et mon background.',
    

    'home.welcome': 'Bienvenue sur',
    'home.project': 'Projet',
    'home.subtitle': 'Mon projet personnel en cours de développement',
    'home.viewWork': 'Voir Mes Projets',
    'home.learnMore': 'En Savoir Plus Sur Moi',
    

    'work.title': 'Mes Projets',
    'work.subtitle': 'Une sélection soignée de projets académiques et personnels démontrant innovation, résolution de problèmes et excellence technique.',
    'work.construction': 'Portfolio En Construction',
    'work.constructionText': 'Je suis actuellement en train de créer une vitrine exceptionnelle de mes meilleurs travaux. Chaque projet racontera une histoire d\'innovation, de résolution de problèmes et d\'excellence technique.',
    'work.projectsCompleted': 'Projets Réalisés',
    'work.technologiesUsed': 'Technologies Utilisées',
    'work.yearsExperience': 'Années d\'Expérience',
    

    'work.categories.all': 'Tous les Projets',
    'work.categories.academic': 'Académique',
    'work.categories.personal': 'Personnel',
    'work.categories.web': 'Développement Web',
    'work.categories.infrastructure': 'Infrastructure',
    'work.categories.mobile': 'Mobile',
    'work.categories.backend': 'Backend',
    

    'work.status.completed': 'Terminé',
    'work.status.inProgress': 'En Cours',
    'work.status.planned': 'Planifié',
    

    'work.viewProject': 'Voir le Projet',
    'work.viewCode': 'Voir le Code',
    'work.viewDemo': 'Démo Live',
    'work.learnMore': 'En Savoir Plus',
    'work.comingSoon': 'Bientôt Disponible',
    'work.featured': 'À la Une',
    'work.inProgress': 'En Cours de Développement',
    'work.showMore': 'Voir Plus',
    'work.showLess': 'Voir Moins',
    

    'work.challenge': 'Défi',
    'work.solution': 'Solution',
    'work.technologies': 'Technologies',
    'work.duration': 'Durée',
    'work.team': 'Équipe',
    'work.role': 'Mon Rôle',
    'work.highlights': 'Points Clés',
    

    'work.project.viewDetails': 'Voir Détails',
    'work.project.viewCode': 'Voir le Code',
    'work.project.liveDemo': 'Démo Live',
    'work.project.inProgress': 'En Cours',
    'work.project.completed': 'Terminé',
    'work.project.academic': 'Projet Académique',
    'work.project.personal': 'Projet Personnel',
    'work.project.infrastructure': 'Infrastructure',
    'work.project.duration': 'Durée',
    'work.project.team': 'Équipe',
    'work.project.role': 'Mon Rôle',
    'work.project.challenges': 'Défis Principaux',
    'work.project.achievements': 'Réalisations',
    'work.project.technologies': 'Technologies Utilisées',
    'work.project.architecture': 'Architecture',
    'work.project.features': 'Fonctionnalités Clés',
    

    'work.projects.robotDrawing.title': 'App de Dessin Robotique',
    'work.projects.robotDrawing.description': 'Application mobile en Flutter permettant aux utilisateurs de créer des dessins et de les transférer à un robot pour reproduction physique.',
    'work.projects.robotDrawing.challenge': 'Intégration de l\'interface mobile avec la communication matérielle robotique',
    'work.projects.robotDrawing.achievement': 'Pont réussi entre création artistique numérique et exécution robotique physique',
    
    'work.projects.blackjack.title': 'Jeu Blackjack API',
    'work.projects.blackjack.description': 'Implémentation complète du jeu Blackjack en Go avec architecture API RESTful pour la gestion des cartes et logique de jeu.',
    'work.projects.blackjack.challenge': 'Conception d\'architecture API évolutive pour gestion d\'état de jeu en temps réel',
    'work.projects.blackjack.achievement': 'Moteur de jeu robuste avec patterns de conception API appropriés',
    
    'work.projects.portfolio.title': 'Site Portfolio',
    'work.projects.portfolio.description': 'Site portfolio moderne et responsive construit avec Next.js, TypeScript et SCSS avec thèmes sombre/clair et internationalisation.',
    'work.projects.portfolio.challenge': 'Créer un système de design unique tout en maintenant performance et accessibilité',
    'work.projects.portfolio.achievement': 'Scores de performance parfaits et design responsive sur tous appareils',
    
    'work.projects.homelab.title': 'Infrastructure Homelab',
    'work.projects.homelab.description': 'Configuration serveur personnel avec virtualisation Proxmox hébergeant multiples services et projets de développement en cours.',
    'work.projects.homelab.challenge': 'Gestion d\'infrastructure virtualisée complexe et orchestration de services',
    'work.projects.homelab.achievement': 'Infrastructure domestique évolutive supportant multiples projets simultanés',
    

    'work.wip.title': 'Projets en Cours',
    'work.wip.subtitle': 'Projets actuels et développements passionnants',
    'work.wip.description': 'Toujours en train de travailler sur quelque chose de nouveau et excitant !',
    

    'about.title': 'À Propos',
    'about.subtitle': 'Apprenez-en plus sur mon parcours, mes compétences et ma passion pour la création d\'expériences numériques.',
    'about.greeting': 'Joyeux matin! Moi c\'est',
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
    'about.personal.photography': 'Voyage & Aventure',
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
    'about.interests.title': 'Ce qui me Passionne',
    'about.interests.tech.title': 'Passion Technologique',
    'about.interests.tech.production': 'Processus de déploiement en production',
    'about.interests.tech.architecture': 'Design d\'architecture logicielle',
    'about.interests.tech.deployment': 'CI/CD et automatisation',
    'about.interests.tech.cloud': 'Infrastructure cloud et réseau',
    'about.interests.creative.title': 'Pursuits Créatifs',
    'about.interests.creative.photography': 'Photographie de voyage et aventures',
    'about.interests.creative.art': 'Art numérique et design',
    'about.interests.creative.design': 'UI/UX et solutions créatives',
    'about.interests.outdoor.title': 'Activités Extérieures',
    'about.interests.outdoor.climbing': 'Escalade',
    'about.interests.outdoor.motorcycle': 'Moto',
    'about.interests.outdoor.nature': 'Exploration de la nature',
    'about.stats.internships': 'Stages',
    'about.stats.graduated': 'Gradué',
    'about.stats.technologies': 'Technologies',
    'about.cta.title': 'Construisons Quelque Chose d\'Incroyable',
    'about.cta.description': 'Je suis toujours enthousiaste à l\'idée de travailler sur de nouveaux projets et d\'explorer des solutions innovantes. Que ce soit du développement full-stack, de l\'automatisation DevOps, ou des expériences numériques créatives.',
    'about.cta.contact': 'Prendre Contact',
    'about.cta.downloadCV': 'Télécharger CV',
    

    'about.name': 'Ludwig-Emmanuel',
    'about.surname': 'Dufour',
    'about.role': 'Étudiant en Génie Informatique & Développeur Full Stack',
    'about.description': 'Passionné par l\'infrastructure <span class=\'highlight-cloud\'>cloud</span>, la <span class=\'highlight-network\'>réseautique</span> et les systèmes distribués. J\'étudie à l\'<span class=\'highlight-udes\'>UdeS</span> et je crée des solutions web innovantes qui allient <span class=\'highlight-performance\'>performance technique</span> et expérience utilisateur exceptionnelle.',
    'about.status': 'Étudiant à l\'UdeS',
    'about.skillsTitle': 'Expertise',
    'about.journeyTitle': 'Mon Parcours',
    'about.expertiseTitle': 'Technologies',
    'about.contactTitle': 'Collaborons ensemble',
    'about.contactMessage': 'Toujours enthousiaste à l\'idée de travailler sur de nouveaux projets et d\'explorer des solutions innovantes. Que ce soit du développement full-stack, de l\'automatisation DevOps, ou des expériences numériques créatives.',
    'about.visionTitle': 'Vision & Approche',
    'about.visionDescription': 'Passionné par l\'innovation technologique, je me spécialise dans l\'architecture cloud et les solutions réseau modernes. Mon approche combine expertise technique approfondie et vision stratégique pour créer des systèmes robustes et évolutifs.',
    'about.journeyDescription': 'Découvrez mon parcours académique complet, mes expériences professionnelles et les projets qui ont façonné ma carrière en génie informatique.',
    'about.journeyButtonText': 'Voir mon expérience complète →',
    'about.metrics.years.number': '4+',
    'about.metrics.years.label': 'Années',
    'about.metrics.projects.number': '20+',
    'about.metrics.projects.label': 'Projets',
    'about.metrics.technologies.number': '12+',
    'about.metrics.technologies.label': 'Technologies',
    'about.metrics.certifications.number': '3',
    'about.metrics.certifications.label': 'Certifications',
    'about.highlights.student.title': 'Étudiant UdeS',
    'about.highlights.student.desc': 'Génie informatique',
    'about.highlights.cloud.title': 'Cloud & DevOps',
    'about.highlights.cloud.desc': 'AWS, Docker, K8s',
    'about.highlights.network.title': 'Réseautique',
    'about.highlights.network.desc': 'Systèmes distribués',
    'about.achievements.performance.text': 'Créativité Technique',
    'about.achievements.performance.desc': 'Solutions innovantes et élégantes',
    'about.achievements.cloud.text': 'Passion Infrastructure',
    'about.achievements.cloud.desc': 'Homelab et systèmes distribués',
    'about.achievements.network.text': 'Apprentissage Continu',
    'about.achievements.network.desc': 'Exploration des nouvelles technologies',
    'about.skills.webdev.name': 'Développement Web',
    'about.skills.webdev.level': '4 ans',
    'about.skills.architecture.name': 'Architecture Système',
    'about.skills.architecture.level': '3 ans',
    'about.skills.devops.name': 'DevOps & Automatisation',
    'about.skills.devops.level': '1 an',
    'about.skills.networking.name': 'Ingénierie Réseau',
    'about.skills.networking.level': '2 ans',
    'about.categories.cloud.name': 'Cloud & Infrastructure',
    'about.categories.frontend.name': 'Frontend',
    'about.categories.backend.name': 'Backend & Réseaux',
    'about.categories.database.name': 'Bases de Données',
    'about.categories.mobile.name': 'Mobile & Autres',
    

    'about.tech.frontend.title': 'Développement Frontend',
    'about.tech.backend.title': 'Langages Backend', 
    'about.tech.frameworks.title': 'Frameworks Web',
    'about.tech.cloud.title': 'Cloud & Infrastructure',
    'about.tech.databases.title': 'Bases de Données',
    'about.tech.mobile.title': 'Développement Mobile',
    
    'about.contactButton': 'Démarrer un projet',
    'about.cvButton': 'Télécharger CV',
    

    'odyssey.title': 'Mon Odyssée',
    'odyssey.subtitle': 'Histoires de voyage, aventures et planification - explorer le monde une destination à la fois.',
    'odyssey.description': 'Aventures, histoires & planification pour l\'âme voyageuse',
    'odyssey.all': 'Toutes les Aventures',
    'odyssey.nature': 'Nature',
    'odyssey.portrait': 'Gens & Culture',
    'odyssey.street': 'Vie Urbaine',
    'odyssey.architecture': 'Architecture',
    'odyssey.viewGallery': 'Explorer Mon Parcours Complet',


    'odyssey.stories.title': 'Récits de Voyage',
    'odyssey.stories.subtitle': 'Aventures et expériences aux quatre coins du monde',
    'odyssey.planning.title': 'Planification de Voyage',
    'odyssey.planning.subtitle': 'Conseils, guides et ressources pour votre prochaine aventure',
    'odyssey.upcoming.title': 'Aventures à Venir',
    'odyssey.upcoming.subtitle': 'Rêves et projets pour les futurs voyages',
    'odyssey.gallery.title': 'Histoires Visuelles',
    'odyssey.gallery.subtitle': 'Photos et vidéos de mes voyages',

    'odyssey.comingSoon': 'Mon odyssée de voyage est actuellement en développement. Revenez bientôt pour découvrir mes aventures, histoires et conseils de planification de voyage à travers le monde.',
    'odyssey.unavailableTitle': 'Page Non Disponible',
    

    'odyssey.readMore': 'Lire Plus',
    'odyssey.readLess': 'Lire Moins',
    'odyssey.viewPhotos': 'Voir Photos',
    'odyssey.watchVideo': 'Regarder Vidéo',
    'odyssey.planningTips': 'Conseils de Planification',
    'odyssey.duration': 'Durée',
    'odyssey.budget': 'Budget',
    'odyssey.highlights': 'Points Forts',
    'odyssey.lessons': 'Leçons Apprises',
    'odyssey.status.completed': 'Terminé',
    'odyssey.status.upcoming': 'À Venir',
    'odyssey.status.planning': 'En Planification',
    'odyssey.status.dreaming': 'En Rêve',
    

    'odyssey.planning.budgetCalculator': 'Calculateur de Budget',
    'odyssey.planning.packingList': 'Listes de Bagages',
    'odyssey.planning.resources': 'Ressources de Voyage',
    'odyssey.planning.tips': 'Conseils Pro',
    

    'experience.title': 'Expérience',
    'experience.subtitle': 'Mon parcours professionnel et mes étapes importantes en technologie, développement et projets créatifs.',
    'experience.description': 'Mon parcours professionnel et mes réalisations',
    'experience.current': 'Actuel',
    'experience.years': 'ans',
    'experience.achievements': 'Réalisations Clés',
    'experience.technologies': 'Technologies',
    

    'experience.jobs.cooptel.position': 'Support technique',
    'experience.jobs.cooptel.company': 'Cooptel',
    'experience.jobs.cooptel.location': 'Valcourt, QC',
    'experience.jobs.cooptel.period': 'Juillet 2024 - Août 2025',
    'experience.jobs.cooptel.type': 'Temps partiel',
    'experience.jobs.cooptel.description': 'Service de support technique et dépannage pour les clients résidentiels et commerciaux. Assistance avec les services internet, téléphone et télévision, assurant une satisfaction client.',
    
    'experience.jobs.css.position': 'Développeur Full-Stack',
    'experience.jobs.css.company': 'Centre de service scolaire des Samares',
    'experience.jobs.css.location': 'St-Félix-de-Valois, QC',
    'experience.jobs.css.period': 'Mars 2024 - Juillet 2024',
    'experience.jobs.css.type': 'Stage temps plein',
    'experience.jobs.css.description': 'Développement et maintenance d\'applications web à des fins administratives.',
    'experience.jobs.css.achievement1': 'Création d\'un outil interne pour la gestion des données étudiantes',
    'experience.jobs.css.achievement2': 'Participation aux révisions de code et contribution au partage de connaissances d\'équipe',
    'experience.jobs.css.achievement3': 'Développement et maintenance d\'APIs RESTful pour l\'échange de données entre systèmes front-end et back-end',
    
    'experience.jobs.blanko.position': 'Développeur Backend',
    'experience.jobs.blanko.company': 'Blanko création numérique',
    'experience.jobs.blanko.location': 'Joliette, QC',
    'experience.jobs.blanko.period': 'été 2023',
    'experience.jobs.blanko.type': 'Stage temps plein',
    'experience.jobs.blanko.description': 'Travail sur le développement backend pour diverses applications web municipales et implémentation de fonctionnalités dynamiques.',
    'experience.jobs.blanko.achievement1': 'Implémentation d\'un générateur de formulaires dynamiques pour les applications municipales',
    'experience.jobs.blanko.achievement2': 'Développement d\'APIs RESTful pour la gestion de données',
    'experience.jobs.blanko.achievement3': 'Collaboration avec les développeurs front-end pour intégrer les APIs avec les interfaces utilisateur',
    
    'experience.jobs.cgi.position': 'Développeur',
    'experience.jobs.cgi.company': 'CGI',
    'experience.jobs.cgi.location': 'Sherbrooke, QC',
    'experience.jobs.cgi.period': 'Été 2025 - Présent',
    'experience.jobs.cgi.type': 'Stage temps plein & emploi à temps partiel',
    'experience.jobs.cgi.description': 'Développement et maintenance d\'applications web et création/maintenance de pipelines pour les processus CI/CD.',
    'experience.jobs.cgi.achievement1': 'Développement d\'une application web pour usage interne',
    'experience.jobs.cgi.achievement2': 'Création de pipelines CI/CD utilisant GitLab CI',
    'experience.jobs.cgi.achievement3': 'Collaboration avec des équipes interfonctionnelles internationales pour livrer des solutions logicielles de haute qualité',
    

    'contact.title': 'Contactez-moi',
    'contact.subtitle': 'Collaborons et donnons vie à vos idées. Je suis toujours enthousiaste à l\'idée de travailler sur de nouveaux projets.',
    'contact.description': 'Créons quelque chose d\'extraordinaire ensemble',
    'contact.name': 'Nom',
    'contact.email': 'Courriel',
    'contact.subject': 'Sujet',
    'contact.message': 'Votre Message',
    'contact.namePlaceholder': 'Votre nom complet',
    'contact.emailPlaceholder': 'votre.email@exemple.com',
    'contact.subjectPlaceholder': 'De quoi s\'agit-il ?',
    'contact.messagePlaceholder': 'Parlez-moi de votre projet ou idée...',
    'contact.send': 'Envoyer le Message',
    'contact.sending': 'Envoi en cours...',
    'contact.success': 'Message envoyé avec succès !',
    'contact.error': 'Erreur lors de l\'envoi. Veuillez réessayer.',
    'contact.phone': 'Téléphone',
    'contact.location': 'Localisation',
    'contact.followMe': 'Suivez-moi',
    'contact.downloadCV': 'Télécharger mon CV',
    'contact.cv': 'Curriculum Vitae',
    

    'email.modal.title': 'Email Non Disponible',
    'email.modal.message': 'La fonctionnalité d\'envoi d\'email n\'est actuellement pas implémentée. Cependant, vous pouvez me contacter directement à :',
    'email.modal.directEmail': 'ludwig-emmanuel@hotmail.com',
    

    'page.loading': 'Chargement...',
    'page.backToTop': 'Retour en Haut',
    

    'footer.rights': 'Tous droits réservés',
    'footer.madeWith': 'Fait avec',
    'footer.heart': '♥',
    'footer.by': 'par',
    'footer.brand.subtitle': 'Sanctuaire Numérique',
    'footer.quote': '"Joyeux matin | C\'est surement le matin quelques part dans le monde"',
    'footer.connect': 'Connecter',
    'footer.copyright': 'Construit avec Joyeux Matin !',
    'footer.scrollTop': 'Retour en haut',
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('en');

  useEffect(() => {
    const savedLanguage = localStorage.getItem('language') as Language;
    const userLanguage = navigator.language.startsWith('fr') ? 'fr' : 'en';
    
    if (savedLanguage) {
      setLanguage(savedLanguage);
    } else {
      setLanguage(userLanguage);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('language', language);
    document.documentElement.lang = language;
  }, [language]);

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations[typeof language]] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
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
