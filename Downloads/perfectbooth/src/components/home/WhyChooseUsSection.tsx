import React from 'react';
import { useTranslations, useLocale } from 'next-intl';

export default function WhyChooseUsSection() {
  const t = useTranslations('WhyChooseUs');
  const locale = useLocale();
  const dir = locale === 'ar' ? 'rtl' : 'ltr';

  const stats = [
    {
      id: 1,
      number: '9',
      label: t('stats.years'),
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
        </svg>
      )
    },
    {
      id: 2,
      number: '+50',
      label: t('stats.projects'),
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <polygon points="12 2 2 7 12 12 22 7 12 2"></polygon>
          <polyline points="2 12 12 17 22 12"></polyline>
          <polyline points="2 17 12 22 22 17"></polyline>
        </svg>
      )
    },
    {
      id: 3,
      number: '4.9/5',
      label: t('stats.satisfaction'),
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
        </svg>
      )
    },
    {
      id: 4,
      number: '80',
      label: t('stats.team'),
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
          <circle cx="9" cy="7" r="4"/>
          <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
          <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
        </svg>
      )
    }
  ];

  return (
    <section className="why-choose-us-section" dir={dir}>
      <div className="why-choose-us-container">
        <div className="why-choose-us-header" style={{ textAlign: dir === 'rtl' ? 'right' : 'left' }}>
          <p className="why-choose-us-eyebrow">{t('eyebrow')}</p>
          <h2 className="why-choose-us-title">{t('title')}</h2>
          <div className="why-choose-us-wavy" style={{ margin: dir === 'rtl' ? '0 0 0 auto' : '0' }}>
            <svg width="60" height="12" viewBox="0 0 60 12" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 6C3.96 6 6.04 1 10 1C13.96 1 16.04 11 20 11C23.96 11 26.04 1 30 1C33.96 1 36.04 11 40 11C43.96 11 46.04 1 50 1C53.96 1 56.04 6 60 6" stroke="#C4972D" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
          </div>
        </div>

        <div className="why-choose-us-timeline-wrapper">
          <div className="timeline-dashed-line"></div>
          
          <div className="timeline-grid">
            {stats.map((stat) => (
              <div key={stat.id} className="timeline-item">
                <div className="timeline-pin-wrapper">
                  <div className="timeline-pin">
                    {stat.icon}
                  </div>
                  <div className="timeline-pin-triangle"></div>
                </div>
                <div className="timeline-content">
                  <h3 className="timeline-number">{stat.number}</h3>
                  <p className="timeline-label">{stat.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
