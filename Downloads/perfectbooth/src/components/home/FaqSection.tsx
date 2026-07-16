import { useTranslations, useLocale } from 'next-intl';
import Accordion from '@/components/ui/Accordion';

export default function FaqSection() {
  const t = useTranslations('Faq');
  const locale = useLocale();
  const dir = locale === 'ar' ? 'rtl' : 'ltr';

  // Extract items directly from translations
  // Using an array map approach based on the JSON structure we injected
  const items = t.raw('items') as { q: string, a: string }[];

  return (
    <section className="faq-section" dir={dir}>
      <div className="faq-container">
        
        {/* Introductory Column */}
        <div className="faq-intro">
          <div className="faq-eyebrow">
            <span className="faq-eyebrow-line"></span>
            {t('eyebrow')}
          </div>
          <h2 className="faq-title">
            {t('title')}
          </h2>
          <p className="faq-description">
            {t('description')}
          </p>
        </div>
        
        {/* Accordion Column */}
        <div className="faq-content">
          <Accordion items={items} />
        </div>
        
      </div>
    </section>
  );
}
