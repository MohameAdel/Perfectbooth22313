$cssFile = "src/app/globals.css"
$cssContent = Get-Content $cssFile -Raw
$footerIndex = $cssContent.IndexOf("/* --- Premium Global Footer --- */")
if ($footerIndex -ge 0) {
    $cssContent = $cssContent.Substring(0, $footerIndex)
}

$newCSS = @"
/* --- Premium Global Footer --- */
.pb-footer-premium {
  background-color: var(--pb-bg);
  color: var(--pb-text);
  position: relative;
  overflow: hidden;
  border-top: 1px solid var(--pb-border);
  padding-top: 4rem;
}

.premium-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  padding: 0 5%;
  max-width: 1400px;
  margin: 0 auto;
  text-align: start;
}

@media (max-width: 768px) {
  .premium-grid {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
}

.footer-col {
  display: flex;
  flex-direction: column;
}

.footer-heading {
  font-size: 1.1rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 1px;
  color: var(--pb-text);
  margin-bottom: 1rem;
}

.footer-divider {
  height: 1px;
  background-color: var(--pb-accent-muted);
  width: 100%;
  margin-bottom: 2rem;
  opacity: 0.5;
}

.company-info-content,
.contact-info-content {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.footer-logo-wrapper {
  margin-bottom: 0.5rem;
}

.company-name {
  font-size: 1.2rem;
  font-weight: 700;
  color: var(--pb-text);
}

.company-desc {
  color: var(--pb-text-muted);
  font-size: 0.95rem;
  line-height: 1.8;
  font-style: normal;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.contact-info-content {
  font-style: normal;
  color: var(--pb-text-muted);
}

.unverified-note {
  font-size: 0.9rem;
  font-style: italic;
}

.footer-bottom-row {
  margin-top: 4rem;
  padding: 0 5% 2rem;
  max-width: 1400px;
  margin-inline: auto;
}

.footer-bottom-divider {
  height: 1px;
  background-color: var(--pb-accent-muted);
  width: 100%;
  margin-bottom: 2rem;
  opacity: 0.5;
}

.footer-legal {
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: var(--pb-text-muted);
  font-size: 0.85rem;
}
"@
Set-Content $cssFile ($cssContent + "`r`n" + $newCSS)
