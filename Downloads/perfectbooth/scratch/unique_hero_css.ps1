$cssFile = "src/app/globals.css"
$cssContent = Get-Content $cssFile -Raw

$newCSS = @"

/* === PB Hero 1 Unique Styles === */
.pb-hero-1-section {
  width: 100%;
  background-color: var(--pb-bg);
  min-height: clamp(560px, 38vw, 700px);
  position: relative;
  overflow: hidden;
  display: flex;
}

.pb-hero-1-container {
  display: flex;
  flex-direction: row;
  width: 100%;
  flex: 1;
}

/* --- Left Content Panel --- */
.pb-hero-1-content {
  flex: 0 0 42%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 4% 4% 4% 6%;
  background: linear-gradient(135deg, #0a0a0c 0%, #11151c 100%);
  position: relative;
  z-index: 2;
}

[dir="rtl"] .pb-hero-1-content {
  padding: 4% 6% 4% 4%;
}

.pb-hero-1-inner {
  max-width: 520px;
  width: 100%;
  margin: 0 auto;
}

.pb-hero-1-eyebrow {
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

.pb-hero-1-line {
  width: 24px;
  height: 2px;
  background-color: var(--pb-blue);
  display: inline-block;
}

.pb-hero-1-title {
  color: #ffffff;
  font-size: clamp(2rem, 3.5vw, 3rem);
  font-weight: 800;
  line-height: 1.2;
  margin-bottom: 1.25rem;
}

[dir="ltr"] .pb-hero-1-title {
  max-width: 15ch;
}

.pb-hero-1-desc {
  color: #a0a0a0;
  font-size: clamp(1rem, 1.25vw, 1.125rem);
  line-height: 1.6;
  max-width: 440px;
  margin-bottom: 2rem;
}

/* --- CTA --- */
.pb-hero-1-cta {
  margin-bottom: 2.5rem;
}

.pb-hero-1-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 44px;
  padding: 10px 24px;
  background-color: var(--pb-blue);
  color: #ffffff;
  font-weight: 600;
  font-size: 0.95rem;
  text-decoration: none;
  border-radius: 2px;
  transition: all 0.2s ease;
}

.pb-hero-1-btn:hover {
  background-color: #253d66;
}

/* --- Controls --- */
.pb-hero-1-controls {
  display: flex;
  align-items: center;
  gap: 20px;
}

.pb-hero-1-index {
  font-size: 0.85rem;
  color: #ffffff;
  display: flex;
  gap: 4px;
  font-weight: 500;
}

.pb-hero-1-total {
  color: rgba(255, 255, 255, 0.4);
}

.pb-hero-1-progress {
  width: 40px;
  height: 2px;
  background-color: rgba(255, 255, 255, 0.1);
  position: relative;
}

.pb-hero-1-fill {
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  width: 33%;
  background-color: var(--pb-blue);
}

[dir="rtl"] .pb-hero-1-fill {
  left: auto;
  right: 0;
}

.pb-hero-1-arrows {
  display: flex;
  gap: 8px;
}

.pb-hero-1-arrows button {
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
  transition: all 0.2s ease;
}

.pb-hero-1-arrows button:hover {
  background-color: rgba(255, 255, 255, 0.05);
  border-color: rgba(255, 255, 255, 0.3);
}

/* --- Image Panel --- */
.pb-hero-1-image {
  flex: 0 0 58%;
  background-color: #030405; /* Deep dark background */
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  border-left: 1px solid rgba(255, 255, 255, 0.05);
}

[dir="rtl"] .pb-hero-1-image {
  border-left: none;
  border-right: 1px solid rgba(255, 255, 255, 0.05);
}

/* --- Clean Entrance Animations --- */
.animate-slide-in-fix {
  opacity: 0;
  animation: fixFadeInLeft 0.5s ease-out forwards;
}

[dir="rtl"] .animate-slide-in-fix {
  animation: fixFadeInRightRtl 0.5s ease-out forwards;
}

.animate-fade-in-fix {
  opacity: 0;
  animation: fixImageFade 0.6s ease-out forwards;
}

@keyframes fixFadeInLeft {
  from { opacity: 0; transform: translateX(-10px); }
  to { opacity: 1; transform: translateX(0); }
}
@keyframes fixFadeInRightRtl {
  from { opacity: 0; transform: translateX(10px); }
  to { opacity: 1; transform: translateX(0); }
}
@keyframes fixImageFade {
  from { opacity: 0; }
  to { opacity: 1; }
}

/* --- Responsive --- */
@media (max-width: 1024px) {
  .pb-hero-1-content { flex: 0 0 44%; }
  .pb-hero-1-image { flex: 0 0 56%; }
}

@media (max-width: 768px) {
  .pb-hero-1-container {
    flex-direction: column;
  }
  .pb-hero-1-image {
    flex: none;
    width: 100%;
    height: 40vh; /* Fixed height for image area on mobile so it doesn't take up too much vertical space */
    order: 1;
    border: none;
  }
  .pb-hero-1-content {
    flex: none;
    width: 100%;
    order: 2;
    padding: 8% 5% 12% 5%;
  }
  [dir="rtl"] .pb-hero-1-content {
    padding: 8% 5% 12% 5%;
  }
}

@media (prefers-reduced-motion: reduce) {
  .animate-slide-in-fix, .animate-fade-in-fix {
    animation: none !important;
    opacity: 1 !important;
    transform: none !important;
  }
}
"@

Set-Content $cssFile ($cssContent + "`r`n" + $newCSS)
