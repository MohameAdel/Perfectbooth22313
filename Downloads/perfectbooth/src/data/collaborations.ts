export const partnersLogos = [
  { id: 1, src: 'https://vqknbbjrosel3hr8.public.blob.vercel-storage.com/photos/logos/IMG_7849.jpg.jpeg' },
  { id: 2, src: 'https://vqknbbjrosel3hr8.public.blob.vercel-storage.com/photos/logos/IMG_7852.jpg.jpeg' },
  { id: 3, src: '' },
  { id: 4, src: 'https://vqknbbjrosel3hr8.public.blob.vercel-storage.com/photos/logos/IMG_7858.jpg.jpeg' },
  { id: 5, src: 'https://vqknbbjrosel3hr8.public.blob.vercel-storage.com/photos/logos/IMG_7859.jpg.jpeg' },
  { id: 6, src: '/assets/tqnia_logo.png' },
  { id: 7, src: '' },
  { id: 8, src: '' },
  { id: 9, src: '' }
];

export const selectedProjects = [
  {
    id: 1,
    titleKey: 'project1',
    image: 'https://vqknbbjrosel3hr8.public.blob.vercel-storage.com/photos/image-work-work-badge/pro1.webp',
  },
  {
    id: 2,
    titleKey: 'project2',
    image: 'https://vqknbbjrosel3hr8.public.blob.vercel-storage.com/photos/image-work-work-badge/pro2.webp',
  },
  {
    id: 3,
    titleKey: 'project3',
    image: 'https://vqknbbjrosel3hr8.public.blob.vercel-storage.com/photos/image-work-work-badge/pro3.webp',
  },
  {
    id: 4,
    titleKey: 'project4',
    image: 'https://vqknbbjrosel3hr8.public.blob.vercel-storage.com/photos/image-work-work-badge/pro4.webp',
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
    beforeImage: 'https://vqknbbjrosel3hr8.public.blob.vercel-storage.com/photos/new%20images%20project/IMG_9467.jpg.webp',
    afterImage: 'https://vqknbbjrosel3hr8.public.blob.vercel-storage.com/photos/new%20images%20project/IMG_4081.webp',
    beforeAltKey: 'project1BeforeAlt',
    afterAltKey: 'project1AfterAlt',
  },
  {
    id: 2,
    titleKey: 'project2Title',
    beforeImage: 'https://vqknbbjrosel3hr8.public.blob.vercel-storage.com/photos/new%20images%20project/IMG_9470.jpg.webp',
    afterImage: 'https://vqknbbjrosel3hr8.public.blob.vercel-storage.com/photos/new%20images%20project/ac6bff72-d972-451d-80c1-d479796fc50f.jpg.webp',
    beforeAltKey: 'project2BeforeAlt',
    afterAltKey: 'project2AfterAlt',
  },
  {
    id: 3,
    titleKey: 'project1Title',
    beforeImage: 'https://vqknbbjrosel3hr8.public.blob.vercel-storage.com/photos/image-work-work-badge/pro11.webp',
    afterImage: 'https://vqknbbjrosel3hr8.public.blob.vercel-storage.com/photos/image-work-work-badge/pro1.webp',
    beforeAltKey: 'project1BeforeAlt',
    afterAltKey: 'project1AfterAlt',
  },
  {
    id: 4,
    titleKey: 'project2Title',
    beforeImage:'https://vqknbbjrosel3hr8.public.blob.vercel-storage.com/photos/image-work-work-badge/pro2.webp',
    afterImage: 'https://vqknbbjrosel3hr8.public.blob.vercel-storage.com/photos/image-work-work-badge/pro22.webp',
    beforeAltKey: 'project2BeforeAlt',
    afterAltKey: 'project2AfterAlt',
  },
  {
    id: 5,
    titleKey: 'project3Title',
    beforeImage:  'https://vqknbbjrosel3hr8.public.blob.vercel-storage.com/photos/image-work-work-badge/pro3.webp',
    afterImage: 'https://vqknbbjrosel3hr8.public.blob.vercel-storage.com/photos/image-work-work-badge/pro33.webp',
    beforeAltKey: 'project3BeforeAlt',
    afterAltKey: 'project3AfterAlt',
  },
  {
    id: 6,
    titleKey: 'project4Title',
    beforeImage: 'https://vqknbbjrosel3hr8.public.blob.vercel-storage.com/photos/image-work-work-badge/pro4.webp',
    afterImage:'https://vqknbbjrosel3hr8.public.blob.vercel-storage.com/photos/image-work-work-badge/pro44.webp' 
 ,
    beforeAltKey: 'project4BeforeAlt',
    afterAltKey: 'project4AfterAlt',
  },
  {
    id: 7,
    titleKey: 'project5Title',
    beforeImage:  'https://vqknbbjrosel3hr8.public.blob.vercel-storage.com/photos/image-work-work-badge/pro5.webp',
    afterImage: 'https://vqknbbjrosel3hr8.public.blob.vercel-storage.com/photos/image-work-work-badge/pro55.webp'
   ,
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
