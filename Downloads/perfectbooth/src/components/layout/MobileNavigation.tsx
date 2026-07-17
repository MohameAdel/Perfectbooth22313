'use client';

import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { Link, usePathname } from '@/i18n/navigation';
import { useTranslations, useLocale } from 'next-intl';
import LanguageSwitcher from './LanguageSwitcher';
import MobileMenuContactItem from './MobileMenuContactItem';

export default function MobileNavigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();
  const locale = useLocale();
  const dir = locale === 'ar' ? 'rtl' : 'ltr';
  
  const navT = useTranslations('Header.nav');
  const headerT = useTranslations('Header');
  const aboutT = useTranslations('About');
  const menuT = useTranslations('MobileMenu');

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
    { key: 'services', href: '#services' },
    { key: 'media', href: '#media' },
    { key: 'partners', href: '#partners' },
    { key: 'blog', href: '#blog' },
    { key: 'registration', href: '#registration' },
    { key: 'contact', href: '#contact' },
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
              <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                <div style={{ width: '40px', height: '40px', border: '2px solid var(--pb-accent)', borderRadius: '50%', display: 'flex', justifyContent: 'center', alignItems: 'center', color: 'var(--pb-accent)', fontWeight: 'bold', fontSize: '10px' }}>
                  PB
                </div>
                <div>
                  <div style={{ fontWeight: 'bold', fontSize: '1.1rem', color: 'var(--pb-text)' }}>{headerT('title')}</div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--pb-text-muted)' }}>{headerT('subtitle')}</div>
                </div>
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
                  // If href is '/about' and pathname is '/about', it's active. If it's '/' and pathname is '/', it's active.
                  // Since all hashes map to the homepage (except about), we'll do simple checking.
                  const isActive = (link.href === '/' && pathname === '/') || (link.href === '/about' && pathname === '/about');
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
                    href="tel:+201234567890" 
                  />
                  <MobileMenuContactItem 
                    icon={<i className="fa-regular fa-envelope"></i>} 
                    text={menuT('emailPlaceholder')} 
                    href="mailto:info@perfectbooth.com" 
                  />
                </div>
              </div>
            </div>

            <div className="drawer-footer">
              <div>
                <div className="drawer-section-title" style={{ marginBottom: '0.5rem' }}>{menuT('followUs')}</div>
                <div className="drawer-social">
                  <a href="#" aria-label="Facebook"><i className="fa-brands fa-facebook-f"></i></a>
                  <a href="#" aria-label="X (Twitter)"><i className="fa-brands fa-x-twitter"></i></a>
                  <a href="#" aria-label="LinkedIn"><i className="fa-brands fa-linkedin-in"></i></a>
                  <a href="#" aria-label="Instagram"><i className="fa-brands fa-instagram"></i></a>
                  <a href="#" aria-label="YouTube"><i className="fa-brands fa-youtube"></i></a>
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
