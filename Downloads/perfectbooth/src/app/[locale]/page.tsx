import { setRequestLocale } from 'next-intl/server';
import dynamic from 'next/dynamic';
import HomeHero from '@/components/home/HomeHero';

const AboutSection = dynamic(() => import('@/components/home/AboutSection'));
const ServicesSection = dynamic(() => import('@/components/home/ServicesSection'));
const SolutionsSection = dynamic(() => import('@/components/home/SolutionsSection'));
const SelectedProjectsSection = dynamic(() => import('@/components/home/SelectedProjectsSection'));
const FaqSection = dynamic(() => import('@/components/home/FaqSection'));
const WhyPerfectBoothSection = dynamic(() => import('@/components/home/WhyPerfectBoothSection'));
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
