const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  
  // Test Desktop
  await page.setViewport({ width: 1366, height: 768 });
  await page.goto('http://localhost:3000/ar', { waitUntil: 'networkidle0' });
  
  const metrics = await page.evaluate(() => {
    const hero = document.querySelector('.pb-hero-1-section');
    const track = document.querySelector('.pb-hero-1-track') || document.querySelector('.pb-hero-1-viewport > div');
    const slides = document.querySelectorAll('.pb-hero-1-slide, .pb-hero-1-container, [style*="flex: 0 0"]');
    
    return {
      heroHeight: hero ? hero.offsetHeight : null,
      trackWidth: track ? track.offsetWidth : null,
      slidesInfo: Array.from(slides).slice(0,3).map(s => ({
        height: s.offsetHeight,
        width: s.offsetWidth,
        visible: s.offsetHeight > 100
      }))
    };
  });
  
  console.log("DESKTOP METRICS:");
  console.log(JSON.stringify(metrics, null, 2));
  
  await browser.close();
})();
