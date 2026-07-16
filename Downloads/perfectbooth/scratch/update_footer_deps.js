const fs = require('fs');

// 1. Update globals.css
let css = fs.readFileSync('src/app/globals.css', 'utf8');
const footerCss = `
/* --- Premium Global Footer --- */
.pb-footer {
  background-color: var(--pb-bg);
  color: var(--pb-text);
  border-top: 1px solid var(--pb-divider);
  position: relative;
  overflow: hidden;
}

.footer-cta {
  padding: 6rem 5%;
  text-align: center;
  background: linear-gradient(135deg, rgba(20, 24, 30, 0.8), rgba(9, 10, 12, 1));
  border-bottom: 1px solid var(--pb-divider);
  position: relative;
}

.footer-cta::before {
  content: '';
  position: absolute;
  top: 0; left: 0; right: 0; bottom: 0;
  background: radial-gradient(circle at center, rgba(197, 143, 45, 0.05) 0%, transparent 70%);
  pointer-events: none;
}

.footer-cta h2 {
  font-size: 3.5rem;
  font-weight: 700;
  margin-bottom: 2rem;
  color: #fff;
  letter-spacing: -1px;
}

.footer-cta .cta-btn {
  display: inline-block;
  padding: 1rem 3rem;
  background-color: transparent;
  color: var(--pb-accent);
  border: 2px solid var(--pb-accent);
  font-size: 1.1rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 2px;
  transition: all 0.4s ease;
}

.footer-cta .cta-btn:hover {
  background-color: var(--pb-accent);
  color: #fff;
  box-shadow: 0 10px 20px rgba(197, 143, 45, 0.2);
  transform: translateY(-3px);
}

.footer-main {
  padding: 5rem 5%;
}

.footer-grid {
  display: grid;
  grid-template-columns: 2fr 1fr 1fr;
  gap: 4rem;
  max-width: 1400px;
  margin: 0 auto;
}

.footer-col {
  display: flex;
  flex-direction: column;
}

.footer-col h3 {
  font-size: 1.3rem;
  font-weight: 600;
  margin-bottom: 2rem;
  color: #fff;
  position: relative;
  display: inline-block;
}

.footer-col h3::after {
  content: '';
  position: absolute;
  bottom: -10px;
  inset-inline-start: 0;
  width: 40px;
  height: 2px;
  background-color: var(--pb-accent);
}

.footer-desc {
  color: var(--pb-text-soft);
  line-height: 1.8;
  margin: 1.5rem 0;
  font-size: 1.05rem;
  max-width: 400px;
}

.footer-links {
  list-style: none;
  padding: 0;
  margin: 0;
}

.footer-links li {
  margin-bottom: 1rem;
}

.footer-links a {
  color: var(--pb-text-soft);
  transition: all 0.3s ease;
  display: inline-flex;
  align-items: center;
}

.footer-links a:hover {
  color: var(--pb-accent);
  transform: translateX(5px);
}

[dir='rtl'] .footer-links a:hover {
  transform: translateX(-5px);
}

.footer-contact-item {
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  margin-bottom: 1.5rem;
  color: var(--pb-text-soft);
}

.footer-contact-item i {
  color: var(--pb-accent);
  font-size: 1.2rem;
  margin-top: 5px;
}

.footer-legal {
  padding: 2rem 5%;
  border-top: 1px solid var(--pb-divider);
  background-color: #050505;
}

.legal-inner {
  max-width: 1400px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: var(--pb-text-muted);
  font-size: 0.9rem;
}

@media (max-width: 991px) {
  .footer-grid {
    grid-template-columns: 1fr 1fr;
  }
}

@media (max-width: 768px) {
  .footer-cta h2 {
    font-size: 2.2rem;
  }
  .footer-grid {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
  .legal-inner {
    flex-direction: column;
    gap: 1rem;
    text-align: center;
  }
}
`;

if (!css.includes('.pb-footer {')) {
  fs.writeFileSync('src/app/globals.css', css + '\n' + footerCss);
}

// 2. Update messages/en.json
let en = JSON.parse(fs.readFileSync('messages/en.json', 'utf8'));
en.Footer = {
  "ctaTitle": "Have an Event in Mind?",
  "ctaButton": "Contact Us",
  "description": "Perfect Booth provides premium event solutions, exhibition stand design, and on-site operations across Egypt.",
  "navTitle": "Quick Links",
  "contactTitle": "Contact Info",
  "copyright": "© 2026 Perfect Booth. All rights reserved.",
  "address": "Cairo, Egypt",
  "phone": "+20 123 456 7890",
  "email": "info@perfectbooth.com"
};
fs.writeFileSync('messages/en.json', JSON.stringify(en, null, 2));

// 3. Update messages/ar.json
let ar = JSON.parse(fs.readFileSync('messages/ar.json', 'utf8'));
ar.Footer = {
  "ctaTitle": "هل تفكر في إقامة فعالية؟",
  "ctaButton": "تواصل معنا",
  "description": "تقدم بيرفكت بوث حلولاً متكاملة للفعاليات، وتصميم أجنحة المعارض، والعمليات الميدانية في جميع أنحاء مصر.",
  "navTitle": "روابط سريعة",
  "contactTitle": "معلومات التواصل",
  "copyright": "© 2026 بيرفكت بوث. جميع الحقوق محفوظة.",
  "address": "القاهرة، مصر",
  "phone": "+20 123 456 7890",
  "email": "info@perfectbooth.com"
};
fs.writeFileSync('messages/ar.json', JSON.stringify(ar, null, 2));
console.log('Styles and Translations Updated');
