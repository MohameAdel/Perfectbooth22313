"use client";

import { useTranslations, useLocale } from 'next-intl';
import { Link } from '@/i18n/navigation';
import Image from 'next/image';
import { useState, useEffect } from 'react';

export default function HomeHero() {
  const t = useTranslations('Hero');
  const locale = useLocale();
  const dir = locale === 'ar' ? 'rtl' : 'ltr';

  const [currentSlide, setCurrentSlide] = useState(0);
  const slidesCount = 2;

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
      
      {/* Slider Controls - Absolute positioned on top of the section */}
      <div className="pb-hero-1-controls animate-slide-in-fix" style={{ position: 'absolute', bottom: '5%', left: dir === 'rtl' ? '5%' : 'auto', right: dir === 'ltr' ? '5%' : 'auto', zIndex: 100, background: 'rgba(0,0,0,0.5)', padding: '15px 25px', borderRadius: '30px', backdropFilter: 'blur(10px)', display: 'flex', gap: '20px', alignItems: 'center' }}>
        <div className="pb-hero-1-arrows" style={{ position: 'relative', display: 'flex', gap: '10px' }}>
          <button aria-label="Previous slide" onClick={prevSlide} style={{ background: 'none', border: 'none', color: '#fff', fontSize: '1.5rem', cursor: 'pointer' }}>
            {dir === 'rtl' ? '→' : '←'}
          </button>
          <button aria-label="Next slide" onClick={nextSlide} style={{ background: 'none', border: 'none', color: '#fff', fontSize: '1.5rem', cursor: 'pointer' }}>
            {dir === 'rtl' ? '←' : '→'}
          </button>
        </div>
        <div className="pb-hero-1-progress" style={{ position: 'relative', width: '100px', height: '2px', background: 'rgba(255,255,255,0.2)' }}>
          <div className="pb-hero-1-fill" style={{ position: 'absolute', top: 0, left: dir === 'rtl' ? 'auto' : 0, right: dir === 'rtl' ? 0 : 'auto', height: '100%', background: '#cfa856', width: `${((currentSlide + 1) / slidesCount) * 100}%`, transition: 'width 0.3s ease' }}></div>
        </div>
        <div className="pb-hero-1-index" style={{ color: '#fff', fontWeight: 'bold' }}>
          <span>{String(currentSlide + 1).padStart(2, '0')}</span>
          <span className="pb-hero-1-total" style={{ opacity: 0.5 }}> / {String(slidesCount).padStart(2, '0')}</span>
        </div>
      </div>

      <div 
        style={{ 
          display: 'flex', 
          width: '200%', 
          height: '100%',
          transform: `translateX(${dir === 'rtl' ? currentSlide * 50 : -currentSlide * 50}%)`, 
          transition: 'transform 0.6s cubic-bezier(0.25, 1, 0.5, 1)' 
        }}
      >
        {/* SLIDE 1: Original Hero */}
        <div className="pb-hero-1-container" style={{ width: '50%', height: '100%', position: 'relative', display: 'flex' }}>
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

          <div className="pb-hero-1-image" style={{ display: 'block', width: '100%', height: '100%', position: 'relative' }}>
            <Image
              src="/assets/banner2.png"
              alt={t('title')}
              fill
              priority
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 40vw"
              style={{ objectFit: 'contain' }}
            />
          </div>
        </div>

        {/* SLIDE 2: Before/After Card */}
        <div style={{ width: '50%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '5%', position: 'relative' }}>
          <div style={{ width: '100%', maxWidth: '1400px', height: '80%', display: 'flex', gap: '20px', flexDirection: 'row' }}>
            <div style={{ flex: 1, position: 'relative', borderRadius: '30px', overflow: 'hidden', boxShadow: '0 20px 50px rgba(0,0,0,0.5)' }}>
              <span style={{ position: 'absolute', top: '20px', right: '20px', zIndex: 10, background: '#cfa856', color: 'white', padding: '8px 25px', borderRadius: '30px', fontSize: '1.2rem', fontWeight: 'bold' }}>الحقيقة</span>
              <Image src="https://vqknbbjrosel3hr8.public.blob.vercel-storage.com/photos/image-work-work-badge/pro1.webp" fill style={{ objectFit: 'cover' }} alt="After" sizes="(max-width: 768px) 100vw, 50vw" />
            </div>
            <div style={{ flex: 1, position: 'relative', borderRadius: '30px', overflow: 'hidden', boxShadow: '0 20px 50px rgba(0,0,0,0.5)' }}>
              <span style={{ position: 'absolute', top: '20px', right: '20px', zIndex: 10, background: '#cfa856', color: 'white', padding: '8px 25px', borderRadius: '30px', fontSize: '1.2rem', fontWeight: 'bold' }}>التصميم</span>
              <Image src="https://vqknbbjrosel3hr8.public.blob.vercel-storage.com/photos/image-work-work-badge/pro11.webp" fill style={{ objectFit: 'cover' }} alt="Before" sizes="(max-width: 768px) 100vw, 50vw" />
            </div>
          </div>
        </div>

      </div>
    </section>

  );
}
