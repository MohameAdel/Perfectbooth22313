import React from 'react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';

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

        {/* Unified Center Divider & Concept Marker */}
        <div className="center-divider">
          <div className="center-divider-line"></div>
          <div className="center-divider-badge">
            <span className="center-divider-text">{t('conceptToReality')}</span>
          </div>
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
