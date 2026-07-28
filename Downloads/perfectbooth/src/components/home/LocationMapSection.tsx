'use client';

import React from 'react';
import { useLocale, useTranslations } from 'next-intl';

export default function LocationMapSection() {
  const locale = useLocale();
  const dir = locale === 'ar' ? 'rtl' : 'ltr';
  const t = useTranslations('Location');

  return (
    <section 
      className="location-map-section-wrapper" 
      dir={dir} 
      style={{ 
        backgroundColor: '#1a1a1a', 
        paddingTop: '4.5rem',
        width: '100%',
        overflow: 'hidden'
      }}
    >
      {/* Header Container */}
      <div 
        style={{
          maxWidth: '1400px',
          margin: '0 auto',
          padding: '0 2% 2.5rem 5%',
          boxSizing: 'border-box'
        }}
      >
        <div 
          style={{ 
            display: 'flex', 
            flexDirection: 'column', 
            alignItems: 'flex-start', 
            textAlign: 'start' 
          }}
        >
          {/* Eyebrow with Accent Line */}
          <div 
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.75rem',
              fontSize: '0.875rem',
              fontWeight: 600,
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              color: '#cfa856',
              marginBottom: '1rem'
            }}
          >
            <span 
              style={{ 
                width: '28px', 
                height: '2px', 
                backgroundColor: '#cfa856', 
                borderRadius: '1px',
                display: 'inline-block'
              }} 
            />
            <span>{t('eyebrow')}</span>
          </div>

          {/* Main Title */}
          <h2 
            style={{
              fontSize: 'clamp(2.65rem, 4vw, 3.25rem)',
              fontWeight: 700,
              lineHeight: 1.70,
              color: '#ffffff',
              margin: 0,
              maxWidth: '850px'
            }}
          >
            {locale === 'ar' ? (
              <>
                شريكك الأقرب <span style={{ color: '#cfa856' }}>لتنظيم فعالياتك</span>
              </>
            ) : (
              <>
                Your Trusted Partner for <span style={{ color: '#cfa856' }}>Event Execution</span>
              </>
            )}
          </h2>
        </div>
      </div>

      {/* Map Embed Frame */}
      <div 
        className="map-iframe-container"
        style={{
          width: '100%',
          height: '480px',
          position: 'relative',
          borderTop: '1px solid rgba(255, 255, 255, 0.08)',
          borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
          overflow: 'hidden'
        }}
      >
        <iframe
          src="https://maps.google.com/maps?q=30.0773392,31.3113003&t=&z=15&ie=UTF8&iwloc=&output=embed"
          width="100%"
          height="100%"
          style={{ 
            border: 0, 
            width: '100%', 
            height: '100%', 
            filter: 'contrast(105%) brightness(95%)' 
          }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title={t('title')}
        ></iframe>
      </div>
    </section>
  );
}
