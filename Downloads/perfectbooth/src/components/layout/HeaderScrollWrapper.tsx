"use client";

import React, { useRef, useEffect } from 'react';

export default function HeaderScrollWrapper({ children }: { children: React.ReactNode }) {
  const headerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          if (window.scrollY > 10) {
            headerRef.current?.classList.add('is-scrolled');
          } else {
            headerRef.current?.classList.remove('is-scrolled');
          }
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div ref={headerRef} style={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100 }}>
      {children}
    </div>
  );
}
