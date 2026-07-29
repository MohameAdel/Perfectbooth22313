"use client";

import React from 'react';
import { Link, usePathname } from '@/i18n/navigation';

interface NavLinksProps {
  navHome: string;
  navAbout: string;
  navServices: string;
  navPartners: string;
  navProjects: string;
  navContact: string;
}

export default function NavLinks({
  navHome,
  navAbout,
  navServices,
  navPartners,
  navProjects,
  navContact
}: NavLinksProps) {
  const pathname = usePathname();

  return (
    <nav className="nav-links">
      <Link href="/" className={pathname === '/' ? 'active' : ''}>{navHome}</Link>
      <Link href="/about" className={pathname === '/about' ? 'active' : ''}>{navAbout}</Link>
      <Link href="/services" className={pathname === '/services' ? 'active' : ''}>{navServices}</Link>
      <Link href="/partners" className={pathname === '/partners' ? 'active' : ''}>{navPartners}</Link>
      <Link href="/projects" className={pathname === '/projects' ? 'active' : ''}>{navProjects}</Link>
      <Link href="/contact#project-form" className={pathname === '/contact' ? 'active' : ''}>{navContact}</Link>
    </nav>
  );
}
