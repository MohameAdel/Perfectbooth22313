import { ReactNode } from 'react';

interface MobileMenuContactItemProps {
  icon: ReactNode;
  text: string;
  href?: string;
}

export default function MobileMenuContactItem({ icon, text, href }: MobileMenuContactItemProps) {
  const content = (
    <>
      <div className="drawer-contact-icon">{icon}</div>
      <span>{text}</span>
    </>
  );

  if (href) {
    return (
      <a href={href} className="drawer-contact-item" style={{ textDecoration: 'none' }}>
        {content}
      </a>
    );
  }

  return (
    <div className="drawer-contact-item">
      {content}
    </div>
  );
}
