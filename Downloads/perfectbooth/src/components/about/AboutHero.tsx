import { useTranslations, useLocale } from 'next-intl';
import Image from 'next/image';
import { Link } from '@/i18n/navigation';
import Hover3DWrapper from '@/components/ui/Hover3DWrapper';

export default function AboutHero() {
  const t = useTranslations('AboutPage.hero');
  const locale = useLocale();
  const isRtl = locale === 'ar';

  return (
    <section className="about-page-hero" style={{ position: 'relative' }}>
      
      {/* Background ambient light */}
      <div className="hero-ambient-light" aria-hidden="true"></div>
      <div className="hero-ambient-plane" aria-hidden="true"></div>

      <div className="about-hero-container">
        
        {/* Text Content */}
        <div className="about-hero-content">
          <div className="about-hero-eyebrow animate-slide-in-fix">
            <span className="about-eyebrow-line"></span>
            {t('eyebrow')}
          </div>
          
          <h1 className="about-hero-title animate-slide-in-fix" style={{ animationDelay: '0.1s' }}>
            {t.rich('title', {
              highlight: (chunks) => <span style={{ color: 'var(--pb-accent)' }}>{chunks}</span>
            })}
          </h1>
          
          <p className="about-hero-intro animate-slide-in-fix" style={{ animationDelay: '0.2s' }}>
            {t('intro')}
          </p>

          <p className="about-hero-support animate-slide-in-fix" style={{ animationDelay: '0.3s' }}>
            {t('support')}
          </p>
          
          <div className="about-hero-actions animate-slide-in-fix" style={{ animationDelay: '0.4s' }}>
            <Link href="/#contact" className="about-hero-btn-primary">
              {t('cta')}
            </Link>
            <a href="#approach" className="about-hero-btn-secondary">
              {t('secondaryLink')}
            </a>
          </div>
        </div>

        {/* Image Content */}
        <div className="about-hero-image-wrapper animate-fade-in-fix" style={{ animationDelay: '0.2s' }}>
          <Hover3DWrapper maxRotation={3}>
            <div className="hero-3d-frame">
              <div className="hero-3d-frame-image-layer">
                <Image
                  src="/assets/banner2.png"
                  alt={isRtl ? 'جناح معرض معماري مخصص من تنفيذ Perfect Booth' : 'Custom architectural exhibition booth by Perfect Booth'}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  quality={90}
                  priority
                  style={{
                    objectFit: 'cover',
                    objectPosition: 'center'
                  }}
                />
              </div>
            </div>
          </Hover3DWrapper>
        </div>
        
      </div>
    </section>
  );
}
