import React from 'react';
import { useTranslations, useLocale } from 'next-intl';
import { Link } from '@/i18n/navigation';

export default function Footer() {
  const t = useTranslations('Footer');
  const tHeader = useTranslations('Header');
  const locale = useLocale();
  const dir = locale === 'ar' ? 'rtl' : 'ltr';

  return (
    <footer className="pb-footer" dir={dir}>
      {/* Layer 1: CTA Area */}
      <section className="footer-cta">
        <div className="container">
          <h2>{t('ctaTitle')}</h2>
          <Link href="/contact" className="cta-btn">{t('ctaButton')}</Link>
        </div>
      </section>

      {/* Layer 2: Main Area */}
      <div className="footer-main">
        <div className="container footer-grid">
          {/* Brand Column */}
          <div className="footer-col brand-col">
            <div className="logo-container" style={{ marginBottom: '1.5rem', padding: 0, backgroundColor: 'transparent' }}>
              <div style={{ position: 'relative', width: '50px', height: '50px', marginRight: '15px' }}>
                <div style={{ width: '100%', height: '100%', border: '2px solid var(--pb-accent)', borderRadius: '50%', display: 'flex', justifyContent: 'center', alignItems: 'center', color: 'var(--pb-accent)', fontWeight: 'bold', fontSize: '10px' }}>
                  PB
                </div>
              </div>
              <div className="logo-text">
                <span className="logo-title" style={{ fontSize: '1.5rem' }}>{tHeader('title')}</span>
              </div>
            </div>
            <p className="footer-desc">
              {t('description')}
            </p>
            <div className="social-icons" style={{ marginTop: '1rem', justifyContent: 'flex-start' }}>
              <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-facebook-f"></i></a>
              <div className="divider" style={{ backgroundColor: 'var(--pb-divider)' }}></div>
              <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-x-twitter"></i></a>
              <div className="divider" style={{ backgroundColor: 'var(--pb-divider)' }}></div>
              <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-instagram"></i></a>
              <div className="divider" style={{ backgroundColor: 'var(--pb-divider)' }}></div>
              <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-linkedin-in"></i></a>
            </div>
          </div>

          {/* Links Column */}
          <div className="footer-col links-col">
            <h3>{t('navTitle')}</h3>
            <ul className="footer-links">
              <li><Link href="/"><i className="fa-solid fa-chevron-right" style={{ fontSize: '10px', margin: '0 8px', color: 'var(--pb-accent)' }}></i> {tHeader('nav.home')}</Link></li>
              <li><Link href="/#about"><i className="fa-solid fa-chevron-right" style={{ fontSize: '10px', margin: '0 8px', color: 'var(--pb-accent)' }}></i> {tHeader('nav.about')}</Link></li>
              <li><Link href="/#services"><i className="fa-solid fa-chevron-right" style={{ fontSize: '10px', margin: '0 8px', color: 'var(--pb-accent)' }}></i> {tHeader('nav.services')}</Link></li>
              <li><Link href="/#media"><i className="fa-solid fa-chevron-right" style={{ fontSize: '10px', margin: '0 8px', color: 'var(--pb-accent)' }}></i> {tHeader('nav.media')}</Link></li>
              <li><Link href="/contact"><i className="fa-solid fa-chevron-right" style={{ fontSize: '10px', margin: '0 8px', color: 'var(--pb-accent)' }}></i> {tHeader('nav.contact')}</Link></li>
            </ul>
          </div>

          {/* Contact Column */}
          <div className="footer-col contact-col">
            <h3>{t('contactTitle')}</h3>
            <div className="footer-contact-item">
              <i className="fa-solid fa-location-dot"></i>
              <p>{t('address')}</p>
            </div>
            <div className="footer-contact-item">
              <i className="fa-solid fa-phone"></i>
              <p dir="ltr" style={{ textAlign: locale === 'ar' ? 'right' : 'left' }}>{t('phone')}</p>
            </div>
            <div className="footer-contact-item">
              <i className="fa-solid fa-envelope"></i>
              <p>{t('email')}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Layer 3: Legal Bottom Bar */}
      <div className="footer-legal">
        <div className="legal-inner">
          <p>{t('copyright')}</p>
          <div className="legal-links">
            {/* Additional legal links if needed */}
          </div>
        </div>
      </div>
    </footer>
  );
}
