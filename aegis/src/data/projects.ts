export interface Project {
  id: string;
  titleKey: string;
  descriptionKey: string;
  categories: ProjectCategory[]; // Changé de category à categories (array)
  status: ProjectStatus;
  type: ProjectType;
  technologies: Technology[];
  duration: string;
  team?: string;
  role?: string;
  challengeKey: string;
  achievementKey: string;
  features: string[];
  githubUrl?: string;
  liveUrl?: string;
  featured?: boolean;
  year: number;
  complexity: 'beginner' | 'intermediate' | 'advanced';
}

export type ProjectCategory = 'academic' | 'personal' | 'web' | 'infrastructure' | 'mobile' | 'backend';
export type ProjectStatus = 'completed' | 'in-progress' | 'planned';
export type ProjectType = 'academic' | 'personal' | 'professional';

export interface Technology {
  name: string;
  category: 'frontend' | 'backend' | 'mobile' | 'database' | 'devops' | 'language' | 'framework' | 'tool';
  color?: string;
}

export const technologies: Record<string, Technology> = {
  // Languages
  typescript: { name: 'TypeScript', category: 'language', color: '#3178C6' },
  javascript: { name: 'JavaScript', category: 'language', color: '#F7DF1E' },
  dart: { name: 'Dart', category: 'language', color: '#0175C2' },
  go: { name: 'Go', category: 'language', color: '#00ADD8' },
  python: { name: 'Python', category: 'language', color: '#3776AB' },
  
  // Frontend
  react: { name: 'React', category: 'frontend', color: '#61DAFB' },
  nextjs: { name: 'Next.js', category: 'frontend', color: '#000000' },
  flutter: { name: 'Flutter', category: 'mobile', color: '#02569B' },
  scss: { name: 'SCSS', category: 'frontend', color: '#CF649A' },
  html5: { name: 'HTML5', category: 'frontend', color: '#E34F26' },
  css3: { name: 'CSS3', category: 'frontend', color: '#1572B6' },
  
  // Backend & APIs
  nodejs: { name: 'Node.js', category: 'backend', color: '#339933' },
  express: { name: 'Express.js', category: 'backend', color: '#000000' },
  restapi: { name: 'REST API', category: 'backend', color: '#FF6B35' },
  websockets: { name: 'WebSockets', category: 'backend', color: '#010101' },
  
  // Infrastructure & DevOps
  proxmox: { name: 'Proxmox', category: 'devops', color: '#E57000' },
  docker: { name: 'Docker', category: 'devops', color: '#2496ED' },
  kubernetes: { name: 'Kubernetes', category: 'devops', color: '#326CE5' },
  linux: { name: 'Linux', category: 'devops', color: '#FCC624' },
  nginx: { name: 'Nginx', category: 'devops', color: '#009639' },
  git: { name: 'Git', category: 'tool', color: '#F05032' },
  
  // Cloud & Hosting
  vercel: { name: 'Vercel', category: 'devops', color: '#000000' },
  digitalocean: { name: 'DigitalOcean', category: 'devops', color: '#0080FF' },
  
  // Databases
  postgresql: { name: 'PostgreSQL', category: 'database', color: '#336791' },
  mongodb: { name: 'MongoDB', category: 'database', color: '#47A248' },
  redis: { name: 'Redis', category: 'database', color: '#DC382D' },
  
  // Tools
  vscode: { name: 'VS Code', category: 'tool', color: '#007ACC' },
  figma: { name: 'Figma', category: 'tool', color: '#F24E1E' },
  postman: { name: 'Postman', category: 'tool', color: '#FF6C37' },
};

export const projects: Project[] = [
  {
    id: 'robot-drawing-app',
    titleKey: 'work.projects.robotDrawing.title',
    descriptionKey: 'work.projects.robotDrawing.description',
    categories: ['mobile', 'academic'], // Peut être mobile ET académique
    status: 'completed',
    type: 'academic',
    technologies: [
      technologies.dart,
      technologies.flutter,
      technologies.python,
      technologies.restapi,
      technologies.linux
    ],
    duration: '4 months',
    team: '4 students',
    role: 'Mobile Developer & Robot Integration',
    challengeKey: 'work.projects.robotDrawing.challenge',
    achievementKey: 'work.projects.robotDrawing.achievement',
    features: [
      'Drawing canvas with touch controls',
      'Vector path optimization',
      'Robot communication protocol',
      'Real-time drawing preview',
      'Multi-platform compatibility'
    ],
    year: 2024,
    complexity: 'advanced',
    featured: true
  },
  {
    id: 'blackjack-api-game',
    titleKey: 'work.projects.blackjack.title',
    descriptionKey: 'work.projects.blackjack.description',
    categories: ['backend', 'academic'], // Backend ET académique
    status: 'completed',
    type: 'academic',
    technologies: [
      technologies.go,
      technologies.restapi,
      technologies.postgresql,
      technologies.docker,
      technologies.linux
    ],
    duration: '3 months',
    team: '2 students',
    role: 'Backend Developer & API Architect',
    challengeKey: 'work.projects.blackjack.challenge',
    achievementKey: 'work.projects.blackjack.achievement',
    features: [
      'Complete Blackjack game logic',
      'RESTful API design',
      'Player session management',
      'Card deck management',
      'Game state persistence',
      'API documentation'
    ],
    githubUrl: 'https://github.com/LuluLePerdu/blackjack-go',
    year: 2023,
    complexity: 'intermediate',
    featured: true
  },
  {
    id: 'portfolio-website',
    titleKey: 'work.projects.portfolio.title',
    descriptionKey: 'work.projects.portfolio.description',
    categories: ['web', 'personal'], // Web ET personnel
    status: 'completed',
    type: 'personal',
    technologies: [
      technologies.nextjs,
      technologies.typescript,
      technologies.react,
      technologies.scss,
      technologies.vercel
    ],
    duration: '2 months',
    team: 'Solo',
    role: 'Full-Stack Developer & Designer',
    challengeKey: 'work.projects.portfolio.challenge',
    achievementKey: 'work.projects.portfolio.achievement',
    features: [
      'Responsive design system',
      'Dark/Light theme toggle',
      'Internationalization (EN/FR)',
      'Performance optimization',
      'SEO optimization',
      'Accessibility compliance'
    ],
    githubUrl: 'https://github.com/LuluLePerdu/portfolio',
    liveUrl: 'https://ludwig-dufour.dev',
    year: 2025,
    complexity: 'intermediate',
    featured: true
  },
  {
    id: 'homelab-infrastructure',
    titleKey: 'work.projects.homelab.title',
    descriptionKey: 'work.projects.homelab.description',
    categories: ['infrastructure', 'personal'], // Infrastructure ET personnel
    status: 'in-progress',
    type: 'personal',
    technologies: [
      technologies.proxmox,
      technologies.linux,
      technologies.docker,
      technologies.kubernetes,
      technologies.nginx,
      technologies.postgresql
    ],
    duration: 'Ongoing',
    team: 'Solo',
    role: 'Infrastructure Engineer',
    challengeKey: 'work.projects.homelab.challenge',
    achievementKey: 'work.projects.homelab.achievement',
    features: [
      'Proxmox virtualization cluster',
      'Container orchestration',
      'Network segmentation',
      'Automated backups',
      'Monitoring & logging',
      'CI/CD pipelines',
      'Multiple environment hosting'
    ],
    year: 2024,
    complexity: 'advanced',
    featured: true
  }
];

export const getProjectsByCategory = (category: ProjectCategory | 'all'): Project[] => {
  if (category === 'all') return projects;
  return projects.filter(project => project.categories.includes(category));
};

export const getFeaturedProjects = (): Project[] => {
  return projects.filter(project => project.featured);
};

export const getProjectsByStatus = (status: ProjectStatus): Project[] => {
  return projects.filter(project => project.status === status);
};

export const getProjectsByType = (type: ProjectType): Project[] => {
  return projects.filter(project => project.type === type);
};
