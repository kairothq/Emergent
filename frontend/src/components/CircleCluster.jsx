import React from 'react';
import { motion, useTransform } from 'framer-motion';

const CircleCluster = ({ scrollProgress }) => {
  // Phase 1: Start small in corner (0 → 0.25)
  // Phase 2: Expand to 70% (0.25 → 0.55)
  // Phase 3: White ring instant reveal at 0.55
  // Phase 4: Full white (0.6 → 0.9)
  // Phase 5: Collapse to dot (0.9+)
  
  const scale = useTransform(scrollProgress, [0, 0.25, 0.55, 0.9, 1], [0.25, 0.3, 0.7, 0.08, 0.08]);
  const x = useTransform(scrollProgress, [0, 0.55, 0.9], [150, 0, 0]);
  const y = useTransform(scrollProgress, [0, 0.55, 0.9], [150, 0, 0]);
  
  // Parallax offsets for rings
  const outerX = useTransform(scrollProgress, [0, 1], [0, -10]);
  const outerY = useTransform(scrollProgress, [0, 1], [0, -6]);
  const middleX = useTransform(scrollProgress, [0, 1], [0, -6]);
  const middleY = useTransform(scrollProgress, [0, 1], [0, -4]);
  const innerX = useTransform(scrollProgress, [0, 1], [0, -3]);
  const innerY = useTransform(scrollProgress, [0, 1], [0, -2]);
  
  // White ring - instant reveal at 0.55, rapid expansion
  const whiteScale = useTransform(scrollProgress, [0, 0.54, 0.55, 0.65], [0, 0, 0.5, 4]);
  const whiteOpacity = useTransform(scrollProgress, [0, 0.54, 0.55, 0.65, 0.9], [0, 0, 1, 1, 0.1]);

  return (
    <div 
      className="fixed inset-0 flex items-center justify-center pointer-events-none rings-wrap" 
      style={{ 
        zIndex: 20,
        transformOrigin: 'bottom right',
      }}
    >
      <motion.div 
        style={{ scale, x, y }}
        className="relative"
      >
        {/* Outer Ring - 18% opacity - Filled annulus */}
        <motion.div
          style={{ x: outerX, y: outerY }}
          animate={{
            rotate: [0, 360],
          }}
          transition={{
            duration: 60,
            repeat: Infinity,
            ease: 'linear',
          }}
          className="absolute -left-[300px] -top-[300px] w-[600px] h-[600px] rounded-full ring--outer"
          style={{
            background: `radial-gradient(circle, transparent 45%, #FE8630 45%, #FE8630 48%, transparent 48%)`,
            opacity: 0.18,
          }}
        />

        {/* Middle Ring - 35% opacity - Filled annulus */}
        <motion.div
          style={{ x: middleX, y: middleY }}
          animate={{
            rotate: [360, 0],
          }}
          transition={{
            duration: 50,
            repeat: Infinity,
            ease: 'linear',
          }}
          className="absolute -left-[250px] -top-[250px] w-[500px] h-[500px] rounded-full ring--middle"
          style={{
            background: `radial-gradient(circle, transparent 48%, #FE8630 48%, #FE8630 52%, transparent 52%)`,
            opacity: 0.35,
          }}
        />

        {/* Inner Ring - 90% opacity - Filled annulus */}
        <motion.div
          style={{ x: innerX, y: innerY }}
          animate={{
            rotate: [0, 360],
          }}
          transition={{
            duration: 40,
            repeat: Infinity,
            ease: 'linear',
          }}
          className="absolute -left-[200px] -top-[200px] w-[400px] h-[400px] rounded-full ring--inner"
          style={{
            background: `radial-gradient(circle, transparent 50%, #FE8630 50%, #FE8630 55%, transparent 55%)`,
            opacity: 0.9,
          }}
        />

        {/* White Ring - Expands fastest to fill screen, then fades */}
        <motion.div
          style={{ scale: whiteScale, opacity: whiteOpacity }}
          className="absolute -left-[200px] -top-[200px] w-[400px] h-[400px] rounded-full ring--white"
          style={{
            background: 'radial-gradient(circle, #F9F8F8 0%, #F9F8F8 100%)',
            zIndex: 25,
            willChange: 'transform, opacity',
          }}
        />

        {/* Core Orange Ball (visible when collapsed) - Parallax element */}
        <motion.div
          className="absolute -left-[18px] -top-[18px] w-[36px] h-[36px] rounded-full"
          style={{
            background: 'radial-gradient(circle, #FE8630 100%, rgba(254, 134, 48, 0.9) 100%)',
            opacity: useTransform(scrollProgress, [0.85, 0.92, 1], [0, 1, 1]),
            boxShadow: '0 4px 20px rgba(254, 134, 48, 0.4)',
          }}
        />
      </motion.div>
    </div>
  );
};

export default CircleCluster;
