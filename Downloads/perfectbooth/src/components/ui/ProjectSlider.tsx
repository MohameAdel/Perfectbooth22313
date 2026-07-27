/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import React, { useRef, useState, useEffect } from 'react';
import Image from 'next/image';
import { useTranslations, useLocale } from 'next-intl';

interface ProjectImage {
  id: string;
  image: string;
  altKey: string;
  objectPosition?: string;
}

interface ProjectSliderProps {
  titleKey: string;
  categoryKey?: string;
  images: ProjectImage[];
}

export default function ProjectSlider({ titleKey, categoryKey, images }: ProjectSliderProps) {
  const t = useTranslations('Projects');
  const locale = useLocale();
  const dir = locale === 'ar' ? 'rtl' : 'ltr';
  const trackRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const scrollPrev = () => {
    if (trackRef.current) {
      const scrollAmount = trackRef.current.clientWidth * 0.8;
      trackRef.current.scrollBy({ left: dir === 'rtl' ? scrollAmount : -scrollAmount, behavior: 'smooth' });
    }
  };

  const scrollNext = () => {
    if (trackRef.current) {
      const scrollAmount = trackRef.current.clientWidth * 0.8;
      trackRef.current.scrollBy({ left: dir === 'rtl' ? -scrollAmount : scrollAmount, behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number(entry.target.getAttribute('data-index'));
            if (!isNaN(index)) {
              setActiveIndex(index);
            }
          }
        });
      },
      {
        root: track,
        threshold: 0.6, // Trigger when 60% of the slide is visible
      }
    );

    const slides = track.querySelectorAll('.project-slider-slide');
    slides.forEach((slide) => observer.observe(slide));

    return () => observer.disconnect();
  }, []);

  const totalImages = images.length;
  const displayIndex = (activeIndex + 1).toString().padStart(2, '0');
  const displayTotal = totalImages.toString().padStart(2, '0');

  const isFirst = activeIndex === 0;
  const isLast = activeIndex === totalImages - 1;

  return (
    <div className="project-slider-container" dir={dir} style={{ marginBottom: '5rem' }}>
      <div className="project-slider-header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '1.5rem', flexWrap: 'wrap', gap: '1rem' }}>
        <div>
          <h3 className="project-slider-title" style={{ fontSize: '2rem', marginBottom: '0.5rem', color: '#fff' }}>{t(titleKey as any)}</h3>
          {categoryKey && (
            <p className="project-slider-category" style={{ color: 'var(--pb-accent)', fontSize: '0.9rem', letterSpacing: '1px', textTransform: 'uppercase' }}>{t(categoryKey as any)}</p>
          )}
        </div>
        
        {totalImages > 1 && (
          <div className="project-slider-controls" style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
            <span className="project-slider-counter" style={{ color: 'var(--pb-accent)', fontSize: '0.9rem', letterSpacing: '1px' }}>
              {displayIndex} / {displayTotal}
            </span>
            <div className="project-slider-nav" style={{ display: 'flex', gap: '0.5rem' }}>
              <button 
                onClick={scrollPrev} 
                className={`portfolio-nav-btn prev ${isFirst ? 'disabled' : ''}`} 
                disabled={isFirst}
                aria-label="Previous image" 
                style={{ transform: 'scale(0.8)', opacity: isFirst ? 0.3 : 1, cursor: isFirst ? 'not-allowed' : 'pointer', border: '1px solid var(--pb-accent)', borderRadius: '50%', background: 'transparent', color: 'var(--pb-accent)', display: 'flex', alignItems: 'center', justifyContent: 'center', width: '40px', height: '40px' }}
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d={dir === 'rtl' ? "M5 12h14M12 5l7 7-7 7" : "M19 12H5M12 19l-7-7 7-7"} stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
              <button 
                onClick={scrollNext} 
                className={`portfolio-nav-btn next ${isLast ? 'disabled' : ''}`} 
                disabled={isLast}
                aria-label="Next image" 
                style={{ transform: 'scale(0.8)', opacity: isLast ? 0.3 : 1, cursor: isLast ? 'not-allowed' : 'pointer', border: '1px solid var(--pb-accent)', borderRadius: '50%', background: 'transparent', color: 'var(--pb-accent)', display: 'flex', alignItems: 'center', justifyContent: 'center', width: '40px', height: '40px' }}
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d={dir === 'rtl' ? "M19 12H5M12 19l-7-7 7-7" : "M5 12h14M12 5l7 7-7 7"} stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>
          </div>
        )}
      </div>
      
      <div 
        ref={trackRef}
        className="project-slider-track" 
        style={{ 
          display: 'flex', 
          overflowX: 'auto', 
          scrollSnapType: 'x mandatory', 
          gap: '1.5rem',
          paddingBottom: '1rem',
          scrollbarWidth: 'none',
          msOverflowStyle: 'none'
        }}
      >
        {images.map((img, index) => (
          <div 
            key={img.id} 
            data-index={index}
            className="project-slider-slide" 
            style={{ 
              flex: '0 0 auto', 
              width: totalImages === 1 ? '100%' : '85%', 
              maxWidth: totalImages === 1 ? '100%' : '900px', 
              scrollSnapAlign: 'start',
              position: 'relative',
              aspectRatio: '16/9',
              borderRadius: '8px',
              overflow: 'hidden',
              border: '1px solid var(--pb-border)'
            }}
          >
            <Image
              src={img.image}
              alt={t(img.altKey as any)}
              fill
              sizes="(max-width: 768px) 100vw, 900px"
              style={{ objectFit: 'cover', objectPosition: img.objectPosition || 'center' }}
              priority={index === 0}
            />
          </div>
        ))}
      </div>
      <style dangerouslySetInnerHTML={{__html: `
        .project-slider-track::-webkit-scrollbar { display: none; }
      `}} />
    </div>
  );
}
