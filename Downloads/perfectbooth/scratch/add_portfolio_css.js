const fs = require('fs');

const cssToAdd = `
/* Selected Projects / Portfolio Section */
.portfolio-section {
  padding: 5rem 0 5rem 5%;
  background-color: var(--pb-bg);
  overflow: hidden;
}

[dir="rtl"] .portfolio-section {
  padding: 5rem 5% 5rem 0;
}

.portfolio-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin-bottom: 3rem;
  padding-inline-end: 5%;
}

.portfolio-eyebrow {
  color: var(--pb-accent);
  font-size: 0.9rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 2px;
  margin-bottom: 0.5rem;
}

.portfolio-title {
  color: var(--pb-text);
  font-size: 2.5rem;
  font-weight: 700;
}

.portfolio-scroll-hint {
  color: var(--pb-text-muted);
  font-size: 0.9rem;
  font-style: italic;
}

[dir="rtl"] .portfolio-scroll-hint {
  transform: scaleX(-1);
  display: inline-block;
}

.portfolio-track {
  display: flex;
  gap: 2rem;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  padding-bottom: 2rem;
  /* Hide scrollbar for clean editorial look */
  -ms-overflow-style: none;  /* IE and Edge */
  scrollbar-width: none;  /* Firefox */
}

.portfolio-track::-webkit-scrollbar {
  display: none;
}

.portfolio-item {
  flex: 0 0 70vw; /* Wide cinematic cards */
  max-width: 900px;
  scroll-snap-align: start;
  position: relative;
  border-radius: 8px;
  overflow: hidden;
}

.portfolio-img-wrapper {
  position: relative;
  width: 100%;
  aspect-ratio: 16 / 9;
  background-color: var(--pb-surface);
  overflow: hidden;
}

.portfolio-img {
  object-fit: cover;
  transition: transform 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}

.portfolio-item:hover .portfolio-img {
  transform: scale(1.05);
}

.portfolio-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(to top, rgba(0,0,0,0.8) 0%, transparent 50%);
  display: flex;
  align-items: flex-end;
  padding: 2.5rem;
  opacity: 0.9;
  transition: opacity 0.3s ease;
}

.portfolio-item:hover .portfolio-overlay {
  opacity: 1;
}

.portfolio-item-title {
  color: #fff;
  font-size: 1.8rem;
  font-weight: 700;
  letter-spacing: 1px;
  transform: translateY(10px);
  transition: transform 0.4s ease;
}

.portfolio-item:hover .portfolio-item-title {
  transform: translateY(0);
}

@media (max-width: 768px) {
  .portfolio-header {
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;
  }
  
  .portfolio-item {
    flex: 0 0 85vw;
  }
  
  .portfolio-img-wrapper {
    aspect-ratio: 4 / 3;
  }
  
  .portfolio-item-title {
    font-size: 1.4rem;
    padding: 1.5rem;
  }
}
`;

let currentCss = fs.readFileSync('src/app/globals.css', 'utf8');
if (!currentCss.includes('.portfolio-section')) {
  fs.writeFileSync('src/app/globals.css', currentCss + '\n' + cssToAdd);
  console.log('CSS added');
} else {
  console.log('CSS already exists');
}
