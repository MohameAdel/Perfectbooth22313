import React from 'react';
import { useTranslations, useLocale } from 'next-intl';
import { Link } from '@/i18n/navigation';
import Image from 'next/image';

export default function ServicesHero() {
  const t = useTranslations('ServicesPage.hero');
  const locale = useLocale();
  const isRtl = locale === 'ar';
  const dir = isRtl ? 'rtl' : 'ltr';

  return (
    <section className="services-hero" dir={dir}>
      <div className="services-hero-grid-line" />
      <div className="services-hero-grid-pattern" aria-hidden="true" />
      <div className="services-hero-glow" aria-hidden="true" />
      
      <div className="services-hero-decorations" aria-hidden="true">
        <svg className="services-hero-svg-deco" width="400" height="400" viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="200" cy="200" r="198" stroke="rgba(255,255,255,0.02)" strokeWidth="1" strokeDasharray="6 6" />
          <path d="M200 2 A198 198 0 0 1 398 200" stroke="var(--pb-accent)" strokeWidth="1" opacity="0.15" />
          <line x1="200" y1="0" x2="200" y2="400" stroke="rgba(255,255,255,0.02)" strokeWidth="1" />
          <line x1="0" y1="200" x2="400" y2="200" stroke="rgba(255,255,255,0.02)" strokeWidth="1" />
        </svg>
      </div>

      <div className="services-hero-container">
        <div className="services-hero-content">
          <div className="services-hero-eyebrow-wrapper services-hero-reveal" style={{ animationDelay: '0.1s' }}>
            <div className="services-hero-eyebrow-line"></div>
            <p className="services-hero-eyebrow">{t('eyebrow')}</p>
          </div>
          <h1 className="services-hero-title services-hero-reveal" style={{ animationDelay: '0.2s' }}>
            {t('title')}
          </h1>
          <p className="services-hero-body services-hero-reveal" style={{ animationDelay: '0.3s' }}>
            {t('body')}
          </p>
          <div className="services-hero-support-wrapper services-hero-reveal" style={{ animationDelay: '0.4s' }}>
            <p className="services-hero-support">{t('support')}</p>
          </div>
          <div className="services-hero-actions services-hero-reveal" style={{ animationDelay: '0.5s' }}>
            <Link href="/contact" className="btn btn-primary">
              {t('ctaPrimary')}
            </Link>
            <a href="#core-services" className="btn btn-secondary">
              {t('ctaSecondary')}
            </a>
          </div>
        </div>
        <div className="services-hero-media services-hero-media-reveal" style={{ animationDelay: '0.3s' }}>
          <div className="services-hero-image-wrapper">
            <div className="services-hero-yellow-line" />
            <Image
              src="https://admin.perfectbooth-events.com/storage/home-banner-slides/co1X3sNRqpx9Kdnicliy0dmKe5puz1phE7CYyV8l.jpg"
              alt={t('title')}
              fill
              className="services-hero-image"
              sizes="(max-width: 768px) 100vw, 58vw"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
