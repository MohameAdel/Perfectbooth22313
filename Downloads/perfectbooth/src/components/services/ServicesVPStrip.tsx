import React from 'react';
import { useTranslations, useLocale } from 'next-intl';

export default function ServicesVPStrip() {
  const t = useTranslations('ServicesPage.vpStrip');
  const locale = useLocale();
  const dir = locale === 'ar' ? 'rtl' : 'ltr';

  const items = [
    { key: 'item01' },
    { key: 'item02' },
    { key: 'item03' }
  ];

  return (
    <section className="services-vp-strip" dir={dir}>
      <div className="services-vp-container">
        {items.map((item, index) => (
          <div key={item.key} className="services-vp-item">
            <div className="services-vp-number">0{index + 1}</div>
            <div className="services-vp-content">
              <h3 className="services-vp-title">{t(`${item.key}.title`)}</h3>
              <p className="services-vp-desc">{t(`${item.key}.desc`)}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
