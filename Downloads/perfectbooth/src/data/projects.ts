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
];
