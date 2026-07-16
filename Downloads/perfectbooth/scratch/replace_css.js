const fs = require('fs');
let css = fs.readFileSync('src/app/globals.css', 'utf8');

const marker = '/* Contact / Location Section */';
const index = css.indexOf(marker);

if (index !== -1) {
  css = css.substring(0, index);
}

const newCss = `
/* Our Location Section */
.our-location-section {
  padding: 0;
  background-color: var(--pb-bg);
  border-top: 1px solid rgba(255,255,255,0.05);
}

.our-location-container {
  display: flex;
  min-height: 70vh;
}

[dir="rtl"] .our-location-container {
  /* Keep map on the left, content on the right in RTL */
  flex-direction: row-reverse;
}

.ol-visual-panel {
  flex: 0 0 55%;
  position: relative;
  background-color: var(--pb-surface);
}

.ol-visual-img {
  object-fit: cover;
}

.ol-content-panel {
  flex: 0 0 45%;
  padding: 5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  background-color: var(--pb-surface-raised);
  overflow: hidden;
}

.ol-decorative-word {
  position: absolute;
  top: 15%;
  inset-inline-start: 5%;
  font-size: 8rem;
  font-weight: 800;
  color: transparent;
  -webkit-text-stroke: 1px rgba(197, 143, 45, 0.15); /* pb-accent transparent */
  text-transform: uppercase;
  pointer-events: none;
  user-select: none;
  white-space: nowrap;
}

.ol-content-body {
  position: relative;
  z-index: 1;
  max-width: 500px;
}

.ol-title {
  color: var(--pb-text);
  font-size: 2.2rem;
  font-weight: 700;
  margin-bottom: 2.5rem;
  line-height: 1.3;
}

.ol-cta-button {
  display: inline-flex;
  align-items: center;
  gap: 1rem;
  background-color: transparent;
  color: var(--pb-text);
  padding: 1rem 2rem;
  font-weight: 600;
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 4px;
  transition: all 0.3s ease;
  min-height: 44px;
}

.ol-cta-button:hover {
  background-color: var(--pb-primary);
  border-color: var(--pb-primary);
  color: #ffffff;
}

.ol-cta-button:focus-visible {
  outline: 2px solid var(--pb-primary);
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
    top: 5%;
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
`;

fs.writeFileSync('src/app/globals.css', css + newCss);
console.log('CSS Replaced');
