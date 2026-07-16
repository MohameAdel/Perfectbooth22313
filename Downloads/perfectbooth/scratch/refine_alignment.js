const fs = require('fs');
let css = fs.readFileSync('src/app/globals.css', 'utf8');

// The goal is to replace .ol-content-panel onwards with new styles.
const markerStart = '.ol-content-panel {';
const indexStart = css.indexOf(markerStart);

if (indexStart !== -1) {
  css = css.substring(0, indexStart);
}

const newCss = `
.ol-content-panel {
  flex: 0 0 45%;
  padding: 5rem;
  display: flex;
  align-items: center; /* vertically center wrapper */
  justify-content: flex-start;
  position: relative;
  background-color: var(--pb-surface-raised);
  overflow: hidden;
}

.ol-inner-wrapper {
  display: flex;
  flex-direction: column;
  align-items: flex-start; /* Ensure shared start edge */
  max-width: 500px;
  width: 100%;
}

.ol-decorative-word {
  font-size: 8rem;
  font-weight: 800;
  color: transparent;
  -webkit-text-stroke: 1px rgba(197, 143, 45, 0.15); /* pb-accent transparent */
  text-transform: uppercase;
  pointer-events: none;
  user-select: none;
  white-space: nowrap;
  line-height: 1;
  margin-bottom: 1rem;
}

.ol-title {
  color: var(--pb-text);
  font-size: 2.2rem;
  font-weight: 700;
  margin-bottom: 2.5rem;
  line-height: 1.3;
  text-align: start;
}

.ol-cta-button {
  display: inline-flex;
  align-items: center;
  gap: 1rem;
  background-color: var(--pb-accent);
  color: #1a1a1a;
  padding: 1rem 2rem;
  font-weight: 600;
  border: 1px solid var(--pb-accent);
  border-radius: 4px;
  transition: all 0.3s ease;
  min-height: 44px;
}

.ol-cta-button:hover {
  background-color: transparent;
  color: var(--pb-accent);
}

.ol-cta-button:focus-visible {
  outline: 2px solid var(--pb-accent);
  outline-offset: 2px;
}

.ol-cta-icon {
  /* No directional flip needed for a symmetrical pin icon, but if arrow is used we would adapt it */
}

/* Mobile & Tablet Stacking Rules */
@media (max-width: 1024px) {
  .our-location-container {
    flex-direction: column !important;
  }
  
  .ol-content-panel {
    /* Place content first visually and logically on small screens */
    order: -1;
    width: 100%;
    padding: 4rem 5%;
    min-height: auto;
  }

  .ol-visual-panel {
    width: 100%;
    min-height: 380px;
  }
  
  .ol-decorative-word {
    font-size: 5rem;
  }
}

@media (max-width: 768px) {
  .ol-title {
    font-size: 1.8rem;
  }
  .ol-cta-button {
    width: 100%;
    justify-content: center;
  }
  .ol-visual-panel {
    min-height: 320px;
  }
}

[dir="rtl"] .ol-cta-icon {
  transform: scaleX(-1);
}
`;

fs.writeFileSync('src/app/globals.css', css + newCss.trimStart());
console.log('CSS Replaced for alignment');
