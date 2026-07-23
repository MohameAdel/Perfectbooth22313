export interface ProjectGalleryItem {
  id: string;
  titleKey: string;
  image: string;
  altKey: string;
  categoryKey?: string;
  featured?: boolean;
  shape?: 'landscape' | 'portrait' | 'square' | 'wide';
}

const BLOB_BASE_URL = 'https://vqknbbjrosel3hr8.public.blob.vercel-storage.com/photos/image-work-home-badge';

export const projectsGallery: ProjectGalleryItem[] = [
  {
    id: 'proj-1',
    titleKey: 'genericTitle1',
    image: `${BLOB_BASE_URL}/12173EA7-1190-4F52-BBFF-1E7D8D922C67.webp`,
    altKey: 'genericAlt1',
    categoryKey: 'categoryExhibition',
    featured: true, 
  },
  {
    id: 'proj-4',
    titleKey: 'brandTesla',
    image: `${BLOB_BASE_URL}/8190832C-15D1-41AB-9EAE-3F926F0D6410.webp`,
    altKey: 'genericAlt4',
    categoryKey: 'categoryBrandEnvironment',
    shape: 'wide',
  },
  {
    id: 'proj-4-1',
    titleKey: 'brandTesla',
    image: 'https://vqknbbjrosel3hr8.public.blob.vercel-storage.com/photos/image-work-work-badge/pro11.webp',
    altKey: 'genericAlt4',
    categoryKey: 'categoryBrandEnvironment',
    shape: 'wide',
  },
  {
    id: 'proj-4-2',
    titleKey: 'brandTesla',
    image: 'https://vqknbbjrosel3hr8.public.blob.vercel-storage.com/photos/image-work-work-badge/pro1.webp',
    altKey: 'genericAlt4',
    categoryKey: 'categoryBrandEnvironment',
    shape: 'wide',
  },
  {
    id: 'proj-2',
    titleKey: 'genericTitle2',
    image: `${BLOB_BASE_URL}/6DAF203B-C090-43C7-A637-C9065D2A3846.webp`,
    altKey: 'genericAlt2',
    categoryKey: 'categoryBrandEnvironment',
    shape: 'square',
  },
  {
    id: 'proj-3',
    titleKey: 'genericTitle3',
    image: `${BLOB_BASE_URL}/736AEA72-FDA2-4D45-86D0-324186382647.webp`,
    altKey: 'genericAlt3',
    categoryKey: 'categoryCustomSpace',
    shape: 'portrait',
  },
  {
    id: 'proj-5',
    titleKey: 'genericTitle5',
    image: `${BLOB_BASE_URL}/8A703CDC-F978-4210-B2F5-8BDBA890A8BC.webp`,
    altKey: 'genericAlt5',
    categoryKey: 'categoryExhibition',
    shape: 'landscape',
  },
  {
    id: 'proj-6',
    titleKey: 'brandAUO',
    image: `${BLOB_BASE_URL}/DCA12578-A18E-49BD-9AAA-8B21365A6C72.webp`,
    altKey: 'genericAlt6',
    categoryKey: 'categoryExhibition',
    shape: 'wide',
  },
  {
    id: 'proj-7',
    titleKey: 'genericTitle1',
    image: `${BLOB_BASE_URL}/E1DB6987-9B3B-4B83-9568-D4A294FB11F6.webp`,
    altKey: 'genericAlt7',
    categoryKey: 'categoryCustomSpace',
    shape: 'portrait',
  },
  {
    id: 'proj-8',
    titleKey: 'brandUmbrella',
    image: `${BLOB_BASE_URL}/IMG_7395.jpg.webp`,
    altKey: 'genericAlt8',
    categoryKey: 'categoryBrandEnvironment',
    shape: 'wide',
  },
  {
    id: 'proj-9',
    titleKey: 'genericTitle3',
    image: `${BLOB_BASE_URL}/IMG_7396.jpg.webp`,
    altKey: 'genericAlt9',
    categoryKey: 'categoryExhibition',
    shape: 'square',
  },
  {
    id: 'proj-10',
    titleKey: 'brandInnovo',
    image: `${BLOB_BASE_URL}/IMG_7397.jpg.webp`,
    altKey: 'genericAlt10',
    shape: 'wide',
  },
  {
    id: 'proj-11',
    titleKey: 'genericTitle5',
    image: `${BLOB_BASE_URL}/IMG_7398.jpg.webp`,
    altKey: 'genericAlt11',
    categoryKey: 'categoryBrandEnvironment',
    shape: 'landscape',
  },
  {
    id: 'proj-12',
    titleKey: 'genericTitle6',
    image: `${BLOB_BASE_URL}/IMG_7401.jpg.webp`,
    altKey: 'genericAlt12',
    shape: 'portrait',
  },
  {
    id: 'proj-13',
    titleKey: 'genericTitle1',
    image: `${BLOB_BASE_URL}/IMG_7404.jpg.webp`,
    altKey: 'genericAlt13',
    categoryKey: 'categoryExhibition',
    shape: 'square',
  },
  {
    id: 'proj-14',
    titleKey: 'genericTitle2',
    image: `${BLOB_BASE_URL}/IMG_7406.jpg.webp`,
    altKey: 'genericAlt14',
    categoryKey: 'categoryBrandEnvironment',
    shape: 'landscape',
  },
  {
    id: 'proj-15',
    titleKey: 'genericTitle3',
    image: `${BLOB_BASE_URL}/IMG_7416.jpg.webp`,
    altKey: 'genericAlt15',
    categoryKey: 'categoryCustomSpace',
  },
  {
    id: 'proj-16',
    titleKey: 'genericTitle1',
    image: `${BLOB_BASE_URL}/IMG_7418.jpg.webp`,
    altKey: 'genericAlt1',
    categoryKey: 'categoryExhibition',
  },
  {
    id: 'proj-17',
    titleKey: 'genericTitle2',
    image: `${BLOB_BASE_URL}/IMG_7420.jpg.webp`,
    altKey: 'genericAlt2',
    categoryKey: 'categoryBrandEnvironment',
  },
  {
    id: 'proj-18',
    titleKey: 'genericTitle3',
    image: `${BLOB_BASE_URL}/IMG_7426.jpg.webp`,
    altKey: 'genericAlt3',
    categoryKey: 'categoryCustomSpace',
  },
  {
    id: 'proj-19',
    titleKey: 'genericTitle4',
    image: `${BLOB_BASE_URL}/IMG_7427.jpg.webp`,
    altKey: 'genericAlt4',
  }
];
