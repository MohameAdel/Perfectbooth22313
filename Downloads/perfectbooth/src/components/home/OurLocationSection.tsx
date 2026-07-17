import React from 'react';
import { useTranslations, useLocale } from 'next-intl';

export default function OurLocationSection() {
  const t = useTranslations('OurLocation');
  const locale = useLocale();
  const dir = locale === 'ar' ? 'rtl' : 'ltr';

  // TODO: Update this href when a verified Google Maps link is available.
  const mapLinkHref = "#"; 

  return (
    <section className="our-location-section" dir={dir}>
      <div className="our-location-container">
        
        {/* Map / Visual Panel */}
        <div className="ol-visual-panel">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d110532.88583487192!2d31.161947702582855!3d30.01683973167123!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14583fa60b21beeb%3A0x79dfb296e8423bba!2sCairo%2C%20Cairo%20Governorate!5e0!3m2!1sen!2seg!4v1716383345155!5m2!1sen!2seg" 
            width="100%" 
            height="100%" 
            style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg)' }} 
            allowFullScreen={false} 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            title="Location Map"
          ></iframe>
        </div>
        
        {/* Content Panel */}
        <div className="ol-content-panel">
          <div className="ol-inner-wrapper">
            {/* Decorative Location Word */}
            <div className="ol-decorative-word" aria-hidden="true">
              {t('decorativeText')}
            </div>
            
            <h2 className="ol-title">{t('title')}</h2>
            
            <a 
              href={mapLinkHref} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="ol-cta-button"
              aria-label={t('cta')}
            >
              <span>{t('cta')}</span>
              <svg className="ol-cta-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="22" y1="2" x2="11" y2="13"></line>
                <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
              </svg>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
