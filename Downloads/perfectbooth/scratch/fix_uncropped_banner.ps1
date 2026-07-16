$cssFile = "src/app/globals.css"
$cssContent = Get-Content $cssFile -Raw

$newCSS = @"

/* === PREMIUM MOBILE REFINEMENT: UNCROPPED BANNER === */
@media (max-width: 768px) {
  
  /* Reset the image container to flow naturally */
  .pb-hero-1-image {
    width: 100% !important;
    height: auto !important;
    aspect-ratio: auto !important; /* Remove any forced aspect ratio */
    position: relative !important;
    border: none !important;
    order: 1 !important;
    display: block !important;
    background-color: transparent !important;
  }
  
  .pb-hero-1-image img {
    object-fit: contain !important; /* Ensure no cropping */
    height: auto !important;
  }

  /* Reset the content container so it doesn't overlap the image */
  .pb-hero-1-content {
    order: 2 !important;
    width: 100% !important;
    margin-top: 0 !important; /* Remove negative overlap */
    padding: 32px 24px 40px 24px !important;
    background: #0a0b0e !important;
    border-top-left-radius: 0 !important; /* Remove top radius to attach flatly or leave a gap */
    border-top-right-radius: 0 !important;
    box-shadow: none !important;
    position: relative !important;
    z-index: 10 !important;
    min-height: auto !important;
  }
}
"@

Set-Content $cssFile ($cssContent + "`r`n" + $newCSS)
