import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { Link } from '@/i18n/navigation';
import { projectsGallery } from '@/data/projects';

export default function ProjectsPage({ params: { locale } }: { params: { locale: string } }) {
  const t = useTranslations('Projects');
  const dir = locale === 'ar' ? 'rtl' : 'ltr';

  // Separate featured from the rest
  const featuredProject = projectsGallery.find(p => p.featured);
  const galleryProjects = projectsGallery.filter(p => !p.featured);

  return (
    <main className="projects-page-wrapper" dir={dir}>
      {/* 1. Projects Hero */}
      <section className="projects-hero reveal-animate" style={{ animationDelay: '0.1s' }}>
        <div className="projects-hero-container">
          <p className="projects-hero-eyebrow">{t('heroEyebrow')}</p>
          <h1 className="projects-hero-title">{t('heroTitle')}</h1>
          <p className="projects-hero-description">{t('heroDescription')}</p>
          <div className="projects-hero-meta">
            <span className="projects-hero-counter">01 / {projectsGallery.length}</span>
            <span className="projects-hero-watermark">SELECTED WORKS</span>
          </div>
        </div>
      </section>

      {/* 2. Featured Project */}
      {featuredProject && (
        <section className="featured-project-section reveal-animate" style={{ animationDelay: '0.2s' }}>
          <div className="featured-project-container">
            <div className="featured-project-image-wrapper">
              <Image
                src={featuredProject.image}
                alt={t(featuredProject.altKey as Parameters<typeof t>[0])}
                fill
                sizes="(max-width: 1024px) 100vw, 70vw"
                className="featured-project-image"
                priority
              />
            </div>
            <div className="featured-project-content">
              <div className="featured-project-meta-top">
                <span className="project-gallery-index featured-index">01</span>
                <span className="featured-project-label">{t('featuredProjectLabel')}</span>
              </div>
              <h2 className="featured-project-title">{t(featuredProject.titleKey as Parameters<typeof t>[0])}</h2>
              {featuredProject.categoryKey && (
                <div className="project-gallery-category-wrapper">
                  <div className="project-gallery-divider"></div>
                  <p className="project-gallery-category">{t(featuredProject.categoryKey as Parameters<typeof t>[0])}</p>
                </div>
              )}
              <div className="featured-project-explore">
                <Link href="/contact" className="explore-link">
                  {t('exploreProject')}
                </Link>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* 3. Project Gallery */}
      <section className="projects-gallery-section">
        <div className="projects-gallery-grid">
          {galleryProjects.map((project, index) => {
            // Index offset by 2 because 01 is the featured project
            const displayIndex = (index + 2).toString().padStart(2, '0');
            return (
              <div 
                key={project.id} 
                className={`project-gallery-card project-shape-${project.shape || 'landscape'} reveal-animate`}
                style={{ animationDelay: `${(index % 4) * 0.15 + 0.1}s` }}
              >
                <div className="project-gallery-image-wrapper">
                  <Image
                    src={project.image}
                    alt={t(project.altKey as Parameters<typeof t>[0])}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="project-gallery-image"
                  />
                </div>
                <div className="project-gallery-meta">
                  <span className="project-gallery-index">{displayIndex}</span>
                  <h3 className="project-gallery-title">{t(project.titleKey as Parameters<typeof t>[0])}</h3>
                  {project.categoryKey && (
                    <div className="project-gallery-category-wrapper">
                      <div className="project-gallery-divider"></div>
                      <span className="project-gallery-category">{t(project.categoryKey as Parameters<typeof t>[0])}</span>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 4. Project CTA */}
      <section className="projects-cta-section reveal-animate" style={{ animationDelay: '0.2s' }}>
        <div className="projects-cta-container">
          <p className="projects-cta-eyebrow">{t('ctaEyebrow')}</p>
          <h2 className="projects-cta-title">{t('ctaTitle')}</h2>
          <p className="projects-cta-description">{t('ctaText')}</p>
          <div className="projects-cta-actions">
            <Link href="/contact" className="pb-btn-primary projects-cta-btn">
              {t('ctaAction')} 
              <span className="cta-arrow" dir="ltr">→</span>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

export function generateMetadata({ params: { locale } }: { params: { locale: string } }) {
  const isAr = locale === 'ar';
  
  return {
    title: isAr ? 'مشاريعنا | بيرفكت بوث' : 'Our Projects | Perfect Booth',
    description: isAr 
      ? 'اكتشف مجموعة من أجنحة المعارض والمساحات البصرية والبيئات المخصصة التي صممتها ونفذتها بيرفكت بوث.' 
      : 'Explore exhibition booths, branded spaces, and custom environments designed and executed by Perfect Booth.',
  };
}
