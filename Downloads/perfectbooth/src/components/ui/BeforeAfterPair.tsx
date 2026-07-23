import Image from 'next/image';
import { useTranslations, useLocale } from 'next-intl';

interface BeforeAfterPairProps {
  beforeImage: string;
  afterImage: string;
  beforeAlt: string;
  afterAlt: string;
  className?: string;
}

export default function BeforeAfterPair({
  beforeImage,
  afterImage,
  beforeAlt,
  afterAlt,
  className = '',
}: BeforeAfterPairProps) {
  const t = useTranslations('BeforeAfter');
  const locale = useLocale();

  return (
    <div className={`before-after-pair ${className}`}>
      <div className="before-after-images-wrapper">
        {/* Before Image Frame */}
        <div className="before-after-frame before-frame">
          <div className="before-after-badge">{t('beforeLabel')}</div>
          <Image
            src={beforeImage}
            alt={beforeAlt}
            fill
            sizes="(max-width: 768px) 90vw, 45vw"
            className="before-after-img"
            priority={false}
          />
        </div>

        {/* Unified Center Divider & Arrow Marker */}
        <div className="center-divider">
          <div className="center-divider-line"></div>
          <div className="center-divider-icon">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d={locale === 'ar' ? "M19 12H5M12 19l-7-7 7-7" : "M5 12h14M12 5l7 7-7 7"} stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <div className="center-divider-line"></div>
        </div>

        {/* After Image Frame */}
        <div className="before-after-frame after-frame">
          <div className="before-after-badge">{t('afterLabel')}</div>
          <Image
            src={afterImage}
            alt={afterAlt}
            fill
            sizes="(max-width: 768px) 90vw, 45vw"
            className="before-after-img"
            priority={false}
          />
        </div>
      </div>
    </div>
  );
}
