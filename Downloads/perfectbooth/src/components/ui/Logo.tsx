import React from 'react';
import Image from 'next/image';

interface LogoProps {
  size?: number;
  className?: string;
}

export default function Logo({ size = 60, className = '' }: LogoProps) {
  return (
    <div className={`brand-logo ${className}`} style={{ position: 'relative', width: `${size}px`, height: `${size}px`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <Image
        src="/logo.png"
        alt="Perfect Booth Logo"
        width={size}
        height={size}
        style={{ objectFit: 'contain', maxWidth: '100%', maxHeight: '100%' }}
        priority
      />
    </div>
  );
}
