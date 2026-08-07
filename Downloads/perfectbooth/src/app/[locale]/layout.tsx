import type { Metadata } from 'next';
import Script from 'next/script';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages, setRequestLocale } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import AnimatedFormCTA from '@/components/ui/AnimatedFormCTA';
import '@/app/globals.css';

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://perfectbooth22313-yywa.vercel.app'),
  title: 'Perfect Booth - To organize conferences and exhibitions',
  description: 'Event solutions, exhibition booth manufacturing and logistics.',
};

import { Cairo } from 'next/font/google';

const cairo = Cairo({ 
  subsets: ['latin', 'arabic'],
  weight: ['400', '600', '700'],
  display: 'optional',
  variable: '--font-cairo',
});

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{locale: string}>;
}) {
  const { locale } = await params;
  // Ensure that the incoming `locale` is valid
  if (!routing.locales.includes(locale as typeof routing.locales[number])) {
    notFound();
  }
  
  setRequestLocale(locale);
 
  const allMessages = (await getMessages()) as Record<string, any>;
  
  // Pass all messages to ensure no Client Components are missing their translations
  const messages = allMessages;
  const dir = locale === 'ar' ? 'rtl' : 'ltr';

  return (
    <html lang={locale} dir={dir} className={cairo.variable} suppressHydrationWarning>
      <body>
        {/* Google Tag Manager */}
        <Script
          id="gtm-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-W96H7BWR');`,
          }}
        />
        {/* Google Tag Manager (noscript) */}
        <noscript
          dangerouslySetInnerHTML={{
            __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-W96H7BWR" height="0" width="0" style="display:none;visibility:hidden"></iframe>`,
          }}
        />
        {/* End Google Tag Manager (noscript) */}
        <NextIntlClientProvider messages={messages}>
          <Header />
          {children}
          <Footer />
          <AnimatedFormCTA />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
