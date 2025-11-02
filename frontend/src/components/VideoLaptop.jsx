import React from 'react';
import { motion, useTransform } from 'framer-motion';

const VideoLaptop = ({ scrollProgress }) => {
  // Start at bottom right, move to center
  const x = useTransform(scrollProgress, [0, 0.5], [600, 0]);
  const y = useTransform(scrollProgress, [0, 0.5], [300, 0]);
  const scale = useTransform(scrollProgress, [0, 0.5], [0.6, 1]);
  const opacity = useTransform(scrollProgress, [0, 0.2, 0.5], [0, 1, 1]);

  return (
    <motion.div
      style={{
        x,
        y,
        scale,
        opacity,
      }}
      className="fixed inset-0 flex items-center justify-center pointer-events-none z-20"
    >
      {/* Laptop Frame */}
      <div className="relative" style={{ width: '900px', maxWidth: '90vw' }}>
        {/* Screen */}
        <div
          className="relative rounded-2xl overflow-hidden shadow-2xl"
          style={{
            background: '#53644C',
            border: '12px solid #2a2a2a',
            aspectRatio: '16/10',
          }}
        >
          {/* Video Thumbnail/Screenshot */}
          <div className="absolute inset-0 flex items-center justify-center"
            style={{
              background: 'linear-gradient(135deg, #53644C 0%, #3d4a37 100%)',
            }}
          >
            {/* Campfire logo watermark */}
            <div className="absolute top-6 left-6">
              <svg width="100" height="30" viewBox="0 0 100 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10 5 L15 15 L5 15 Z" fill="var(--accent-orange)" />
                <path d="M15 15 L20 25 L10 25 Z" fill="var(--accent-green)" />
                <text x="25" y="20" fill="white" fontSize="14" fontWeight="600" fontFamily="Inter">
                  campfire
                </text>
              </svg>
            </div>

            {/* Video placeholder with play button */}
            <div className="text-center space-y-4 z-10">
              <motion.div
                whileHover={{ scale: 1.1 }}
                className="w-20 h-20 mx-auto rounded-full flex items-center justify-center mb-4 cursor-pointer"
                style={{ background: 'var(--accent-orange)' }}
              >
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M8 5v14l11-7L8 5z" fill="white" />
                </svg>
              </motion.div>
              <p className="text-lg font-medium" style={{ color: 'var(--text-on-dark)' }}>
                Introduction Video
              </p>
            </div>

            {/* Simulated UI elements for realism */}
            <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 rounded-full" style={{ background: 'var(--accent-green)' }} />
                <div className="text-xs" style={{ color: 'rgba(255,255,255,0.8)' }}>
                  00:00 / 02:34
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-6 h-6 rounded" style={{ background: 'rgba(255,255,255,0.1)' }} />
                <div className="w-6 h-6 rounded" style={{ background: 'rgba(255,255,255,0.1)' }} />
              </div>
            </div>
          </div>

          {/* Actual Video element (uncomment when you have video URL) */}
          {/* <video
            className="w-full h-full object-cover"
            controls
            poster="/path-to-thumbnail.jpg"
          >
            <source src="/path-to-video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video> */}
        </div>

        {/* Laptop Base */}
        <div
          className="h-4 rounded-b-3xl"
          style={{
            background: 'linear-gradient(to bottom, #2a2a2a, #1a1a1a)',
            boxShadow: '0 10px 40px rgba(0,0,0,0.3)',
          }}
        />
      </div>
    </motion.div>
  );
};

export default VideoLaptop;
