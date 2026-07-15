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
    variantClass = "bg-[#cfa856] text-white hover:bg-[#b8954c] px-8 py-3";
  } else if (variant === 'secondary') {
    variantClass = "bg-transparent text-[#cfa856] border-2 border-[#cfa856] hover:bg-[#cfa856] hover:text-white px-8 py-3";
  } else if (variant === 'outline') {
    variantClass = "bg-transparent text-white border-2 border-white hover:bg-white hover:text-black px-8 py-3";
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
