"use client";

import React, { useState, useEffect } from 'react';
import { useLocale } from 'next-intl';
import { usePathname, useRouter } from '@/i18n/navigation';
import { FaArrowDown, FaPaperPlane } from 'react-icons/fa6';

interface AnimatedFormCTAProps {
  targetId?: string;
  labelAr?: string;
  labelEn?: string;
  floating?: boolean;
}

export default function AnimatedFormCTA({
  targetId = 'project-form',
  labelAr = 'احجز استشارتك الآن',
  labelEn = 'Book Your Consultation',
  floating = true
}: AnimatedFormCTAProps) {
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();

  const isAr = locale === 'ar';
  const label = isAr ? labelAr : labelEn;

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (!floating) return;
    
    // Hide on thank-you page
    if (pathname.includes('/thank-you')) {
      setIsVisible(false);
      return;
    }

    const handleScroll = () => {
      const formEl = document.getElementById(targetId);
      const scrollY = window.scrollY;

      // Show floating button after scrolling past the first section (220px+)
      if (scrollY > 220) {
        if (formEl) {
          const rect = formEl.getBoundingClientRect();
          // Hide when the form is mostly in viewport
          if (rect.top < window.innerHeight * 0.7 && rect.bottom > 100) {
            setIsVisible(false);
          } else {
            setIsVisible(true);
          }
        } else {
          setIsVisible(true);
        }
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [floating, targetId, pathname]);

  const handleAction = (e: React.MouseEvent) => {
    e.preventDefault();
    const formSection = document.getElementById(targetId);
    
    if (formSection) {
      // If form exists on current page, smooth scroll directly to it
      formSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setTimeout(() => {
        const input = document.getElementById('fullName');
        if (input) {
          input.focus({ preventScroll: true });
        }
      }, 600);
    } else {
      // If on another page, navigate to contact page form section
      router.push('/contact#project-form');
    }
  };

  if (floating && !isVisible) return null;

  return (
    <>
      <style>{`
        @keyframes animatedCtaPulse {
          0% {
            box-shadow: 0 0 0 0 rgba(207, 168, 86, 0.7), 0 8px 25px rgba(0, 0, 0, 0.4);
          }
          70% {
            box-shadow: 0 0 0 18px rgba(207, 168, 86, 0), 0 12px 30px rgba(0, 0, 0, 0.5);
          }
          100% {
            box-shadow: 0 0 0 0 rgba(207, 168, 86, 0), 0 8px 25px rgba(0, 0, 0, 0.4);
          }
        }
        .animated-form-cta-floating {
          position: fixed;
          bottom: 30px;
          ${isAr ? 'right: 30px;' : 'left: 30px;'}
          z-index: 999;
          animation: animatedCtaPulse 2.2s infinite;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .animated-form-cta-btn {
          display: inline-flex;
          align-items: center;
          gap: 0.75rem;
          padding: 0.95rem 1.85rem;
          background: linear-gradient(135deg, #cfa856 0%, #f4d084 50%, #cfa856 100%);
          background-size: 200% auto;
          color: #0d0f12;
          font-weight: 700;
          font-size: 1rem;
          border-radius: 50px;
          border: 1px solid rgba(255, 255, 255, 0.3);
          cursor: pointer;
          text-decoration: none;
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.35);
          transition: transform 0.25s ease, background-position 0.5s ease;
        }
        .animated-form-cta-btn:hover {
          transform: translateY(-3px) scale(1.03);
          background-position: right center;
          color: #000000;
        }
        @media (max-width: 768px) {
          .animated-form-cta-floating {
            bottom: 16px !important;
            ${isAr ? 'right: 14px !important;' : 'left: 14px !important;'}
          }
          .animated-form-cta-btn {
            padding: 0.65rem 1.15rem !important;
            font-size: 0.85rem !important;
            gap: 0.4rem !important;
          }
          .animated-cta-icon-box {
            width: 22px !important;
            height: 22px !important;
            font-size: 0.75rem !important;
          }
        }
      `}</style>

      <div className={floating ? 'animated-form-cta-floating' : ''}>
        <button
          onClick={handleAction}
          className="animated-form-cta-btn"
          aria-label={label}
        >
          <span>{label}</span>
          <div className="animated-cta-icon-box">
            {pathname.includes('/contact') ? <FaArrowDown /> : <FaPaperPlane />}
          </div>
        </button>
      </div>
    </>
  );
}
