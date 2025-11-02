import React from 'react';
import { motion, useTransform } from 'framer-motion';

const CircleCluster = ({ scrollProgress }) => {
  // Transform values based on scroll
  const scale = useTransform(scrollProgress, [0, 0.5], [1, 3]);
  const opacity = useTransform(scrollProgress, [0, 0.3], [0.6, 1]);

  return (
    <div className="fixed bottom-0 right-0 w-full h-full pointer-events-none">
      {/* Orange Glow */}
      <motion.div
        style={{ scale, opacity }}
        animate={{
          scale: [1, 1.03, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute -bottom-[400px] -right-[400px] w-[800px] h-[800px] rounded-full"
        style={{
          background: 'radial-gradient(circle at center, var(--accent-orange) 0%, rgba(254, 134, 48, 0.3) 50%, transparent 70%)',
          filter: 'blur(60px)',
        }}
      />

      {/* Concentric Circle 1 - Outermost */}
      <motion.div
        style={{ scale }}
        animate={{
          rotate: [0, 360],
        }}
        transition={{
          duration: 60,
          repeat: Infinity,
          ease: 'linear',
        }}
        className="absolute -bottom-[250px] -right-[250px] w-[500px] h-[500px] rounded-full border-2"
        style={{
          borderColor: 'rgba(254, 134, 48, 0.3)',
        }}
      />

      {/* Concentric Circle 2 - Middle */}
      <motion.div
        style={{ scale }}
        animate={{
          rotate: [360, 0],
        }}
        transition={{
          duration: 50,
          repeat: Infinity,
          ease: 'linear',
        }}
        className="absolute -bottom-[200px] -right-[200px] w-[400px] h-[400px] rounded-full border-2"
        style={{
          borderColor: 'rgba(254, 134, 48, 0.4)',
        }}
      />

      {/* Concentric Circle 3 - Innermost */}
      <motion.div
        style={{ scale }}
        animate={{
          rotate: [0, 360],
        }}
        transition={{
          duration: 40,
          repeat: Infinity,
          ease: 'linear',
        }}
        className="absolute -bottom-[150px] -right-[150px] w-[300px] h-[300px] rounded-full border-2"
        style={{
          borderColor: 'rgba(254, 134, 48, 0.5)',
        }}
      />
    </div>
  );
};

export default CircleCluster;
