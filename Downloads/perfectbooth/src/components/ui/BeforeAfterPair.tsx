import React from 'react';
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
  const isRtl = locale === 'ar';

  return (
    <div className={`before-after-pair ${className}`}>
      {/* Before Image Frame */}
      <div className="before-after-frame">
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

      {/* Subtle Transition Marker */}
      <div className="before-after-elegant-marker" aria-hidden="true">
        <div className="elegant-line"></div>
        <div className="elegant-marker-content">
          <span className="elegant-marker-text">{t('conceptToReality')}</span>
          <svg width="10" height="10" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="elegant-arrow-icon">
            <path d={isRtl ? "M19 12H5M12 19l-7-7 7-7" : "M5 12h14M12 5l7 7-7 7"} stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
        <div className="elegant-line"></div>
      </div>

      {/* After Image Frame */}
      <div className="before-after-frame">
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
  );
}
