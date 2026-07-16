$cssFile = "src/app/globals.css"
$cssContent = Get-Content $cssFile -Raw

$cssContent = $cssContent -replace '(?s)@media \(max-width: 768px\) \{.*?\.pb-hero-1-container \{.*?\}', @'
@media (max-width: 768px) {
  .pb-hero-1-section {
    min-height: auto;
    display: block;
    overflow: visible;
  }
  .pb-hero-1-container {
    flex-direction: column;
    display: flex;
  }
  .pb-hero-1-image {
    flex: none;
    width: 100%;
    aspect-ratio: 4 / 3;
    height: auto;
    order: 1;
    border: none;
    border-bottom: 1px solid rgba(255, 255, 255, 0.05);
  }
  .pb-hero-1-image img {
    object-fit: cover !important;
  }
  .pb-hero-1-content {
    flex: none;
    width: 100%;
    order: 2;
    padding: 12% 6%;
    min-height: 50vh;
  }
  [dir="rtl"] .pb-hero-1-content {
    padding: 12% 6%;
  }
}
'@

Set-Content $cssFile $cssContent
