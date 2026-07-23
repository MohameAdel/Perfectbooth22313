import { setRequestLocale } from 'next-intl/server';
import dynamic from 'next/dynamic';
import HomeHero from '@/components/home/HomeHero';
import AboutSection from '@/components/home/AboutSection';
import ServicesSection from '@/components/home/ServicesSection';
import SolutionsSection from '@/components/home/SolutionsSection';
import WhyChooseUsSection from '@/components/home/WhyChooseUsSection';
import FaqSection from '@/components/home/FaqSection';

const SelectedProjectsSection = dynamic(() => import('@/components/home/SelectedProjectsSection'));
const BeforeAfterSection = dynamic(() => import('@/components/home/BeforeAfterSection'));
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
      <WhyChooseUsSection />
      <SelectedProjectsSection />
      <BeforeAfterSection />
      <FaqSection />
      <PartnersSection />
    </main>
  );
}
