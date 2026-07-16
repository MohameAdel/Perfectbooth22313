$cssFile = "src/app/globals.css"
$cssContent = Get-Content $cssFile -Raw

$newCSS = @"

/* --- 3D Hero Banner Styles --- */
.hero-3d-wrapper {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  perspective: 1500px; /* Key for 3D */
  z-index: 1;
}

.hero-3d-scene {
  position: relative;
  width: 100%;
  height: 100%;
  transform-style: preserve-3d;
  transition: transform 0.1s ease-out; /* Smooth follow */
}

.parallax-active .hero-3d-scene {
  transform: rotateX(calc(var(--mouse-y, 0) * -3deg)) rotateY(calc(var(--mouse-x, 0) * 3deg));
}

.hero-3d-layer {
  position: absolute;
  inset: -5%; /* Slightly larger to prevent edge clipping on rotate */
  width: 110%;
  height: 110%;
  transform-style: preserve-3d;
}

.hero-bg-layer {
  transform: translateZ(calc(var(--depth, -50px)));
  z-index: 1;
}

.hero-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(90deg, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.5) 40%, rgba(0,0,0,0.1) 100%);
  z-index: 2;
  pointer-events: none;
}

[dir="rtl"] .hero-overlay {
  background: linear-gradient(270deg, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.5) 40%, rgba(0,0,0,0.1) 100%);
}

.hero-content-layer {
  transform: translateZ(calc(var(--depth, 50px)));
  z-index: 3;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 0 8%;
}

[dir="rtl"] .hero-content-layer {
  justify-content: flex-start;
}

.hero-content-wrapper {
  max-width: 600px;
  /* Moved slightly down to avoid BY PERFECT BOOTH */
  margin-top: 5vh;
  position: relative;
}

.hero-title {
  color: #ffffff;
  font-size: clamp(2rem, 5vw, 4rem);
  font-weight: 800;
  line-height: 1.1;
  margin-bottom: 1.5rem;
  position: relative;
  text-shadow: 0 4px 12px rgba(0,0,0,0.3);
}

.hero-title-shadow {
  position: absolute;
  left: 2px;
  top: 2px;
  color: var(--pb-blue);
  opacity: 0.4;
  z-index: -1;
  filter: blur(2px);
  user-select: none;
}

[dir="rtl"] .hero-title-shadow {
  right: 2px;
  left: auto;
}

.hero-description {
  color: rgba(255, 255, 255, 0.9);
  font-size: clamp(1rem, 2vw, 1.25rem);
  line-height: 1.6;
  margin-bottom: 2.5rem;
  text-shadow: 0 2px 8px rgba(0,0,0,0.5);
}

/* 3D CTA Button */
.hero-cta-wrapper {
  position: relative;
  display: inline-block;
  perspective: 500px;
}

.hero-cta-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 44px;
  min-height: 44px;
  padding: 12px 32px;
  background-color: var(--pb-blue);
  color: #fff;
  font-weight: 600;
  font-size: 1rem;
  text-decoration: none;
  border-radius: 4px;
  position: relative;
  transform-style: preserve-3d;
  transition: transform 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275), background-color 0.3s ease;
  box-shadow: 0 10px 20px -5px rgba(0, 0, 0, 0.3);
}

.hero-cta-button::after {
  content: '';
  position: absolute;
  inset: 0;
  border: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: 4px;
  transform: translateZ(-5px);
  transition: transform 0.3s ease;
}

.hero-cta-button:hover {
  transform: translateZ(10px);
  background-color: #2b4570; /* slightly darker blue */
}

.hero-cta-button:hover::after {
  transform: translateZ(-15px);
}

.hero-cta-button:active {
  transform: translateZ(2px);
  transition: transform 0.1s ease;
}

/* Staggered Animations */
.animate-in-1 {
  animation: fadeUpZ 1s cubic-bezier(0.2, 0.8, 0.2, 1) forwards;
  opacity: 0;
  transform: translateY(30px) translateZ(-20px);
}
.animate-in-2 {
  animation: fadeUpZ 1s cubic-bezier(0.2, 0.8, 0.2, 1) 0.2s forwards;
  opacity: 0;
  transform: translateY(30px) translateZ(-20px);
}
.animate-in-3 {
  animation: fadeUpZ 1s cubic-bezier(0.2, 0.8, 0.2, 1) 0.4s forwards;
  opacity: 0;
  transform: translateY(30px) translateZ(-20px);
}

@keyframes fadeUpZ {
  to {
    opacity: 1;
    transform: translateY(0) translateZ(0);
  }
}

/* Mobile Overrides */
@media (max-width: 768px) {
  .hero-3d-wrapper {
    perspective: none;
  }
  .hero-3d-scene {
    transform: none !important; /* disable parallax on mobile */
  }
  .hero-3d-layer {
    inset: 0;
    width: 100%;
    height: 100%;
    transform: none !important;
  }
  .hero-content-wrapper {
    margin-top: 10vh; /* move further down if needed */
  }
  .hero-overlay {
    background: linear-gradient(180deg, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.85) 60%);
  }
  [dir="rtl"] .hero-overlay {
    background: linear-gradient(180deg, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.85) 60%);
  }
  .hero-content-layer {
    align-items: flex-end;
    padding-bottom: 15vh;
  }
}

@media (prefers-reduced-motion: reduce) {
  .hero-3d-scene, .hero-cta-button, .hero-cta-button::after, .animate-in-1, .animate-in-2, .animate-in-3 {
    transition: none !important;
    animation: none !important;
    transform: none !important;
    opacity: 1 !important;
  }
}
"@

Set-Content $cssFile ($cssContent + $newCSS)
