import { useEffect } from 'react';

export const useLeafEcosystem = () => {
  useEffect(() => {
    const leafClusters = Array.from(document.querySelectorAll('.leafCluster')) as HTMLElement[];
    if (!leafClusters.length) return;

    const STAGGER = 300; // ms between clusters
    const RANDOM_RANGE = 1500; // ms random additional delay

    leafClusters.forEach((element, index) => {
      const delay = index * STAGGER + Math.floor(Math.random() * RANDOM_RANGE);
      element.style.animationDelay = `${delay}ms`;
    });

    // no timers to clear; keep effect lightweight
  }, []);
};
