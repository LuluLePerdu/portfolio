import { useEffect } from 'react';

export const useLeafEcosystem = () => {
  useEffect(() => {


    
    const updateSubtleAnimation = () => {
      const leafClusters = document.querySelectorAll('.leafCluster');
      leafClusters.forEach((cluster, index) => {
        const element = cluster as HTMLElement;
        if (element) {

          const baseDelay = index * 1000;
          const randomDelay = Math.random() * 2000;
          
          setTimeout(() => {
            element.style.animationDelay = `${randomDelay}ms`;
          }, baseDelay);
        }
      });
    };


    updateSubtleAnimation();


    return () => {

    };
  }, []);
};
