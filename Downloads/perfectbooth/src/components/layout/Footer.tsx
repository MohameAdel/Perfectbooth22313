import React from 'react';
import { useTranslations, useLocale } from 'next-intl';
import { Link } from '@/i18n/navigation';

export default function Footer() {
  const t = useTranslations('Footer');
  const tHeader = useTranslations('Header');
  const locale = useLocale();
  const dir = locale === 'ar' ? 'rtl' : 'ltr';

  return (
    <footer className="pb-footer-premium" dir={dir}>
      {/* Info Grid */}
      <div className="premium-grid">
        <div className="grid-brand">
          <span className="brand-logotype">{tHeader('title')}</span>
          <p className="brand-desc">{t('description')}</p>
        </div>
        
        <div className="grid-links">
          <h4>{t('navTitle')}</h4>
          <nav>
            <Link href="/">{tHeader('nav.home')}</Link>
            <Link href="/#about">{tHeader('nav.about')}</Link>
            <Link href="/#services">{tHeader('nav.services')}</Link>
            <Link href="/#media">{tHeader('nav.media')}</Link>
            <Link href="/contact">{tHeader('nav.contact')}</Link>
          </nav>
        </div>

        <div className="grid-contact">
          <h4>{t('contactTitle')}</h4>
          <p>{t('address')}</p>
          <p dir="ltr" className="ltr-text" style={{ textAlign: dir === 'rtl' ? 'right' : 'left', display: 'block' }}>{t('phone')}</p>
          <p>{t('email')}</p>
          
          <div className="premium-socials">
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">Fb</a>
            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">X</a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">Ig</a>
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">In</a>
          </div>
        </div>
      </div>

      {/* Massive Brand Name at Bottom */}
      <div className="massive-footer-text">
        PERFECT BOOTH
      </div>

      <div className="premium-legal">
        <p>{t('copyright')}</p>
        <p>Design by Perfect Booth</p>
      </div>
    </footer>
  );
}
