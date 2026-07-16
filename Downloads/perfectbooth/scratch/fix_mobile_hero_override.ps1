$cssFile = "src/app/globals.css"
$cssContent = Get-Content $cssFile -Raw

$newCSS = @"

/* === PB Hero 1 Mobile Override === */
@media (max-width: 768px) {
  .pb-hero-1-section {
    min-height: auto !important;
    display: block !important;
    overflow: visible !important;
  }
  .pb-hero-1-container {
    flex-direction: column !important;
    display: flex !important;
  }
  .pb-hero-1-image {
    flex: none !important;
    width: 100% !important;
    aspect-ratio: 4 / 3 !important;
    height: auto !important;
    order: 1 !important;
    border: none !important;
    border-bottom: 1px solid rgba(255, 255, 255, 0.05) !important;
  }
  .pb-hero-1-image img {
    object-fit: cover !important;
  }
  .pb-hero-1-content {
    flex: none !important;
    width: 100% !important;
    order: 2 !important;
    padding: 12% 6% 15% 6% !important;
    min-height: 50vh !important;
  }
  [dir="rtl"] .pb-hero-1-content {
    padding: 12% 6% 15% 6% !important;
  }
}
"@

Set-Content $cssFile ($cssContent + "`r`n" + $newCSS)
