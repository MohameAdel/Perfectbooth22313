export interface ProjectGalleryItem {
  id: string;
  titleKey: string;
  image: string;
  altKey: string;
  categoryKey?: string;
  featured?: boolean;
  shape?: 'landscape' | 'portrait' | 'square' | 'wide';
  objectPosition?: string;
}

const BLOB_BASE_URL = 'https://vqknbbjrosel3hr8.public.blob.vercel-storage.com/photos/image-work-home-badge';

export const projectsGallery: ProjectGalleryItem[] = [
  // 1. Tesla
  { id: 'tesla-1', titleKey: 'brandTesla', image: `${BLOB_BASE_URL}/IMG_7395.jpg.webp`, altKey: 'genericAlt1', categoryKey: 'categoryBrandEnvironment' },
  { id: 'tesla-2', titleKey: 'brandTesla', image: `${BLOB_BASE_URL}/IMG_7396.jpg.webp`, altKey: 'genericAlt2', categoryKey: 'categoryBrandEnvironment' },
  { id: 'tesla-3', titleKey: 'brandTesla', image: `${BLOB_BASE_URL}/IMG_7397.jpg.webp`, altKey: 'genericAlt3', categoryKey: 'categoryBrandEnvironment' },
  { id: 'tesla-4', titleKey: 'brandTesla', image: `${BLOB_BASE_URL}/IMG_7398.jpg.webp`, altKey: 'genericAlt4', categoryKey: 'categoryBrandEnvironment' },
  { id: 'tesla-5', titleKey: 'brandTesla', image: `${BLOB_BASE_URL}/IMG_7401.jpg.webp`, altKey: 'genericAlt5', categoryKey: 'categoryBrandEnvironment' },

  // 2. Innovo
  { id: 'innovo-1', titleKey: 'brandInnovo', image: 'https://vqknbbjrosel3hr8.public.blob.vercel-storage.com/photos/image-work-work-badge/pro11.webp', altKey: 'genericAlt1', categoryKey: 'categoryExhibition' },
  { id: 'innovo-2', titleKey: 'brandInnovo', image: 'https://vqknbbjrosel3hr8.public.blob.vercel-storage.com/photos/image-work-work-badge/pro1.webp', altKey: 'genericAlt2', categoryKey: 'categoryExhibition' },
  { id: 'innovo-3', titleKey: 'brandInnovo', image: `${BLOB_BASE_URL}/IMG_7416.jpg.webp`, altKey: 'genericAlt3', categoryKey: 'categoryExhibition' },
  { id: 'innovo-4', titleKey: 'brandInnovo', image: `${BLOB_BASE_URL}/IMG_7418.jpg.webp`, altKey: 'genericAlt4', categoryKey: 'categoryExhibition' },
  { id: 'innovo-5', titleKey: 'brandInnovo', image: `${BLOB_BASE_URL}/IMG_7420.jpg.webp`, altKey: 'genericAlt5', categoryKey: 'categoryExhibition' },
  { id: 'innovo-6', titleKey: 'brandInnovo', image: `${BLOB_BASE_URL}/IMG_7426.jpg.webp`, altKey: 'genericAlt6', categoryKey: 'categoryExhibition' },
  { id: 'innovo-7', titleKey: 'brandInnovo', image: `${BLOB_BASE_URL}/IMG_7427.jpg.webp`, altKey: 'genericAlt7', categoryKey: 'categoryExhibition' },

  // 3. Umbrella.ar
  { id: 'umbrella-1', titleKey: 'brandUmbrella', image: `${BLOB_BASE_URL}/12173EA7-1190-4F52-BBFF-1E7D8D922C67.webp`, altKey: 'genericAlt1', categoryKey: 'categoryCustomSpace' },
  { id: 'umbrella-2', titleKey: 'brandUmbrella', image: `${BLOB_BASE_URL}/6DAF203B-C090-43C7-A637-C9065D2A3846.webp`, altKey: 'genericAlt2', categoryKey: 'categoryCustomSpace' },
  { id: 'umbrella-3', titleKey: 'brandUmbrella', image: `${BLOB_BASE_URL}/736AEA72-FDA2-4D45-86D0-324186382647.webp`, altKey: 'genericAlt3', categoryKey: 'categoryCustomSpace' },
  { id: 'umbrella-4', titleKey: 'brandUmbrella', image: `${BLOB_BASE_URL}/DCA12578-A18E-49BD-9AAA-8B21365A6C72.webp`, altKey: 'genericAlt4', categoryKey: 'categoryCustomSpace' },

  // 4. AUO
  { id: 'auo-1', titleKey: 'brandAUO', image: `${BLOB_BASE_URL}/8190832C-15D1-41AB-9EAE-3F926F0D6410.webp`, altKey: 'genericAlt1', categoryKey: 'categoryExhibition' },
  { id: 'auo-2', titleKey: 'brandAUO', image: `${BLOB_BASE_URL}/8A703CDC-F978-4210-B2F5-8BDBA890A8BC.webp`, altKey: 'genericAlt2', categoryKey: 'categoryExhibition' },
  { id: 'auo-3', titleKey: 'brandAUO', image: `${BLOB_BASE_URL}/E1DB6987-9B3B-4B83-9568-D4A294FB11F6.webp`, altKey: 'genericAlt3', categoryKey: 'categoryExhibition' },

  // 5. Centrepoint
  { id: 'centrepoint-1', titleKey: 'brandCentrepoint', image: `${BLOB_BASE_URL}/IMG_7406.jpg.webp`, altKey: 'genericAlt1', categoryKey: 'categoryBrandEnvironment' },
  { id: 'centrepoint-2', titleKey: 'brandCentrepoint', image: `${BLOB_BASE_URL}/IMG_7404.jpg.webp`, altKey: 'genericAlt2', categoryKey: 'categoryBrandEnvironment' },

  // 6. Latest Projects (New 20 images)
  { id: 'latest-1', titleKey: 'brandLatestProjects', image: `https://vqknbbjrosel3hr8.public.blob.vercel-storage.com/photos/projects/02131138-b018-4584-8dac-9d2a9067b31d.JPG.jpeg`, altKey: 'genericAlt1', categoryKey: 'categoryExhibition' },
  { id: 'latest-2', titleKey: 'brandLatestProjects', image: `https://vqknbbjrosel3hr8.public.blob.vercel-storage.com/photos/projects/0448dc4c-f71d-419a-a335-72ea466c9005.JPG.jpeg`, altKey: 'genericAlt2', categoryKey: 'categoryExhibition' },
  { id: 'latest-3', titleKey: 'brandLatestProjects', image: `https://vqknbbjrosel3hr8.public.blob.vercel-storage.com/photos/projects/09d26c62-fd1c-4df1-a7e0-44659d9e1ca1.JPG.jpeg`, altKey: 'genericAlt3', categoryKey: 'categoryExhibition' },
  { id: 'latest-4', titleKey: 'brandLatestProjects', image: `https://vqknbbjrosel3hr8.public.blob.vercel-storage.com/photos/projects/203A0BA8-5812-488F-97E4-A6451C7745B8.JPG.jpeg`, altKey: 'genericAlt4', categoryKey: 'categoryExhibition' },
  { id: 'latest-5', titleKey: 'brandLatestProjects', image: `https://vqknbbjrosel3hr8.public.blob.vercel-storage.com/photos/projects/24a70cfb-883b-4529-8cfb-90e4aef219a8.JPG.jpeg`, altKey: 'genericAlt5', categoryKey: 'categoryExhibition' },
  { id: 'latest-6', titleKey: 'brandLatestProjects', image: `https://vqknbbjrosel3hr8.public.blob.vercel-storage.com/photos/projects/34be3507-c4e9-42ef-b903-c262fe3d0e2b.JPG.jpeg`, altKey: 'genericAlt6', categoryKey: 'categoryExhibition' },
  { id: 'latest-7', titleKey: 'brandLatestProjects', image: `https://vqknbbjrosel3hr8.public.blob.vercel-storage.com/photos/projects/5FE0C0C9-255D-4D1E-9267-E935BF7231B3.PNG`, altKey: 'genericAlt7', categoryKey: 'categoryExhibition' },
  { id: 'latest-8', titleKey: 'brandLatestProjects', image: `https://vqknbbjrosel3hr8.public.blob.vercel-storage.com/photos/projects/9334419a-bcd7-40bb-8aaf-4b553c0a8719.JPG.jpeg`, altKey: 'genericAlt8', categoryKey: 'categoryExhibition' },
  { id: 'latest-9', titleKey: 'brandLatestProjects', image: `https://vqknbbjrosel3hr8.public.blob.vercel-storage.com/photos/projects/C2889CFB-CC2D-4F73-9B7D-21AB71654A4F.jpg.jpeg`, altKey: 'genericAlt9', categoryKey: 'categoryExhibition' },
  { id: 'latest-10', titleKey: 'brandLatestProjects', image: `https://vqknbbjrosel3hr8.public.blob.vercel-storage.com/photos/projects/C8947A3E-EC61-45B9-A2C1-6085D2308145.PNG`, altKey: 'genericAlt10', categoryKey: 'categoryExhibition' },
  { id: 'latest-11', titleKey: 'brandLatestProjects', image: `https://vqknbbjrosel3hr8.public.blob.vercel-storage.com/photos/projects/IMG_9272.jpg.jpeg`, altKey: 'genericAlt11', categoryKey: 'categoryExhibition' },
  { id: 'latest-12', titleKey: 'brandLatestProjects', image: `https://vqknbbjrosel3hr8.public.blob.vercel-storage.com/photos/projects/IMG_9415.jpg.jpeg`, altKey: 'genericAlt12', categoryKey: 'categoryExhibition' },
  { id: 'latest-13', titleKey: 'brandLatestProjects', image: `https://vqknbbjrosel3hr8.public.blob.vercel-storage.com/photos/projects/IMG_9416.jpg.jpeg`, altKey: 'genericAlt13', categoryKey: 'categoryExhibition' },
  { id: 'latest-14', titleKey: 'brandLatestProjects', image: `https://vqknbbjrosel3hr8.public.blob.vercel-storage.com/photos/projects/IMG_9418.jpg.jpeg`, altKey: 'genericAlt14', categoryKey: 'categoryExhibition' },
  { id: 'latest-15', titleKey: 'brandLatestProjects', image: `https://vqknbbjrosel3hr8.public.blob.vercel-storage.com/photos/projects/IMG_9419.jpg.jpeg`, altKey: 'genericAlt15', categoryKey: 'categoryExhibition' },
  { id: 'latest-16', titleKey: 'brandLatestProjects', image: `https://vqknbbjrosel3hr8.public.blob.vercel-storage.com/photos/projects/IMG_9420.jpg.jpeg`, altKey: 'genericAlt16', categoryKey: 'categoryExhibition' },
  { id: 'latest-17', titleKey: 'brandLatestProjects', image: `https://vqknbbjrosel3hr8.public.blob.vercel-storage.com/photos/projects/IMG_9421.jpg.jpeg`, altKey: 'genericAlt17', categoryKey: 'categoryExhibition' },
  { id: 'latest-18', titleKey: 'brandLatestProjects', image: `https://vqknbbjrosel3hr8.public.blob.vercel-storage.com/photos/projects/IMG_9422.jpg.jpeg`, altKey: 'genericAlt18', categoryKey: 'categoryExhibition' },
  { id: 'latest-19', titleKey: 'brandLatestProjects', image: `https://vqknbbjrosel3hr8.public.blob.vercel-storage.com/photos/projects/IMG_9430.jpg.jpeg`, altKey: 'genericAlt19', categoryKey: 'categoryExhibition' },
  { id: 'latest-20', titleKey: 'brandLatestProjects', image: `https://vqknbbjrosel3hr8.public.blob.vercel-storage.com/photos/projects/c5607f6b-0800-4b85-adac-a2e1911498b0.JPG.jpeg`, altKey: 'genericAlt20', categoryKey: 'categoryExhibition' },
];
