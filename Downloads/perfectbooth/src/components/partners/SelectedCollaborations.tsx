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

        {/* Projects Sequence (Large Editorial Cards) */}
        <div className="collaborations-projects">
          {selectedProjects.map((project, index) => {
            const sequenceNumber = (index + 1).toString().padStart(2, '0');
            // Using global translations to resolve the nested key
            const translatedTitle = tGlobal(`SelectedProjects.${project.titleKey}`);
            const translatedDesc = tGlobal(`SelectedProjects.${project.titleKey}Desc`);

            return (
              <div key={project.id} className="collaboration-card">
                <div className="collaboration-media-panel">
                  <div className="collaboration-media-inner">
                    <Image
                      src={project.image}
                      alt={translatedTitle}
                      fill
                      sizes="(max-width: 768px) 100vw, 65vw"
                      className="collaboration-image"
                      unoptimized
                    />
                  </div>
                </div>
                <div className="collaboration-info-panel">
                  <div className="collaboration-sequence-header">
                    <div className="animated-yellow-line card-edge-line"></div>
                    <span className="collaboration-sequence">{sequenceNumber}</span>
                  </div>
                  <h3 className="collaboration-project-title">{translatedTitle}</h3>
                  <p className="collaboration-project-desc">{translatedDesc}</p>
                  <div className="collaboration-accent-line"></div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Logos Grid (Compact Logo Wall for Partners without verified project details) */}
        <div className="collaborations-logos-wrapper">
          <div className="animated-yellow-line line-horizontal divider-line" aria-hidden="true"></div>
          <div className="collaborations-network-header">
            <p className="network-eyebrow">{t('networkEyebrow')}</p>
            <h3 className="network-title">{t('networkTitle')}</h3>
          </div>
          
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
                      unoptimized
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
