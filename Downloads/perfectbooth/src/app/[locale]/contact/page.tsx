import { setRequestLocale } from 'next-intl/server';
import ContactHero from '@/components/contact/ContactHero';
import ContactFormSection from '@/components/contact/ContactFormSection';
import ContactProcess from '@/components/contact/ContactProcess';

export async function generateMetadata({ params }: { params: Promise<{locale: string}> }) {
  const { locale } = await params;

  // Generate metadata with locale fallback support
  const title = locale === 'ar' 
    ? 'تواصل مع Perfect Booth | حلول المعارض والفعاليات' 
    : 'Contact Perfect Booth | Event and Exhibition Solutions';

  const description = locale === 'ar'
    ? 'تواصل مع Perfect Booth لخدمات أجنحة المعارض وتنظيم الفعاليات والمؤتمرات والإنتاج وأنظمة الصوت والإضاءة والتنفيذ المتكامل في مصر.'
    : 'Contact Perfect Booth for exhibition booths, event planning, conferences, production, sound and lighting, and complete on-site event execution in Egypt.';

  return {
    title,
    description,
    alternates: {
      canonical: `/${locale}/contact`,
      languages: {
        en: '/en/contact',
        ar: '/ar/contact'
      }
    }
  };
}

export default async function ContactPage({ params }: { params: Promise<{locale: string}> }) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <main>
      <ContactHero />
      <ContactFormSection />
      <ContactProcess />
    </main>
  );
}
