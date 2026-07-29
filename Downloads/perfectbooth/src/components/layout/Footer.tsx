"use client";

import React from 'react';
import { useTranslations, useLocale } from 'next-intl';
import { Link } from '@/i18n/navigation';
import Logo from '@/components/ui/Logo';
import { 
  FaPhone, 
  FaEnvelope, 
  FaWhatsapp, 
  FaFacebookF, 
  FaLinkedinIn, 
  FaLocationDot,
  FaChevronLeft,
  FaChevronRight
} from 'react-icons/fa6';

export default function Footer() {
  const t = useTranslations('Footer');
  const tHeader = useTranslations('Header');
  const tServices = useTranslations('Services.cards');
  const locale = useLocale();
  const isRtl = locale === 'ar';
  const dir = isRtl ? 'rtl' : 'ltr';
  const currentYear = new Date().getFullYear();

  const ArrowIcon = isRtl ? FaChevronLeft : FaChevronRight;

  return (
    <footer className="pb-footer-redesign" dir={dir}>
      {/* Top Glow Accent */}
      <div className="footer-top-glow" aria-hidden="true"></div>
      <div className="footer-top-line" aria-hidden="true"></div>

      <div className="footer-main-container">
        <div className="footer-4col-grid">
          
          {/* Column 1: Company Info & Branding */}
          <div className="footer-col footer-col-brand">
            <div className="footer-logo-card">
              <Logo width={180} height={90} className="footer-brand-logo" />
            </div>
            <p className="footer-brand-desc">
              {isRtl 
                ? 'بيرفكت بوث شركة متكاملة متخصصة في تصميم وتنفيذ أجنحة المعارض، تنظيم الفعاليات، المؤتمرات، والحلول اللوجستية بأعلى معايير الجودة والإتقان في مصر والشرق الأوسط.'
                : 'Perfect Booth specializes in designing and building custom exhibition stands, event management, conferences, and integrated spatial solutions with global quality standards.'}
            </p>

            {/* Social Icons */}
            <div className="footer-social-wrapper">
              <span className="social-label">{isRtl ? 'تابعنا على:' : 'Follow Us:'}</span>
              <div className="footer-social-icons">
                <a 
                  href="https://www.facebook.com/profile.php?id=61555766881039&mibextid=wwXIfr" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="social-icon-btn"
                  aria-label="Facebook"
                >
                  <FaFacebookF />
                </a>
                <a 
                  href="https://www.linkedin.com/in/perfect-booth-46070240b/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="social-icon-btn"
                  aria-label="LinkedIn"
                >
                  <FaLinkedinIn />
                </a>
                <a 
                  href="https://wa.me/201116013011" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="social-icon-btn whatsapp-btn"
                  aria-label="WhatsApp"
                >
                  <FaWhatsapp />
                </a>
                <a 
                  href="mailto:info@perfectbooth-events.com" 
                  className="social-icon-btn"
                  aria-label="Email"
                >
                  <FaEnvelope />
                </a>
              </div>
            </div>
          </div>

          {/* Column 2: Quick Navigation Links */}
          <div className="footer-col footer-col-links">
            <h3 className="footer-col-title">
              <span className="title-line"></span>
              {t('quickLinksTitle')}
            </h3>
            <ul className="footer-nav-list">
              <li>
                <Link href="/" className="footer-nav-link">
                  <ArrowIcon className="nav-arrow-icon" />
                  <span>{tHeader('nav.home')}</span>
                </Link>
              </li>
              <li>
                <Link href="/#about" className="footer-nav-link">
                  <ArrowIcon className="nav-arrow-icon" />
                  <span>{tHeader('nav.about')}</span>
                </Link>
              </li>
              <li>
                <Link href="/services" className="footer-nav-link">
                  <ArrowIcon className="nav-arrow-icon" />
                  <span>{tHeader('nav.services')}</span>
                </Link>
              </li>
              <li>
                <Link href="/partners" className="footer-nav-link">
                  <ArrowIcon className="nav-arrow-icon" />
                  <span>{tHeader('nav.partners')}</span>
                </Link>
              </li>
              <li>
                <Link href="/projects" className="footer-nav-link">
                  <ArrowIcon className="nav-arrow-icon" />
                  <span>{tHeader('nav.projects')}</span>
                </Link>
              </li>
              <li>
                <Link href="/contact" className="footer-nav-link">
                  <ArrowIcon className="nav-arrow-icon" />
                  <span>{tHeader('nav.contact')}</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Services Offered */}
          <div className="footer-col footer-col-services">
            <h3 className="footer-col-title">
              <span className="title-line"></span>
              {isRtl ? 'خدماتنا الرئيسية' : 'Our Main Services'}
            </h3>
            <ul className="footer-nav-list">
              <li>
                <Link href="/services#booths" className="footer-nav-link">
                  <ArrowIcon className="nav-arrow-icon" />
                  <span>{tServices('booths')}</span>
                </Link>
              </li>
              <li>
                <Link href="/services#tents" className="footer-nav-link">
                  <ArrowIcon className="nav-arrow-icon" />
                  <span>{tServices('tents')}</span>
                </Link>
              </li>
              <li>
                <Link href="/services#audio" className="footer-nav-link">
                  <ArrowIcon className="nav-arrow-icon" />
                  <span>{tServices('audio')}</span>
                </Link>
              </li>
              <li>
                <Link href="/services#printing" className="footer-nav-link">
                  <ArrowIcon className="nav-arrow-icon" />
                  <span>{tServices('printing')}</span>
                </Link>
              </li>
              <li>
                <Link href="/contact#project-form" className="footer-nav-link">
                  <ArrowIcon className="nav-arrow-icon" />
                  <span>{isRtl ? 'تنظيم الفعاليات والمؤتمرات' : 'Event & Conference Planning'}</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Direct Contact Info */}
          <div className="footer-col footer-col-contact">
            <h3 className="footer-col-title">
              <span className="title-line"></span>
              {t('contactTitle')}
            </h3>
            <div className="footer-contact-items">
              <a href="tel:+201116013011" className="footer-contact-card">
                <div className="contact-icon-box">
                  <FaPhone />
                </div>
                <div className="contact-details">
                  <span className="contact-label">{isRtl ? 'اتصل بنا مباشرة' : 'Call Us Directly'}</span>
                  <span className="contact-value" dir="ltr">+20 111 601 3011</span>
                </div>
              </a>

              <a href="https://wa.me/201116013011" target="_blank" rel="noopener noreferrer" className="footer-contact-card">
                <div className="contact-icon-box whatsapp-box">
                  <FaWhatsapp />
                </div>
                <div className="contact-details">
                  <span className="contact-label">{isRtl ? 'مراسلة واتساب' : 'WhatsApp Support'}</span>
                  <span className="contact-value" dir="ltr">+20 111 601 3011</span>
                </div>
              </a>

              <a href="mailto:info@perfectbooth-events.com" className="footer-contact-card">
                <div className="contact-icon-box">
                  <FaEnvelope />
                </div>
                <div className="contact-details">
                  <span className="contact-label">{isRtl ? 'البريد الإلكتروني' : 'Email Address'}</span>
                  <span className="contact-value">info@perfectbooth-events.com</span>
                </div>
              </a>

              <div className="footer-contact-card static-card">
                <div className="contact-icon-box">
                  <FaLocationDot />
                </div>
                <div className="contact-details">
                  <span className="contact-label">{isRtl ? 'المقر الرئيسي' : 'Main Headquarters'}</span>
                  <span className="contact-value">{t('address')}</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Legal & Copyright Bar */}
      <div className="footer-bottom-bar">
        <div className="footer-bottom-container">
          <div className="footer-bottom-divider"></div>
          <div className="footer-bottom-content">
            <p className="copyright-text">
              {t('copyright', { year: currentYear })}
            </p>
            <p className="slogan-text">
              {isRtl 
                ? 'بيرفكت بوث — شريكك الموثوق لتنظيم الفعاليات وأجنحة المعارض في مصر' 
                : 'Perfect Booth — Your Trusted Partner for Exhibitions & Events'}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
