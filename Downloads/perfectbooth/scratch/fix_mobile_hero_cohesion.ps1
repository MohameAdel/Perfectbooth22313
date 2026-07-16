$cssFile = "src/app/globals.css"
$cssContent = Get-Content $cssFile -Raw

$newCSS = @"

/* === PB Hero 1 Mobile Cohesion Fix === */
@media (max-width: 768px) {
  .pb-hero-1-image {
    aspect-ratio: 1 / 1 !important; /* Make image taller on mobile so overlap doesn't cover the whole thing */
  }
  .pb-hero-1-content {
    margin-top: -40px !important; /* Pull content up over the image */
    border-top-left-radius: 24px !important;
    border-top-right-radius: 24px !important;
    position: relative !important;
    z-index: 10 !important;
    box-shadow: 0 -20px 40px rgba(0,0,0,0.4) !important;
    padding-top: 15% !important; /* Add more padding at the top inside the card */
  }
}
"@

Set-Content $cssFile ($cssContent + "`r`n" + $newCSS)
