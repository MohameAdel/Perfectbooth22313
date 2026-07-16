const fs = require('fs');

let cl = fs.readFileSync('src/components/home/ContactLocationSection.tsx', 'utf8');
cl = cl.replace(/href=\{`\/\$\{locale\}\/contact`\}/g, "href={`/${locale}/contact`}");
cl = cl.replace(/href=\{`mailto:\$\{t\('email'\)\}`\}/g, "href={`mailto:${t('email')}`}");
cl = cl.replace(/href=\{`tel:\$\{t\('phone'\)\}`\}/g, "href={`tel:${t('phone')}`}");
// Ah wait, it's actually written as: href={\`/\${locale}/contact\`} inside the file!
// So it literally has a backslash before the backtick and dollar sign.
cl = cl.replace(/\\`/g, "`");
cl = cl.replace(/\\\$/g, "$");

fs.writeFileSync('src/components/home/ContactLocationSection.tsx', cl);

let ps = fs.readFileSync('src/components/home/PartnersSection.tsx', 'utf8');
ps = ps.replace(/\\`/g, "`");
ps = ps.replace(/\\\$/g, "$");
fs.writeFileSync('src/components/home/PartnersSection.tsx', ps);
console.log('Fixed.');
