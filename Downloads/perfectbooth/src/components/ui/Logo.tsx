import React from 'react';

export default function Logo() {
  return (
    <div style={{ position: 'relative', width: '60px', height: '60px' }}>
      <div style={{ 
        width: '100%', 
        height: '100%', 
        border: '2px solid var(--primary-gold, #C0A080)', 
        borderRadius: '50%', 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center', 
        color: 'var(--primary-gold, #C0A080)', 
        fontWeight: 'bold', 
        fontSize: '12px', 
        textAlign: 'center', 
        lineHeight: '1' 
      }}>
        PB
      </div>
    </div>
  );
}
