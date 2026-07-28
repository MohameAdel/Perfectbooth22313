import { ReactNode, ButtonHTMLAttributes } from 'react';
import { useLocale } from 'next-intl';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'light' | 'tertiary';
  href?: string;
  icon?: boolean;
  className?: string;
}

export default function Button({ children, variant = 'primary', href, icon, className = '', ...props }: ButtonProps) {
  const locale = useLocale();
  const dir = locale === 'ar' ? 'rtl' : 'ltr';

  const baseClass = "inline-flex items-center justify-center font-semibold rounded-md min-h-[44px] min-w-[44px] px-6 py-3 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#1a1a1a] disabled:opacity-50 disabled:cursor-not-allowed";
  
  let variantClass = "";
  if (variant === 'primary') {
    // Primary premium: Gold background, Dark #121418 text for accessibility contrast
    variantClass = "bg-[#cfa856] text-[#121418] hover:bg-[#b89345] active:bg-[#a38038]";
  } else if (variant === 'secondary') {
    // Dark outline: Transparent/#121418 background, White text, Gold border
    variantClass = "bg-[#121418] text-white border-2 border-[#cfa856] hover:bg-[rgba(207,168,86,0.15)] hover:border-[#cfa856]";
  } else if (variant === 'light') {
    // Light: White background, #121418 text, gold border/detail
    variantClass = "bg-white text-[#121418] border-2 border-[#cfa856] hover:bg-gray-100";
  } else if (variant === 'outline') {
    // Transparent outline
    variantClass = "bg-transparent text-white border-2 border-[#cfa856] hover:bg-[rgba(207,168,86,0.15)]";
  } else if (variant === 'tertiary') {
    // Tertiary: White text, gold arrow/hover
    variantClass = "bg-transparent text-white hover:text-[#cfa856] px-2 py-1 underline-offset-4 hover:underline";
  }

  const customClass = `${baseClass} ${variantClass} ${className}`;

  const iconElement = icon && (
    <span className={`ms-2 transition-transform duration-300 ${variant === 'primary' || variant === 'light' ? 'text-[#121418]' : 'text-[#cfa856]'}`}>
      {dir === 'rtl' ? '←' : '→'}
    </span>
  );

  if (href) {
    return (
      <a href={href} className={customClass} dir={dir}>
        {children}
        {iconElement}
      </a>
    );
  }

  return (
    <button className={customClass} dir={dir} {...props}>
      {children}
      {iconElement}
    </button>
  );
}
