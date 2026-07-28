'use client';

import React from 'react';
import { useLocale, useTranslations } from 'next-intl';

export default function LocationMapSection() {
  const locale = useLocale();
  const dir = locale === 'ar' ? 'rtl' : 'ltr';
  const t = useTranslations('Location');

  return (
    <>
      <style dangerouslySetInnerHTML={{__html: `
        .map-wrapper {
          width: 100%;
          height: 300px;
          position: relative;
        }
        @media (min-width: 768px) {
          .map-wrapper { height: 400px; }
        }
        @media (min-width: 1024px) {
          .map-wrapper { height: 500px; }
        }
      `}} />
      
      <div className="w-full relative px-4 md:px-8 max-w-7xl mx-auto pt-16 pb-8 md:pt-24 md:pb-12" dir={dir}>
        <div className="flex flex-col text-start">
          <div className="max-w-[95%] md:max-w-2xl lg:max-w-3xl">
            <p className="text-[#C4972D] text-sm md:text-base uppercase tracking-[0.2em] font-semibold mb-3 md:mb-4">
              {t('eyebrow')}
            </p>
            <h2 className="text-white text-2xl md:text-3xl lg:text-4xl font-bold leading-snug md:leading-tight">
              {t('title')}
            </h2>
          </div>
        </div>
      </div>

      <section className="location-map-section map-wrapper">
        <iframe
          src="https://maps.google.com/maps?q=30.0773392,31.3113003&t=&z=15&ie=UTF8&iwloc=&output=embed"
          width="100%"
          height="100%"
          style={{ border: 0, width: '100%', height: '100%' }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="grayscale hover:grayscale-0 transition-all duration-700"
        ></iframe>
      </section>
    </>
  );
}
