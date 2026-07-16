import { useTranslations, useLocale } from 'next-intl';
import Image from 'next/image';

export default function ServicesSection() {
  const t = useTranslations('Services');
  const locale = useLocale();
  const dir = locale === 'ar' ? 'rtl' : 'ltr';

  const services = [
    { key: 'tents', image: 'https://www.ouneg.com/images/imgl0889.jpg' },
    { key: 'booths', image: 'https://www.ouneg.com/images/barcode.jpg' },
    { key: 'printing', image: 'https://www.ouneg.com/images/ghad.jpg' },
    { key: 'audio', image: 'https://www.ouneg.com/images/print.jpg' }
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
        <div className="services-arrows">
          <div className="diamond-btn">{dir === 'rtl' ? '→' : '←'}</div>
          <div className="diamond-btn">{dir === 'rtl' ? '←' : '→'}</div>
        </div>
      </div>

      <div className="services-grid">
        {services.map((service, index) => (
          <div key={index} className="service-card" style={{ position: 'relative', overflow: 'hidden' }}>
            {/* Background Image with next/image */}
            <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
              <Image
                src={service.image} // TODO: Replace with local Perfect Booth images
                alt={t(`cards.${service.key}`)}
                fill
                sizes="(max-width: 768px) 100vw, 25vw"
                style={{ objectFit: 'cover' }}
              />
              <div style={{ position: 'absolute', inset: 0, backgroundColor: 'rgba(0,0,0,0.3)' }}></div>
            </div>
            <div className="service-title" style={{ position: 'relative', zIndex: 10 }}>{t(`cards.${service.key}`)}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
