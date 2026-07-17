'use client';

import React, { useState } from 'react';
import dynamic from 'next/dynamic';

const VideoModal = dynamic(() => import('@/components/ui/VideoModal'), { ssr: false });

interface PromotionalVideoPlayerProps {
  videoSrc: string;
  playLabel: string;
}

export default function PromotionalVideoPlayer({ videoSrc, playLabel }: PromotionalVideoPlayerProps) {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  return (
    <>
      <button 
        className="about-play-button" 
        onClick={() => setIsVideoOpen(true)}
        aria-label={playLabel}
      >
        <span className="play-icon">▶</span>
      </button>

      {isVideoOpen && (
        <VideoModal 
          isOpen={isVideoOpen} 
          onClose={() => setIsVideoOpen(false)} 
          videoSrc={videoSrc} 
        />
      )}
    </>
  );
}
