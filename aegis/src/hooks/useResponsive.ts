'use client';

import { useState, useEffect } from 'react';

type Breakpoint = 'mobile' | 'tablet' | 'desktop' | 'large';

interface UseResponsiveReturn {
  isMobile: boolean;
  isTablet: boolean;
  isDesktop: boolean;
  isLarge: boolean;
  currentBreakpoint: Breakpoint;
  windowWidth: number;
}

export function useResponsive(): UseResponsiveReturn {
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    function handleResize() {
      setWindowWidth(window.innerWidth);
    }

    // Set initial width
    setWindowWidth(window.innerWidth);
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const isMobile = windowWidth < 768;
  const isTablet = windowWidth >= 768 && windowWidth < 1024;
  const isDesktop = windowWidth >= 1024 && windowWidth < 1200;
  const isLarge = windowWidth >= 1200;

  const getCurrentBreakpoint = (): Breakpoint => {
    if (isMobile) return 'mobile';
    if (isTablet) return 'tablet';
    if (isDesktop) return 'desktop';
    return 'large';
  };

  return {
    isMobile,
    isTablet,
    isDesktop,
    isLarge,
    currentBreakpoint: getCurrentBreakpoint(),
    windowWidth,
  };
}
