import React, { useState } from 'react';
import { MainLayout } from './layouts';
import { Header, Footer, Navigation } from './components/common';
import { AboutSection } from './features/about';
import { ProjectsSection } from './features/projects';

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState('about');

  const renderSection = () => {
    switch (activeSection) {
      case 'about':
        return <AboutSection />;
      case 'projects':
        return <ProjectsSection />;
      case 'skills':
        return (
          <div className="p-8">
            <h2 className="text-3xl font-bold text-stone-800 mb-6">Mes Compétences</h2>
            <p className="text-sage-600">Section en développement...</p>
          </div>
        );
      case 'contact':
        return (
          <div className="p-8">
            <h2 className="text-3xl font-bold text-stone-800 mb-6">Contact</h2>
            <p className="text-sage-600">Section en développement...</p>
          </div>
        );
      default:
        return <AboutSection />;
    }
  };

  return (
    <MainLayout>
      {/* Navigation latérale */}
      <Navigation 
        activeSection={activeSection}
        setActiveSection={setActiveSection}
      />
      
      {/* Contenu principal */}
      <main className="flex-1 overflow-y-auto">
        <Header />
        <div className="max-w-4xl mx-auto px-6">
          {renderSection()}
        </div>
        <Footer />
      </main>
    </MainLayout>
  );
};

export default App;
