import React from 'react';
import { useTranslations, useLocale } from 'next-intl';
import Image from 'next/image';

export default function SelectedProjectsSection() {
  const t = useTranslations('SelectedProjects');
  const locale = useLocale();
  const dir = locale === 'ar' ? 'rtl' : 'ltr';

  const projects = [
    {
      id: 1,
      title: t('project1'),
      image: 'https://admin.perfectbooth-events.com/storage/home-banner-slides/co1X3sNRqpx9Kdnicliy0dmKe5puz1phE7CYyV8l.jpg',
    },
    {
      id: 2,
      title: t('project2'),
      image: 'https://admin.perfectbooth-events.com/storage/home-banner-slides/IatwT74DySD8ZSpWbgvabYzkYO9qffWWvK1kYzXL.jpg',
    },
    {
      id: 3,
      title: t('project3'),
      image: 'https://admin.perfectbooth-events.com/storage/services/images/fVoSlHLlnIqOMCs6IWYAKHabGZ2fmhAu2gWtigdE.jpg',
    },
    {
      id: 4,
      title: t('project4'),
      image: 'https://admin.perfectbooth-events.com/storage/services/images/x2ymges6TaOHCBS3BSquSoOlzw1UW146iD9hlTQ2.jpg',
    }
  ];

  return (
    <section className="portfolio-section" dir={dir}>
      <div className="portfolio-container">
        <div className="portfolio-header">
          <div>
            <p className="portfolio-eyebrow">{t('eyebrow')}</p>
            <h2 className="portfolio-title">{t('title')}</h2>
          </div>
          <div className="portfolio-actions">
            {/* Native Scroll Hint or Custom Nav could go here, keeping it clean */}
            <span className="portfolio-scroll-hint">Drag or scroll to explore &rarr;</span>
          </div>
        </div>

        <div className="portfolio-track">
          {projects.map((project) => (
            <div key={project.id} className="portfolio-item">
              <div className="portfolio-img-wrapper">
                <Image 
                  src={project.image} 
                  alt={project.title} 
                  fill 
                  sizes="(max-width: 768px) 85vw, 60vw"
                  className="portfolio-img" 
                  unoptimized // External admin domain might not be in Next config
                />
                <div className="portfolio-overlay">
                  <h3 className="portfolio-item-title">{project.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
