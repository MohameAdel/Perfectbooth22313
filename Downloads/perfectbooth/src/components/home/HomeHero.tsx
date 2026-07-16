import { useTranslations, useLocale } from 'next-intl';
import Image from 'next/image';
import { Link } from '@/i18n/navigation';
import Hero3DScene from './Hero3DScene';

export default function HomeHero() {
  const t = useTranslations('Hero');
  const locale = useLocale();
  const dir = locale === 'ar' ? 'rtl' : 'ltr';

  return (
    <section className="hero">
      <Hero3DScene>
        {/* Background Layer */}
        <div className="hero-3d-layer hero-bg-layer" data-depth="-0.05">
          <Image
            src="/assets/banner1.png"
            alt={t('title')}
            fill
            sizes="100vw"
            style={{ objectFit: 'cover', objectPosition: 'center' }}
            priority
          />
          {/* Subtle gradient overlay to guarantee text contrast without hiding image */}
          <div className="hero-overlay"></div>
        </div>

        {/* Content Layer */}
        <div className="hero-3d-layer hero-content-layer" data-depth="0.1">
          <div className="hero-content-wrapper" dir={dir}>
            <div className="hero-text-block">
              <h1 className="hero-title animate-in-1">
                <span className="hero-title-shadow" aria-hidden="true">{t('title')}</span>
                {t('title')}
              </h1>
              <p className="hero-description animate-in-2">
                {t('description')}
              </p>
              
              <div className="hero-cta-wrapper animate-in-3">
                <Link href="#selected-projects" className="hero-cta-button">
                  {t('cta')}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Hero3DScene>

      {/* Navigation Arrows (Preserved as requested) */}
      <div className="nav-arrows" style={{ zIndex: 100 }}>
        <div className="arrow">{dir === 'rtl' ? '→' : '←'}</div>
        <div className="arrow">{dir === 'rtl' ? '←' : '→'}</div>
      </div>
    </section>
  );
}
