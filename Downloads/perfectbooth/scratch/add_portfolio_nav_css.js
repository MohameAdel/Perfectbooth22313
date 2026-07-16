const fs = require('fs');

const cssToAdd = `
/* Portfolio Navigation Buttons */
.portfolio-actions {
  display: flex;
  align-items: center;
}

.portfolio-nav-buttons {
  display: flex;
  gap: 1.5rem;
  /* Margin to account for the rotation bounding box */
  margin-inline-end: 10px;
}

.portfolio-nav-btn {
  width: 48px;
  height: 48px;
  background-color: transparent;
  border: 1px solid var(--pb-accent);
  color: var(--pb-accent);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  /* Diamond shape */
  transform: rotate(45deg);
  transition: all 0.3s ease;
  border-radius: 4px; /* Slight rounding for diamond edges */
}

.portfolio-nav-btn svg {
  /* Counter rotate the icon so it's straight */
  transform: rotate(-45deg);
  transition: transform 0.3s ease;
}

.portfolio-nav-btn:hover {
  background-color: var(--pb-surface-raised);
  box-shadow: 0 0 15px rgba(197, 143, 45, 0.2); /* Matching the new accent color #c58f2d */
}

.portfolio-nav-btn:hover svg {
  /* Keep counter-rotation and add slight movement based on arrow direction */
  /* This would require specific classes for next/prev to move in right direction */
}

/* Adjust layout on small screens */
@media (max-width: 768px) {
  .portfolio-actions {
    width: 100%;
    justify-content: flex-end;
    margin-top: 1rem;
  }
}
`;

let currentCss = fs.readFileSync('src/app/globals.css', 'utf8');
if (!currentCss.includes('.portfolio-nav-buttons')) {
  // Replace the old portfolio-actions block if it had only scroll hint styling
  fs.writeFileSync('src/app/globals.css', currentCss + '\n' + cssToAdd);
  console.log('CSS added');
} else {
  console.log('CSS already exists');
}
