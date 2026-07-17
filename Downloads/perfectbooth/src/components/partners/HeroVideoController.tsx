'use client';

import React, { useRef, useState, useEffect } from 'react';
import { useLocale } from 'next-intl';

interface HeroVideoControllerProps {
  videoSrc: string;
}

export default function HeroVideoController({ videoSrc }: HeroVideoControllerProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(true); // Attempt autoplay
  const [isMuted, setIsMuted] = useState(true);
  const [mounted, setMounted] = useState(false);
  const locale = useLocale();

  // Play/Pause labels based on locale
  const playLabel = locale === 'ar' ? 'تشغيل الفيديو' : 'Play Video';
  const pauseLabel = locale === 'ar' ? 'إيقاف الفيديو' : 'Pause Video';
  const muteLabel = locale === 'ar' ? 'كتم الصوت' : 'Mute';
  const unmuteLabel = locale === 'ar' ? 'إلغاء كتم الصوت' : 'Unmute';

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
    // Check for reduced motion
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    
    if (mediaQuery.matches) {
      setIsPlaying(false);
      if (videoRef.current) {
        videoRef.current.pause();
      }
    } else {
      // Browsers might block autoplay, ensure we sync state
      if (videoRef.current) {
        const playPromise = videoRef.current.play();
        if (playPromise !== undefined) {
          playPromise.catch(() => {
            // Autoplay blocked
            setIsPlaying(false);
          });
        }
      }
    }
  }, []);

  const togglePlay = () => {
    if (!videoRef.current) return;
    
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  const toggleMute = () => {
    if (!videoRef.current) return;
    const nextMuted = !isMuted;
    
    // Explicitly set DOM properties to bypass any React attribute timing issues
    videoRef.current.defaultMuted = nextMuted;
    videoRef.current.muted = nextMuted;
    
    if (!nextMuted) {
      videoRef.current.volume = 1;
      // Some browsers pause the video when unmuting. Ensure it stays playing.
      if (isPlaying) {
        const playPromise = videoRef.current.play();
        if (playPromise !== undefined) {
          playPromise.catch(() => {});
        }
      }
    }
    
    setIsMuted(nextMuted);
  };

  return (
    <div className="hero-video-wrapper">
      <video
        ref={videoRef}
        src={videoSrc}
        className="hero-video"
        loop
        muted
        playsInline
        preload="metadata"
      />
      
      {mounted && (
        <div className="video-controls-group">
          <button
            className={`video-control-btn ${isPlaying ? 'is-playing' : 'is-paused'}`}
            onClick={togglePlay}
            aria-label={isPlaying ? pauseLabel : playLabel}
            aria-pressed={isPlaying}
          >
            <div className="video-control-icon">
              {isPlaying ? (
                // Pause Icon
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <rect x="6" y="4" width="4" height="16" />
                  <rect x="14" y="4" width="4" height="16" />
                </svg>
              ) : (
                // Play Icon
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <polygon points="5 3 19 12 5 21 5 3" />
                </svg>
              )}
            </div>
          </button>
          
          <button
            className="video-control-btn"
            onClick={toggleMute}
            aria-label={isMuted ? unmuteLabel : muteLabel}
            aria-pressed={!isMuted}
          >
            <div className="video-control-icon">
              {isMuted ? (
                // Muted Icon
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M16.5 12c0-1.77-1.02-3.29-2.5-4.03v2.21l2.45 2.45c.03-.2.05-.41.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51C20.63 14.91 21 13.5 21 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3L3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06c1.38-.31 2.63-.95 3.69-1.81L19.73 21 21 19.73l-9-9L4.27 3zM12 4L9.91 6.09 12 8.18V4z" />
                </svg>
              ) : (
                // Volume On Icon
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z" />
                </svg>
              )}
            </div>
          </button>
        </div>
      )}
    </div>
  );
}
