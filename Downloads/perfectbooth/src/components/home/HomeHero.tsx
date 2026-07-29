"use client";

import { useTranslations, useLocale } from 'next-intl';
import { Link } from '@/i18n/navigation';
import { useState, useEffect } from 'react';
import BeforeAfterPair from '@/components/ui/BeforeAfterPair';

export default function HomeHero() {
  const t = useTranslations('Hero');
  const locale = useLocale();
  const dir = locale === 'ar' ? 'rtl' : 'ltr';

  const [currentSlide, setCurrentSlide] = useState(0);
  const slidesCount = 3;

  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (isHovered) return;
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slidesCount);
    }, 8000);
    return () => clearInterval(interval);
  }, [isHovered, slidesCount]);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slidesCount);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slidesCount) % slidesCount);

  // Swipe and Drag states
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  const [isDragging, setIsDragging] = useState(false);

  const minSwipeDistance = 50;

  const onTouchStart = (e: React.TouchEvent | React.MouseEvent) => {
    setTouchEnd(null);
    setIsDragging(true);
    if ('touches' in e) {
      setTouchStart(e.targetTouches[0].clientX);
    } else {
      setTouchStart(e.clientX);
    }
  };

  const onTouchMove = (e: React.TouchEvent | React.MouseEvent) => {
    if (!isDragging) return;
    if ('touches' in e) {
      setTouchEnd(e.targetTouches[0].clientX);
    } else {
      setTouchEnd(e.clientX);
    }
  };

  const onTouchEndHandler = () => {
    if (!isDragging) return;
    setIsDragging(false);
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe || isRightSwipe) {
      if (dir === 'rtl') {
        if (isLeftSwipe) prevSlide();
        else nextSlide();
      } else {
        if (isLeftSwipe) nextSlide();
        else prevSlide();
      }
    }
    setTouchStart(null);
    setTouchEnd(null);
  };

  return (
    <section className="pb-hero-1-section">
      {/* Page-specific image preloads hoisted to head */}
      <link rel="preload" as="image" href="/assets/banner2-mobile.webp" fetchPriority="high" media="(max-width: 768px)" />
      <link rel="preload" as="image" href="/assets/banner2.png" fetchPriority="high" media="(min-width: 769px)" />
      
      {/* Slider Controls */}
      <div className="pb-hero-slider-controls">
        <div className="pb-hero-slider-index" dir="ltr">
          <span className="current">{String(currentSlide + 1).padStart(2, '0')}</span>
          <span className="total">/ {String(slidesCount).padStart(2, '0')}</span>
        </div>
        
        <div className="pb-hero-slider-progress">
          <div className="pb-hero-slider-fill" style={{ 
            width: `${((currentSlide + 1) / slidesCount) * 100}%`
          }}></div>
        </div>

        <div className="pb-hero-slider-arrows">
          <button aria-label="Previous slide" onClick={prevSlide} className="pb-hero-nav-btn">
            {dir === 'rtl' ? (
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            ) : (
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
            )}
          </button>
          <button aria-label="Next slide" onClick={nextSlide} className="pb-hero-nav-btn">
            {dir === 'rtl' ? (
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
            ) : (
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            )}
          </button>
        </div>
      </div>

      <div 
        className="pb-hero-1-viewport" 
        style={{ 
          width: '100%', 
          overflow: 'hidden', 
          cursor: isDragging ? 'grabbing' : 'grab',
          touchAction: 'pan-y'
        }}
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEndHandler}
        onMouseDown={onTouchStart}
        onMouseMove={onTouchMove}
        onMouseUp={onTouchEndHandler}
        onMouseLeave={(e) => {
          setIsHovered(false);
          onTouchEndHandler();
        }}
        onMouseEnter={() => setIsHovered(true)}
        onDragStart={(e) => e.preventDefault()}
      >
        <div 
          className="pb-hero-1-track"
          style={{ 
            display: 'flex', 
            width: '300%', 
            alignItems: 'stretch',
            minHeight: 'calc(100vh - 130px)',
            transform: `translateX(${dir === 'rtl' ? currentSlide * (100 / 3) : -currentSlide * (100 / 3)}%)`, 
            transition: 'transform 0.6s cubic-bezier(0.25, 1, 0.5, 1)' 
          }}
        >
          {/* SLIDE 1: Original Hero */}
          <div className="pb-hero-1-slide pb-hero-1-container" style={{ flex: '0 0 33.333333%', width: '33.333333%', position: 'relative', display: 'flex' }}>
            <div className="pb-hero-1-content">
              <div className="pb-hero-1-inner" dir={dir}>
                <div className="pb-hero-1-eyebrow animate-slide-in-fix">
                  <span className="pb-hero-1-line"></span>
                  {t('eyebrow')}
                </div>
                <h1 className="pb-hero-1-title animate-slide-in-fix" style={{ animationDelay: '0.1s' }}>
                  {t('title')}
                </h1>
                <p className="pb-hero-1-desc animate-slide-in-fix" style={{ animationDelay: '0.2s' }}>
                  {t('description')}
                </p>
                <div className="pb-hero-1-cta animate-slide-in-fix" style={{ animationDelay: '0.3s' }}>
                  <Link href="/contact#project-form" className="pb-hero-1-btn">
                    {t('cta')}
                    <span aria-hidden="true" style={{ marginInlineStart: '12px' }}>{dir === 'rtl' ? '←' : '→'}</span>
                  </Link>
                </div>
              </div>
            </div>

            <div className="pb-hero-1-image" style={{ width: '100%', position: 'relative', minHeight: '200px' }}>
              <picture style={{ display: 'block', width: '100%', height: '100%' }}>
                <source srcSet="/assets/banner2-mobile.webp" media="(max-width: 768px)" />
                <img
                  src="/assets/banner2.png"
                  alt={t('title')}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </picture>
            </div>
          </div>

          {/* SLIDE 2: Before/After Card (Container 1) */}
          <div className="pb-hero-1-slide pb-hero-case-slide" style={{ flex: '0 0 33.333333%', width: '33.333333%', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '0 1.5rem' }}>
            <div className="case-study-box pb-hero-case-box" style={{ width: '100%', maxWidth: '1400px' }}>
              <BeforeAfterPair 
                beforeImage="https://vqknbbjrosel3hr8.public.blob.vercel-storage.com/photos/new%20images%20project/IMG_9467.jpg.webp"
                afterImage="https://vqknbbjrosel3hr8.public.blob.vercel-storage.com/photos/new%20images%20project/IMG_4081.webp"
                beforeAlt="التصميم"
                afterAlt="الواقع"
              />
            </div>
          </div>

          {/* SLIDE 3: Before/After Card (Container 2) */}
          <div className="pb-hero-1-slide pb-hero-case-slide" style={{ flex: '0 0 33.333333%', width: '33.333333%', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '0 1.5rem' }}>
            <div className="case-study-box pb-hero-case-box" style={{ width: '100%', maxWidth: '1400px' }}>
              <BeforeAfterPair 
                beforeImage="https://vqknbbjrosel3hr8.public.blob.vercel-storage.com/photos/new%20images%20project/IMG_9470.jpg.webp"
                afterImage="https://vqknbbjrosel3hr8.public.blob.vercel-storage.com/photos/new%20images%20project/ac6bff72-d972-451d-80c1-d479796fc50f.jpg.webp"
                beforeAlt="التصميم"
                afterAlt="الواقع"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
