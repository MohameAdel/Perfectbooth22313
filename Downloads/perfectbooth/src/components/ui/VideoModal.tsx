'use client';

import { useEffect, useRef } from 'react';
import { useTranslations } from 'next-intl';

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
  videoSrc: string;
}

export default function VideoModal({ isOpen, onClose, videoSrc }: VideoModalProps) {
  const t = useTranslations('About');
  const modalRef = useRef<HTMLDialogElement>(null);
  const previousFocusRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (isOpen) {
      previousFocusRef.current = document.activeElement as HTMLElement;
      document.body.style.overflow = 'hidden';
      
      if (modalRef.current && !modalRef.current.open) {
        modalRef.current.showModal();
      }
    } else {
      document.body.style.overflow = '';
      if (modalRef.current && modalRef.current.open) {
        modalRef.current.close();
      }
      if (previousFocusRef.current) {
        previousFocusRef.current.focus();
      }
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const handleClose = () => {
    onClose();
  };

  const handleBackdropClick = (e: React.MouseEvent<HTMLDialogElement>) => {
    if (e.target === modalRef.current) {
      handleClose();
    }
  };

  if (!isOpen) return null;

  return (
    <dialog 
      ref={modalRef}
      className="video-modal"
      onCancel={handleClose}
      onClick={handleBackdropClick}
      aria-label={t('videoModalTitle') || "Video Player"}
    >
      <div className="video-modal-content">
        <button 
          className="video-modal-close" 
          onClick={handleClose}
          aria-label={t('closeVideo') || "Close video"}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
        <video 
          className="video-player"
          src={videoSrc}
          controls
          autoPlay
          preload="auto"
        >
          {t('videoNotSupported') || "Your browser does not support the video tag."}
        </video>
      </div>
    </dialog>
  );
}
