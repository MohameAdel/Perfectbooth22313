const fs = require('fs');
let css = fs.readFileSync('src/app/globals.css', 'utf8');

css = css.replace(
  /background-color: transparent;\s*color: var\(--pb-text\);\s*padding: 1rem 2rem;\s*font-weight: 600;\s*border: 1px solid rgba\(255, 255, 255, 0\.2\);/,
  'background-color: var(--pb-accent);\n  color: #1a1a1a;\n  padding: 1rem 2rem;\n  font-weight: 600;\n  border: 1px solid var(--pb-accent);'
);

css = css.replace(
  /\.ol-cta-button:hover \{\s*background-color: var\(--pb-primary\);\s*border-color: var\(--pb-primary\);\s*color: #ffffff;\s*\}/,
  '.ol-cta-button:hover {\n  background-color: transparent;\n  color: var(--pb-accent);\n}'
);

css = css.replace(
  /outline: 2px solid var\(--pb-primary\);/,
  'outline: 2px solid var(--pb-accent);'
);

if (!css.includes('[dir="rtl"] .ol-cta-icon')) {
  css += '\n[dir="rtl"] .ol-cta-icon {\n  transform: scaleX(-1);\n}\n';
}

fs.writeFileSync('src/app/globals.css', css);
console.log('CSS updated for solid button');
