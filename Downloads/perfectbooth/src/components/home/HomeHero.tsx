import { useTranslations, useLocale } from 'next-intl';
import Image from 'next/image';

export default function HomeHero() {
  const t = useTranslations('Hero');
  const locale = useLocale();
  const dir = locale === 'ar' ? 'rtl' : 'ltr';

  return (
    <section className="hero">
      {/* Background Image with next/image */}
      <div className="hero-bg" style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
        <Image
          src="https://www.ouneg.com/images/11.jpg" // Using placeholder image for now
          alt={t('title')}
          fill
          sizes="100vw"
          style={{ objectFit: 'cover' }}
          priority // Hero image is above the fold
        />
        {/* Overlay for readability */}
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(90deg, rgba(0, 0, 0, 0.82) 0%, rgba(0, 0, 0, 0.48) 50%, rgba(0, 0, 0, 0.22) 100%)', zIndex: 10 }}></div>
      </div>

      <div className="hero-content">
        <h1 style={{ color: 'var(--pb-text)', fontSize: '4rem', fontWeight: 'bold', lineHeight: '1.1', textShadow: '2px 2px 4px rgba(0,0,0,0.5)' }}>
          {t('title')}
        </h1>
        <div className="hero-subtitle">
          {t('subtitle')}
        </div>
        
        {/* Removed Fake Statistics, marked as TODO */}
        {/* TODO: Add animated statistics once approved values are provided by Perfect Booth */}
        
      </div>

      {/* Navigation Arrows */}
      <div className="nav-arrows">
        <div className="arrow">{dir === 'rtl' ? '→' : '←'}</div>
        <div className="arrow">{dir === 'rtl' ? '←' : '→'}</div>
      </div>
    </section>
  );
}
