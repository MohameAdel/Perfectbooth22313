import React from 'react';

interface LogoProps {
  size?: number;
  className?: string;
}

export default function Logo({ size = 60, className = '' }: LogoProps) {
  return (
    <div className={`brand-logo ${className}`} style={{ position: 'relative', width: `${size}px`, height: `${size}px` }}>
      <div style={{ 
        width: '100%', 
        height: '100%', 
        border: '2px solid var(--pb-accent)', 
        borderRadius: '50%', 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center', 
        color: 'var(--pb-accent)', 
        fontWeight: 'bold', 
        fontSize: `${Math.max(12, size / 3.5)}px`, 
        textAlign: 'center', 
        lineHeight: '1' 
      }}>
        PB
      </div>
    </div>
  );
}
