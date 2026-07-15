'use client';

import { useState } from 'react';
import { Link } from '@/i18n/navigation';
import { useTranslations } from 'next-intl';

export default function MobileNavigation() {
  const [isOpen, setIsOpen] = useState(false);
  const t = useTranslations('Header.nav');

  const navLinks = [
    { key: 'home', href: '/' },
    { key: 'about', href: '#about' },
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
        onClick={() => setIsOpen(!isOpen)}
        style={{ display: 'flex', flexDirection: 'column', gap: '6px', cursor: 'pointer' }}
        role="button"
        tabIndex={0}
        aria-label="Toggle menu"
      >
        <div style={{ width: '30px', height: '2px', backgroundColor: '#fff' }}></div>
        <div style={{ width: '30px', height: '2px', backgroundColor: '#fff' }}></div>
        <div style={{ width: '30px', height: '2px', backgroundColor: '#fff' }}></div>
      </div>
      
      {isOpen && (
        <nav className="mobile-nav-menu" style={{
          position: 'absolute',
          top: '100%',
          left: 0,
          right: 0,
          backgroundColor: '#1a1a1a',
          padding: '1rem',
          display: 'flex',
          flexDirection: 'column',
          gap: '1rem',
          borderBottom: '1px solid #333',
          zIndex: 1000
        }}>
          {navLinks.map((link) => (
            <Link 
              key={link.key} 
              href={link.href}
              onClick={() => setIsOpen(false)}
              style={{ color: '#fff', textDecoration: 'none', padding: '0.5rem', display: 'block' }}
            >
              {t(link.key)}
            </Link>
          ))}
        </nav>
      )}
    </>
  );
}
