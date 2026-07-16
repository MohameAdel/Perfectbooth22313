const fs = require('fs');

const cssToAdd = `
/* Partners Section */
.partners-section {
  padding: 5rem 0 5rem 5%;
  background-color: var(--pb-bg);
  overflow: hidden;
}

[dir="rtl"] .partners-section {
  padding: 5rem 5% 5rem 0;
}

.partners-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin-bottom: 3rem;
  padding-inline-end: 5%;
}

.partners-heading-wrapper {
  position: relative;
}

.partners-eyebrow {
  color: var(--pb-accent);
  font-size: 0.9rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 2px;
  margin-bottom: 0.5rem;
}

.partners-title {
  color: var(--pb-text);
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
}

.partners-decorative-line {
  width: 40px;
  height: 2px;
  background-color: var(--pb-accent);
  margin-top: 1rem;
}

.partners-track {
  display: flex;
  gap: 2rem;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  padding-bottom: 2rem;
  -ms-overflow-style: none;
  scrollbar-width: none;
}

.partners-track::-webkit-scrollbar {
  display: none;
}

.partner-card {
  flex: 0 0 250px;
  height: 140px;
  scroll-snap-align: start;
  position: relative;
  background-color: #ffffff; /* White panels for logo legibility */
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1.5rem;
}

.partner-img {
  object-fit: contain;
  padding: 1rem;
}

@media (max-width: 768px) {
  .partners-header {
    flex-direction: column;
    align-items: flex-start;
    gap: 1.5rem;
  }
  .partner-card {
    flex: 0 0 200px;
    height: 120px;
  }
}

/* Contact / Location Section */
.contact-location-section {
  padding: 0;
  background-color: var(--pb-bg);
  border-top: 1px solid rgba(255,255,255,0.05);
}

.contact-location-container {
  display: flex;
  min-height: 70vh;
}

.cl-visual-panel {
  flex: 0 0 55%;
  position: relative;
  background-color: var(--pb-surface);
}

.cl-visual-img {
  object-fit: cover;
}

.cl-content-panel {
  flex: 0 0 45%;
  padding: 5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  background-color: var(--pb-surface-raised);
  overflow: hidden;
}

.cl-decorative-word {
  position: absolute;
  top: 10%;
  left: 5%;
  font-size: 8rem;
  font-weight: 800;
  color: transparent;
  -webkit-text-stroke: 1px rgba(197, 143, 45, 0.15); /* pb-accent transparent */
  text-transform: uppercase;
  pointer-events: none;
  user-select: none;
  white-space: nowrap;
}

[dir="rtl"] .cl-decorative-word {
  left: auto;
  right: 5%;
}

.cl-content-body {
  position: relative;
  z-index: 1;
  max-width: 500px;
}

.cl-title {
  color: var(--pb-text);
  font-size: 2.2rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
  line-height: 1.3;
}

.cl-description {
  color: var(--pb-text-muted);
  font-size: 1.1rem;
  line-height: 1.6;
  margin-bottom: 2.5rem;
}

.cl-cta-button {
  display: inline-flex;
  align-items: center;
  gap: 1rem;
  background-color: var(--pb-primary); /* Perfect Booth Blue */
  color: #ffffff;
  padding: 1rem 2rem;
  font-weight: 600;
  border-radius: 4px;
  transition: all 0.3s ease;
  margin-bottom: 3rem;
  min-height: 44px;
}

.cl-cta-button:hover {
  background-color: var(--pb-primary-hover);
  transform: translateY(-2px);
  box-shadow: 0 4px 15px rgba(0, 123, 255, 0.3); /* Assuming blue */
}

.cl-contact-info {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.cl-contact-link {
  color: var(--pb-text);
  font-size: 1rem;
  transition: color 0.3s ease;
  display: inline-block;
}

.cl-contact-link:hover {
  color: var(--pb-accent);
}

@media (max-width: 1024px) {
  .contact-location-container {
    flex-direction: column;
  }
  
  .cl-visual-panel {
    min-height: 400px;
    width: 100%;
  }
  
  .cl-content-panel {
    width: 100%;
    padding: 4rem 5%;
  }
  
  .cl-decorative-word {
    font-size: 5rem;
    top: 5%;
  }
}
`;

let currentCss = fs.readFileSync('src/app/globals.css', 'utf8');
if (!currentCss.includes('.partners-section')) {
  fs.writeFileSync('src/app/globals.css', currentCss + '\n' + cssToAdd);
  console.log('CSS added');
} else {
  console.log('CSS already exists');
}
