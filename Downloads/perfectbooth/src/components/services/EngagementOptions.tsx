import React from 'react';
import { useTranslations, useLocale } from 'next-intl';
import { Link } from '@/i18n/navigation';

export default function EngagementOptions() {
  const t = useTranslations('ServicesPage.engagement');
  const locale = useLocale();
  const dir = locale === 'ar' ? 'rtl' : 'ltr';

  const options = ['option01', 'option02'];

  return (
    <section className="engagement-options-section" dir={dir}>
      <div className="engagement-options-container">
        {options.map((option) => (
          <div key={option} className="engagement-panel">
            <div className="engagement-panel-label">{t(`${option}.label`)}</div>
            <h3 className="engagement-panel-title">{t(`${option}.title`)}</h3>
            <p className="engagement-panel-body">{t(`${option}.body`)}</p>
            <Link href="/contact" className="engagement-panel-cta btn btn-secondary">
              {t(`${option}.cta`)}
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}
