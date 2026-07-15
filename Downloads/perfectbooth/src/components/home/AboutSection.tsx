import { useTranslations, useLocale } from 'next-intl';

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
              <path d="M0,10 Q10,0 20,10 T40,10 T60,10 T80,10 T100,10" fill="none" stroke="var(--primary-gold)" strokeWidth="2"/>
            </svg>
          </div>
          <p className="about-description">
            {t('description1')}
          </p>
          <p className="about-description">
            {t('description2')}
          </p>
          <a href="#" className="read-more-btn">
            {t('readMore')} <span style={{ marginInlineStart: '10px' }}>{dir === 'rtl' ? '←' : '→'}</span>
          </a>
        </div>

        {/* Media Content */}
        <div className="about-media">
          <div className="media-frame">
            <div className="media-content">
              <div className="iso-badge">
                <div className="iso-text">ISO 9001<br/>CERTIFIED</div>
              </div>
              <div className="corner corner-tr"></div>
              <div className="corner corner-bl"></div>
              
              <div className="media-logo-area">
                <div style={{ width: '150px', height: '150px', border: '2px solid var(--primary-gold)', borderRadius: '50%', display: 'flex', justifyContent: 'center', alignItems: 'center', color: 'var(--primary-gold)', fontWeight: 'bold', fontSize: '2rem', marginBottom: '1rem' }}>
                  PB
                </div>
                <h3 className="media-company-name">Perfect Booth</h3>
                <p className="media-company-desc">Event Production & Exhibition Booths</p>
              </div>
              
              <div className="play-button">▶</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
