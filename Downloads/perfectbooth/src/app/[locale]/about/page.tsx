import { setRequestLocale } from 'next-intl/server';
import { getTranslations } from 'next-intl/server';
import AboutHero from '@/components/about/AboutHero';
import AboutApproach from '@/components/about/AboutApproach';

export async function generateMetadata({ params }: { params: Promise<{locale: string}> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'AboutPage' });
  return {
    title: locale === 'ar' ? 'من نحن | Perfect Booth لتصميم وتنفيذ أجنحة المعارض' : 'About Perfect Booth | Exhibition Design and Fabrication',
    description: t('hero.intro')
  };
}

export default async function AboutPage({ params }: { params: Promise<{locale: string}> }) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <main>
      <AboutHero />
      <AboutApproach />
    </main>
  );
}
