import { useTranslations, useLocale } from 'next-intl';
import { Link } from '@/i18n/navigation';
import Image from 'next/image';
import PromotionalVideoPlayer from './PromotionalVideoPlayer';

export default function AboutSection() {
  const t = useTranslations('About');
  const locale = useLocale();
  const dir = locale === 'ar' ? 'rtl' : 'ltr';

  return (
    <section id="about" className="about-section">
      <div className="about-container">
        {/* Text Content */}
        <div className="about-text">
          <h4 className="about-subtitle">{t('subtitle')}</h4>
          <h2 className="about-title">{t('title')}</h2>
          <div className="wavy-line">
            <svg width="100" height="20" viewBox="0 0 100 20" xmlns="http://www.w3.org/2000/svg">
              <path d="M0,10 Q10,0 20,10 T40,10 T60,10 T80,10 T100,10" fill="none" stroke="var(--pb-primary-light)" strokeWidth="2"/>
            </svg>
          </div>
          <p className="about-description">
            {t('description1')}
          </p>
          <p className="about-description">
            {t('description2')}
          </p>
          <Link href="/about" className="read-more-btn">
            {t('readMore')} <span style={{ marginInlineStart: '10px' }}>{dir === 'rtl' ? '←' : '→'}</span>
          </Link>
        </div>

        {/* Media Content */}
        <div className="about-media-wrapper">
          <div className="about-media-3d-scene">
            {/* Offset Yellow Frame */}
            <div className="about-media-offset-frame" aria-hidden="true"></div>
            
            <div className="about-media-card">
              <Image 
                src="/assets/section2.jpeg" 
                alt={t('title') || "About Perfect Booth"} 
                fill 
                style={{ objectFit: 'cover' }}
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              {/* Dark gradient overlay */}
              <div className="about-media-overlay" aria-hidden="true"></div>
              
              {/* Thin inner border & corners */}
              <div className="about-media-inner-border" aria-hidden="true">
                <div className="corner corner-tl"></div>
                <div className="corner corner-tr"></div>
                <div className="corner corner-bl"></div>
                <div className="corner corner-br"></div>
              </div>

              <PromotionalVideoPlayer 
                videoSrc="https://vqknbbjrosel3hr8.public.blob.vercel-storage.com/videos/vid2.mp4"
                playLabel={locale === 'ar' ? 'تشغيل الفيديو التعريفي' : 'Play promotional video'}
              />

              <div className="about-media-caption">
                {locale === 'ar' ? 'تنفيذ دقيق وفعاليات متكاملة' : 'Precision Delivery & Integrated Events'}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
