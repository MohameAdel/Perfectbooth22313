import React from 'react';
import { useTranslations, useLocale } from 'next-intl';
import { processSteps } from '@/data/services';

export default function DeliveryProcess() {
  const t = useTranslations('ServicesPage.process');
  const locale = useLocale();
  const dir = locale === 'ar' ? 'rtl' : 'ltr';

  return (
    <section className="delivery-process-section" dir={dir}>
      <div className="delivery-process-container">
        
        <div className="process-intro">
          <div className="process-intro-eyebrow-wrapper">
            <div className="process-intro-eyebrow-line"></div>
            <p className="process-intro-eyebrow">{t('intro.eyebrow')}</p>
          </div>
          <h2 className="process-intro-title">{t('intro.title')}</h2>
          <p className="process-intro-body">{t('intro.body')}</p>
        </div>

        <div className="process-timeline-wrapper">
          <div className="process-timeline-track"></div>
          <div className="process-timeline-steps">
            {processSteps.map((step) => (
              <div key={step.id} className="process-step">
                <div className="process-step-node">
                  <div className="process-step-dot"></div>
                </div>
                <div className="process-step-content">
                  <h3 className="process-step-title">{t(`steps.${step.id}.title`)}</h3>
                  <p className="process-step-desc">{t(`steps.${step.id}.desc`)}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
