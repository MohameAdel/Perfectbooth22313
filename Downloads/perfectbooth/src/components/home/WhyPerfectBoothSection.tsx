import { useTranslations, useLocale } from 'next-intl';
import React from 'react';

export default function WhyPerfectBoothSection() {
  const t = useTranslations('WhyPerfectBooth');
  const locale = useLocale();
  const dir = locale === 'ar' ? 'rtl' : 'ltr';

  const proofs = [
    { id: 1, title: t('proof1'), icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
      </svg>
    ) },
    { id: 2, title: t('proof2'), icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="8" r="7"/><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"/>
      </svg>
    ) },
    { id: 3, title: t('proof3'), icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
      </svg>
    ) },
    { id: 4, title: t('proof4'), icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
      </svg>
    ) }
  ];

  return (
    <section className="why-pb-section" dir={dir}>
      <div className="why-pb-container">
        <div className="why-pb-header">
          <p className="why-pb-eyebrow">{t('eyebrow')}</p>
          <h2 className="why-pb-title">{t('title')}</h2>
          <div className="why-pb-wavy-line">
            <svg width="100" height="20" viewBox="0 0 100 20" xmlns="http://www.w3.org/2000/svg">
              <path d="M0,10 Q10,0 20,10 T40,10 T60,10 T80,10 T100,10" fill="none" stroke="var(--pb-primary-light)" strokeWidth="2"/>
            </svg>
          </div>
          <p className="why-pb-description">{t('description')}</p>
        </div>

        <div className="why-pb-grid">
          <div className="why-pb-connecting-line"></div>
          {proofs.map((proof) => (
            <div key={proof.id} className="why-pb-item">
              <div className="why-pb-icon-wrapper">
                {proof.icon}
              </div>
              <h3 className="why-pb-item-title">{proof.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
