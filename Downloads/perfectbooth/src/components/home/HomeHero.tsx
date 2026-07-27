"use client";

import { useTranslations, useLocale } from 'next-intl';
import { Link } from '@/i18n/navigation';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import BeforeAfterPair from '@/components/ui/BeforeAfterPair';

export default function HomeHero() {
  const t = useTranslations('Hero');
  const locale = useLocale();
  const dir = locale === 'ar' ? 'rtl' : 'ltr';

  const [currentSlide, setCurrentSlide] = useState(0);
  const slidesCount = 3;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slidesCount);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slidesCount);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slidesCount) % slidesCount);

  return (
    <section className="pb-hero-1-section">
      {/* Page-specific image preloads hoisted to head */}
      <link rel="preload" as="image" href="/assets/banner2-mobile.webp" fetchPriority="high" media="(max-width: 768px)" />
      <link rel="preload" as="image" href="/assets/banner2.png" fetchPriority="high" media="(min-width: 769px)" />
      
      {/* Slider Controls */}
      <div className="pb-hero-1-controls animate-slide-in-fix pb-hero-slider-controls" style={{ position: 'absolute', bottom: '5%', left: dir === 'rtl' ? '5%' : 'auto', right: dir === 'ltr' ? '5%' : 'auto', zIndex: 100, background: 'rgba(0,0,0,0.5)', padding: '15px 25px', borderRadius: '30px', backdropFilter: 'blur(10px)', display: 'flex', gap: '20px', alignItems: 'center' }}>
        <div className="pb-hero-1-arrows pb-hero-slider-arrows" style={{ position: 'relative', display: 'flex', gap: '10px' }}>
          <button aria-label="Previous slide" onClick={prevSlide} className="pb-hero-nav-btn" style={{ background: 'none', border: 'none', color: '#fff', fontSize: '1.5rem', cursor: 'pointer' }}>
            {dir === 'rtl' ? '→' : '←'}
          </button>
          <button aria-label="Next slide" onClick={nextSlide} className="pb-hero-nav-btn" style={{ background: 'none', border: 'none', color: '#fff', fontSize: '1.5rem', cursor: 'pointer' }}>
            {dir === 'rtl' ? '←' : '→'}
          </button>
        </div>
        <div className="pb-hero-1-progress pb-hero-slider-progress" style={{ position: 'relative', width: '100px', height: '2px', background: 'rgba(255,255,255,0.2)' }}>
          <div className="pb-hero-1-fill pb-hero-slider-fill" style={{ 
            position: 'absolute', top: 0, height: '100%', background: '#cfa856', transition: 'width 0.3s ease',
            width: `${((currentSlide + 1) / slidesCount) * 100}%`,
            [dir === 'rtl' ? 'right' : 'left']: 0,
            transformOrigin: dir === 'rtl' ? 'right' : 'left'
          }}></div>
        </div>
        <div className="pb-hero-1-index pb-hero-slider-index" style={{ color: '#fff', fontWeight: 'bold' }}>
          <span>{String(currentSlide + 1).padStart(2, '0')}</span>
          <span className="pb-hero-1-total" style={{ opacity: 0.5 }}> / {String(slidesCount).padStart(2, '0')}</span>
        </div>
      </div>

      <div className="pb-hero-1-viewport" style={{ width: '100%', overflow: 'hidden' }}>
        <div 
          className="pb-hero-1-track"
          style={{ 
            display: 'flex', 
            width: '300%', 
            alignItems: 'stretch',
            minHeight: 'calc(100svh - var(--header-height, 100px))',
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
                  <Link href="#selected-projects" className="pb-hero-1-btn">
                    {t('cta')}
                    <span aria-hidden="true" style={{ marginInlineStart: '12px' }}>{dir === 'rtl' ? '←' : '→'}</span>
                  </Link>
                </div>
              </div>
            </div>

            <div className="pb-hero-1-image" style={{ width: '100%', position: 'relative', minHeight: '300px' }}>
              <picture style={{ display: 'block', width: '100%', height: '100%' }}>
                <source srcSet="/assets/banner2-mobile.webp" media="(max-width: 768px)" />
                <img
                  src="/assets/banner2.png"
                  alt={t('title')}
                  style={{ width: '100%', height: '100%', objectFit: 'contain' }}
                />
              </picture>
            </div>
          </div>

          {/* SLIDE 2: Before/After Card (pro11 / pro1) */}
          <div className="pb-hero-1-slide pb-hero-case-slide" style={{ flex: '0 0 33.333333%', width: '33.333333%', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '0 1.5rem' }}>
            <div className="case-study-box pb-hero-case-box" style={{ width: '100%', maxWidth: '1400px' }}>
              <BeforeAfterPair 
                beforeImage="https://vqknbbjrosel3hr8.public.blob.vercel-storage.com/photos/image-work-work-badge/pro11.webp"
                afterImage="https://vqknbbjrosel3hr8.public.blob.vercel-storage.com/photos/image-work-work-badge/pro1.webp"
                beforeAlt="التصميم"
                afterAlt="الحقيقة"
              />
            </div>
          </div>

          {/* SLIDE 3: Before/After Card (pro33 / pro3) */}
          <div className="pb-hero-1-slide pb-hero-case-slide" style={{ flex: '0 0 33.333333%', width: '33.333333%', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '0 1.5rem' }}>
            <div className="case-study-box pb-hero-case-box" style={{ width: '100%', maxWidth: '1400px' }}>
              <BeforeAfterPair 
                beforeImage="https://vqknbbjrosel3hr8.public.blob.vercel-storage.com/photos/image-work-work-badge/pro33.webp"
                afterImage="https://vqknbbjrosel3hr8.public.blob.vercel-storage.com/photos/image-work-work-badge/pro3.webp"
                beforeAlt="التصميم"
                afterAlt="الحقيقة"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
