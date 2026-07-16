"use client";

import React, { useRef, useEffect, useCallback, useState } from 'react';
import { useTranslations, useLocale } from 'next-intl';
import Image from 'next/image';

export default function PartnersSection() {
  const t = useTranslations('Partners');
  const locale = useLocale();
  const dir = locale === 'ar' ? 'rtl' : 'ltr';

  const trackRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  // Verified Perfect Booth logo data from the API's marquee section
  const partners = [
    { id: 1, src: 'https://admin.perfectbooth-events.com/storage/home-logo-slides/LNqMe6pqnkrShQ4LqOHCXwUl8UUHufg0angYGMEE.jpg' },
    { id: 2, src: 'https://admin.perfectbooth-events.com/storage/home-logo-slides/Rmkc7QaaCe8XlyXXmyEAwEjUiGVeBnbR89HGz9NI.jpg' },
    { id: 3, src: 'https://admin.perfectbooth-events.com/storage/home-logo-slides/rhBu302I5Aj0lYydXzwVxl9YXUFXbVyR7pDn8jjS.jpg' },
    { id: 4, src: 'https://admin.perfectbooth-events.com/storage/home-logo-slides/XVtbnDDwpl4VhQhHhmPRcc3i2kC3MDI6ZVYKuqbL.jpg' },
    { id: 5, src: 'https://admin.perfectbooth-events.com/storage/home-logo-slides/m0aHdhxpylE9CLSsvGPaS7NKkoiCJ0iUhN5sjmoL.jpg' },
    { id: 6, src: 'https://admin.perfectbooth-events.com/storage/home-logo-slides/8LlhgK6irwqbLbzhihYZK5jkRBpvTr5yrxj97ULQ.jpg' },
    { id: 7, src: 'https://admin.perfectbooth-events.com/storage/home-logo-slides/F1z10WGYkP387OLbYBwPH9ovBewY73gPIvatmqTm.jpg' },
    { id: 8, src: 'https://admin.perfectbooth-events.com/storage/home-logo-slides/qodcfXqF5judSBpiZLG3bdckUYCH4SZuZaD01Zcw.jpg' },
    { id: 9, src: 'https://admin.perfectbooth-events.com/storage/home-logo-slides/kT7gHkkr4Hh4FF9hko2Fz9Cg6yoIMlK14bFWofWp.jpg' }
  ];

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

  useEffect(() => {
    if (isHovered) return;
    
    const intervalId = setInterval(() => {
      scrollNext();
    }, 4000); 
    
    return () => clearInterval(intervalId);
  }, [isHovered, scrollNext]);

  return (
    <section 
      className="partners-section" 
      dir={dir}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onTouchStart={() => setIsHovered(true)}
      onTouchEnd={() => {
        setTimeout(() => setIsHovered(false), 2000);
      }}
    >
      <div className="partners-container">
        <div className="partners-header">
          <div className="partners-heading-wrapper">
            <p className="partners-eyebrow">{t('eyebrow')}</p>
            <h2 className="partners-title">{t('title')}</h2>
            <div className="partners-decorative-line"></div>
          </div>
          <div className="partners-actions">
            <div className="portfolio-nav-buttons">
              <button className="portfolio-nav-btn prev" onClick={scrollPrev} aria-label="Previous Partner">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d={dir === 'rtl' ? "M5 12h14M12 5l7 7-7 7" : "M19 12H5M12 19l-7-7 7-7"} stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
              <button className="portfolio-nav-btn next" onClick={scrollNext} aria-label="Next Partner">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d={dir === 'rtl' ? "M19 12H5M12 19l-7-7 7-7" : "M5 12h14M12 5l7 7-7 7"} stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>
          </div>
        </div>

        <div className="partners-track" ref={trackRef}>
          {partners.map((partner) => (
            <div key={partner.id} className="partner-card">
              <Image 
                src={partner.src} 
                alt={`Perfect Booth Partner ${partner.id}`}
                fill 
                sizes="(max-width: 768px) 60vw, 25vw"
                className="partner-img" 
                unoptimized
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
