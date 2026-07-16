import { useTranslations, useLocale } from 'next-intl';
import Image from 'next/image';
import { Link } from '@/i18n/navigation';

export default function HomeHero() {
  const t = useTranslations('Hero');
  const locale = useLocale();
  const dir = locale === 'ar' ? 'rtl' : 'ltr';

  return (
    <section className="pb-hero-1-section">
      <div className="pb-hero-1-container">
        
        {/* Content Panel (Left/Start) */}
        <div className="pb-hero-1-content">
          <div className="pb-hero-1-inner" dir={dir}>
            <div className="pb-hero-1-eyebrow animate-slide-in-fix">
              <span className="pb-hero-1-line"></span>
              {t('eyebrow')}
            </div>
            
            <h1 className="pb-hero-1-title animate-slide-in-fix" style={{ animationDelay: '0.1s' }}>
              {t('title')}
            </h1>
            
            <p className="pb-hero-1-desc animate-slide-in-fix" style={{ animationDelay: '0.2s' }}>
              {t('description')}
            </p>
            
            <div className="pb-hero-1-cta animate-slide-in-fix" style={{ animationDelay: '0.3s' }}>
              <Link href="#selected-projects" className="pb-hero-1-btn">
                {t('cta')}
                <span aria-hidden="true" style={{ marginInlineStart: '12px' }}>{dir === 'rtl' ? '←' : '→'}</span>
              </Link>
            </div>
            
            {/* Slider Controls Inside Content Panel */}
            <div className="pb-hero-1-controls animate-slide-in-fix" style={{ animationDelay: '0.4s' }}>
              <div className="pb-hero-1-arrows">
                <button aria-label="Previous slide">
                  {dir === 'rtl' ? '→' : '←'}
                </button>
                <button aria-label="Next slide">
                  {dir === 'rtl' ? '←' : '→'}
                </button>
              </div>
              <div className="pb-hero-1-progress">
                <div className="pb-hero-1-fill"></div>
              </div>
              <div className="pb-hero-1-index">
                <span>01</span>
                <span className="pb-hero-1-total">/ 03</span>
              </div>
            </div>
          </div>
        </div>

        {/* Image Panel (Right/End) */}
        <div className="pb-hero-1-image animate-fade-in-fix" style={{ position: 'relative', width: '100%', minHeight: '300px' }}>
          <Image
            src="/assets/banner2.png"
            alt={t('title')}
            fill
            sizes="(max-width: 767px) 100vw, (max-width: 1024px) 56vw, 60vw"
            quality={95}
            priority
            style={{ 
              objectFit: 'cover'
            }}
          />
        </div>

      </div>
    </section>
  );
}
