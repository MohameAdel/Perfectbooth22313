"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';

interface BeforeAfterComparisonProps {
  beforeImage: string;
  afterImage: string;
  beforeAlt: string;
  afterAlt: string;
  className?: string;
  ariaLabel: string;
}

export default function BeforeAfterComparison({
  beforeImage,
  afterImage,
  beforeAlt,
  afterAlt,
  className = '',
  ariaLabel,
}: BeforeAfterComparisonProps) {
  const [sliderPosition, setSliderPosition] = useState(50);
  const t = useTranslations('BeforeAfter');

  // We want logical operation where 0 is before, 100 is after.
  // The input must always be LTR to ensure range behavior is consistent: 0 left, 100 right,
  // revealing the right side (after image).
  
  const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSliderPosition(Number(e.target.value));
  };

  return (
    <div 
      className={`before-after-container ${className}`} 
    >
      {/* Before Image (Base layer) */}
      <div className="before-after-image-wrapper">
        <Image
          src={beforeImage}
          alt={beforeAlt}
          fill
          sizes="(max-width: 768px) 85vw, 60vw"
          className="before-after-image before-image"
          priority={false}
        />
        <div className="before-after-label label-before">
          {t('beforeLabel')}
        </div>
      </div>

      {/* After Image (Top layer clipped by slider) */}
      <div 
        className="before-after-image-wrapper top-layer"
        style={{ clipPath: `inset(0 0 0 ${sliderPosition}%)` }}
      >
        <Image
          src={afterImage}
          alt={afterAlt}
          fill
          sizes="(max-width: 768px) 85vw, 60vw"
          className="before-after-image after-image"
          priority={false}
        />
        <div className="before-after-label label-after">
          {t('afterLabel')}
        </div>
      </div>

      {/* Divider & Handle */}
      <div 
        className="before-after-divider" 
        style={{ left: `${sliderPosition}%` }}
      >
        <div className="before-after-handle">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8 18L2 12L8 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M16 6L22 12L16 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
      </div>

      {/* Invisible Native Input for accessibility and interaction */}
      <input
        type="range"
        min="0"
        max="100"
        value={sliderPosition}
        onChange={handleSliderChange}
        className="before-after-slider-input"
        aria-label={ariaLabel}
        dir="ltr"
      />
    </div>
  );
}
