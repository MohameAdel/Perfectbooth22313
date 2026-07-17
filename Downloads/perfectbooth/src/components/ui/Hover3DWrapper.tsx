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
  const rectRef = useRef<DOMRect | null>(null);

  const handleMouseEnter = () => {
    if (isTouch) return;
    setIsHovering(true);
    if (containerRef.current) {
      rectRef.current = containerRef.current.getBoundingClientRect();
    }
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (isTouch || !containerRef.current) return;
    
    const rect = rectRef.current || containerRef.current.getBoundingClientRect();
    if (!rectRef.current) {
      rectRef.current = rect;
    }
    
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const rotateX = ((y - centerY) / centerY) * -maxRotation;
    const rotateY = ((x - centerX) / centerX) * maxRotation;
    
    setTransform(`perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`);
  };

  const handleMouseLeave = () => {
    if (isTouch) return;
    setIsHovering(false);
    rectRef.current = null;
    setTransform('perspective(1000px) rotateX(0deg) rotateY(0deg)');
  };  return (
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
