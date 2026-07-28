import { setRequestLocale, getTranslations } from 'next-intl/server';
import { Link } from '@/i18n/navigation';
import { Metadata } from 'next';
import Logo from '@/components/ui/Logo';
import { FaXTwitter, FaFacebookF, FaInstagram, FaUser } from 'react-icons/fa6';

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
  params 
}: { 
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations('ThankYouPage');
  const dir = locale === 'ar' ? 'rtl' : 'ltr';

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
          opacity: 0.13,
          fontSize: '0.85rem',
          fontFamily: 'monospace',
          color: '#ffffff',
          zIndex: 1
        }}
      >
        <span style={{ position: 'absolute', top: '8%', left: '4%', fontSize: '1.8rem', border: '1px solid #fff', padding: '2px 8px', borderRadius: '4px' }}>5</span>
        <span style={{ position: 'absolute', top: '8%', left: '19%', fontSize: '1.2rem', border: '1px solid #fff', padding: '2px 6px', borderRadius: '4px' }}>JS</span>
        <span style={{ position: 'absolute', top: '18%', left: '10%' }}>SVG Filter</span>
        <span style={{ position: 'absolute', top: '25%', left: '30%' }}>Animate</span>
        <span style={{ position: 'absolute', top: '34%', left: '5%' }}>Velocity.js</span>
        <span style={{ position: 'absolute', top: '62%', left: '4%' }}>React + styled-components</span>
        <span style={{ position: 'absolute', top: '75%', left: '19%', fontSize: '1.2rem', border: '1px solid #fff', padding: '2px 6px', borderRadius: '4px' }}>JS</span>
        <span style={{ position: 'absolute', top: '90%', left: '4%', fontSize: '1.8rem', border: '1px solid #fff', padding: '2px 8px', borderRadius: '4px' }}>5</span>

        <span style={{ position: 'absolute', top: '8%', right: '23%', fontSize: '1.2rem', border: '1px solid #fff', padding: '2px 6px', borderRadius: '4px' }}>5</span>
        <span style={{ position: 'absolute', top: '8%', right: '4%', fontSize: '1.5rem' }}>⚛</span>
        <span style={{ position: 'absolute', top: '20%', right: '35%' }}>CSS/SASS</span>
        <span style={{ position: 'absolute', top: '20%', right: '7%' }}>Anime.js</span>
        <span style={{ position: 'absolute', top: '34%', right: '15%' }}>HTML, Canvas</span>
        <span style={{ position: 'absolute', top: '50%', right: '5%' }}>CSS Animation</span>
        <span style={{ position: 'absolute', top: '65%', right: '12%' }}>GreenSock Animation</span>
        <span style={{ position: 'absolute', top: '80%', right: '23%', fontSize: '1.2rem', border: '1px solid #fff', padding: '2px 6px', borderRadius: '4px' }}>5</span>
        <span style={{ position: 'absolute', top: '80%', right: '4%', fontSize: '1.5rem' }}>⚛</span>
        <span style={{ position: 'absolute', top: '81%', right: '42%' }}>Front-end Dev</span>
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
        <Link href="/" aria-label="Home" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <span style={{ fontSize: '1.75rem', fontWeight: 900, color: '#cfa856', fontFamily: 'monospace', letterSpacing: '-1px' }}>
            &lt;/&gt;
          </span>
          <Logo width={120} height={40} />
        </Link>

        <nav style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
          <Link href="/" style={{ color: '#ffffff', fontSize: '0.95rem', fontWeight: 500, transition: 'color 0.2s' }}>
            {t('home')}
          </Link>
          <Link href="/services" style={{ color: '#ffffff', fontSize: '0.95rem', fontWeight: 500, transition: 'color 0.2s' }}>
            {t('services')}
          </Link>
          <Link href="/contact" style={{ color: '#ffffff', fontSize: '0.95rem', fontWeight: 500, transition: 'color 0.2s' }}>
            {t('contact')}
          </Link>
          <div 
            style={{
              width: '38px',
              height: '38px',
              borderRadius: '50%',
              backgroundColor: '#ffffff',
              color: '#050505',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer'
            }}
          >
            <FaUser style={{ fontSize: '0.95rem' }} />
          </div>
        </nav>
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
          maxWidth: '900px',
          margin: '0 auto'
        }}
      >
        {/* Styled 3D Layered Title */}
        <h1 
          style={{
            fontSize: 'clamp(3.5rem, 8vw, 7.5rem)',
            fontWeight: 900,
            lineHeight: 1.05,
            letterSpacing: '-0.02em',
            color: '#ffffff',
            marginBottom: '2rem',
            textShadow: '3px 3px 0px rgba(255, 255, 255, 0.4), 6px 6px 0px #050505, 9px 9px 0px rgba(255, 255, 255, 0.15)'
          }}
        >
          {t('title')}
        </h1>

        {/* Primary Subtitle */}
        <p 
          style={{
            fontSize: 'clamp(1.15rem, 2.2vw, 1.75rem)',
            fontWeight: 600,
            color: '#ffffff',
            marginBottom: '2.5rem',
            lineHeight: 1.5,
            maxWidth: '750px'
          }}
        >
          {t('subtitle')}
        </p>

        {/* Spam Folder Note */}
        <p 
          style={{
            fontSize: '0.95rem',
            color: 'rgba(255, 255, 255, 0.65)',
            marginBottom: '1.25rem',
            fontFamily: 'monospace'
          }}
        >
          {t('spamNote')}
        </p>

        {/* Contact Support Note */}
        <p 
          style={{
            fontSize: '0.9rem',
            color: 'rgba(255, 255, 255, 0.5)',
            fontFamily: 'monospace',
            lineHeight: 1.6,
            maxWidth: '650px'
          }}
        >
          {t('contactNote')}
        </p>

        {/* Back to Home Button */}
        <div style={{ marginTop: '2.5rem' }}>
          <Link 
            href="/" 
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '0.75rem',
              backgroundColor: '#cfa856',
              color: '#121418',
              padding: '0.9rem 2.5rem',
              borderRadius: '8px',
              fontWeight: 700,
              fontSize: '1.05rem',
              transition: 'all 0.3s ease',
              textDecoration: 'none',
              boxShadow: '0 4px 20px rgba(207, 168, 86, 0.3)'
            }}
          >
            <span>{t('button')}</span>
            <span style={{ fontSize: '1.2rem' }}>{dir === 'rtl' ? '←' : '→'}</span>
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

        {/* Footer Links */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', fontSize: '0.8rem', color: 'rgba(255, 255, 255, 0.6)', fontFamily: 'monospace' }}>
          <Link href="/contact" style={{ color: 'inherit' }}>{t('contact')}</Link>
          <span>•</span>
          <Link href="/privacy" style={{ color: 'inherit' }}>{t('privacy')}</Link>
          <span>•</span>
          <Link href="/terms" style={{ color: 'inherit' }}>{t('terms')}</Link>
        </div>

        {/* Copyright */}
        <div style={{ fontSize: '0.75rem', color: 'rgba(255, 255, 255, 0.4)', fontFamily: 'monospace' }}>
          {t('copyright')}
        </div>
      </footer>
    </main>
  );
}
