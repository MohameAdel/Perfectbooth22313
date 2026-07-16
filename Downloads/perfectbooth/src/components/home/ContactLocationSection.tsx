import React from 'react';
import { useTranslations, useLocale } from 'next-intl';
import Image from 'next/image';
import Link from 'next/link';

export default function ContactLocationSection() {
  const t = useTranslations('ContactLocation');
  const locale = useLocale();
  const dir = locale === 'ar' ? 'rtl' : 'ltr';

  // TODO: A verified map URL or address is required. 
  // Currently falling back to an approved architectural exhibition image.
  const visualFallback = 'https://admin.perfectbooth-events.com/storage/home-banner-slides/RsSpXrV3I3WLKRHtxPITuoYKkFuWshOWKsiaplDR.jpg';

  return (
    <section className="contact-location-section" dir={dir}>
      <div className="contact-location-container">
        <div className="cl-visual-panel">
          <Image
            src={visualFallback}
            alt="Perfect Booth Architectural Exhibition Space"
            fill
            sizes="(max-width: 1024px) 100vw, 60vw"
            className="cl-visual-img"
            unoptimized
          />
        </div>
        
        <div className="cl-content-panel">
          <div className="cl-decorative-word" aria-hidden="true">
            {t('decorativeText')}
          </div>
          
          <div className="cl-content-body">
            <h2 className="cl-title">{t('title')}</h2>
            <p className="cl-description">{t('description')}</p>
            
            <Link href={\`/\${locale}/contact\`} className="cl-cta-button">
              <span>{t('cta')}</span>
              <svg className="cl-cta-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d={dir === 'rtl' ? "M19 12H5M12 19l-7-7 7-7" : "M5 12h14M12 5l7 7-7 7"} stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>

            <div className="cl-contact-info">
              <a href={\`mailto:\${t('email')}\`} className="cl-contact-link" dir="ltr">{t('email')}</a>
              <a href={\`tel:\${t('phone')}\`} className="cl-contact-link" dir="ltr">{t('phone')}</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
