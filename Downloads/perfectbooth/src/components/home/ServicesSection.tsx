import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import Image from 'next/image';

export default function ServicesSection() {
  const t = useTranslations('Services');
  const tServices = useTranslations('ServicesPage.services');

  const services = [
    {
      key: 's01',
      image: 'https://admin.perfectbooth-events.com/storage/home-banner-slides/co1X3sNRqpx9Kdnicliy0dmKe5puz1phE7CYyV8l.jpg',
      objectPosition: 'center 25%'
    },
    {
      key: 's02',
      image: 'https://admin.perfectbooth-events.com/storage/home-banner-slides/IatwT74DySD8ZSpWbgvabYzkYO9qffWWvK1kYzXL.jpg',
      objectPosition: 'center center'
    },
    {
      key: 's03',
      image: 'https://admin.perfectbooth-events.com/storage/services/images/fVoSlHLlnIqOMCs6IWYAKHabGZ2fmhAu2gWtigdE.jpg',
      objectPosition: 'center 35%'
    },
    {
      key: 's04',
      image: 'https://admin.perfectbooth-events.com/storage/services/images/x2ymges6TaOHCBS3BSquSoOlzw1UW146iD9hlTQ2.jpg',
      objectPosition: 'center center'
    }
  ];

  return (
    <section className="home-services-section">
      <div className="services-header-container" style={{ maxWidth: '1200px', margin: '0 auto 4rem auto', textAlign: 'center' }}>
        <h4 className="services-subtitle" style={{ color: 'var(--pb-accent)', fontSize: '1rem', marginBottom: '0.5rem', fontWeight: 600, letterSpacing: '2px', textTransform: 'uppercase' }}>{t('subtitle')}</h4>
        <h2 className="services-title" style={{ fontSize: '2.5rem', fontWeight: 700, marginBottom: '1rem', color: 'var(--pb-text)' }}>{t('title')}</h2>
        <div className="wavy-line-center" style={{ display: 'flex', justifyContent: 'center' }}>
          <svg width="100" height="20" viewBox="0 0 100 20" xmlns="http://www.w3.org/2000/svg">
            <path d="M0,10 Q10,0 20,10 T40,10 T60,10 T80,10 T100,10" fill="none" stroke="var(--pb-accent)" strokeWidth="2"/>
          </svg>
        </div>
      </div>

      <div className="home-services-grid">
        {services.map((item, index) => {
          const rawTitle = tServices(`${item.key}.title`);
          const cleanTitle = rawTitle.split('(')[0].trim();

          return (
            <Link href="/services" key={index} className="home-service-card">
              <Image 
                src={item.image}
                alt={tServices(`${item.key}.homeAlt`)}
                fill
                style={{ objectFit: 'cover', objectPosition: item.objectPosition, transition: 'transform 0.6s ease' }}
                className="service-card-img"
                sizes="(max-width: 768px) 100vw, (max-width: 1279px) 50vw, 25vw"
              />

              <div className="home-service-card-overlay">
                <div className="service-icon-wrapper" style={{
                  width: '44px',
                  height: '44px',
                  borderRadius: '50%',
                  backgroundColor: 'rgba(0, 0, 0, 0.3)',
                  backdropFilter: 'blur(4px)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '1.25rem',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  transition: 'transform 0.4s ease, border-color 0.4s ease',
                }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--pb-accent)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <polygon points="12 2 2 7 12 12 22 7 12 2"></polygon>
                    <polyline points="2 12 12 17 22 12"></polyline>
                    <polyline points="2 17 12 22 22 17"></polyline>
                  </svg>
                </div>

                <h3 className="home-service-card-title">
                  {cleanTitle}
                </h3>
              </div>
            </Link>
          );
        })}
      </div>

      <div style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
        <Link href="/services" className="read-more-btn">
          <span>{t('readMore')}</span>
          <svg className="read-more-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="5" y1="12" x2="19" y2="12"></line>
            <polyline points="12 5 19 12 12 19"></polyline>
          </svg>
        </Link>
      </div>
    </section>
  );
}
