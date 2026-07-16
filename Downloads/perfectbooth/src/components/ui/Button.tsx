import { ReactNode, ButtonHTMLAttributes } from 'react';
import { useLocale } from 'next-intl';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  href?: string;
  icon?: boolean;
  className?: string;
}

export default function Button({ children, variant = 'primary', href, icon, className = '', ...props }: ButtonProps) {
  const locale = useLocale();
  const dir = locale === 'ar' ? 'rtl' : 'ltr';

  const baseClass = "inline-flex items-center justify-center font-semibold rounded-md transition-colors duration-300";
  
  let variantClass = "";
  if (variant === 'primary') {
    variantClass = "bg-[var(--pb-primary)] text-[var(--pb-text)] hover:bg-[var(--pb-primary-hover)] px-8 py-3";
  } else if (variant === 'secondary') {
    variantClass = "bg-transparent text-[var(--pb-primary)] border-2 border-[var(--pb-primary)] hover:bg-[var(--pb-primary)] hover:text-[var(--pb-text)] px-8 py-3";
  } else if (variant === 'outline') {
    variantClass = "bg-transparent text-[var(--pb-text)] border-2 border-[var(--pb-text)] hover:bg-[var(--pb-text)] hover:text-[var(--pb-bg)] px-8 py-3";
  }

  const customClass = `${baseClass} ${variantClass} ${className}`;

  if (href) {
    return (
      <a href={href} className={customClass} dir={dir}>
        {children}
        {icon && (
          <span className="ms-2">
             {dir === 'rtl' ? '←' : '→'}
          </span>
        )}
      </a>
    );
  }

  return (
    <button className={customClass} dir={dir} {...props}>
      {children}
      {icon && (
        <span className="ms-2">
           {dir === 'rtl' ? '←' : '→'}
        </span>
      )}
    </button>
  );
}
