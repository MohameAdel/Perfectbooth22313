"use client";

import React, { useState, useEffect } from 'react';
import { useTranslations } from 'next-intl';
import { Link, usePathname } from '@/i18n/navigation';
import LanguageSwitcher from './LanguageSwitcher';
import MobileNavigation from './MobileNavigation';
import Logo from '@/components/ui/Logo';

export default function Header() {
  const t = useTranslations('Header');
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div style={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100 }}>
      <div className={`top-bar ${isScrolled ? 'hidden-top-bar' : ''}`} style={{ transition: 'all 0.3s ease', overflow: 'hidden', maxHeight: isScrolled ? 0 : '100px', padding: isScrolled ? 0 : '0.5rem 5%', opacity: isScrolled ? 0 : 1, borderBottom: isScrolled ? 'none' : undefined }}>
        <div className="top-bar-right">
          <span>{t('title')}</span>
        </div>
        <div className="top-bar-left">
          <div className="social-icons">
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <i className="fa-brands fa-facebook-f"></i>
            </a>
            <div className="divider"></div>
            <a href="https://x.com" target="_blank" rel="noopener noreferrer" aria-label="X (Twitter)">
              <i className="fa-brands fa-x-twitter"></i>
            </a>
            <div className="divider"></div>
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <i className="fa-brands fa-linkedin-in"></i>
            </a>
            <div className="divider"></div>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <i className="fa-brands fa-instagram"></i>
            </a>
            <div className="divider"></div>
            <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
              <i className="fa-brands fa-youtube"></i>
            </a>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className="main-header">
        <div className={`logo-container ${isScrolled ? 'mobile-hidden-logo' : ''}`} style={isScrolled ? { transition: 'all 0.3s ease' } : { transition: 'all 0.3s ease' }}>
          <Logo width={isScrolled ? 120 : 150} height={isScrolled ? 65 : 82} className="header-logo" />
        </div>

        {/* Desktop Navigation */}
        <nav className="nav-links">
          <Link href="/" className={pathname === '/' ? 'active' : ''}>{t('nav.home')}</Link>
          <Link href="/about" className={pathname === '/about' ? 'active' : ''}>{t('nav.about')}</Link>
          <Link href="/services" className={pathname === '/services' ? 'active' : ''}>{t('nav.services')}</Link>
          <Link href="/partners" className={pathname === '/partners' ? 'active' : ''}>{t('nav.partners')}</Link>
          <Link href="/projects" className={pathname === '/projects' ? 'active' : ''}>{t('nav.projects')}</Link>
          <Link href="/contact" className={pathname === '/contact' ? 'active' : ''}>{t('nav.contact')}</Link>
        </nav>

        {/* Actions & Mobile Nav */}
        <div className="header-actions">
          <div className="action-icons-left" style={{ display: 'flex', alignItems: 'center', gap: '20px', fontSize: '1.2rem' }}>
            <i className="fa-solid fa-magnifying-glass" style={{ cursor: 'pointer' }} aria-label="Search"></i>
            <LanguageSwitcher />
          </div>
          
          <MobileNavigation />
        </div>
      </header>
    </div>
  );
}
