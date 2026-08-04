"use client";

import React from 'react';
import { useTranslations, useLocale } from 'next-intl';
import Image from 'next/image';
import { partnersLogos, selectedProjects } from '@/data/collaborations';

export default function SelectedCollaborations() {
  const tGlobal = useTranslations();
  const t = useTranslations('PartnersPage.collaborations');
  const locale = useLocale();
  const dir = locale === 'ar' ? 'rtl' : 'ltr';

  return (
    <section id="collaborations" className="selected-collaborations" dir={dir}>
      <div className="collaborations-container">
        
        {/* Section Header */}
        <div className="collaborations-header">
          <p className="collaborations-eyebrow">{t('eyebrow')}</p>
          <h2 className="collaborations-title">{t('title')}</h2>
          <p className="collaborations-intro">{t('intro')}</p>
          <div className="collaborations-divider"></div>
        </div>

        {/* Projects Sequence (Large Editorial Cards) - Removed upon request */}
        <div className="collaborations-projects">
          {/* Projects 01 to 04 have been removed from this page */}
        </div>


        {/* Logos Grid (Compact Logo Wall for Partners) */}
        <div className="collaborations-logos-wrapper">
          
          <div className="collaborations-logos-grid-container">
            <div className="collaborations-logos-grid">
              {partnersLogos.map((logo) => (
                <div key={logo.id} className="collaboration-logo-item">
                  <div className="collaboration-logo-inner">
                    <Image
                      src={logo.src}
                      alt="Verified Partner Logo"
                      fill
                      sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 20vw"
                      className="collaboration-logo-image"
                      unoptimized={logo.src.startsWith('/')}
                      onError={(e) => {
                        const card = e.currentTarget.closest('.collaboration-logo-item');
                        if (card) (card as HTMLElement).style.display = 'none';
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
