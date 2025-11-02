import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const MovingStrip = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  });

  const x = useTransform(scrollYProgress, [0, 1], [0, -1500]);

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
      className="relative py-32 overflow-hidden"
      style={{ background: 'white' }}
    >
      <motion.div
        style={{ x }}
        className="flex items-center space-x-12 whitespace-nowrap"
      >
        {keywords.map((keyword, index) => (
          <React.Fragment key={index}>
            <span 
              className="text-7xl md:text-9xl font-bold"
              style={{ 
                fontFamily: 'Inter, sans-serif',
                color: '#122F26',
                fontWeight: '700',
              }}
            >
              {keyword}
            </span>
            <span 
              className="text-5xl"
              style={{ color: 'var(--accent-orange)' }}
            >
              ·
            </span>
          </React.Fragment>
        ))}
      </motion.div>
    </div>
  );
};

export default MovingStrip;
