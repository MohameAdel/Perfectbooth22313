import React from 'react';
import { useTranslations, useLocale } from 'next-intl';
import { Link } from '@/i18n/navigation';

export default function FinalCTA() {
  const t = useTranslations('ServicesPage.cta');
  const locale = useLocale();
  const dir = locale === 'ar' ? 'rtl' : 'ltr';

  return (
    <section className="final-cta-section" dir={dir}>
      <div className="final-cta-container">
        <div className="final-cta-eyebrow-wrapper">
          <div className="final-cta-eyebrow-line"></div>
          <p className="final-cta-eyebrow">{t('eyebrow')}</p>
        </div>
        <h2 className="final-cta-title">{t('title')}</h2>
        <p className="final-cta-body">{t('body')}</p>
        <div className="final-cta-actions">
          <Link href="/contact" className="btn btn-primary">
            {t('primary')}
          </Link>
          <Link href="/partners" className="btn btn-secondary">
            {t('secondary')}
          </Link>
        </div>
      </div>
    </section>
  );
}
