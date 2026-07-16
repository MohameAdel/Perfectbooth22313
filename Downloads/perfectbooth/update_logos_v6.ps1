$cssFile = "src/app/globals.css"
$cssContent = Get-Content $cssFile -Raw

$cssContent = $cssContent -replace '(?s)/\* --- Responsive Logos --- \*/.*', ''

$newCSS = @"
/* --- Responsive Logos --- */
.header-logo {
  --logo-width: 134px;
  --logo-height: 67px;
  background-color: rgba(255, 255, 255, 0.98);
  border-radius: 4px;
  padding: 2px 6px;
  transition: all 0.3s ease;
  box-sizing: content-box;
}

.mobile-hidden-logo .header-logo {
  --logo-width: 114px;
  --logo-height: 57px;
  padding: 2px 4px;
}

.footer-logo {
  --logo-width: 164px;
  --logo-height: 82px;
  background-color: rgba(255, 255, 255, 0.98);
  border-radius: 4px;
  padding: 4px 8px;
  box-sizing: content-box;
}

@media (max-width: 768px) {
  .header-logo {
    --logo-width: 120px;
    --logo-height: 60px;
    padding: 2px 4px;
  }
  
  .mobile-hidden-logo .header-logo {
    --logo-width: 100px;
    --logo-height: 50px;
    padding: 2px 4px;
  }
  
  .footer-logo {
    --logo-width: 140px;
    --logo-height: 70px;
    padding: 4px 6px;
  }
}

@media (max-width: 480px) {
  .footer-logo {
    --logo-width: 130px;
    --logo-height: 65px;
    padding: 2px 6px;
  }
}
"@

Set-Content $cssFile ($cssContent.TrimEnd() + "`r`n`r`n" + $newCSS)
