import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import ScrollReveal from '@/components/ui/ScrollReveal';

export default function AboutApproach() {
  const t = useTranslations('AboutPage.approach');

  return (
    <section id="approach" className="about-page-approach">
      <div className="about-approach-container">
        
        <div className="about-approach-top-row">
          {/* Left/Sticky Column */}
          <div className="about-approach-sticky">
            <div className="about-approach-sticky-inner animate-fade-in-fix">
              <div className="about-approach-eyebrow">
                <span className="about-eyebrow-line"></span>
                {t('eyebrow')}
              </div>
              <h2 className="about-approach-title">{t('title')}</h2>
              <p className="about-approach-intro">{t('intro')}</p>
            </div>
          </div>

          {/* Right/Scroll Column - Capabilities */}
          <div className="about-approach-capabilities">
            
            <ScrollReveal delay={0}>
              <div className="capability-row">
                <div className="capability-number">01</div>
                <div className="capability-content">
                  <h3 className="capability-title">{t('cap1Title')}</h3>
                  <p className="capability-desc">{t('cap1Desc')}</p>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={100}>
              <div className="capability-row">
                <div className="capability-number">02</div>
                <div className="capability-content">
                  <h3 className="capability-title">{t('cap2Title')}</h3>
                  <p className="capability-desc">{t('cap2Desc')}</p>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <div className="capability-row">
                <div className="capability-number">03</div>
                <div className="capability-content">
                  <h3 className="capability-title">{t('cap3Title')}</h3>
                  <p className="capability-desc">{t('cap3Desc')}</p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>

        {/* Integrated Closing CTA spanning wide */}
        <ScrollReveal delay={100}>
          <div className="about-approach-closing">
            <div>
              <h3 className="closing-heading">{t('closingHeading')}</h3>
              <p className="closing-desc">{t('closingDesc')}</p>
            </div>
            <div>
              <Link href="/#contact" className="about-hero-btn-primary closing-btn">
                {t('closingCta')}
              </Link>
            </div>
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
}
