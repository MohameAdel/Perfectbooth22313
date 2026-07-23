export const partnersLogos = [
  { id: 1, src: 'https://admin.perfectbooth-events.com/storage/home-logo-slides/LNqMe6pqnkrShQ4LqOHCXwUl8UUHufg0angYGMEE.jpg' },
  { id: 2, src: 'https://admin.perfectbooth-events.com/storage/home-logo-slides/Rmkc7QaaCe8XlyXXmyEAwEjUiGVeBnbR89HGz9NI.jpg' },
  { id: 3, src: 'https://admin.perfectbooth-events.com/storage/home-logo-slides/rhBu302I5Aj0lYydXzwVxl9YXUFXbVyR7pDn8jjS.jpg' },
  { id: 4, src: 'https://admin.perfectbooth-events.com/storage/home-logo-slides/XVtbnDDwpl4VhQhHhmPRcc3i2kC3MDI6ZVYKuqbL.jpg' },
  { id: 5, src: 'https://admin.perfectbooth-events.com/storage/home-logo-slides/m0aHdhxpylE9CLSsvGPaS7NKkoiCJ0iUhN5sjmoL.jpg' },
  { id: 6, src: 'https://admin.perfectbooth-events.com/storage/home-logo-slides/8LlhgK6irwqbLbzhihYZK5jkRBpvTr5yrxj97ULQ.jpg' },
  { id: 7, src: 'https://admin.perfectbooth-events.com/storage/home-logo-slides/F1z10WGYkP387OLbYBwPH9ovBewY73gPIvatmqTm.jpg' },
  { id: 8, src: 'https://admin.perfectbooth-events.com/storage/home-logo-slides/qodcfXqF5judSBpiZLG3bdckUYCH4SZuZaD01Zcw.jpg' },
  { id: 9, src: 'https://admin.perfectbooth-events.com/storage/home-logo-slides/kT7gHkkr4Hh4FF9hko2Fz9Cg6yoIMlK14bFWofWp.jpg' }
];

export const selectedProjects = [
  {
    id: 1,
    titleKey: 'project1',
    image: 'https://admin.perfectbooth-events.com/storage/home-banner-slides/co1X3sNRqpx9Kdnicliy0dmKe5puz1phE7CYyV8l.jpg',
  },
  {
    id: 2,
    titleKey: 'project2',
    image: 'https://admin.perfectbooth-events.com/storage/home-banner-slides/IatwT74DySD8ZSpWbgvabYzkYO9qffWWvK1kYzXL.jpg',
  },
  {
    id: 3,
    titleKey: 'project3',
    image: 'https://admin.perfectbooth-events.com/storage/services/images/fVoSlHLlnIqOMCs6IWYAKHabGZ2fmhAu2gWtigdE.jpg',
  },
  {
    id: 4,
    titleKey: 'project4',
    image: 'https://admin.perfectbooth-events.com/storage/services/images/x2ymges6TaOHCBS3BSquSoOlzw1UW146iD9hlTQ2.jpg',
  }
];

export interface BeforeAfterProject {
  id: number;
  titleKey: string;
  beforeImage: string;
  afterImage: string;
  beforeAltKey: string;
  afterAltKey: string;
  beforeObjectPosition?: string;
  afterObjectPosition?: string;
  categoryKey?: string;
  locationKey?: string;
  year?: string;
}

export const beforeAfterProjects: BeforeAfterProject[] = [
  {
    id: 1,
    titleKey: 'project1Title',
    beforeImage: 'https://vqknbbjrosel3hr8.public.blob.vercel-storage.com/photos/image-work-work-badge/pro1.webp',
    afterImage: 'https://vqknbbjrosel3hr8.public.blob.vercel-storage.com/photos/image-work-work-badge/pro11.webp',
    beforeAltKey: 'project1BeforeAlt',
    afterAltKey: 'project1AfterAlt',
  },
  {
    id: 2,
    titleKey: 'project2Title',
    beforeImage: 'https://vqknbbjrosel3hr8.public.blob.vercel-storage.com/photos/image-work-work-badge/pro2.webp',
    afterImage: 'https://vqknbbjrosel3hr8.public.blob.vercel-storage.com/photos/image-work-work-badge/pro22.webp',
    beforeAltKey: 'project2BeforeAlt',
    afterAltKey: 'project2AfterAlt',
  },
  {
    id: 3,
    titleKey: 'project3Title',
    beforeImage: 'https://vqknbbjrosel3hr8.public.blob.vercel-storage.com/photos/image-work-work-badge/pro3.webp',
    afterImage: 'https://vqknbbjrosel3hr8.public.blob.vercel-storage.com/photos/image-work-work-badge/pro33.webp',
    beforeAltKey: 'project3BeforeAlt',
    afterAltKey: 'project3AfterAlt',
  },
  {
    id: 4,
    titleKey: 'project4Title',
    beforeImage: 'https://vqknbbjrosel3hr8.public.blob.vercel-storage.com/photos/image-work-work-badge/pro4.webp',
    afterImage: 'https://vqknbbjrosel3hr8.public.blob.vercel-storage.com/photos/image-work-work-badge/pro44.webp',
    beforeAltKey: 'project4BeforeAlt',
    afterAltKey: 'project4AfterAlt',
  },
  {
    id: 5,
    titleKey: 'project5Title',
    beforeImage: 'https://vqknbbjrosel3hr8.public.blob.vercel-storage.com/photos/image-work-work-badge/pro5.webp',
    afterImage: 'https://vqknbbjrosel3hr8.public.blob.vercel-storage.com/photos/image-work-work-badge/pro55.webp',
    beforeAltKey: 'project5BeforeAlt',
    afterAltKey: 'project5AfterAlt',
  }
];

// Unmatched images (TODO: Verify visually before using)
// - 8190832C-15D1-41AB-9EAE-3F926F0D6410.webp
// - 8A703CDC-F978-4210-B2F5-8BDBA890A8BC.webp
// - E1DB6987-9B3B-4B83-9568-D4A294FB11F6.webp
// - IMG_7395.jpg.webp
// - IMG_7398.jpg.webp
// - IMG_7401.jpg.webp
// - IMG_7416.jpg.webp
// - IMG_7420.jpg.webp
// - IMG_7426.jpg.webp
