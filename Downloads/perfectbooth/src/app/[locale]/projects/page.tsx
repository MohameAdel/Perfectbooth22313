import { setRequestLocale, getTranslations } from 'next-intl/server';
import Image from 'next/image';
import { Link } from '@/i18n/navigation';
import { projectsGallery } from '@/data/projects';
import ProjectSlider from '@/components/ui/ProjectSlider';

export default async function ProjectsPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  
  const t = await getTranslations('Projects');
  const isAr = locale === 'ar';
  const dir = isAr ? 'rtl' : 'ltr';

  // Separate featured from the rest
  const featuredProject = projectsGallery.find(p => p.featured);
  const galleryProjects = projectsGallery.filter(p => !p.featured);

  // Group gallery projects by titleKey
  const projectGroups: Record<string, typeof galleryProjects> = {};
  galleryProjects.forEach(p => {
    if (!projectGroups[p.titleKey]) {
      projectGroups[p.titleKey] = [];
    }
    projectGroups[p.titleKey].push(p);
  });

  const multiImageProjectsGroups = Object.values(projectGroups).filter(group => group.length > 1);
  const singleImageProjects = Object.values(projectGroups).filter(group => group.length === 1).map(group => group[0]);

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
                <Link href="/contact#project-form" className="explore-link">
                  {t('exploreProject')}
                </Link>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* 3. Multi-image Project Sliders */}
      <section className="projects-sliders-section">
        {multiImageProjectsGroups.map((group, index) => (
          <div key={`slider-group-${index}`} className="reveal-animate" style={{ animationDelay: `${0.1 * index}s` }}>
            <ProjectSlider 
              titleKey={group[0].titleKey} 
              categoryKey={group[0].categoryKey} 
              images={group}
              priorityFirstImage={index === 0}
            />
          </div>
        ))}
      </section>

      {/* 4. Project CTA */}
      <section className="projects-cta-section reveal-animate">
        <div className="projects-cta-wrapper">
          <div className="projects-cta-glow" aria-hidden="true"></div>
          
          <div className="projects-cta-card">
            <div className="corner-accent corner-tl" aria-hidden="true"></div>
            <div className="corner-accent corner-tr" aria-hidden="true"></div>
            <div className="corner-accent corner-bl" aria-hidden="true"></div>
            <div className="corner-accent corner-br" aria-hidden="true"></div>

            <div className="projects-cta-container">
              <div className="projects-cta-eyebrow-wrapper">
                <span className="projects-cta-line" aria-hidden="true"></span>
                <p className="projects-cta-eyebrow">{t('ctaEyebrow')}</p>
                <span className="projects-cta-line" aria-hidden="true"></span>
              </div>
              
              <h2 className="projects-cta-title">{t('ctaTitle')}</h2>
              <p className="projects-cta-description">{t('ctaText')}</p>
              
              <div className="projects-cta-actions">
                <Link href="/contact#project-form" className="pb-btn-primary projects-cta-btn">
                  <span>{t('ctaAction')}</span>
                  <span className="cta-arrow">{isAr ? '←' : '→'}</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const isAr = locale === 'ar';
  
  return {
    title: isAr ? 'مشاريعنا | بيرفكت بوث' : 'Our Projects | Perfect Booth',
    description: isAr 
      ? 'اكتشف مجموعة من أجنحة المعارض والمساحات البصرية والبيئات المخصصة التي صممتها ونفذتها بيرفكت بوث.' 
      : 'Explore exhibition booths, branded spaces, and custom environments designed and executed by Perfect Booth.',
  };
}
