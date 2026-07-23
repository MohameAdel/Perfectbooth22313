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
        <div className="about-text" style={{ textAlign: dir === 'rtl' ? 'right' : 'left' }}>
          <h4 className="about-subtitle" style={{ color: '#C4972D', letterSpacing: '1px', textTransform: 'uppercase', marginBottom: '0.5rem' }}>{t('subtitle')}</h4>
          <h2 className="about-title" style={{ marginBottom: '0.5rem' }}>{t('title')}</h2>
          <div className="wavy-line" style={{ marginBottom: '2rem' }}>
            <svg width="60" height="12" viewBox="0 0 60 12" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 6C3.96 6 6.04 1 10 1C13.96 1 16.04 11 20 11C23.96 11 26.04 1 30 1C33.96 1 36.04 11 40 11C43.96 11 46.04 1 50 1C53.96 1 56.04 6 60 6" stroke="#C4972D" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
          </div>
          <p className="about-description">
            {t('description1')}
          </p>
          <p className="about-description">
            {t('description2')}
          </p>
          <p className="about-description">
            {t('description3')}
          </p>
          <p className="about-description">
            {t('description4')}
          </p>
          <p className="about-description" style={{ fontWeight: '600', color: '#fff', marginTop: '1rem' }}>
            {t('description5')}
          </p>
          <div style={{ marginTop: '2.5rem' }}>
            <Link href="/about" className="pb-btn-premium">
              <span>{t('readMore')}</span>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="btn-arrow" dir={dir}>
                <path d={dir === 'rtl' ? "M19 12H5M12 19l-7-7 7-7" : "M5 12h14M12 5l7 7-7 7"} stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>
          </div>
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
