import { setRequestLocale, getTranslations } from 'next-intl/server';
import { Link } from '@/i18n/navigation';
import { Metadata } from 'next';
import Logo from '@/components/ui/Logo';
import LanguageSwitcher from '@/components/layout/LanguageSwitcher';
import { FaXTwitter, FaFacebookF, FaInstagram } from 'react-icons/fa6';

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
  const rawRef = resolvedSearchParams?.ref;
  const refId = typeof rawRef === 'string' && rawRef.trim().length > 0 ? rawRef.trim() : undefined;

  return (
    <main 
      className="thank-you-pixel-page" 
      dir={dir}
      style={{
        backgroundColor: '#050505',
        color: '#ffffff',
        minHeight: '100vh',
        width: '100%',
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        overflow: 'hidden',
        boxSizing: 'border-box'
      }}
    >
      {/* Background Floating Technical Tags & Watermarks */}
      <div 
        className="thank-you-bg-tags" 
        style={{
          position: 'absolute',
          inset: 0,
          pointerEvents: 'none',
          opacity: 0.12,
          fontSize: '0.85rem',
          fontFamily: 'monospace',
          color: '#ffffff',
          zIndex: 1
        }}
      >
        <span style={{ position: 'absolute', top: '8%', left: '4%', fontSize: '1.8rem', border: '1px solid #fff', padding: '2px 8px', borderRadius: '4px' }}>3D</span>
        <span style={{ position: 'absolute', top: '8%', left: '19%', fontSize: '1.2rem', border: '1px solid #fff', padding: '2px 6px', borderRadius: '4px' }}>CAD</span>
        <span style={{ position: 'absolute', top: '18%', left: '10%' }}>Exhibition Booths</span>
        <span style={{ position: 'absolute', top: '25%', left: '30%' }}>Wood Fabrication</span>
        <span style={{ position: 'absolute', top: '34%', left: '5%' }}>Event Engineering</span>
        <span style={{ position: 'absolute', top: '62%', left: '4%' }}>Perfect Booth</span>
        <span style={{ position: 'absolute', top: '75%', left: '19%', fontSize: '1.2rem', border: '1px solid #fff', padding: '2px 6px', borderRadius: '4px' }}>CNC</span>
        <span style={{ position: 'absolute', top: '90%', left: '4%', fontSize: '1.8rem', border: '1px solid #fff', padding: '2px 8px', borderRadius: '4px' }}>PB</span>

        <span style={{ position: 'absolute', top: '8%', right: '23%', fontSize: '1.2rem', border: '1px solid #fff', padding: '2px 6px', borderRadius: '4px' }}>3D</span>
        <span style={{ position: 'absolute', top: '8%', right: '4%', fontSize: '1.5rem' }}>★</span>
        <span style={{ position: 'absolute', top: '20%', right: '35%' }}>Lighting & Audio</span>
        <span style={{ position: 'absolute', top: '20%', right: '7%' }}>Field Supervision</span>
        <span style={{ position: 'absolute', top: '34%', right: '15%' }}>Custom Pavilions</span>
        <span style={{ position: 'absolute', top: '50%', right: '5%' }}>Spatial Experience</span>
        <span style={{ position: 'absolute', top: '65%', right: '12%' }}>Brand Activations</span>
        <span style={{ position: 'absolute', top: '80%', right: '23%', fontSize: '1.2rem', border: '1px solid #fff', padding: '2px 6px', borderRadius: '4px' }}>PB</span>
        <span style={{ position: 'absolute', top: '80%', right: '4%', fontSize: '1.5rem' }}>★</span>
        <span style={{ position: 'absolute', top: '81%', right: '42%' }}>Perfect Booth</span>
      </div>

      {/* Top Header Navigation */}
      <header 
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '1.75rem 3rem',
          zIndex: 10,
          position: 'relative'
        }}
      >
        <div>
          <Logo width={130} height={42} />
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <LanguageSwitcher />
        </div>
      </header>

      {/* Main Center Content */}
      <div 
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
          zIndex: 10,
          padding: '2rem 1.5rem',
          flex: 1,
          maxWidth: '850px',
          margin: '0 auto'
        }}
      >
        {/* Eyebrow Label */}
        <div
          style={{
            fontSize: '0.9rem',
            fontWeight: 700,
            textTransform: 'uppercase',
            letterSpacing: '0.15em',
            color: '#cfa856',
            marginBottom: '1.25rem',
            backgroundColor: 'rgba(207, 168, 86, 0.1)',
            border: '1px solid rgba(207, 168, 86, 0.25)',
            padding: '0.35rem 1.15rem',
            borderRadius: '9999px',
            display: 'inline-block'
          }}
        >
          {t('eyebrow')}
        </div>

        {/* Main Heading */}
        <h1 
          style={{
            fontSize: 'clamp(2.2rem, 5vw, 4.25rem)',
            fontWeight: 800,
            lineHeight: 1.15,
            color: '#ffffff',
            marginBottom: '1.75rem',
            textShadow: '0 2px 10px rgba(0, 0, 0, 0.5)'
          }}
        >
          {t('title')}
        </h1>

        {/* Description */}
        <p 
          style={{
            fontSize: 'clamp(1.05rem, 1.8vw, 1.35rem)',
            fontWeight: 400,
            color: 'rgba(255, 255, 255, 0.88)',
            marginBottom: '1.5rem',
            lineHeight: 1.6,
            maxWidth: '750px'
          }}
        >
          {t('description')}
        </p>

        {/* Supporting Note */}
        <p 
          style={{
            fontSize: '0.98rem',
            color: '#cfa856',
            fontWeight: 500,
            marginBottom: '2rem',
            lineHeight: 1.5
          }}
        >
          {t('supportingNote')}
        </p>

        {/* Submission Reference Number (Only displayed when valid refId exists) */}
        {refId && (
          <div 
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.75rem',
              backgroundColor: 'rgba(18, 20, 24, 0.8)',
              border: '1px solid rgba(255, 255, 255, 0.15)',
              padding: '0.65rem 1.5rem',
              borderRadius: '8px',
              marginBottom: '2.5rem',
              fontSize: '0.9rem',
              fontFamily: 'monospace'
            }}
          >
            <span style={{ color: 'rgba(255, 255, 255, 0.6)' }}>{t('referenceLabel')}:</span>
            <span style={{ color: '#ffffff', fontWeight: 700, letterSpacing: '0.05em' }}>{refId}</span>
          </div>
        )}

        {/* Action Buttons */}
        <div 
          style={{ 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center',
            gap: '1.25rem', 
            flexWrap: 'wrap',
            marginTop: '1rem' 
          }}
        >
          {/* Primary Button: Back to Home */}
          <Link 
            href="/" 
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '0.75rem',
              backgroundColor: '#cfa856',
              color: '#121418',
              padding: '0.9rem 2.25rem',
              borderRadius: '8px',
              fontWeight: 700,
              fontSize: '1rem',
              transition: 'all 0.3s ease',
              textDecoration: 'none',
              boxShadow: '0 4px 20px rgba(207, 168, 86, 0.25)',
              minHeight: '44px'
            }}
          >
            <span>{t('primaryBtn')}</span>
            <span style={{ fontSize: '1.1rem' }}>{dir === 'rtl' ? '←' : '→'}</span>
          </Link>

          {/* Secondary Button: Explore Our Projects */}
          <Link 
            href="/projects" 
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '0.75rem',
              backgroundColor: '#121418',
              color: '#ffffff',
              border: '2px solid #cfa856',
              padding: '0.85rem 2.25rem',
              borderRadius: '8px',
              fontWeight: 600,
              fontSize: '1rem',
              transition: 'all 0.3s ease',
              textDecoration: 'none',
              minHeight: '44px'
            }}
          >
            <span>{t('secondaryBtn')}</span>
          </Link>
        </div>
      </div>

      {/* Bottom Footer Area */}
      <footer 
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '1.25rem',
          padding: '2rem 1.5rem',
          zIndex: 10,
          position: 'relative'
        }}
      >
        {/* Social Badges */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <a 
            href="https://x.com" 
            target="_blank" 
            rel="noopener noreferrer" 
            aria-label="X"
            style={{
              width: '40px',
              height: '40px',
              borderRadius: '50%',
              backgroundColor: '#ffffff',
              color: '#050505',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              transition: 'transform 0.2s ease'
            }}
          >
            <FaXTwitter style={{ fontSize: '1rem' }} />
          </a>
          <a 
            href="https://facebook.com" 
            target="_blank" 
            rel="noopener noreferrer" 
            aria-label="Facebook"
            style={{
              width: '40px',
              height: '40px',
              borderRadius: '50%',
              backgroundColor: '#ffffff',
              color: '#050505',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              transition: 'transform 0.2s ease'
            }}
          >
            <FaFacebookF style={{ fontSize: '1rem' }} />
          </a>
          <a 
            href="https://instagram.com" 
            target="_blank" 
            rel="noopener noreferrer" 
            aria-label="Instagram"
            style={{
              width: '40px',
              height: '40px',
              borderRadius: '50%',
              backgroundColor: '#ffffff',
              color: '#050505',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              transition: 'transform 0.2s ease'
            }}
          >
            <FaInstagram style={{ fontSize: '1rem' }} />
          </a>
        </div>



        {/* Copyright */}
        <div style={{ fontSize: '0.75rem', color: 'rgba(255, 255, 255, 0.4)', fontFamily: 'monospace' }}>
          {t('copyright')}
        </div>
      </footer>
    </main>
  );
}
