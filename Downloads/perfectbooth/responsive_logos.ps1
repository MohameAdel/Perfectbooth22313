$cssFile = "src/app/globals.css"

$newCSS = @"

/* --- Responsive Logos --- */
.header-logo {
  --logo-width: 150px;
  --logo-height: 82px;
  transition: all 0.3s ease;
}

.mobile-hidden-logo .header-logo {
  --logo-width: 120px;
  --logo-height: 65px;
}

.footer-logo {
  --logo-width: 190px;
  --logo-height: 104px;
}

@media (max-width: 768px) {
  .header-logo {
    --logo-width: 130px;
    --logo-height: 71px;
  }
  
  .mobile-hidden-logo .header-logo {
    --logo-width: 100px;
    --logo-height: 54px;
  }
  
  .footer-logo {
    --logo-width: 160px;
    --logo-height: 87px;
  }
}

@media (max-width: 480px) {
  .footer-logo {
    --logo-width: 140px;
    --logo-height: 76px;
  }
}
"@
Add-Content -Path $cssFile -Value $newCSS
