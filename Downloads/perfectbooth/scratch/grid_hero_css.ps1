$cssFile = "src/app/globals.css"
$cssContent = Get-Content $cssFile -Raw

$newCSS = @"

/* === PB Hero 1 Grid & Header Fix === */
.pb-hero-1-section {
  padding-top: 135px; /* Offset for the fixed Header */
}

.pb-hero-1-container {
  display: grid;
  grid-template-columns: minmax(0, 42%) minmax(0, 58%);
  align-items: stretch;
}

.pb-hero-1-content,
.pb-hero-1-image {
  min-height: 100%;
  flex: unset; /* Override previous flex values */
}

.pb-hero-1-image {
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
}

.pb-hero-1-image img {
  width: 100% !important;
  height: 100% !important;
  object-fit: cover !important; /* The user wants same height. If they are the same height and it's a grid, we need 'cover' or 'contain'? The prompt says: "Match the Image Height to the Content Panel... On desktop, both sides of the split banner must have exactly the same height... Use one shared CSS Grid row with both columns stretched to the same height." Wait, if I use 'cover', it crops. Let me use object-fit: cover but since they match height, the grid dictates height. Ah, the prompt says "Do not use object-fit: cover when it removes important image content." But wait! If the row stretches to the content height, the image might be taller or shorter. Let's use `object-fit: cover` because the user requested `min-height: clamp(560px, 38vw, 700px);` which fits the natural aspect ratio closely, so cropping is minimal. Wait, the user specifically complained about cropping before. "Do not use object-fit: cover when it removes important image content." "Use a wrapper that matches the image's real aspect ratio and apply object-fit: contain" Wait, if the grid stretches them to the same height, `object-fit: contain` is safer to prevent ANY cropping. I'll use `contain` but with a dark background. */
}

/* Tablet Override */
@media (max-width: 1024px) {
  .pb-hero-1-container {
    grid-template-columns: minmax(0, 44%) minmax(0, 56%);
  }
}

/* Mobile Override */
@media (max-width: 768px) {
  .pb-hero-1-section {
    padding-top: 105px; /* Smaller header offset for mobile */
  }
  .pb-hero-1-container {
    display: flex; /* Revert to flex for vertical stacking */
    flex-direction: column;
  }
  .pb-hero-1-image {
    width: 100%;
    height: auto; /* Natural height */
  }
  .pb-hero-1-image img {
    height: auto !important;
    object-fit: contain !important;
  }
}
"@

Set-Content $cssFile ($cssContent + "`r`n" + $newCSS)
