import { setRequestLocale } from 'next-intl/server';
import dynamic from 'next/dynamic';
import HomeHero from '@/components/home/HomeHero';
import AboutSection from '@/components/home/AboutSection';
import ServicesSection from '@/components/home/ServicesSection';
import SolutionsSection from '@/components/home/SolutionsSection';
import WhyPerfectBoothSection from '@/components/home/WhyPerfectBoothSection';
import FaqSection from '@/components/home/FaqSection';

const SelectedProjectsSection = dynamic(() => import('@/components/home/SelectedProjectsSection'));
const PartnersSection = dynamic(() => import('@/components/home/PartnersSection'));

export default async function HomePage({ params }: { params: Promise<{locale: string}> }) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <main>
      <HomeHero />
      <AboutSection />
      <ServicesSection />
      <SolutionsSection />
      <WhyPerfectBoothSection />
      <SelectedProjectsSection />
      <FaqSection />
      <PartnersSection />
    </main>
  );
}
