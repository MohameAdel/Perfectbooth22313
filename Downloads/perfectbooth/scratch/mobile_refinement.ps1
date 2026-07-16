$cssFile = "src/app/globals.css"
$cssContent = Get-Content $cssFile -Raw

$newCSS = @"

/* === PREMIUM MOBILE REFINEMENT: HERO & ABOUT (Sections 1 & 2) === */
@media (max-width: 768px) {
  
  /* --- HERO SECTION REFINEMENTS --- */
  .pb-hero-1-section {
    min-height: auto !important;
    display: flex !important;
    flex-direction: column !important;
    background-color: var(--pb-bg) !important;
    padding-top: 0 !important; /* ensure no weird gap below header */
  }

  .pb-hero-1-container {
    display: flex !important;
    flex-direction: column !important;
    width: 100% !important;
  }

  .pb-hero-1-image {
    width: 100% !important;
    aspect-ratio: 16 / 9 !important; /* Cinematic presentation */
    height: auto !important;
    position: relative;
    border: none !important;
    order: 1 !important;
  }

  .pb-hero-1-content {
    order: 2 !important;
    width: 100% !important;
    /* Pull up to overlap the image */
    margin-top: -30px !important; 
    padding: 32px 24px 40px 24px !important; /* 24px inline padding */
    background: #0a0b0e !important; /* Deep premium dark surface */
    border-top-left-radius: 16px !important;
    border-top-right-radius: 16px !important;
    box-shadow: 0 -4px 20px rgba(0,0,0,0.5) !important;
    position: relative !important;
    z-index: 10 !important;
    min-height: auto !important;
  }

  [dir="rtl"] .pb-hero-1-content {
    padding: 32px 24px 40px 24px !important;
  }

  /* Typography Refinements for Hero */
  .pb-hero-1-eyebrow {
    font-size: 0.75rem !important;
    margin-bottom: 12px !important;
    opacity: 0.8;
  }
  
  .pb-hero-1-title {
    font-size: clamp(1.75rem, 7vw, 2rem) !important; /* Scaled down for mobile */
    line-height: 1.3 !important;
    margin-bottom: 16px !important;
    max-width: 100% !important; /* Allow natural wrap */
  }

  .pb-hero-1-desc {
    font-size: 0.9rem !important;
    line-height: 1.6 !important;
    margin-bottom: 24px !important;
    opacity: 0.7;
  }

  .pb-hero-1-cta {
    margin-bottom: 32px !important;
  }

  .pb-hero-1-btn {
    font-size: 0.9rem !important;
    padding: 0 !important;
    min-height: auto !important;
    background: transparent !important;
    color: #fff !important;
    font-weight: 600 !important;
    display: inline-flex !important;
    align-items: center !important;
    gap: 8px !important;
  }
  .pb-hero-1-btn:hover {
    background: transparent !important;
    opacity: 0.8;
  }

  /* Reorganize Controls (Screenshot style) */
  .pb-hero-1-controls {
    display: flex !important;
    flex-direction: row !important;
    align-items: center !important;
    justify-content: space-between !important;
    gap: 16px !important;
    width: 100% !important;
    border-top: 1px solid rgba(255,255,255,0.05);
    padding-top: 24px;
  }

  .pb-hero-1-arrows {
    order: 1 !important;
    display: flex !important;
    gap: 8px !important;
  }

  .pb-hero-1-arrows button {
    width: 44px !important; /* Touch target */
    height: 44px !important;
    background: transparent !important;
    border: 1px solid rgba(255,255,255,0.1) !important;
    border-radius: 4px !important;
    font-size: 1.1rem;
  }

  .pb-hero-1-progress {
    order: 2 !important;
    flex: 1 !important;
    height: 1px !important;
    background: rgba(255,255,255,0.1) !important;
    margin: 0 16px !important;
  }

  .pb-hero-1-index {
    order: 3 !important;
    font-size: 0.8rem !important;
    font-weight: 400 !important;
    opacity: 0.7;
    flex-direction: row-reverse !important; /* Format 03 / 01 */
  }
  
  [dir="ltr"] .pb-hero-1-index {
    flex-direction: row !important; /* 01 / 03 */
  }


  /* --- ABOUT US SECTION REFINEMENTS --- */
  .about-section {
    padding: 32px 24px 48px 24px !important; /* 24px inline padding */
    background-color: var(--pb-bg) !important;
  }

  .about-container {
    gap: 32px !important;
  }

  .about-text {
    text-align: center !important;
  }

  .about-subtitle {
    font-size: 0.85rem !important;
    font-weight: 600 !important;
    margin-bottom: 8px !important;
    color: #a0a0a0 !important; /* Softer contrast */
  }

  .about-title {
    font-size: 1.75rem !important; /* Harmonized with hero title */
    margin-bottom: 16px !important;
    line-height: 1.3 !important;
  }

  .wavy-line {
    margin: 0 auto 24px auto !important;
  }

  .about-description {
    font-size: 0.9rem !important;
    line-height: 1.6 !important;
    margin-bottom: 16px !important;
    color: #a0a0a0 !important; /* Softer text */
    max-width: 100% !important;
  }

  .read-more-btn {
    display: inline-flex !important;
    align-items: center !important;
    justify-content: center !important;
    min-height: 44px !important;
    padding: 0 24px !important;
    font-size: 0.9rem !important;
    background-color: var(--pb-blue) !important;
    color: #fff !important;
    border-radius: 4px !important;
    text-decoration: none !important;
    margin-top: 16px !important;
  }

  /* Compact media thumbnail */
  .about-media {
    width: 100% !important;
    max-width: 300px !important; /* Prevent it from being too huge */
    margin: 0 auto !important;
  }
  
  .media-frame {
    aspect-ratio: 16 / 9 !important;
    border: 1px solid rgba(255,255,255,0.1) !important;
  }

  .iso-badge, .media-logo-area {
    transform: scale(0.7) !important; /* Scale down internal graphics */
    transform-origin: center !important;
  }
}
"@

Set-Content $cssFile ($cssContent + "`r`n" + $newCSS)
