$cssFile = "src/app/globals.css"
$cssContent = Get-Content $cssFile -Raw

$cssContent = $cssContent -replace '(?s)\.faq-accordion-panel \{.*?\.faq-accordion-content \{', @'
.faq-accordion-panel {
  display: grid;
  grid-template-rows: 0fr;
  transition: grid-template-rows 0.3s ease-out;
}

.faq-accordion-panel.open {
  grid-template-rows: 1fr;
}

.faq-accordion-content-wrapper {
  overflow: hidden;
  min-height: 0;
}

.faq-accordion-content {
'@

Set-Content $cssFile $cssContent
