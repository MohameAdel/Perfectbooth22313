"use client";

import React, { useState, useEffect } from 'react';
import { useTranslations, useLocale } from 'next-intl';
import { FaPaperPlane, FaArrowDown } from 'react-icons/fa6';

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
  const isAr = locale === 'ar';
  const label = isAr ? labelAr : labelEn;

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (!floating) return;
    
    const handleScroll = () => {
      // Show floating button after scrolling 200px down, hide when near bottom form
      const formEl = document.getElementById(targetId);
      const scrollY = window.scrollY;

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
  }, [floating, targetId]);

  const handleScrollToForm = (e: React.MouseEvent) => {
    e.preventDefault();
    const formSection = document.getElementById(targetId);
    
    if (formSection) {
      formSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
      // Focus on first input
      setTimeout(() => {
        const input = document.getElementById('fullName');
        if (input) {
          input.focus({ preventScroll: true });
        }
      }, 600);
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
        @keyframes animatedCtaShimmer {
          0% { background-position: -200% 0; }
          100% { background-position: 200% 0; }
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
        .animated-cta-icon-box {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 28px;
          height: 28px;
          background: rgba(13, 15, 18, 0.15);
          border-radius: 50%;
          font-size: 0.85rem;
        }
      `}</style>

      <div className={floating ? 'animated-form-cta-floating' : ''}>
        <button
          onClick={handleScrollToForm}
          className="animated-form-cta-btn"
          aria-label={label}
        >
          <span>{label}</span>
          <div className="animated-cta-icon-box">
            <FaArrowDown />
          </div>
        </button>
      </div>
    </>
  );
}
