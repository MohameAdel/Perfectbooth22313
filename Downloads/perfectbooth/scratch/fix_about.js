const fs = require('fs');

// 1. Update AboutSection.tsx
let tsx = fs.readFileSync('src/components/home/AboutSection.tsx', 'utf8');

// Replace wave stroke
tsx = tsx.replace(/stroke="var\(--pb-primary\)"/g, 'stroke="var(--pb-primary-light)"');

// Replace circle styling
tsx = tsx.replace(
  /border: '2px solid var\(--pb-primary\)', borderRadius: '50%', display: 'flex', justifyContent: 'center', alignItems: 'center', color: 'var\(--pb-primary\)'/,
  "border: '1px solid var(--pb-border-strong)', borderRadius: '50%', display: 'flex', justifyContent: 'center', alignItems: 'center', color: 'var(--pb-text-muted)'"
);

fs.writeFileSync('src/components/home/AboutSection.tsx', tsx);


// 2. Update globals.css
let css = fs.readFileSync('src/app/globals.css', 'utf8');

// Update typography
css = css.replace(/\.about-subtitle\s*\{[^}]*color:\s*var\(--pb-accent\);/g, '.about-subtitle {\n    color: var(--pb-text-muted);');
css = css.replace(/\.about-description\s*\{[^}]*color:\s*#ccc;/g, '.about-description {\n    font-size: 1rem;\n    line-height: 1.8;\n    color: var(--pb-text-soft);\n    margin-bottom: 1.5rem;\n');

// The original .about-title has no color property, so we can inject it.
css = css.replace(/\.about-title\s*\{/g, '.about-title {\n    color: var(--pb-text);');

// Update .media-frame
css = css.replace(/\.media-frame\s*\{[^}]*background-color:\s*var\(--pb-primary\);/g, '.media-frame {\n    position: relative;\n    padding: 20px;\n    background-color: var(--pb-surface-raised);\n    border: 1px solid var(--pb-border);');

// Update .play-button
css = css.replace(/\.play-button\s*\{[^}]*background-color:\s*var\(--pb-primary\);[^}]*color:\s*white;/g, '.play-button {\n    position: absolute;\n    inset-inline-end: 20px;\n    top: 50%;\n    transform: translateY(-50%);\n    width: 50px;\n    height: 50px;\n    background-color: var(--pb-primary-light);\n    border: 1px solid var(--pb-border-strong);\n    border-radius: 50%;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    color: var(--pb-bg);');

// Remove pattern from .services-section
css = css.replace(/background-image:\s*repeating-linear-gradient[^;]+;/g, '');
css = css.replace(/background-position:\s*[^;]+;/g, '');

fs.writeFileSync('src/app/globals.css', css);

console.log('Fixed About section styles.');
