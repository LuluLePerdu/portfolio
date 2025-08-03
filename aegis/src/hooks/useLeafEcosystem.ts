import { useEffect } from 'react';

export const useLeafEcosystem = () => {
  useEffect(() => {
    // Hook simplifié pour les feuilles d'arrière-plan
    // Pas d'interactions intrusives, juste une respiration subtile
    
    const updateSubtleAnimation = () => {
      const leafClusters = document.querySelectorAll('.leafCluster');
      leafClusters.forEach((cluster, index) => {
        const element = cluster as HTMLElement;
        if (element) {
          // Animation de respiration très subtile basée sur l'index
          const baseDelay = index * 1000;
          const randomDelay = Math.random() * 2000;
          
          setTimeout(() => {
            element.style.animationDelay = `${randomDelay}ms`;
          }, baseDelay);
        }
      });
    };

    // Initialisation subtile
    updateSubtleAnimation();

    // Aucun event listener intrusif
    return () => {
      // Nettoyage minimal
    };
  }, []);
};
