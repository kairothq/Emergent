import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const MovingStrip = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  });

  // Move strip to left half when reaching top
  const x = useTransform(scrollYProgress, [0, 0.5, 1], [0, -1000, -1500]);
  const stripX = useTransform(scrollYProgress, [0.7, 1], [0, -window.innerWidth / 4]);

  const keywords = [
    'PRODUCT STRATEGY',
    'AI',
    'CONSUMER PRODUCTS',
    'CONTENT',
    'RUNNING',
    'PRODUCT STRATEGY',
    'AI',
    'CONSUMER PRODUCTS',
    'CONTENT',
    'RUNNING',
  ];

  return (
    <div 
      ref={targetRef}
      className="relative py-24 overflow-hidden"
      style={{ background: 'white', zIndex: 15 }}
    >
      <motion.div
        style={{ x, left: stripX }}
        className="flex items-center space-x-12 whitespace-nowrap"
      >
        {keywords.map((keyword, index) => (
          <React.Fragment key={index}>
            <span 
              className="text-5xl md:text-7xl font-bold"
              style={{ 
                fontFamily: 'Inter, sans-serif',
                color: '#122F26',
                fontWeight: '700',
              }}
            >
              {keyword}
            </span>
            <span 
              className="text-4xl"
              style={{ color: 'var(--accent-orange)' }}
            >
              ·
            </span>
          </React.Fragment>
        ))}
        
        {/* Orange ball as full stop */}
        <div 
          className="w-12 h-12 rounded-full ml-8"
          style={{
            background: 'radial-gradient(circle, rgba(254, 134, 48, 1) 0%, rgba(254, 134, 48, 0.8) 100%)',
          }}
        />
      </motion.div>
    </div>
  );
};

export default MovingStrip;
