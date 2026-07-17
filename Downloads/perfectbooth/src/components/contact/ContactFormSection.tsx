import { useTranslations, useLocale } from 'next-intl';
import ContactForm from './ContactForm';
import ScrollReveal from '@/components/ui/ScrollReveal';

export default function ContactFormSection() {
  const t = useTranslations('ContactPage.info');
  const locale = useLocale();
  const dir = locale === 'ar' ? 'rtl' : 'ltr';

  return (
    <section id="project-form" className="contact-section" dir={dir}>
      <div className="contact-container">
        <div className="contact-columns-grid">
          
          {/* Column 1 (DOM): Contact Info. Will be placed in Grid Column 2 on desktop */}
          <div className="contact-info-column">
            <div className="contact-info-sticky">
              
              <ScrollReveal delay={0}>
                <div className="contact-info-eyebrow">
                  <span className="contact-info-eyebrow-line"></span>
                  {t('eyebrow')}
                </div>
                <h2 className="contact-info-title">{t('title')}</h2>
                <p className="contact-info-desc">{t('desc')}</p>
              </ScrollReveal>

              <div className="contact-rows-list">
                <ScrollReveal delay={100}>
                  {/* Email Row */}
                  <a href={`mailto:${t('emailValue')}`} className="contact-info-row">
                    <div className="contact-row-icon">
                      <i className="fa-regular fa-envelope"></i>
                    </div>
                    <div className="contact-row-content">
                      <h3 className="contact-row-label">{t('emailLabel')}</h3>
                      <p className="contact-row-value">{t('emailValue')}</p>
                    </div>
                  </a>
                </ScrollReveal>

                <ScrollReveal delay={150}>
                  {/* Phone Row */}
                  <a href={`tel:${t('phoneValue').replace(/\s+/g, '')}`} className="contact-info-row">
                    <div className="contact-row-icon">
                      <i className="fa-solid fa-phone"></i>
                    </div>
                    <div className="contact-row-content">
                      <h3 className="contact-row-label">{t('phoneLabel')}</h3>
                      <p className="contact-row-value">{t('phoneValue')}</p>
                    </div>
                  </a>
                </ScrollReveal>

                <ScrollReveal delay={200}>
                  {/* WhatsApp Row */}
                  <a 
                    href={`https://wa.me/201116013011`} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="contact-info-row"
                  >
                    <div className="contact-row-icon">
                      <i className="fa-brands fa-whatsapp"></i>
                    </div>
                    <div className="contact-row-content">
                      <h3 className="contact-row-label">{t('whatsappLabel')}</h3>
                      <p className="contact-row-value">{t('whatsappValue')}</p>
                    </div>
                  </a>
                </ScrollReveal>

                <ScrollReveal delay={250}>
                  {/* Location Row */}
                  <div className="contact-info-row">
                    <div className="contact-row-icon">
                      <i className="fa-solid fa-location-dot"></i>
                    </div>
                    <div className="contact-row-content">
                      <h3 className="contact-row-label">{t('locationLabel')}</h3>
                      <p className="contact-row-value">{t('locationValue')}</p>
                    </div>
                  </div>
                </ScrollReveal>
              </div>
            </div>
          </div>

          {/* Column 2 (DOM): Contact Form. Will be placed in Grid Column 1 on desktop */}
          <div className="contact-form-column">
            <ScrollReveal delay={200}>
              <ContactForm />
            </ScrollReveal>
          </div>

        </div>
      </div>
    </section>
  );
}
