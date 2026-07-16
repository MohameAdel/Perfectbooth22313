$cssFile = "src/app/globals.css"
$cssContent = Get-Content $cssFile -Raw

$newCSS = @"

/* === FAQ Section === */
.faq-section {
  width: 100%;
  background-color: #0d0d0d; /* Very dark background from the image */
  padding: 6rem 5%;
  position: relative;
  font-family: 'Cairo', sans-serif;
}

.faq-container {
  max-width: 1300px; /* Wider container for the architectural look */
  margin: 0 auto;
  display: grid;
  grid-template-columns: minmax(0, 38%) minmax(0, 52%);
  justify-content: space-between;
  gap: 10%;
  align-items: start;
}

/* --- Intro Column --- */
.faq-intro {
  display: flex;
  flex-direction: column;
}

.faq-eyebrow {
  color: #cca95d; /* Gold color from the image */
  font-size: 0.8rem;
  font-weight: 700;
  letter-spacing: 2.5px;
  text-transform: uppercase;
  margin-bottom: 0.75rem;
}

.faq-eyebrow-line {
  width: 45px;
  height: 1px;
  background-color: #cca95d;
  margin-bottom: 2rem;
}

.faq-title {
  color: #fcfcfc;
  font-family: 'Playfair Display', 'Merriweather', 'Georgia', serif;
  font-size: clamp(2.5rem, 4vw, 3.5rem);
  font-weight: 500; /* Regular/Medium serif weight */
  line-height: 1.1;
  letter-spacing: -0.5px;
  margin-bottom: 2rem;
}

.faq-description {
  color: #888888;
  font-size: 0.95rem;
  line-height: 1.6;
  max-width: 90%;
}

/* --- Accordion --- */
.faq-content {
  width: 100%;
  padding-top: 2rem; /* Align slightly lower to match title baseline */
}

.faq-accordion-container {
  width: 100%;
}

.faq-accordion-item {
  border-top: 1px solid rgba(255, 255, 255, 0.05); /* Faint top border */
}

.faq-accordion-item:last-child {
  border-bottom: 1px solid rgba(255, 255, 255, 0.05); /* Faint bottom border for the last one */
}

.faq-accordion-trigger {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.5rem 0;
  background: transparent;
  border: none;
  color: #f0f0f0; /* Off-white question text */
  cursor: pointer;
  text-align: start;
  transition: color 0.2s ease;
}

.faq-accordion-trigger:hover,
.faq-accordion-trigger:focus-visible {
  color: #cca95d;
  outline: none;
}

.faq-accordion-trigger:focus-visible {
  box-shadow: inset 0 0 0 1px #cca95d;
}

.faq-accordion-question {
  font-size: 1rem;
  font-weight: 500;
  line-height: 1.4;
  padding-inline-end: 2rem;
}

.faq-accordion-icon {
  font-size: 1.2rem;
  font-weight: 300;
  color: #cca95d; /* Gold icon */
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20px;
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
  padding-bottom: 1.5rem;
  color: #a0a0a0;
  font-size: 0.95rem;
  line-height: 1.6;
  padding-inline-end: 3rem;
}

@media (prefers-reduced-motion: reduce) {
  .faq-accordion-panel {
    transition: none !important;
  }
}

/* --- Responsive --- */
@media (max-width: 1024px) {
  .faq-container {
    gap: 3rem;
    grid-template-columns: minmax(0, 42%) minmax(0, 58%);
  }
}

@media (max-width: 768px) {
  .faq-section {
    padding: 4rem 5%;
  }
  .faq-container {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
  .faq-eyebrow {
    margin-bottom: 0.5rem;
  }
  .faq-eyebrow-line {
    margin-bottom: 1.5rem;
  }
  .faq-title {
    margin-bottom: 1.5rem;
  }
  .faq-description {
    max-width: 100%;
  }
  .faq-content {
    padding-top: 0;
  }
  .faq-accordion-trigger {
    padding: 1.25rem 0;
  }
  .faq-accordion-question {
    font-size: 0.95rem;
    padding-inline-end: 1rem;
  }
  .faq-accordion-content {
    padding-bottom: 1.25rem;
    padding-inline-end: 1rem;
  }
}
"@

Set-Content $cssFile ($cssContent + "`r`n" + $newCSS)
