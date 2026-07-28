import React from 'react';
import { useTranslations } from 'next-intl';
import LanguageSwitcher from './LanguageSwitcher';
import MobileNavigation from './MobileNavigation';
import Logo from '@/components/ui/Logo';
import { FaFacebookF, FaLinkedinIn, FaMagnifyingGlass } from 'react-icons/fa6';
import HeaderScrollWrapper from './HeaderScrollWrapper';
import NavLinks from './NavLinks';

export default function Header() {
  const t = useTranslations('Header');

  return (
    <HeaderScrollWrapper>
      <div className="top-bar">
        <div className="top-bar-right">
          <span>{t('title')}</span>
        </div>
        <div className="top-bar-left">
          <div className="social-icons">
            <a href="https://www.facebook.com/profile.php?id=61555766881039&mibextid=wwXIfr&rdid=zHOAWbIOG4jg6CVB&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1DSqKZ2P3M%2F%3Fmibextid%3DwwXIfr#" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <FaFacebookF />
            </a>
            <div className="divider"></div>
            <a href="https://www.linkedin.com/in/perfect-booth-46070240b/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <FaLinkedinIn />
            </a>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className="main-header">
        <div className="logo-container">
          <Logo className="header-logo" />
        </div>

        {/* Desktop Navigation */}
        <NavLinks 
          navHome={t('nav.home')}
          navAbout={t('nav.about')}
          navServices={t('nav.services')}
          navPartners={t('nav.partners')}
          navProjects={t('nav.projects')}
          navContact={t('nav.contact')}
        />

        {/* Actions & Mobile Nav */}
        <div className="header-actions">
          <div className="action-icons-left" style={{ display: 'flex', alignItems: 'center', gap: '20px', fontSize: '1.2rem' }}>
            <FaMagnifyingGlass style={{ cursor: 'pointer' }} aria-label="Search" />
            <LanguageSwitcher />
          </div>
          
          <MobileNavigation />
        </div>
      </header>
    </HeaderScrollWrapper>
  );
}
