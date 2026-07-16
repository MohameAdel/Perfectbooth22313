"use client";

import React, { useState, useEffect } from 'react';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import LanguageSwitcher from './LanguageSwitcher';
import MobileNavigation from './MobileNavigation';

export default function Header() {
  const t = useTranslations('Header');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
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
            <a href="#">f</a>
            <div className="divider"></div>
            <a href="#">X</a>
            <div className="divider"></div>
            <a href="#">in</a>
            <div className="divider"></div>
            <a href="#">📷</a>
            <div className="divider"></div>
            <a href="#">▶</a>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className="main-header">
        <div className={`logo-container ${isScrolled ? 'mobile-hidden-logo' : ''}`} style={isScrolled ? { transition: 'all 0.3s ease' } : { transition: 'all 0.3s ease' }}>
          {/* Mock Logo using Next Image */}
          <div style={{ position: 'relative', width: '60px', height: '60px' }}>
            {/* If we had a real Perfect Booth logo we'd use it. Using placeholder for now */}
            <div style={{ width: '100%', height: '100%', border: '2px solid var(--primary-gold)', borderRadius: '50%', display: 'flex', justifyContent: 'center', alignItems: 'center', color: 'var(--primary-gold)', fontWeight: 'bold', fontSize: '12px', textAlign: 'center', lineHeight: '1' }}>
              PB
            </div>
          </div>
          <div className="logo-text">
            <span className="logo-title">{t('title')}</span>
            <span className="logo-subtitle">{t('subtitle')}</span>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="nav-links">
          <Link href="/" className="active">{t('nav.home')}</Link>
          <Link href="#about">{t('nav.about')}</Link>
          <Link href="#services">{t('nav.services')}</Link>
          <Link href="#media">{t('nav.media')}</Link>
          <Link href="#partners">{t('nav.partners')}</Link>
          <Link href="#blog">{t('nav.blog')}</Link>
          <Link href="#registration">{t('nav.registration')}</Link>
          <Link href="#contact">{t('nav.contact')}</Link>
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
