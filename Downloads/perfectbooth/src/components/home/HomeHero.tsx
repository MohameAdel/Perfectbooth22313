import { useTranslations, useLocale } from 'next-intl';
import Image from 'next/image';
import { Link } from '@/i18n/navigation';

export default function HomeHero() {
  const t = useTranslations('Hero');
  const locale = useLocale();
  const dir = locale === 'ar' ? 'rtl' : 'ltr';

  return (
    <section className="hero-split-section">
      <div className="hero-split-container">
        
        {/* Content Panel (Left/Start) */}
        <div className="hero-content-panel">
          <div className="hero-content-inner" dir={dir}>
            <div className="hero-eyebrow animate-slide-in">
              <span className="eyebrow-line"></span>
              {t('eyebrow')}
            </div>
            
            <h1 className="hero-title animate-slide-in" style={{ animationDelay: '0.1s' }}>
              {t('title')}
            </h1>
            
            <p className="hero-description animate-slide-in" style={{ animationDelay: '0.2s' }}>
              {t('description')}
            </p>
            
            <div className="hero-cta-wrapper animate-slide-in" style={{ animationDelay: '0.3s' }}>
              <Link href="#selected-projects" className="hero-cta-button">
                {t('cta')}
                <span className="cta-arrow" aria-hidden="true">{dir === 'rtl' ? '←' : '→'}</span>
              </Link>
            </div>
            
            {/* Slider Controls Inside Content Panel */}
            <div className="hero-slider-controls animate-slide-in" style={{ animationDelay: '0.4s' }}>
              <div className="slide-index">
                <span className="current-index">01</span>
                <span className="total-index">/ 03</span>
              </div>
              <div className="progress-line">
                <div className="progress-fill"></div>
              </div>
              <div className="nav-arrows-group">
                <button className="nav-arrow prev-arrow" aria-label="Previous slide">
                  {dir === 'rtl' ? '→' : '←'}
                </button>
                <button className="nav-arrow next-arrow" aria-label="Next slide">
                  {dir === 'rtl' ? '←' : '→'}
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Image Panel (Right/End) */}
        <div className="hero-image-panel">
          <div className="hero-image-wrapper animate-fade-in-image">
            <Image
              src="/assets/banner1.png"
              alt={t('title')}
              width={1920}
              height={1080}
              sizes="(max-width: 767px) 100vw, (max-width: 1199px) 55vw, 60vw"
              quality={95}
              style={{ width: '100%', height: 'auto', display: 'block' }}
              priority
              fetchPriority="high"
            />
          </div>
        </div>

      </div>
    </section>
  );
}
