'use client';

import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { Link, usePathname } from '@/i18n/navigation';
import { useTranslations, useLocale } from 'next-intl';
import LanguageSwitcher from './LanguageSwitcher';
import MobileMenuContactItem from './MobileMenuContactItem';
import Logo from '@/components/ui/Logo';

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
        <div style={{ width: '30px', height: '2px', backgroundColor: '#fff' }}></div>
        <div style={{ width: '30px', height: '2px', backgroundColor: '#fff' }}></div>
        <div style={{ width: '30px', height: '2px', backgroundColor: '#fff' }}></div>
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
                <i className="fa-solid fa-xmark"></i>
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
                    icon={<i className="fa-solid fa-location-dot"></i>} 
                    text={menuT('addressPlaceholder')} 
                  />
                  <MobileMenuContactItem 
                    icon={<i className="fa-solid fa-phone"></i>} 
                    text={menuT('phonePlaceholder')} 
                    href="tel:+201116013011" 
                  />
                  <MobileMenuContactItem 
                    icon={<i className="fa-regular fa-envelope"></i>} 
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
                  <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook"><i className="fa-brands fa-facebook-f"></i></a>
                  <a href="https://x.com" target="_blank" rel="noopener noreferrer" aria-label="X (Twitter)"><i className="fa-brands fa-x-twitter"></i></a>
                  <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><i className="fa-brands fa-linkedin-in"></i></a>
                  <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><i className="fa-brands fa-instagram"></i></a>
                  <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer" aria-label="YouTube"><i className="fa-brands fa-youtube"></i></a>
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
