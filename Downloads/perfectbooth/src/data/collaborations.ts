export const partnersLogos = [
  { id: 1, src: 'https://vqknbbjrosel3hr8.public.blob.vercel-storage.com/photos/logos/IMG_7849.jpg.jpeg' },
  { id: 2, src: 'https://vqknbbjrosel3hr8.public.blob.vercel-storage.com/photos/logos/IMG_7852.jpg.jpeg' },
  { id: 3, src: 'https://vqknbbjrosel3hr8.public.blob.vercel-storage.com/photos/logos/IMG_7857.jpg.jpeg' },
  { id: 4, src: 'https://vqknbbjrosel3hr8.public.blob.vercel-storage.com/photos/logos/IMG_7858.jpg.jpeg' },
  { id: 5, src: 'https://vqknbbjrosel3hr8.public.blob.vercel-storage.com/photos/logos/IMG_7859.jpg.jpeg' },
  { id: 6, src: '/assets/tqnia_logo.png' },
  { id: 7, src: 'https://vqknbbjrosel3hr8.public.blob.vercel-storage.com/photos/new%20logos/EBF98385-145C-4D23-9D69-C4B05C54560D.webp' },
  { id: 8, src: 'https://vqknbbjrosel3hr8.public.blob.vercel-storage.com/photos/new%20logos/DD6D52EB-4BA5-4494-9F31-79F9145FDCE7.webp' },
  { id: 9, src: 'https://vqknbbjrosel3hr8.public.blob.vercel-storage.com/photos/new%20logos/889FE735-3701-4A37-8AF0-87442BADA5FB.webp' },
  { id: 10, src: 'https://vqknbbjrosel3hr8.public.blob.vercel-storage.com/photos/new%20logos/9C29F1E6-1810-4246-ABB0-E68980B24164.webp' },
  { id: 11, src: 'https://vqknbbjrosel3hr8.public.blob.vercel-storage.com/photos/new%20logos/IMG_9563.webp' },
  { id: 12, src: 'https://vqknbbjrosel3hr8.public.blob.vercel-storage.com/photos/new%20logos/BAA4060E-D72C-425C-923E-B01C2E63F46D.webp' },
  { id: 13, src: 'https://vqknbbjrosel3hr8.public.blob.vercel-storage.com/photos/new%20logos/IMG_7315.webp' },
  { id: 14, src: 'https://vqknbbjrosel3hr8.public.blob.vercel-storage.com/photos/new%20logos/E51F3BD9-B043-45CB-AB6D-601C4F5FA335.webp' },
  { id: 15, src: 'https://vqknbbjrosel3hr8.public.blob.vercel-storage.com/photos/new%20logos/IMG_7318.webp' },
  { id: 16, src: 'https://vqknbbjrosel3hr8.public.blob.vercel-storage.com/photos/new%20logos/IMG_7313.webp' },
  { id: 17, src: 'https://vqknbbjrosel3hr8.public.blob.vercel-storage.com/photos/new%20logos/3BD652A3-1720-4103-B978-BEED148C3161.webp' },
  { id: 18, src: 'https://vqknbbjrosel3hr8.public.blob.vercel-storage.com/photos/new%20logos/IMG_7312.webp' },
  { id: 19, src: 'https://vqknbbjrosel3hr8.public.blob.vercel-storage.com/photos/new%20logos/IMG_7317.webp' },
  { id: 20, src: 'https://vqknbbjrosel3hr8.public.blob.vercel-storage.com/photos/new%20logos/A9604528-3A02-426A-9D22-667FA3E8E88D.webp' },
  { id: 21, src: 'https://vqknbbjrosel3hr8.public.blob.vercel-storage.com/photos/new%20logos/38331D96-972A-4708-A41F-EA0E9C9C6DD7.webp' },
  { id: 22, src: 'https://vqknbbjrosel3hr8.public.blob.vercel-storage.com/photos/new%20logos/IMG_7314.webp' }
].filter(logo => Boolean(logo.src && logo.src.trim()));

export const selectedProjects = [
  {
    id: 1,
    titleKey: 'project1',
    image: '',
  },
  {
    id: 2,
    titleKey: 'project2',
    image: '',
  },
  {
    id: 3,
    titleKey: 'project3',
    image: '',
  },
  {
    id: 4,
    titleKey: 'project4',
    image: '',
  }
].filter(project => Boolean(project.image && project.image.trim()));

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
    beforeImage: 'https://vqknbbjrosel3hr8.public.blob.vercel-storage.com/photos/D2B9C7E3-4C66-4C9C-9051-6A6A90227931.webp',
    afterImage: 'https://vqknbbjrosel3hr8.public.blob.vercel-storage.com/photos/FC67C430-A558-447F-89B1-9B423561B80E.webp',
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
