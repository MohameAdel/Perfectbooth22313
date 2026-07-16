$cssFile = "src/app/globals.css"
$cssContent = Get-Content $cssFile -Raw

# Remove any previous FAQ Section
$cssContent = $cssContent -replace '(?s)/\* === FAQ Section === \*/.*', ''

$newCSS = @"

/* === FAQ Section === */
.faq-section {
  width: 100%;
  background-color: #000000; /* They use pure var(--black) which is often #000 or very close */
  padding: 90px 0;
  position: relative;
}

.faq-container {
  max-width: 1300px;
  margin: 0 auto;
  padding: 0 5%;
  display: grid;
  grid-template-columns: 0.85fr 1.15fr; /* Exact ratio from the site */
  gap: 64px; /* Exact gap */
  align-items: start;
}

/* --- Intro Column --- */
.faq-intro {
  display: flex;
  flex-direction: column;
}

.faq-eyebrow {
  color: #cca95d;
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 4px;
  text-transform: uppercase;
  text-align: left;
}

[dir="rtl"] .faq-eyebrow {
  text-align: right;
}

.faq-eyebrow-line {
  width: 60px;
  height: 1px;
  background-color: #cca95d;
  margin: 20px 0;
}

.faq-title {
  color: #ffffff;
  font-family: 'Cormorant Garamond', 'Playfair Display', serif;
  font-size: clamp(34px, 3.4vw, 52px);
  font-weight: 700;
  line-height: 1.12;
  margin-bottom: 18px;
}

.faq-description {
  color: #a0a0a0; /* Gray light */
  font-size: 15px;
  font-weight: 300;
  line-height: 1.8;
}

/* --- Accordion --- */
.faq-content {
  width: 100%;
}

.faq-accordion-container {
  width: 100%;
  border-top: 1px solid rgba(204, 169, 93, 0.4); /* Gold border top */
}

.faq-accordion-item {
  border-bottom: 1px solid rgba(255, 255, 255, 0.08); /* White faint border bottom */
}

.faq-accordion-trigger {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 22px 0;
  background: transparent;
  border: none;
  color: #ffffff;
  cursor: pointer;
  text-align: start;
  transition: color 0.3s ease;
  gap: 24px;
}

.faq-accordion-trigger:hover,
.faq-accordion-trigger:focus-visible {
  color: #cca95d;
  outline: none;
}

.faq-accordion-question {
  font-size: 17px;
  font-weight: 500;
  line-height: 1.4;
}

.faq-accordion-icon {
  font-size: 24px;
  font-weight: 400;
  color: #cca95d;
  font-family: Impact, sans-serif; /* They use var(--font-impact) for the plus sign */
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  line-height: 1;
}

.faq-accordion-panel {
  display: grid;
  grid-template-rows: 0fr;
  transition: grid-template-rows 0.3s ease-out;
  overflow: hidden;
}

.faq-accordion-panel.open {
  grid-template-rows: 1fr;
}

.faq-accordion-content {
  min-height: 0;
  padding-bottom: 22px;
  color: #a0a0a0;
  font-size: 15px;
  line-height: 1.75;
  max-width: 760px;
}

@media (prefers-reduced-motion: reduce) {
  .faq-accordion-panel {
    transition: none !important;
  }
}

/* --- Responsive --- */
@media (max-width: 1024px) {
  .faq-container {
    grid-template-columns: 1fr;
    gap: 36px;
  }
}

@media (max-width: 768px) {
  .faq-section {
    padding: 80px 0;
  }
  .faq-container {
    padding: 0 24px;
  }
}
"@

Set-Content $cssFile ($cssContent + "`r`n" + $newCSS)
