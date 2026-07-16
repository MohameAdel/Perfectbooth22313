import React from 'react';
import Image from 'next/image';

interface LogoProps {
  width?: number;
  height?: number;
  className?: string;
}

export default function Logo({ width = 180, height = 60, className = '' }: LogoProps) {
  return (
    <div className={`brand-logo ${className}`} style={{ position: 'relative', width: `${width}px`, height: `${height}px`, display: 'flex', alignItems: 'center', justifyContent: 'flex-start' }}>
      <Image
        src="/logo.png"
        alt="Perfect Booth Logo"
        fill
        style={{ objectFit: 'contain', objectPosition: 'left center' }}
        priority
      />
    </div>
  );
}
