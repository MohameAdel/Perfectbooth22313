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
            <div className="hero-eyebrow animate-slide-left" style={{ animationDelay: '0.1s' }}>
              <span className="eyebrow-line"></span>
              {t('eyebrow')}
            </div>
            
            <h1 className="hero-title animate-slide-left" style={{ animationDelay: '0.2s' }}>
              {t('title')}
            </h1>
            
            <p className="hero-description animate-slide-left" style={{ animationDelay: '0.3s' }}>
              {t('description')}
            </p>
            
            <div className="hero-cta-wrapper animate-slide-left" style={{ animationDelay: '0.4s' }}>
              <Link href="#selected-projects" className="hero-cta-button">
                {t('cta')}
                <span className="cta-arrow" aria-hidden="true">{dir === 'rtl' ? '←' : '→'}</span>
              </Link>
            </div>
          </div>
          
          {/* Slider Controls Inside Content Panel */}
          <div className="hero-slider-controls animate-fade-in" style={{ animationDelay: '0.6s' }}>
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
          
          {/* Subtle oversized background number */}
          <div className="hero-bg-number" aria-hidden="true">01</div>
        </div>

        {/* Image Panel (Right/End) */}
        <div className="hero-image-panel">
          <div className="hero-image-wrapper animate-slide-right">
            <Image
              src="/assets/banner1.png"
              alt={t('title')}
              fill
              sizes="(max-width: 768px) 100vw, 60vw"
              style={{ objectFit: 'cover', objectPosition: 'center' }}
              priority
            />
            {/* Very light edge gradient to blend with content panel if needed */}
            <div className="hero-image-edge-gradient"></div>
          </div>
        </div>

      </div>
    </section>
  );
}
