$cssFile = "src/app/globals.css"
$cssContent = Get-Content $cssFile -Raw

$cssContent = $cssContent -replace '(?s)/\* --- Responsive Logos --- \*/.*', ''

$newCSS = @"
/* --- Responsive Logos --- */
.header-logo {
  --logo-width: 160px;
  --logo-height: 87px;
  background-color: rgba(244, 244, 242, 0.95);
  border-radius: 8px;
  padding: 6px 12px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
  transition: all 0.3s ease;
  box-sizing: content-box;
}

.mobile-hidden-logo .header-logo {
  --logo-width: 130px;
  --logo-height: 71px;
  padding: 4px 8px;
}

.footer-logo {
  --logo-width: 220px;
  --logo-height: 120px;
  background-color: rgba(244, 244, 242, 0.95);
  border-radius: 12px;
  padding: 12px 20px;
  box-sizing: content-box;
}

@media (max-width: 768px) {
  .header-logo {
    --logo-width: 140px;
    --logo-height: 76px;
    padding: 6px 10px;
  }
  
  .mobile-hidden-logo .header-logo {
    --logo-width: 110px;
    --logo-height: 60px;
    padding: 4px 8px;
  }
  
  .footer-logo {
    --logo-width: 180px;
    --logo-height: 98px;
    padding: 10px 16px;
  }
}

@media (max-width: 480px) {
  .footer-logo {
    --logo-width: 150px;
    --logo-height: 82px;
    padding: 8px 12px;
  }
}
"@

Set-Content $cssFile ($cssContent.TrimEnd() + "`r`n`r`n" + $newCSS)
