"use client";

import React, { useRef, useCallback } from 'react';
import { useTranslations, useLocale } from 'next-intl';
import { beforeAfterProjects } from '@/data/collaborations';
import BeforeAfterPair from '@/components/ui/BeforeAfterPair';

export default function BeforeAfterSection() {
  const t = useTranslations('BeforeAfter');
  const locale = useLocale();
  const dir = locale === 'ar' ? 'rtl' : 'ltr';

  const trackRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = React.useState(0);

  const handleScroll = useCallback(() => {
    if (!trackRef.current) return;
    const track = trackRef.current;
    // Calculate which item is most visible
    const scrollLeft = Math.abs(track.scrollLeft);
    const itemWidth = track.clientWidth;
    const index = Math.round(scrollLeft / itemWidth);
    
    // Safety clamp
    const safeIndex = Math.max(0, Math.min(index, beforeAfterProjects.length - 1));
    if (activeIndex !== safeIndex) {
      setActiveIndex(safeIndex);
    }
  }, [activeIndex]);

  const getScrollAmount = () => {
    if (!trackRef.current) return 0;
    const firstItem = trackRef.current.firstElementChild as HTMLElement;
    if (!firstItem) return 0;
    
    const gap = parseFloat(window.getComputedStyle(trackRef.current).gap) || 0;
    return firstItem.offsetWidth + gap;
  };

  const scrollNext = useCallback(() => {
    if (!trackRef.current) return;
    const scrollAmount = getScrollAmount();
    const track = trackRef.current;
    
    const maxScroll = track.scrollWidth - track.clientWidth;
    const currentScroll = Math.abs(track.scrollLeft);
    
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
    
    if (currentScroll <= 10) {
      const maxScroll = track.scrollWidth - track.clientWidth;
      track.scrollTo({ left: dir === 'rtl' ? -maxScroll : maxScroll, behavior: 'smooth' });
    } else {
      track.scrollBy({ left: dir === 'rtl' ? scrollAmount : -scrollAmount, behavior: 'smooth' });
    }
  }, [dir]);

  return (
    <section 
      id="before-after-projects"
      className="portfolio-section before-after-section" 
      dir={dir}
    >
      <div className="portfolio-container">
        <div className="portfolio-header">
          <div>
            <p className="portfolio-eyebrow tracking-widest">{t('eyebrow')}</p>
            <h2 className="portfolio-title">{t('title')}</h2>
            <p className="before-after-desc">{t('description')}</p>
          </div>
          <div className="portfolio-actions before-after-actions">
            <button className="portfolio-nav-btn prev" onClick={scrollPrev} aria-label={t('prevProject')}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d={dir === 'rtl' ? "M5 12h14M12 5l7 7-7 7" : "M19 12H5M12 19l-7-7 7-7"} stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            
            <div className="before-after-nav-line"></div>

            <div className="before-after-counter">
              <span className="counter-current">{String(activeIndex + 1).padStart(2, '0')}</span>
              <span className="counter-divider">/</span>
              <span className="counter-total">{String(beforeAfterProjects.length).padStart(2, '0')}</span>
            </div>

            <div className="before-after-nav-line"></div>

            <button className="portfolio-nav-btn next" onClick={scrollNext} aria-label={t('nextProject')}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d={dir === 'rtl' ? "M19 12H5M12 19l-7-7 7-7" : "M5 12h14M12 5l7 7-7 7"} stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
        </div>

        <div className="portfolio-track" ref={trackRef} onScroll={handleScroll}>
          {beforeAfterProjects.map((project, index) => (
            <div key={project.id} className={`before-after-slide ${activeIndex === index ? 'is-active' : ''}`}>
              <div className="case-study-box">
                <div className="case-study-header">
                  <span className="case-study-caption">{t('caseStudyLabel')}</span>
                  <h3 className="before-after-project-title">{t(project.titleKey)}</h3>
                  {project.categoryKey && (
                    <p className="case-study-subtitle">{t(project.categoryKey as Parameters<typeof t>[0])}</p>
                  )}
                  <div className="case-study-divider"></div>
                </div>
                <BeforeAfterPair 
                  beforeImage={project.beforeImage}
                  afterImage={project.afterImage}
                  beforeAlt={t(project.beforeAltKey)}
                  afterAlt={t(project.afterAltKey)}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
