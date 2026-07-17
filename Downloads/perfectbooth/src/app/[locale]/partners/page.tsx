import { setRequestLocale } from 'next-intl/server';
import PartnersHero from '@/components/partners/PartnersHero';
import SelectedCollaborations from '@/components/partners/SelectedCollaborations';
import { getTranslations } from 'next-intl/server';
import { Metadata } from 'next';

export async function generateMetadata({ params }: { params: Promise<{locale: string}> }): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'Header.nav' });
  
  return {
    title: `${t('partners')} | Perfect Booth`,
  };
}

export default async function PartnersPage({ params }: { params: Promise<{locale: string}> }) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <main className="partners-page-main">
      <PartnersHero />
      <SelectedCollaborations />
    </main>
  );
}
