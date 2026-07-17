import React from 'react';
import Image from 'next/image';

interface LogoProps {
  width?: number;
  height?: number;
  className?: string;
}

export default function Logo({ width = 150, height = 82, className = '' }: LogoProps) {
  return (
    <div 
      className={`brand-logo ${className}`} 
      style={{ 
        position: 'relative', 
        width: `var(--logo-width, ${width}px)`, 
        height: `var(--logo-height, ${height}px)`, 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center',
        maxWidth: '100%'
      }}
    >
      <Image
        src="/logo.png"
        alt="Perfect Booth Logo"
        fill
        style={{ objectFit: 'contain' }}
        sizes="(max-width: 768px) 120px, 150px"
        priority
      />
    </div>
  );
}
