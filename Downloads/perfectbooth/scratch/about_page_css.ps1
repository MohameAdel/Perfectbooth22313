$fileToDelete = "src/components/home/AboutSection.tsx"
if (Test-Path $fileToDelete) {
    Remove-Item $fileToDelete -Force
}

$cssFile = "src/app/globals.css"
$cssContent = Get-Content $cssFile -Raw

$newCSS = @"

/* === ABOUT PAGE (NEW REDESIGN) === */

/* Section 1: Hero */
.about-page-hero {
  min-height: 85vh;
  padding: 8rem 5% 4rem 5%;
  background-color: var(--pb-bg);
  display: flex;
  align-items: center;
}

.about-hero-container {
  max-width: 1400px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  width: 100%;
}

.about-hero-content {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.about-hero-eyebrow {
  display: flex;
  align-items: center;
  gap: 1rem;
  font-size: 0.85rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 2px;
  color: var(--pb-blue);
  margin-bottom: 2rem;
}

.about-eyebrow-line {
  display: block;
  width: 40px;
  height: 2px;
  background-color: var(--pb-blue);
}

.about-hero-title {
  font-size: clamp(2.5rem, 5vw, 4rem);
  font-weight: 700;
  line-height: 1.1;
  margin-bottom: 1.5rem;
  color: var(--pb-text);
}

.about-hero-intro {
  font-size: clamp(1.1rem, 2vw, 1.25rem);
  line-height: 1.6;
  color: var(--pb-text-muted);
  margin-bottom: 2rem;
  max-width: 90%;
}

.about-hero-support {
  font-size: 1rem;
  font-weight: 500;
  color: #fff;
  margin-bottom: 3rem;
  padding-left: 1rem;
  border-left: 2px solid var(--pb-border-strong);
}

[dir="rtl"] .about-hero-support {
  padding-left: 0;
  padding-right: 1rem;
  border-left: none;
  border-right: 2px solid var(--pb-border-strong);
}

.about-hero-actions {
  display: flex;
  align-items: center;
  gap: 2rem;
  flex-wrap: wrap;
}

.about-hero-btn-primary {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 1rem 2rem;
  background-color: var(--pb-blue);
  color: #fff;
  font-weight: 600;
  border-radius: 4px;
  text-decoration: none;
  transition: opacity 0.3s ease;
  min-height: 44px;
}

.about-hero-btn-primary:hover {
  opacity: 0.9;
}

.about-hero-btn-secondary {
  color: var(--pb-text);
  font-weight: 500;
  text-decoration: none;
  position: relative;
  min-height: 44px;
  display: inline-flex;
  align-items: center;
}

.about-hero-btn-secondary::after {
  content: '';
  position: absolute;
  bottom: 5px;
  left: 0;
  width: 100%;
  height: 1px;
  background-color: var(--pb-text-muted);
  transform: scaleX(0);
  transform-origin: right;
  transition: transform 0.3s ease;
}

[dir="rtl"] .about-hero-btn-secondary::after {
  transform-origin: left;
}

.about-hero-btn-secondary:hover::after {
  transform: scaleX(1);
  transform-origin: left;
}

[dir="rtl"] .about-hero-btn-secondary:hover::after {
  transform-origin: right;
}

.about-hero-image {
  position: relative;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 20px 40px rgba(0,0,0,0.4);
}

/* Section 2: Approach */
.about-page-approach {
  padding: 8rem 5%;
  background-color: #030405;
  border-top: 1px solid rgba(255,255,255,0.05);
}

.about-approach-container {
  max-width: 1400px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 6rem;
}

.about-approach-sticky {
  position: relative;
}

.about-approach-sticky-inner {
  position: sticky;
  top: 8rem;
}

.about-approach-eyebrow {
  display: flex;
  align-items: center;
  gap: 1rem;
  font-size: 0.85rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 2px;
  color: var(--pb-blue);
  margin-bottom: 2rem;
}

.about-approach-title {
  font-size: clamp(2rem, 4vw, 3rem);
  font-weight: 700;
  line-height: 1.2;
  margin-bottom: 1.5rem;
  color: var(--pb-text);
}

.about-approach-intro {
  font-size: 1.1rem;
  line-height: 1.6;
  color: var(--pb-text-muted);
}

.about-approach-capabilities {
  display: flex;
  flex-direction: column;
}

.capability-row {
  display: flex;
  gap: 2rem;
  padding: 3rem 0;
  border-bottom: 1px solid rgba(255,255,255,0.1);
}

.capability-row:first-child {
  padding-top: 0;
}

.capability-number {
  font-size: 1.5rem;
  font-weight: 400;
  color: var(--pb-blue);
  opacity: 0.8;
  font-family: monospace;
}

.capability-content {
  flex: 1;
}

.capability-title {
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 1rem;
  color: var(--pb-text);
}

.capability-desc {
  font-size: 1rem;
  line-height: 1.6;
  color: var(--pb-text-muted);
}

.about-approach-closing {
  margin-top: 5rem;
  padding: 4rem;
  background-color: rgba(255,255,255,0.02);
  border-radius: 8px;
  border: 1px solid rgba(255,255,255,0.05);
}

.closing-heading {
  font-size: 2rem;
  font-weight: 600;
  margin-bottom: 1rem;
}

.closing-desc {
  font-size: 1rem;
  line-height: 1.6;
  color: var(--pb-text-muted);
  margin-bottom: 2rem;
}

.closing-btn {
  background-color: transparent;
  border: 1px solid var(--pb-blue);
  color: var(--pb-blue);
}

.closing-btn:hover {
  background-color: var(--pb-blue);
  color: #fff;
}

/* Mobile Adjustments */
@media (max-width: 1024px) {
  .about-hero-container,
  .about-approach-container {
    grid-template-columns: 1fr;
    gap: 3rem;
  }

  .about-hero-image {
    order: -1; /* Image above text on mobile */
    margin-bottom: 1rem;
  }

  .about-page-hero {
    padding-top: 6rem;
  }

  .about-approach-sticky-inner {
    position: static;
  }

  .about-approach-closing {
    padding: 2rem;
  }
}
"@

Set-Content $cssFile ($cssContent + "`r`n" + $newCSS)
