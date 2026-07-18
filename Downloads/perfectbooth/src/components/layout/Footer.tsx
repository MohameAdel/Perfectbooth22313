import React from 'react';
import { useTranslations, useLocale } from 'next-intl';
import { Link } from '@/i18n/navigation';
import Logo from '@/components/ui/Logo';

export default function Footer() {
  const t = useTranslations('Footer');
  const tHeader = useTranslations('Header');
  const locale = useLocale();
  const dir = locale === 'ar' ? 'rtl' : 'ltr';
  const currentYear = new Date().getFullYear();

  return (
    <footer className="pb-footer-premium" dir={dir}>
      <div className="premium-grid">
        
        {/* Company Column */}
        <div className="footer-col company-col">
          <h4 className="footer-heading">{t('companyInfoTitle')}</h4>
          <div className="footer-divider"></div>
          
          <div className="company-info-content">
            <div className="footer-logo-wrapper">
              {/* Intentional larger logo presentation for the footer */}
              <Logo width={190} height={104} className="footer-logo" />
            </div>
            <address className="company-desc">
              <p className="desc-text">{t('description')}</p>
              <p className="location-text">{t('address')}</p>
            </address>
          </div>
        </div>

        {/* Navigation & Contact Column */}
        <div className="footer-col links-contact-col">
          <div className="footer-links-group">
            <h4 className="footer-heading">{t('quickLinksTitle')}</h4>
            <div className="footer-divider"></div>
            <ul className="contact-links-list">
              <li>
                <Link href="/" className="footer-link">
                  {tHeader('nav.home')}
                </Link>
              </li>
              <li>
                <Link href="/#about" className="footer-link">
                  {tHeader('nav.about')}
                </Link>
              </li>
              <li>
                <Link href="/services" className="footer-link">
                  {tHeader('nav.services')}
                </Link>
              </li>
              <li>
                <Link href="/partners" className="footer-link">
                  {tHeader('nav.partners')}
                </Link>
              </li>
            </ul>
          </div>

          <div className="footer-links-group">
            <h4 className="footer-heading">{t('contactTitle')}</h4>
            <div className="footer-divider"></div>
            <ul className="contact-links-list">
              <li>
                <Link href="/contact" className="footer-link">
                  {tHeader('nav.contact')}
                </Link>
              </li>
              <li>
                <a href="tel:+201116013011" className="footer-link">
                  <i className="fa-solid fa-phone" style={{ marginInlineEnd: '8px' }}></i> +20 111 601 3011
                </a>
              </li>
              <li>
                <a href="mailto:info@perfectbooth-events.com" className="footer-link">
                  <i className="fa-solid fa-envelope" style={{ marginInlineEnd: '8px' }}></i> info@perfectbooth-events.com
                </a>
              </li>
            </ul>
            {/* TODO: Add verified phone number (tel:) when available */}
            {/* TODO: Add verified email address (mailto:) when available */}
            {/* TODO: Add verified social media links when available */}
          </div>
        </div>

      </div>

      <div className="footer-bottom-row">
        <div className="footer-bottom-divider"></div>
        <div className="footer-legal">
          <p>{t('copyright', { year: currentYear })}</p>
        </div>
      </div>
    </footer>
  );
}
