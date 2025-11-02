import React, { useRef, useEffect } from 'react';
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
      className="relative py-24 overflow-hidden"
      style={{ background: 'var(--muted-white)' }}
    >
      <motion.div
        style={{ x }}
        className="flex items-center space-x-12 whitespace-nowrap"
      >
        {keywords.map((keyword, index) => (
          <React.Fragment key={index}>
            <span 
              className="text-6xl md:text-8xl font-bold gradient-text"
              style={{ WebkitTextStroke: '2px var(--accent-green)' }}
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
      </motion.div>
    </div>
  );
};

export default MovingStrip;
