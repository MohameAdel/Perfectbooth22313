const fs = require('fs');

const cssToAdd = `
/* Why Perfect Booth Section */
.why-pb-section {
  padding: 5rem 5%;
  background-color: var(--pb-bg);
  position: relative;
  overflow: hidden;
}

.why-pb-section::before {
  content: '';
  position: absolute;
  inset: 0;
  background-image: radial-gradient(circle at center, var(--pb-bg-soft) 0%, transparent 70%);
  opacity: 0.5;
  pointer-events: none;
}

.why-pb-container {
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
}

.why-pb-header {
  text-align: center;
  margin-bottom: 4rem;
}

.why-pb-eyebrow {
  color: var(--pb-text-muted);
  font-size: 0.9rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 2px;
  margin-bottom: 1rem;
}

.why-pb-title {
  color: var(--pb-text);
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
}

.why-pb-wavy-line {
  display: flex;
  justify-content: center;
  margin-bottom: 1.5rem;
}

.why-pb-description {
  color: var(--pb-text-soft);
  max-width: 800px;
  margin: 0 auto;
  font-size: 1.1rem;
  line-height: 1.8;
}

.why-pb-grid {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  position: relative;
  gap: 2rem;
}

.why-pb-connecting-line {
  position: absolute;
  top: 40px; /* center of the 80px icon wrapper */
  left: 10%;
  right: 10%;
  height: 1px;
  border-top: 1px dashed var(--pb-border-strong);
  z-index: 0;
}

.why-pb-item {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  position: relative;
  z-index: 1;
}

.why-pb-icon-wrapper {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background-color: var(--pb-surface);
  border: 1px solid var(--pb-border-strong);
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--pb-text);
  margin-bottom: 1.5rem;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
}

.why-pb-item-title {
  color: var(--pb-accent);
  font-size: 1.25rem;
  font-weight: 700;
}

@media (max-width: 768px) {
  .why-pb-grid {
    flex-direction: column;
    align-items: center;
    gap: 3rem;
  }
  
  .why-pb-connecting-line {
    display: none;
  }
  
  .why-pb-title {
    font-size: 2rem;
  }
}
`;

let currentCss = fs.readFileSync('src/app/globals.css', 'utf8');
if (!currentCss.includes('.why-pb-section')) {
  fs.writeFileSync('src/app/globals.css', currentCss + '\n' + cssToAdd);
  console.log('CSS added');
} else {
  console.log('CSS already exists');
}
