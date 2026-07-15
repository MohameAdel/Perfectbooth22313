'use client';

import { useLocale } from 'next-intl';
import { usePathname, useRouter } from '@/i18n/navigation';

export default function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const toggleLocale = () => {
    const nextLocale = locale === 'ar' ? 'en' : 'ar';
    router.replace(pathname, { locale: nextLocale });
  };

  const label = locale === 'ar' ? 'EN' : 'عربي';

  return (
    <div 
      className="lang-switch" 
      onClick={toggleLocale}
      style={{ display: 'flex', alignItems: 'center', gap: '5px', cursor: 'pointer', fontFamily: 'sans-serif', fontSize: '1.1rem' }}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          toggleLocale();
        }
      }}
    >
      <span>{label}</span>
      <i className="fa-solid fa-globe"></i>
    </div>
  );
}
