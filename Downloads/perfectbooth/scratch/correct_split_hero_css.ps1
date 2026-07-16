$cssFile = "src/app/globals.css"
$cssContent = Get-Content $cssFile -Raw

# Remove the old split hero CSS
$cssContent = $cssContent -replace '(?s)/\* --- Split Hero Banner Styles ---\*/.*', ''

$newCSS = @"

/* --- Corrected Split Hero Banner Styles --- */
.hero-split-section {
  width: 100%;
  background-color: var(--pb-bg); /* near-black */
  position: relative;
  overflow: hidden;
}

.hero-split-container {
  display: flex;
  flex-direction: row;
  width: 100%;
  align-items: center; /* Center content vertically with image */
  background: linear-gradient(135deg, rgba(10,10,12,1) 0%, rgba(13,20,33,1) 100%); /* Restrained dark blue brand gradient */
}

/* --- Left Content Panel --- */
.hero-content-panel {
  flex: 0 0 42%; /* ~40-42% proportion */
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 5% 4% 5% 8%;
  position: relative;
  z-index: 10;
}

[dir="rtl"] .hero-content-panel {
  padding: 5% 8% 5% 4%;
}

.hero-content-inner {
  position: relative;
  z-index: 2;
  max-width: 520px;
}

.hero-eyebrow {
  display: inline-flex;
  align-items: center;
  gap: 12px;
  color: var(--pb-blue);
  font-size: 0.85rem;
  font-weight: 600;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  margin-bottom: 1rem;
}

.eyebrow-line {
  width: 24px;
  height: 2px;
  background-color: var(--pb-blue);
  display: inline-block;
}

.hero-title {
  color: #ffffff;
  font-size: clamp(2rem, 3.5vw, 3rem); /* Slightly reduced size */
  font-weight: 800;
  line-height: 1.2;
  margin-bottom: 1.25rem;
}

[dir="ltr"] .hero-title {
  max-width: 15ch; /* Balanced line breaks */
}

.hero-description {
  color: #a0a0a0; /* soft-gray */
  font-size: clamp(1rem, 1.25vw, 1.125rem);
  line-height: 1.6;
  max-width: 440px;
  margin-bottom: 2rem;
}

/* --- CTA Button --- */
.hero-cta-wrapper {
  margin-bottom: 2.5rem;
}

.hero-cta-button {
  display: inline-flex;
  align-items: center;
  gap: 12px;
  min-height: 44px;
  padding: 10px 24px;
  background-color: var(--pb-blue);
  color: #ffffff;
  font-weight: 600;
  font-size: 0.95rem;
  text-decoration: none;
  border-radius: 2px; /* minimal border radius */
  transition: all 0.2s ease;
  position: relative;
}

.hero-cta-button:hover {
  background-color: #253d66;
}

.hero-cta-button:focus-visible {
  outline: 2px solid #ffffff;
  outline-offset: 4px;
}

/* --- Slider Controls --- */
.hero-slider-controls {
  display: flex;
  align-items: center;
  gap: 20px;
}

.slide-index {
  font-size: 0.85rem;
  color: #ffffff;
  display: flex;
  gap: 4px;
  font-weight: 500;
}

.total-index {
  color: rgba(255, 255, 255, 0.4);
}

.progress-line {
  width: 40px;
  height: 2px;
  background-color: rgba(255, 255, 255, 0.1);
  position: relative;
}

.progress-fill {
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  width: 33%;
  background-color: var(--pb-blue);
}

[dir="rtl"] .progress-fill {
  left: auto;
  right: 0;
}

.nav-arrows-group {
  display: flex;
  gap: 8px;
}

.nav-arrow {
  width: 44px;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  border: 1px solid rgba(255, 255, 255, 0.15);
  color: #ffffff;
  border-radius: 2px;
  cursor: pointer;
  transition: background-color 0.2s, border-color 0.2s;
}

.nav-arrow:hover {
  background-color: rgba(255, 255, 255, 0.05);
  border-color: rgba(255, 255, 255, 0.3);
}

.nav-arrow:focus-visible {
  outline: 2px solid var(--pb-blue);
}

/* --- Right Image Panel --- */
.hero-image-panel {
  flex: 0 0 58%; /* ~58-60% proportion */
  position: relative;
  z-index: 1;
  background-color: #000; /* Dark background behind image */
  border-left: 1px solid rgba(255, 255, 255, 0.05); /* Clean, subtle straight split divider */
}

[dir="rtl"] .hero-image-panel {
  border-left: none;
  border-right: 1px solid rgba(255, 255, 255, 0.05);
}

.hero-image-wrapper {
  width: 100%;
  /* Image uses natural height, no artificial cropping */
  display: flex;
}

/* --- Clean Entrance Animations --- */
.animate-slide-in {
  opacity: 0;
  transform: translateX(-20px);
  animation: simpleFadeInLeft 0.6s ease-out forwards;
}

[dir="rtl"] .animate-slide-in {
  transform: translateX(20px);
  animation: simpleFadeInRightRtl 0.6s ease-out forwards;
}

.animate-fade-in-image {
  opacity: 0;
  transform: translateX(30px); /* Small horizontal translation only, no scale/rotate */
  animation: imageFadeIn 1s ease-out forwards;
}

[dir="rtl"] .animate-fade-in-image {
  transform: translateX(-30px);
  animation: imageFadeInRtl 1s ease-out forwards;
}

@keyframes simpleFadeInLeft {
  to { opacity: 1; transform: translateX(0); }
}
@keyframes simpleFadeInRightRtl {
  to { opacity: 1; transform: translateX(0); }
}
@keyframes imageFadeIn {
  to { opacity: 1; transform: translateX(0); }
}
@keyframes imageFadeInRtl {
  to { opacity: 1; transform: translateX(0); }
}

/* --- Responsive Layouts --- */

/* Tablet (768px - 1024px) */
@media (max-width: 1024px) {
  .hero-content-panel {
    flex: 0 0 44%;
    padding: 6% 4%;
  }
  .hero-image-panel {
    flex: 0 0 56%;
  }
}

/* Mobile (<768px) */
@media (max-width: 768px) {
  .hero-split-container {
    flex-direction: column;
    align-items: stretch;
  }
  
  .hero-image-panel {
    flex: none;
    width: 100%;
    order: 1; /* Image stacked on top */
    border: none;
  }
  
  .hero-content-panel {
    flex: none;
    width: 100%;
    order: 2;
    padding: 8% 5% 12% 5%;
  }

  [dir="rtl"] .hero-content-panel {
    padding: 8% 5% 12% 5%;
  }
  
  .hero-title {
    font-size: clamp(1.75rem, 6vw, 2.25rem);
  }
}

/* Reduced Motion Override */
@media (prefers-reduced-motion: reduce) {
  .animate-slide-in, 
  .animate-fade-in-image {
    animation: none !important;
    opacity: 1 !important;
    transform: none !important;
  }
}
"@

Set-Content $cssFile ($cssContent + "`r`n" + $newCSS)
