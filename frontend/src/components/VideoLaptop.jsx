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
            background: 'var(--bg-dark)',
            border: '12px solid #2a2a2a',
            aspectRatio: '16/10',
          }}
        >
          {/* Video Container */}
          <div className="absolute inset-0 bg-black flex items-center justify-center">
            {/* Placeholder for video */}
            <div className="text-center space-y-4">
              <div
                className="w-20 h-20 mx-auto rounded-full flex items-center justify-center mb-4"
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
              </div>
              <p className="text-lg font-medium" style={{ color: 'var(--text-on-dark)' }}>
                Introduction Video
              </p>
              <p className="text-sm opacity-70" style={{ color: 'var(--text-on-dark)' }}>
                Replace with your video
              </p>
            </div>
          </div>

          {/* Video element (uncomment when you have video URL) */}
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
