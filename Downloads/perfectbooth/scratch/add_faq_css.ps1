$cssFile = "src/app/globals.css"
$cssContent = Get-Content $cssFile -Raw

$newCSS = @"

/* === FAQ Section === */
.faq-section {
  width: 100%;
  background-color: #050608; /* Near-black */
  padding: 8rem 5%;
  position: relative;
}

.faq-container {
  max-width: 1440px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: minmax(0, 40%) minmax(0, 60%);
  gap: 4rem;
  align-items: start;
}

/* --- Intro Column --- */
.faq-intro {
  display: flex;
  flex-direction: column;
}

.faq-eyebrow {
  display: inline-flex;
  align-items: center;
  gap: 12px;
  color: var(--pb-blue, #cca95d); /* Using fallback if variable not set */
  font-size: 0.85rem;
  font-weight: 600;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  margin-bottom: 1.5rem;
}

.faq-eyebrow-line {
  width: 24px;
  height: 2px;
  background-color: currentColor;
  display: inline-block;
}

.faq-title {
  color: #ffffff;
  font-size: clamp(2rem, 3.5vw, 3rem);
  font-weight: 800;
  line-height: 1.2;
  margin-bottom: 1.5rem;
  max-width: 18ch;
}

.faq-description {
  color: #a0a0a0;
  font-size: clamp(1rem, 1.15vw, 1.125rem);
  line-height: 1.6;
  max-width: 440px;
}

/* --- Accordion --- */
.faq-content {
  width: 100%;
}

.faq-accordion-container {
  width: 100%;
}

.faq-accordion-top-divider {
  width: 100%;
  height: 1px;
  background-color: rgba(255, 255, 255, 0.08);
}

.faq-accordion-item {
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
}

.faq-accordion-trigger {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.75rem 0;
  background: transparent;
  border: none;
  color: #ffffff;
  cursor: pointer;
  text-align: start;
  transition: color 0.2s ease;
}

.faq-accordion-trigger:hover,
.faq-accordion-trigger:focus-visible {
  color: var(--pb-blue, #e6b965);
  outline: none;
}

.faq-accordion-trigger:focus-visible {
  box-shadow: 0 0 0 2px var(--pb-blue, #e6b965);
  border-radius: 4px;
}

.faq-accordion-question {
  font-size: clamp(1.1rem, 1.2vw, 1.25rem);
  font-weight: 600;
  line-height: 1.4;
  padding-inline-end: 2rem;
}

.faq-accordion-icon {
  font-size: 1.5rem;
  font-weight: 400;
  color: var(--pb-blue, #cca95d);
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
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
  padding-bottom: 1.75rem;
  color: #a0a0a0;
  font-size: 1rem;
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
  }
}

@media (max-width: 768px) {
  .faq-section {
    padding: 5rem 5%;
  }
  .faq-container {
    grid-template-columns: 1fr;
    gap: 2.5rem;
  }
  .faq-eyebrow {
    margin-bottom: 1rem;
  }
  .faq-title {
    margin-bottom: 1rem;
    max-width: 100%;
  }
  .faq-description {
    max-width: 100%;
  }
  .faq-accordion-trigger {
    padding: 1.5rem 0;
  }
  .faq-accordion-question {
    padding-inline-end: 1rem;
  }
  .faq-accordion-content {
    padding-bottom: 1.5rem;
    padding-inline-end: 1rem;
  }
}
"@

Set-Content $cssFile ($cssContent + "`r`n" + $newCSS)
