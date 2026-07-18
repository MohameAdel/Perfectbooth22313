import React from 'react';
import { useTranslations, useLocale } from 'next-intl';
import ScrollReveal from '@/components/ui/ScrollReveal';

export default function ServicesIntro() {
  const t = useTranslations('ServicesPage.intro');
  const locale = useLocale();
  const dir = locale === 'ar' ? 'rtl' : 'ltr';

  return (
    <section id="core-services" className="services-intro-section" dir={dir}>
      <div className="services-intro-bg-number" aria-hidden="true">03</div>
      <div className="services-intro-container">
        <ScrollReveal className="services-intro-primary" delay={80}>
          <div className="services-intro-eyebrow-wrapper">
            <div className="services-intro-eyebrow-line"></div>
            <p className="services-intro-eyebrow">{t('eyebrow')}</p>
          </div>
          <h2 className="services-intro-title">{t('title')}</h2>
        </ScrollReveal>
        <ScrollReveal className="services-intro-secondary" delay={200}>
          <p className="services-intro-body">{t('body')}</p>
        </ScrollReveal>
      </div>
    </section>
  );
}
