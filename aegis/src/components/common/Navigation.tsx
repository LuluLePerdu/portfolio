import React from 'react';

interface NavigationProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
}

const Navigation: React.FC<NavigationProps> = ({ activeSection, setActiveSection }) => {
  const sections = [
    { id: 'about', label: 'À propos' },
    { id: 'projects', label: 'Projets' },
    { id: 'skills', label: 'Compétences' },
    { id: 'contact', label: 'Contact' }
  ];

  return (
    <nav className="w-64 p-8 forest-card m-4 h-fit sticky top-4">
      <div className="mb-8">
        <h1 className="text-2xl font-semibold text-forest-800 mb-2">AEGIS</h1>
        <p className="text-sm text-sage-600 mono">Développeur</p>
      </div>
      
      <div className="space-y-2">
        {sections.map((section) => (
          <button
            key={section.id}
            onClick={() => setActiveSection(section.id)}
            className={`w-full text-left p-3 rounded-xl transition-all duration-300 travel-accent ${
              activeSection === section.id 
                ? 'bg-bronze-100 text-stone-800 border border-bronze-300' 
                : 'text-sage-800 hover:bg-bronze-50 hover:text-bronze-700'
            }`}
          >
            <span className="font-medium">{section.label}</span>
          </button>
        ))}
      </div>

      <div className="mt-12 p-4 bg-stone-100 rounded-lg">
        <p className="mono text-xs text-stone-600">
          <span className="text-bronze-600">const</span> journey = <br/>
          <span className="ml-2 text-forest-600">"code → explore → create"</span>
        </p>
      </div>
    </nav>
  );
};

export default Navigation;
