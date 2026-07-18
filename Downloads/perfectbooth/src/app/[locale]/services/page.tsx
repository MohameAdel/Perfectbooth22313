import { setRequestLocale } from 'next-intl/server';
import { getTranslations } from 'next-intl/server';
import ServicesHero from '@/components/services/ServicesHero';
import ServicesVPStrip from '@/components/services/ServicesVPStrip';
import ServicesIntro from '@/components/services/ServicesIntro';
import CoreServices from '@/components/services/CoreServices';

export async function generateMetadata({ params }: { params: Promise<{locale: string}> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'ServicesPage.meta' });

  return {
    title: t('title'),
    description: t('description'),
  };
}

export default async function ServicesPage({ params }: { params: Promise<{locale: string}> }) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <main className="services-page">
      <ServicesHero />
      <ServicesVPStrip />
      <ServicesIntro />
      <CoreServices />
    </main>
  );
}
