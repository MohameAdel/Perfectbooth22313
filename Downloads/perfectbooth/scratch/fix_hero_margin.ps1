$cssFile = "src/app/globals.css"
$cssContent = Get-Content $cssFile -Raw

$newCSS = @"

/* === HERO BANNER IMAGE MARGIN FIX === */
@media (max-width: 768px) {
  .pb-hero-1-image {
    margin-top: 9rem !important;
  }
}
"@

Set-Content $cssFile ($cssContent + "`r`n" + $newCSS)
