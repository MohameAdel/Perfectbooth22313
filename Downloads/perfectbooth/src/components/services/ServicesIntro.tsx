import React from 'react';
import { useTranslations, useLocale } from 'next-intl';

export default function ServicesIntro() {
  const t = useTranslations('ServicesPage.intro');
  const locale = useLocale();
  const dir = locale === 'ar' ? 'rtl' : 'ltr';

  return (
    <section id="core-services" className="services-intro-section" dir={dir}>
      <div className="services-intro-container">
        <div className="services-intro-primary">
          <div className="services-intro-eyebrow-wrapper">
            <div className="services-intro-eyebrow-line"></div>
            <p className="services-intro-eyebrow">{t('eyebrow')}</p>
          </div>
          <h2 className="services-intro-title">{t('title')}</h2>
        </div>
        <div className="services-intro-secondary">
          <p className="services-intro-body">{t('body')}</p>
          <div className="services-intro-architectural-line" />
        </div>
      </div>
      <div className="services-intro-connecting-line" />
    </section>
  );
}
