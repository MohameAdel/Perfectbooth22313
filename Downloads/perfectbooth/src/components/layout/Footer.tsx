import React from 'react';
import { useTranslations, useLocale } from 'next-intl';
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
              <Logo />
            </div>
            <p className="company-name">{tHeader('title')}</p>
            <address className="company-desc">
              <p>{t('description')}</p>
              <p>{t('address')}</p>
            </address>
          </div>
        </div>

        {/* Contact Column */}
        <div className="footer-col contact-col">
          <h4 className="footer-heading">{t('contactTitle')}</h4>
          <div className="footer-divider"></div>
          
          <address className="contact-info-content">
            {/* TODO: Add verified phone number here when available */}
            {/* TODO: Add verified email address here when available */}
            {/* TODO: Add verified social media links here when available */}
            <p className="unverified-note" aria-hidden="true" style={{ display: 'none' }}>
              No verified contact information available yet.
            </p>
          </address>
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
