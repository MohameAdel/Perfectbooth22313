const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  
  // Test Mobile
  await page.setViewport({ width: 390, height: 844 });
  await page.goto('http://localhost:3000/ar', { waitUntil: 'networkidle0' });
  
  const metrics = await page.evaluate(() => {
    const hero = document.querySelector('.pb-hero-1-section');
    const header = document.querySelector('header');
    
    const slide1 = document.querySelector('.pb-hero-1-container');
    const slide1Image = document.querySelector('.pb-hero-1-image');
    const slide1Content = document.querySelector('.pb-hero-1-content');
    
    const slide2 = document.querySelector('.pb-hero-case-slide');
    const slide2Box = document.querySelector('.case-study-box');
    
    const getRect = (el) => {
      if (!el) return null;
      const rect = el.getBoundingClientRect();
      const style = window.getComputedStyle(el);
      return {
        top: rect.top,
        height: rect.height,
        width: rect.width,
        display: style.display,
        visibility: style.visibility,
        opacity: style.opacity,
        padding: `${style.paddingTop} ${style.paddingRight} ${style.paddingBottom} ${style.paddingLeft}`
      };
    };

    return {
      headerRect: getRect(header),
      heroRect: getRect(hero),
      slide1Rect: getRect(slide1),
      slide1ImageRect: getRect(slide1Image),
      slide1ContentRect: getRect(slide1Content),
      slide2Rect: getRect(slide2),
      slide2BoxRect: getRect(slide2Box)
    };
  });
  
  console.log("MOBILE METRICS (390x844):");
  console.log(JSON.stringify(metrics, null, 2));
  
  await browser.close();
})();
