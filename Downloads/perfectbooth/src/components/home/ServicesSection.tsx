import { useTranslations, useLocale } from 'next-intl';
import Image from 'next/image';

export default function ServicesSection() {
  const t = useTranslations('Services');
  const locale = useLocale();
  const dir = locale === 'ar' ? 'rtl' : 'ltr';

  const services = [
    { key: 'tents', image: 'https://admin.perfectbooth-events.com/storage/services/images/fVoSlHLlnIqOMCs6IWYAKHabGZ2fmhAu2gWtigdE.jpg' },
    { key: 'booths', image: 'https://admin.perfectbooth-events.com/storage/services/images/rSnPkmMGit7HfXkPcGTPZ8bVdYdFwJnOF2UkiQbt.jpg' },
    { key: 'printing', image: 'https://admin.perfectbooth-events.com/storage/services/images/x2ymges6TaOHCBS3BSquSoOlzw1UW146iD9hlTQ2.jpg' }
  ];

  return (
    <section className="services-section">
      <div className="services-header-container">
        <div className="services-header-center">
          <h4 className="services-subtitle">{t('subtitle')}</h4>
          <h2 className="services-title">{t('title')}</h2>
          <div className="wavy-line-center">
            <svg width="100" height="20" viewBox="0 0 100 20" xmlns="http://www.w3.org/2000/svg">
              <path d="M0,10 Q10,0 20,10 T40,10 T60,10 T80,10 T100,10" fill="none" stroke="var(--pb-primary)" strokeWidth="2"/>
            </svg>
          </div>
        </div>
      </div>

      <div className="services-grid">
        {services.map((service, index) => (
          <div key={index} className="service-card" style={{ position: 'relative', overflow: 'hidden' }}>
            <div className="service-box-alt">
              <figure className="sb-thumbnail">
                <Image
                  src={service.image}
                  alt={t(`cards.${service.key}`)}
                  fill
                  sizes="(max-width: 768px) 100vw, 25vw"
                  className="sb-img"
                />
                <div className="sb-caption">
                  <figure className="sbt-icon">
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="var(--pb-accent)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      {/* Generic structure icon */}
                      <polygon points="12 2 2 7 12 12 22 7 12 2"></polygon>
                      <polyline points="2 17 12 22 22 17"></polyline>
                      <polyline points="2 12 12 17 22 12"></polyline>
                    </svg>
                  </figure>
                  <h3>{t(`cards.${service.key}`)}</h3>
                </div>
              </figure>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
