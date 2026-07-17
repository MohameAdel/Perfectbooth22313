import { useTranslations, useLocale } from 'next-intl';
import ScrollReveal from '@/components/ui/ScrollReveal';

export default function ContactProcess() {
  const t = useTranslations('ContactPage.process');
  const locale = useLocale();
  const dir = locale === 'ar' ? 'rtl' : 'ltr';

  return (
    <section className="contact-process-section" dir={dir}>
      <div className="contact-process-container">
        
        <ScrollReveal delay={0}>
          <div className="contact-process-header-wrapper">
            <div className="contact-process-header">
              <div className="contact-process-eyebrow">
                <span className="contact-process-eyebrow-line"></span>
                {t('eyebrow')}
              </div>
              <h2 className="contact-process-title">{t('title')}</h2>
              {t.has('desc') && (
                <p className="contact-process-desc">{t('desc')}</p>
              )}
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0} className="process-sequence-wrapper">
          <div className="contact-process-rail-container">
            {/* The structural rail line */}
            <div className="process-rail-line"></div>

            <div className="contact-process-grid">
              
              {/* Step 1 */}
              <div className="process-step">
                <div className="process-marker-container">
                  <div className="process-marker"></div>
                </div>
                <div className="process-step-content" style={{ animationDelay: '300ms' }}>
                  <div className="process-step-number">01</div>
                  <h3 className="process-step-title">{t('step1Title')}</h3>
                  <p className="process-step-desc">{t('step1Desc')}</p>
                </div>
              </div>

              {/* Step 2 */}
              <div className="process-step">
                <div className="process-marker-container">
                  <div className="process-marker" style={{ animationDelay: '100ms' }}></div>
                </div>
                <div className="process-step-content" style={{ animationDelay: '400ms' }}>
                  <div className="process-step-number">02</div>
                  <h3 className="process-step-title">{t('step2Title')}</h3>
                  <p className="process-step-desc">{t('step2Desc')}</p>
                </div>
              </div>

              {/* Step 3 */}
              <div className="process-step">
                <div className="process-marker-container">
                  <div className="process-marker" style={{ animationDelay: '200ms' }}></div>
                </div>
                <div className="process-step-content" style={{ animationDelay: '500ms' }}>
                  <div className="process-step-number">03</div>
                  <h3 className="process-step-title">{t('step3Title')}</h3>
                  <p className="process-step-desc">{t('step3Desc')}</p>
                </div>
              </div>

            </div>
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
}
