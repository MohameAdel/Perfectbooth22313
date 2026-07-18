import React from 'react';
import { useTranslations, useLocale } from 'next-intl';
import Image from 'next/image';
import { servicesData } from '@/data/services';
import ScrollReveal from '@/components/ui/ScrollReveal';

export default function CoreServices() {
  const t = useTranslations('ServicesPage.services');
  const locale = useLocale();
  const dir = locale === 'ar' ? 'rtl' : 'ltr';

  return (
    <section className="core-services-section" dir={dir}>
      <div className="core-services-container">
        {servicesData.map((service, index) => {
          const isEven = index % 2 !== 0;
          const number = `0${index + 1}`;
          
          return (
            <ScrollReveal
              key={service.id}
              className={`core-service-row ${isEven ? 'row-even' : 'row-odd'}`}
              delay={80}
            >
              <div className="core-service-content">
                <div className="core-service-header">
                  <span className="core-service-number">{number}</span>
                  <div className="core-service-line"></div>
                </div>
                <h3 className="core-service-title">{t(`${service.id}.title`)}</h3>
                <p className="core-service-statement">{t(`${service.id}.statement`)}</p>
                <p className="core-service-description">{t(`${service.id}.description`)}</p>
                <ul className="core-service-capabilities">
                  <li>
                    <span className="capability-dot"></span>
                    {t(`${service.id}.cap1`)}
                  </li>
                  <li>
                    <span className="capability-dot"></span>
                    {t(`${service.id}.cap2`)}
                  </li>
                  <li>
                    <span className="capability-dot"></span>
                    {t(`${service.id}.cap3`)}
                  </li>
                </ul>
              </div>
              
              <div className="core-service-media">
                {service.hasImage && service.image ? (
                  <div className="core-service-image-wrapper">
                    <Image
                      src={service.image}
                      alt={t(`${service.id}.title`)}
                      fill
                      className="core-service-image"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                ) : (
                  <div className="core-service-typographic-panel">
                    <div className="typo-bg-pattern"></div>
                    <div className="typo-content">
                      <span className="typo-number">{number}</span>
                      <span className="typo-title">{t(`${service.id}.title`)}</span>
                    </div>
                  </div>
                )}
              </div>
            </ScrollReveal>
          );
        })}
      </div>
    </section>
  );
}
