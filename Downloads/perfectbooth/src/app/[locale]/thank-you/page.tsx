import { setRequestLocale, getTranslations } from 'next-intl/server';
import { Link } from '@/i18n/navigation';
import Image from 'next/image';
import { Metadata } from 'next';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'ThankYouPage' });
  
  return {
    title: `${t('title')} | Perfect Booth`,
    robots: {
      index: false,
      follow: false,
    }
  };
}

export default async function ThankYouPage({ 
  params,
  searchParams
}: { 
  params: Promise<{ locale: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations('ThankYouPage');
  const dir = locale === 'ar' ? 'rtl' : 'ltr';
  
  const resolvedSearchParams = await searchParams;
  const refId = resolvedSearchParams.ref as string | undefined;

  return (
    <main className="thank-you-page" dir={dir}>
      <div className="thank-you-container">
        
        {/* Visual Column */}
        <div className="thank-you-visual reveal-animate">
          <div className="thank-you-image-wrapper">
            <Image
              src="/assets/banner2.png"
              alt={t('title')}
              fill
              className="thank-you-image"
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
            />
            <div className="thank-you-overlay"></div>
          </div>
        </div>

        {/* Content Column */}
        <div className="thank-you-content reveal-animate" style={{ animationDelay: '0.2s' }}>
          <div className="thank-you-content-inner">
            <h1 className="thank-you-title">{t('title')}</h1>
            
            <p className="thank-you-message">
              {t('message')}
            </p>

            {refId && (
              <div className="thank-you-reference">
                <span className="ref-label">{t('reference')}:</span>
                <span className="ref-value">{refId}</span>
              </div>
            )}

            <div className="thank-you-action">
              <Link href="/" className="pb-btn-primary">
                {t('button')}
              </Link>
            </div>
          </div>
        </div>

      </div>
    </main>
  );
}
