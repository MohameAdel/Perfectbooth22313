"use client";

import { useTranslations, useLocale } from 'next-intl';
import Image from 'next/image';
import { Link } from '@/i18n/navigation';
import Hover3DWrapper from '@/components/ui/Hover3DWrapper';

export default function ContactHero() {
  const t = useTranslations('ContactPage.hero');
  const locale = useLocale();
  const isRtl = locale === 'ar';

  return (
    <section className="about-page-hero" style={{ position: 'relative' }}>
      {/* Background ambient light */}
      <div className="hero-ambient-light" aria-hidden="true"></div>
      <div className="hero-ambient-plane" aria-hidden="true"></div>

      <div className="about-hero-container">
        
        {/* Text Content */}
        <div className="about-hero-content">
          <div className="about-hero-eyebrow animate-slide-in-fix">
            <span className="about-eyebrow-line"></span>
            {t('eyebrow')}
          </div>
          
          <h1 className="about-hero-title animate-slide-in-fix" style={{ animationDelay: '0.1s' }}>
            {t('title')}
          </h1>
          
          <p className="about-hero-intro animate-slide-in-fix" style={{ animationDelay: '0.2s' }}>
            {t('intro')}
          </p>

          <p className="about-hero-support animate-slide-in-fix" style={{ animationDelay: '0.3s' }}>
            {t('support')}
          </p>
          
          <div className="about-hero-actions animate-slide-in-fix" style={{ animationDelay: '0.4s' }}>
            <a 
              href="#project-form" 
              onClick={(e) => {
                e.preventDefault();
                const formSection = document.getElementById('project-form');
                if (formSection) {
                  formSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
                  setTimeout(() => {
                    const input = document.getElementById('fullName');
                    if (input) input.focus({ preventScroll: true });
                  }, 600);
                }
              }}
              className="about-hero-btn-primary animated-cta-pulse-btn"
            >
              {t('cta')}
            </a>
            <a 
              href="https://wa.me/201116013011" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="about-hero-btn-secondary"
            >
              {t('whatsappCta')}
            </a>
          </div>
        </div>

        {/* Image Content */}
        <div className="about-hero-image-wrapper">
          <Hover3DWrapper maxRotation={3}>
            <div className="hero-3d-frame">
              <div className="hero-3d-frame-image-layer">
                <Image
                  src="https://vqknbbjrosel3hr8.public.blob.vercel-storage.com/photos/new%20images%20project/IMG_9466.jpg.webp"
                  alt={isRtl ? 'تصميم وتنفيذ أجنحة معارض مخصصة من تنفيذ Perfect Booth' : 'Custom exhibition booth design and fabrication by Perfect Booth'}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  quality={80}
                  priority
                  style={{
                    objectFit: 'cover',
                    objectPosition: 'center'
                  }}
                />
              </div>
            </div>
          </Hover3DWrapper>
        </div>
        
      </div>
    </section>
  );
}
