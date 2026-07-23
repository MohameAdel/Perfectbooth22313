"use client";

import React, { useRef, useEffect, useCallback, useState } from 'react';
import { useTranslations, useLocale } from 'next-intl';
import { Link } from '@/i18n/navigation';
import Image from 'next/image';
import { selectedProjects } from '@/data/collaborations';

export default function SelectedProjectsSection() {
  const t = useTranslations('SelectedProjects');
  const locale = useLocale();
  const dir = locale === 'ar' ? 'rtl' : 'ltr';

  const trackRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  // Project data comes from collaborations.ts, but we map the title dynamically
  const projects = selectedProjects.map(p => ({
    ...p,
    title: t(p.titleKey as 'project1' | 'project2' | 'project3' | 'project4')
  }));

  const getScrollAmount = () => {
    if (!trackRef.current) return 0;
    const firstItem = trackRef.current.firstElementChild as HTMLElement;
    if (!firstItem) return 0;
    
    // Calculate item width including gap. Using computed style gap.
    const gap = parseFloat(window.getComputedStyle(trackRef.current).gap) || 0;
    return firstItem.offsetWidth + gap;
  };

  const scrollNext = useCallback(() => {
    if (!trackRef.current) return;
    const scrollAmount = getScrollAmount();
    const track = trackRef.current;
    
    // Calculate if we're at the end
    const maxScroll = track.scrollWidth - track.clientWidth;
    const currentScroll = Math.abs(track.scrollLeft);
    
    // If we're at the end (with a small margin for fractional pixels), scroll back to start
    if (currentScroll >= maxScroll - 10) {
      track.scrollTo({ left: 0, behavior: 'smooth' });
    } else {
      track.scrollBy({ left: dir === 'rtl' ? -scrollAmount : scrollAmount, behavior: 'smooth' });
    }
  }, [dir]);

  const scrollPrev = useCallback(() => {
    if (!trackRef.current) return;
    const scrollAmount = getScrollAmount();
    const track = trackRef.current;
    
    const currentScroll = Math.abs(track.scrollLeft);
    
    // If at start, scroll to end
    if (currentScroll <= 10) {
      const maxScroll = track.scrollWidth - track.clientWidth;
      track.scrollTo({ left: dir === 'rtl' ? -maxScroll : maxScroll, behavior: 'smooth' });
    } else {
      track.scrollBy({ left: dir === 'rtl' ? scrollAmount : -scrollAmount, behavior: 'smooth' });
    }
  }, [dir]);

  // Auto-advance
  useEffect(() => {
    if (isHovered) return;
    
    const intervalId = setInterval(() => {
      scrollNext();
    }, 5000); // 5 seconds
    
    return () => clearInterval(intervalId);
  }, [isHovered, scrollNext]);

  return (
    <section 
      id="selected-projects"
      className="portfolio-section" 
      dir={dir}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onTouchStart={() => setIsHovered(true)}
      onTouchEnd={() => {
        // Resume after 2s of no touch
        setTimeout(() => setIsHovered(false), 2000);
      }}
    >
      <div className="portfolio-container">
        <div className="portfolio-header">
          <div>
            <p className="portfolio-eyebrow">{t('eyebrow')}</p>
            <h2 className="portfolio-title">{t('title')}</h2>
          </div>
          <div className="portfolio-actions">
            <Link href="/projects" className="view-all-projects-link" style={{ fontSize: '0.9rem', color: '#C4972D', textDecoration: 'none', letterSpacing: '0.5px', textTransform: 'uppercase' }}>
              {t('viewAll')}
            </Link>
            <div className="portfolio-nav-buttons">
              <button className="portfolio-nav-btn prev" onClick={scrollPrev} aria-label="Previous Project">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d={dir === 'rtl' ? "M5 12h14M12 5l7 7-7 7" : "M19 12H5M12 19l-7-7 7-7"} stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
              <button className="portfolio-nav-btn next" onClick={scrollNext} aria-label="Next Project">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d={dir === 'rtl' ? "M19 12H5M12 19l-7-7 7-7" : "M5 12h14M12 5l7 7-7 7"} stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>
          </div>
        </div>

        <div className="portfolio-track" ref={trackRef}>
          {projects.map((project) => (
            <div key={project.id} className="portfolio-item">
              <div className="portfolio-img-wrapper">
                <Image 
                  src={project.image} 
                  alt={project.title} 
                  fill 
                  sizes="(max-width: 768px) 85vw, 60vw"
                  className="portfolio-img" 
                />
                <div className="portfolio-overlay">
                  <h3 className="portfolio-item-title">{project.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
