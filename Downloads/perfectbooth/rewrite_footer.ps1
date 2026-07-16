$cssFile = "src/app/globals.css"
$cssContent = Get-Content $cssFile -Raw
$footerIndex = $cssContent.IndexOf("/* --- Premium Global Footer --- */")
if ($footerIndex -ge 0) {
    $cssContent = $cssContent.Substring(0, $footerIndex)
}

$newCSS = @"
/* --- Premium Global Footer --- */
.pb-footer-premium {
  background-color: #030405;
  color: #fff;
  position: relative;
  overflow: hidden;
  border-top: 1px solid rgba(255, 255, 255, 0.05);
}

.premium-grid {
  display: grid;
  grid-template-columns: 2fr 1fr 1fr;
  gap: 4rem;
  padding: 6rem 5%;
  max-width: 1400px;
  margin: 0 auto;
}

@media (max-width: 1024px) {
  .premium-grid {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
}

.grid-brand .brand-logotype {
  font-size: 1.8rem;
  font-weight: 700;
  letter-spacing: 2px;
  display: block;
  margin-bottom: 1.5rem;
}

.grid-brand .brand-desc {
  color: rgba(255, 255, 255, 0.5);
  line-height: 1.8;
  max-width: 350px;
  font-size: 1rem;
}

.grid-links h4, .grid-contact h4 {
  font-size: 0.9rem;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.4);
  text-transform: uppercase;
  letter-spacing: 2px;
  margin-bottom: 2rem;
}

.grid-links nav {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.grid-links nav a {
  color: #fff;
  font-size: 1.1rem;
  transition: color 0.3s ease;
  text-decoration: none;
}

.grid-links nav a:hover {
  color: rgba(255, 255, 255, 0.5);
}

.grid-contact p {
  color: #fff;
  margin-bottom: 1rem;
  font-size: 1.1rem;
}

.ltr-text {
  direction: ltr;
  display: inline-block;
}

.premium-socials {
  display: flex;
  gap: 1.5rem;
  margin-top: 2rem;
}

.premium-socials a {
  color: rgba(255, 255, 255, 0.5);
  transition: color 0.3s ease;
  font-weight: 500;
  font-size: 1rem;
  text-decoration: none;
}

.premium-socials a:hover {
  color: #fff;
}

.massive-footer-text {
  font-size: 16vw;
  font-weight: 900;
  color: rgba(255, 255, 255, 0.03);
  text-align: center;
  line-height: 0.8;
  white-space: nowrap;
  overflow: hidden;
  user-select: none;
  pointer-events: none;
  margin-top: 2rem;
}

.premium-legal {
  display: flex;
  justify-content: space-between;
  padding: 2rem 5%;
  border-top: 1px solid rgba(255, 255, 255, 0.05);
  color: rgba(255, 255, 255, 0.4);
  font-size: 0.85rem;
}

@media (max-width: 768px) {
  .premium-legal {
    flex-direction: column;
    gap: 1rem;
    text-align: center;
  }
}
"@
Set-Content $cssFile ($cssContent + "`r`n" + $newCSS)

$footerFile = "src/components/layout/Footer.tsx"
$newFooter = @"
import React from 'react';
import { useTranslations, useLocale } from 'next-intl';
import { Link } from '@/i18n/navigation';

export default function Footer() {
  const t = useTranslations('Footer');
  const tHeader = useTranslations('Header');
  const locale = useLocale();
  const dir = locale === 'ar' ? 'rtl' : 'ltr';

  return (
    <footer className="pb-footer-premium" dir={dir}>
      {/* Info Grid */}
      <div className="premium-grid">
        <div className="grid-brand">
          <span className="brand-logotype">{tHeader('title')}</span>
          <p className="brand-desc">{t('description')}</p>
        </div>
        
        <div className="grid-links">
          <h4>{t('navTitle')}</h4>
          <nav>
            <Link href="/">{tHeader('nav.home')}</Link>
            <Link href="/#about">{tHeader('nav.about')}</Link>
            <Link href="/#services">{tHeader('nav.services')}</Link>
            <Link href="/#media">{tHeader('nav.media')}</Link>
            <Link href="/contact">{tHeader('nav.contact')}</Link>
          </nav>
        </div>

        <div className="grid-contact">
          <h4>{t('contactTitle')}</h4>
          <p>{t('address')}</p>
          <p dir="ltr" className="ltr-text" style={{ textAlign: dir === 'rtl' ? 'right' : 'left', display: 'block' }}>{t('phone')}</p>
          <p>{t('email')}</p>
          
          <div className="premium-socials">
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">Fb</a>
            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">X</a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">Ig</a>
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">In</a>
          </div>
        </div>
      </div>

      {/* Massive Brand Name at Bottom */}
      <div className="massive-footer-text">
        PERFECT BOOTH
      </div>

      <div className="premium-legal">
        <p>{t('copyright')}</p>
        <p>Design by Perfect Booth</p>
      </div>
    </footer>
  );
}
"@
Set-Content $footerFile $newFooter
