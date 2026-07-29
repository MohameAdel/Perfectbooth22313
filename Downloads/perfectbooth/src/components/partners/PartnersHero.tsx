"use client";

import React from 'react';
import { useTranslations, useLocale } from 'next-intl';
import { Link } from '@/i18n/navigation';
import HeroVideoController from './HeroVideoController';

export default function PartnersHero() {
  const t = useTranslations('PartnersPage.hero');
  const locale = useLocale();
  const dir = locale === 'ar' ? 'rtl' : 'ltr';
  
  const videoUrl = "https://vqknbbjrosel3hr8.public.blob.vercel-storage.com/videos/homepage-intro-v2.mp4";

  const handleScrollToCollaborations = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const section = document.getElementById('collaborations');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section className="partners-hero" dir={dir}>
      <link rel="preload" as="image" href="/assets/partners-hero-poster.webp" fetchPriority="high" />
      <div className="partners-hero-container">
        
        <div className="partners-hero-content">
          <div className="partners-hero-text">
            <div className="eyebrow-wrapper">
              <div className="animated-yellow-line line-horizontal"></div>
              <p className="partners-hero-eyebrow">{t('eyebrow')}</p>
            </div>
            <h1 className="partners-hero-title">{t('title')}</h1>
            <p className="partners-hero-body">{t('body')}</p>
          </div>
          
          <div className="partners-hero-support-wrapper">
            <p className="partners-hero-support">{t('support')}</p>
            <div className="animated-yellow-line line-horizontal line-support"></div>
          </div>

          <div className="partners-hero-actions">
            <a 
              href="#collaborations" 
              onClick={handleScrollToCollaborations} 
              className="btn btn-primary"
            >
              {t('ctaPrimary')}
            </a>
            <Link href="/contact#project-form" className="btn btn-secondary">
              {t('ctaSecondary')}
            </Link>
          </div>
        </div>

        <div className="partners-hero-media">
          <div className="partners-hero-video-frame">
            <div className="video-background-layer"></div>
            <div className="video-corner-accent"></div>
            <HeroVideoController videoSrc={videoUrl} />
          </div>
        </div>

      </div>
    </section>
  );
}
