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
  padding-top: 3.5rem;
}

.premium-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  padding: 0 5%;
  max-width: 1400px;
  margin: 0 auto;
  text-align: start;
}

@media (max-width: 768px) {
  .premium-grid {
    grid-template-columns: 1fr;
    gap: 2.5rem;
  }
}

.footer-col {
  display: flex;
  flex-direction: column;
}

.footer-heading {
  font-size: 1rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 1px;
  color: var(--pb-text);
  margin-bottom: 0.75rem;
}

.footer-divider {
  height: 1px;
  background-color: var(--pb-border-strong);
  width: 100%;
  margin-bottom: 1.5rem;
}

.company-info-content,
.contact-info-content {
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
}

.footer-logo-wrapper {
  margin-bottom: 0.25rem;
}

.company-name {
  font-size: 1.15rem;
  font-weight: 700;
  color: var(--pb-text);
}

.company-desc {
  color: var(--pb-text-soft);
  font-size: 0.95rem;
  line-height: 1.6;
  font-style: normal;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  max-width: 400px;
}

.location-text {
  color: var(--pb-text-muted);
}

.contact-info-content {
  font-style: normal;
  color: var(--pb-text-soft);
}

.contact-links-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.footer-link {
  color: var(--pb-text-soft);
  text-decoration: none;
  transition: color 0.3s ease;
  font-size: 0.95rem;
}

.footer-link:hover,
.footer-link:focus-visible {
  color: var(--pb-primary-light);
  outline: none;
}

.footer-bottom-row {
  margin-top: 3rem;
  padding: 0 5% 2rem;
  max-width: 1400px;
  margin-inline: auto;
}

.footer-bottom-divider {
  height: 1px;
  background-color: var(--pb-border-strong);
  width: 100%;
  margin-bottom: 1.5rem;
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
