import React from 'react';
import { useTranslations, useLocale } from 'next-intl';
import Image from 'next/image';

export default function OurLocationSection() {
  const t = useTranslations('OurLocation');
  const locale = useLocale();
  const dir = locale === 'ar' ? 'rtl' : 'ltr';

  // TODO: A verified map URL or address is required. 
  // Currently falling back to an approved architectural exhibition image.
  // Replace this visual fallback with a responsive iframe embed once a location is verified.
  const visualFallback = 'https://admin.perfectbooth-events.com/storage/home-banner-slides/RsSpXrV3I3WLKRHtxPITuoYKkFuWshOWKsiaplDR.jpg';

  // TODO: Update this href when a verified Google Maps link is available.
  const mapLinkHref = "#"; 

  return (
    <section className="our-location-section" dir={dir}>
      <div className="our-location-container">
        
        {/* Map / Visual Panel */}
        <div className="ol-visual-panel">
          <Image
            src={visualFallback}
            alt="Perfect Booth Location Fallback Visual"
            fill
            sizes="(max-width: 1024px) 100vw, 55vw"
            className="ol-visual-img"
            unoptimized
          />
        </div>
        
        {/* Content Panel */}
        <div className="ol-content-panel">
          {/* Decorative Location Word */}
          <div className="ol-decorative-word" aria-hidden="true">
            {t('decorativeText')}
          </div>
          
          <div className="ol-content-body">
            <h2 className="ol-title">{t('title')}</h2>
            
            <a 
              href={mapLinkHref} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="ol-cta-button"
              aria-label={t('cta')}
            >
              <span>{t('cta')}</span>
              <svg className="ol-cta-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                {/* Generic navigation / location pin style icon instead of paper-plane to be safe and restrained */}
                <path d="M21 10C21 17 12 23 12 23C12 23 3 17 3 10C3 5.02944 7.02944 1 12 1C16.9706 1 21 5.02944 21 10Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M12 13C13.6569 13 15 11.6569 15 10C15 8.34315 13.6569 7 12 7C10.3431 7 9 8.34315 9 10C9 11.6569 10.3431 13 12 13Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
