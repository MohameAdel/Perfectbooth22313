"use client";

import React, { useEffect, useRef } from 'react';

interface Hero3DSceneProps {
  children: React.ReactNode;
}

export default function Hero3DScene({ children }: Hero3DSceneProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const parallaxEnabled = useRef(false);

  useEffect(() => {
    // Check for reduced motion and touch devices client-side only
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    const isTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    
    if (!mediaQuery.matches && !isTouch) {
      parallaxEnabled.current = true;
      if (containerRef.current) {
        containerRef.current.classList.add('parallax-active');
      }
    }
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!parallaxEnabled.current || !containerRef.current) return;
    
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;
    
    // Calculate normalized position between -1 and 1
    const x = (clientX / innerWidth) * 2 - 1;
    const y = (clientY / innerHeight) * 2 - 1;
    
    // Apply variables
    containerRef.current.style.setProperty('--mouse-x', x.toString());
    containerRef.current.style.setProperty('--mouse-y', y.toString());
  };

  const handleMouseLeave = () => {
    if (!parallaxEnabled.current || !containerRef.current) return;
    containerRef.current.style.setProperty('--mouse-x', '0');
    containerRef.current.style.setProperty('--mouse-y', '0');
  };

  return (
    <div 
      ref={containerRef}
      className="hero-3d-wrapper"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        '--mouse-x': 0,
        '--mouse-y': 0,
      } as React.CSSProperties}
    >
      <div className="hero-3d-scene">
        {children}
      </div>
    </div>
  );
}
