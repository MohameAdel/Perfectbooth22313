'use client';

import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { Link, usePathname } from '@/i18n/navigation';
import { useTranslations, useLocale } from 'next-intl';
import LanguageSwitcher from './LanguageSwitcher';
import MobileMenuContactItem from './MobileMenuContactItem';
import Logo from '@/components/ui/Logo';
import { FaXmark, FaLocationDot, FaPhone, FaRegEnvelope, FaFacebookF, FaLinkedinIn, FaWhatsapp } from 'react-icons/fa6';

export default function MobileNavigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();
  const locale = useLocale();
  const dir = locale === 'ar' ? 'rtl' : 'ltr';
  
  const navT = useTranslations('Header.nav');
  const aboutT = useTranslations('About');
  const menuT = useTranslations('MobileMenu');

  // Set mounted on client
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
  }, []);

  // Body scroll lock
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const navLinks = [
    { key: 'home', href: '/' },
    { key: 'about', href: '/about' },
    { key: 'services', href: '/services' },
    { key: 'partners', href: '/partners' },
    { key: 'projects', href: '/projects' },
    { key: 'contact', href: '/contact' },
  ];

  return (
    <>
      <div 
        className="hamburger-menu" 
        onClick={() => setIsOpen(true)}
        style={{ flexDirection: 'column', gap: '6px', cursor: 'pointer' }}
        role="button"
        tabIndex={0}
        aria-label="Open menu"
      >
        <div style={{ width: '30px', height: '2px', backgroundColor: 'var(--pb-text)' }}></div>
        <div style={{ width: '30px', height: '2px', backgroundColor: 'var(--pb-text)' }}></div>
        <div style={{ width: '30px', height: '2px', backgroundColor: 'var(--pb-text)' }}></div>
      </div>
      
      {/* Overlay rendered in a Portal so it escapes the Header backdrop-filter constraints */}
      {mounted && createPortal(
        <div 
          className={`mobile-drawer-overlay ${isOpen ? 'open' : ''}`} 
          onClick={() => setIsOpen(false)}
          aria-hidden="true"
        >
          <div 
            className="mobile-drawer" 
            onClick={(e) => e.stopPropagation()}
            dir={dir}
          >
            {/* Header */}
            <div className="drawer-header">
              <div onClick={() => setIsOpen(false)} style={{ cursor: 'pointer' }}>
                <Logo width={120} height={50} className="drawer-logo" />
              </div>
              
              <button 
                className="drawer-close-btn"
                onClick={() => setIsOpen(false)}
                aria-label={menuT('close')}
              >
                <FaXmark />
              </button>
            </div>

            <div className="drawer-content">
              {/* Intro */}
              <div className="drawer-intro">
                {aboutT('description1')}
              </div>

              {/* Language Switcher */}
              <div style={{ marginBottom: '2rem' }}>
                <LanguageSwitcher />
              </div>

              {/* Navigation */}
              <nav className="drawer-nav">
                {navLinks.map((link) => {
                  // Check if link is active
                  const isActive = pathname === link.href;
                  return (
                    <Link 
                      key={link.key} 
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className={`drawer-nav-link ${isActive ? 'active' : ''}`}
                    >
                      {navT(link.key)}
                    </Link>
                  );
                })}
              </nav>

              {/* Contact Info */}
              <div>
                <div className="drawer-section-title">{menuT('contactInfo')}</div>
                <div className="drawer-contact-list">
                  <MobileMenuContactItem 
                    icon={<FaLocationDot />} 
                    text={menuT('addressPlaceholder')} 
                  />
                  <MobileMenuContactItem 
                    icon={<FaPhone />} 
                    text={menuT('phonePlaceholder')} 
                    href="tel:+201116013011" 
                  />
                  <MobileMenuContactItem 
                    icon={<FaRegEnvelope />} 
                    text={menuT('emailPlaceholder')} 
                    href="mailto:info@perfectbooth-events.com" 
                  />
                </div>
              </div>
            </div>

            <div className="drawer-footer">
              <div>
                <div className="drawer-section-title" style={{ marginBottom: '0.5rem' }}>{menuT('followUs')}</div>
                <div className="drawer-social">
                  <a href="https://www.facebook.com/profile.php?id=61555766881039&mibextid=wwXIfr&rdid=zHOAWbIOG4jg6CVB&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1DSqKZ2P3M%2F%3Fmibextid%3DwwXIfr#" target="_blank" rel="noopener noreferrer" aria-label="Facebook"><FaFacebookF /></a>
                  <a href="https://www.linkedin.com/in/perfect-booth-46070240b/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><FaLinkedinIn /></a>
                  <a href="https://wa.me/201116013011" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp"><FaWhatsapp /></a>
                </div>
              </div>
              <div className="drawer-copyright">
                {menuT('copyright')}
              </div>
            </div>
          </div>
        </div>,
        document.body
      )}
    </>
  );
}
