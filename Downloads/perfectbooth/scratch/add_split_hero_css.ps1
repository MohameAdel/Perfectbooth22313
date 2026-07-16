$cssFile = "src/app/globals.css"
$cssContent = Get-Content $cssFile -Raw

# Remove the old 3D hero CSS we added previously
$cssContent = $cssContent -replace '(?s)/\* --- 3D Hero Banner Styles ---\*/.*', ''

$newCSS = @"

/* --- Split Hero Banner Styles --- */
.hero-split-section {
  width: 100%;
  min-height: calc(100vh - 80px); /* Adjust based on header height */
  background: linear-gradient(135deg, #0a0a0c 0%, #11151c 100%);
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;
}

.hero-split-container {
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100%;
  min-height: calc(100vh - 80px);
}

/* --- Left Content Panel --- */
.hero-content-panel {
  flex: 0 0 44%; /* 42-46% proportion */
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 8% 6% 8% 8%;
  position: relative;
  z-index: 10;
}

[dir="rtl"] .hero-content-panel {
  padding: 8% 8% 8% 6%;
}

.hero-content-inner {
  position: relative;
  z-index: 2;
  max-width: 500px;
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
  margin-bottom: 1.5rem;
}

.eyebrow-line {
  width: 30px;
  height: 2px;
  background-color: var(--pb-blue);
  display: inline-block;
}

.hero-title {
  color: #ffffff;
  font-size: clamp(2.5rem, 4vw, 3.5rem);
  font-weight: 800;
  line-height: 1.15;
  margin-bottom: 1.5rem;
}

[dir="ltr"] .hero-title {
  max-width: 14ch; /* Deliberate editorial line breaks for English */
}

.hero-description {
  color: rgba(255, 255, 255, 0.7);
  font-size: clamp(1rem, 1.5vw, 1.125rem);
  line-height: 1.7;
  max-width: 480px;
  margin-bottom: 2.5rem;
}

.hero-bg-number {
  position: absolute;
  top: 10%;
  left: 5%;
  font-size: 25vw;
  font-weight: 900;
  color: rgba(255, 255, 255, 0.02);
  line-height: 0.8;
  z-index: 0;
  pointer-events: none;
  user-select: none;
}

[dir="rtl"] .hero-bg-number {
  left: auto;
  right: 5%;
}

/* --- CTA Button --- */
.hero-cta-button {
  display: inline-flex;
  align-items: center;
  gap: 12px;
  min-height: 44px;
  padding: 12px 28px;
  background-color: var(--pb-blue);
  color: #ffffff;
  font-weight: 600;
  font-size: 1rem;
  text-decoration: none;
  border-radius: 2px;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
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
  position: absolute;
  bottom: 8%;
  left: 8%;
  display: flex;
  align-items: center;
  gap: 24px;
  z-index: 10;
}

[dir="rtl"] .hero-slider-controls {
  left: auto;
  right: 8%;
}

.slide-index {
  font-size: 0.9rem;
  color: #ffffff;
  display: flex;
  gap: 4px;
  font-weight: 500;
}

.total-index {
  color: rgba(255, 255, 255, 0.4);
}

.progress-line {
  width: 60px;
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
  border: 1px solid rgba(255, 255, 255, 0.1);
  color: #ffffff;
  border-radius: 2px;
  cursor: pointer;
  transition: all 0.2s ease;
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
  flex: 0 0 56%; /* 54-58% proportion */
  position: relative;
  z-index: 1;
  /* Subtle overlap */
  margin-left: -2%;
  clip-path: polygon(4% 0, 100% 0, 100% 100%, 0 100%);
}

[dir="rtl"] .hero-image-panel {
  margin-left: 0;
  margin-right: -2%;
  clip-path: polygon(0 0, 96% 0, 100% 100%, 0 100%);
}

.hero-image-wrapper {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
}

.hero-image-edge-gradient {
  position: absolute;
  inset: 0;
  background: linear-gradient(90deg, rgba(10, 10, 12, 0.4) 0%, transparent 15%);
  pointer-events: none;
}

[dir="rtl"] .hero-image-edge-gradient {
  background: linear-gradient(270deg, rgba(10, 10, 12, 0.4) 0%, transparent 15%);
}

/* --- 3D Entrance Animations --- */
.animate-slide-left {
  opacity: 0;
  transform: translateX(-30px);
  animation: slideInLeft 0.8s cubic-bezier(0.2, 0.8, 0.2, 1) forwards;
}

[dir="rtl"] .animate-slide-left {
  transform: translateX(30px);
  animation: slideInRightRtl 0.8s cubic-bezier(0.2, 0.8, 0.2, 1) forwards;
}

.animate-slide-right {
  opacity: 0;
  transform: translateX(50px) scale(1.05) perspective(1000px) rotateY(-2deg);
  animation: slideInRight 1.2s cubic-bezier(0.1, 0.7, 0.1, 1) forwards;
}

[dir="rtl"] .animate-slide-right {
  transform: translateX(-50px) scale(1.05) perspective(1000px) rotateY(2deg);
  animation: slideInLeftRtl 1.2s cubic-bezier(0.1, 0.7, 0.1, 1) forwards;
}

.animate-fade-in {
  opacity: 0;
  animation: fadeIn 1s ease forwards;
}

@keyframes slideInLeft {
  to { opacity: 1; transform: translateX(0); }
}
@keyframes slideInRightRtl {
  to { opacity: 1; transform: translateX(0); }
}
@keyframes slideInRight {
  to { opacity: 1; transform: translateX(0) scale(1) perspective(1000px) rotateY(0deg); }
}
@keyframes slideInLeftRtl {
  to { opacity: 1; transform: translateX(0) scale(1) perspective(1000px) rotateY(0deg); }
}
@keyframes fadeIn {
  to { opacity: 1; }
}

/* --- Responsive Layouts --- */

/* Tablet (768px - 1024px) */
@media (max-width: 1024px) {
  .hero-content-panel {
    flex: 0 0 50%;
    padding: 8% 4%;
  }
  .hero-image-panel {
    flex: 0 0 50%;
    margin: 0;
    clip-path: none;
  }
}

/* Mobile (<768px) */
@media (max-width: 768px) {
  .hero-split-container {
    flex-direction: column;
  }
  
  .hero-image-panel {
    flex: 0 0 45vh;
    width: 100%;
    order: 1; /* Image on top */
  }
  
  .hero-content-panel {
    flex: 1 0 auto;
    width: 100%;
    order: 2;
    padding: 10% 5% 20% 5%;
  }

  [dir="rtl"] .hero-content-panel {
    padding: 10% 5% 20% 5%;
  }
  
  .hero-title {
    font-size: clamp(2rem, 8vw, 2.5rem);
  }
  
  .hero-bg-number {
    top: 5%;
    font-size: 40vw;
  }
  
  .hero-slider-controls {
    bottom: 5%;
    left: 5%;
  }
  
  [dir="rtl"] .hero-slider-controls {
    right: 5%;
  }
}

/* Reduced Motion Override */
@media (prefers-reduced-motion: reduce) {
  .animate-slide-left, 
  .animate-slide-right,
  .animate-fade-in {
    animation: none !important;
    opacity: 1 !important;
    transform: none !important;
  }
}
"@

Set-Content $cssFile ($cssContent + "`r`n" + $newCSS)
