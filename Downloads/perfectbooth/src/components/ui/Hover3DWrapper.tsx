'use client';

import React, { useRef, useState, useEffect } from 'react';

interface Hover3DWrapperProps {
  children: React.ReactNode;
  className?: string;
  maxRotation?: number;
}

export default function Hover3DWrapper({ children, className = '', maxRotation = 3 }: Hover3DWrapperProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [transform, setTransform] = useState('');
  const [isHovering, setIsHovering] = useState(false);
  const [isTouch, setIsTouch] = useState(false);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const isTouchDevice = !window.matchMedia('(hover: hover) and (pointer: fine)').matches;
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setIsTouch(isTouchDevice || prefersReducedMotion);
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (isTouch || !containerRef.current) return;
    
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left; // x position within the element
    const y = e.clientY - rect.top;  // y position within the element
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    // Calculate rotation between -maxRotation and +maxRotation
    const rotateX = ((y - centerY) / centerY) * -maxRotation;
    const rotateY = ((x - centerX) / centerX) * maxRotation;
    
    setTransform(`perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`);
  };

  const handleMouseEnter = () => {
    if (isTouch) return;
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    if (isTouch) return;
    setIsHovering(false);
    setTransform('perspective(1000px) rotateX(0deg) rotateY(0deg)');
  };

  return (
    <div
      ref={containerRef}
      className={`hover-3d-container ${className} ${isHovering ? 'is-hovering' : ''}`}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        transform,
        transition: isHovering ? 'none' : 'transform 0.5s cubic-bezier(0.23, 1, 0.32, 1)',
        transformStyle: 'preserve-3d',
        willChange: 'transform'
      }}
    >
      {children}
    </div>
  );
}
