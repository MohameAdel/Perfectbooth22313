import { setRequestLocale } from 'next-intl/server';
import HomeHero from '@/components/home/HomeHero';
import AboutSection from '@/components/home/AboutSection';
import ServicesSection from '@/components/home/ServicesSection';
import SolutionsSection from '@/components/home/SolutionsSection';
import SelectedProjectsSection from '@/components/home/SelectedProjectsSection';
import WhyPerfectBoothSection from '@/components/home/WhyPerfectBoothSection';

export default async function HomePage({ params }: { params: Promise<{locale: string}> }) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <main>
      <HomeHero />
      <AboutSection />
      <ServicesSection />
      <SelectedProjectsSection />
      <SolutionsSection />
      <WhyPerfectBoothSection />
    </main>
  );
}
