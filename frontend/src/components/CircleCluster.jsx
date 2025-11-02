import React from 'react';
import { motion, useTransform } from 'framer-motion';

const CircleCluster = ({ scrollProgress }) => {
  // Phase 1: Start at bottom-right (0 → 0.3)
  // Phase 2: Expand to fill screen (0.3 → 0.5)
  // Phase 3: Shrink to orange ball in center (0.5 → 0.7)
  // Phase 4: Stay as parallax ball (0.7 → 1)
  
  const scale = useTransform(scrollProgress, [0, 0.3, 0.5, 0.7, 1], [1, 4, 0.08, 0.08, 0.08]);
  const x = useTransform(scrollProgress, [0, 0.5, 0.7], [0, -300, 0]);
  const y = useTransform(scrollProgress, [0, 0.5, 0.7, 1], [0, -200, -50, -50]);
  
  // White circle expansion to fill viewport
  const whiteScale = useTransform(scrollProgress, [0.35, 0.5], [0, 12]);
  const whiteOpacity = useTransform(scrollProgress, [0.35, 0.5, 0.55], [0, 1, 0]);

  return (
    <div className="fixed inset-0 flex items-center justify-center pointer-events-none" style={{ zIndex: 5 }}>
      <motion.div style={{ scale, x, y }} className="relative">
        {/* Orange Glow - soft background */}
        <motion.div
          animate={{
            scale: [1, 1.02, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute -left-[400px] -top-[400px] w-[800px] h-[800px] rounded-full"
          style={{
            background: 'radial-gradient(circle at center, rgba(254, 134, 48, 0.4) 0%, rgba(254, 134, 48, 0.15) 50%, transparent 70%)',
            filter: 'blur(40px)',
          }}
        />

        {/* White Circle - Expands to fill viewport */}
        <motion.div
          style={{ scale: whiteScale, opacity: whiteOpacity }}
          className="absolute -left-[200px] -top-[200px] w-[400px] h-[400px] rounded-full"
          style={{
            background: 'radial-gradient(circle at center, #ffffff 0%, #ffffff 60%, rgba(255,255,255,0.8) 80%, transparent 100%)',
          }}
        />

        {/* Concentric Circle 3 - 30% Orange (Outermost) - Hard Edge */}
        <motion.div
          animate={{
            rotate: [0, 360],
          }}
          transition={{
            duration: 60,
            repeat: Infinity,
            ease: 'linear',
          }}
          className="absolute -left-[250px] -top-[250px] w-[500px] h-[500px] rounded-full border-[3px]"
          style={{
            borderColor: 'rgba(254, 134, 48, 0.3)',
          }}
        />

        {/* Concentric Circle 2 - 65% Orange (Middle) - Hard Edge */}
        <motion.div
          animate={{
            rotate: [360, 0],
          }}
          transition={{
            duration: 50,
            repeat: Infinity,
            ease: 'linear',
          }}
          className="absolute -left-[200px] -top-[200px] w-[400px] h-[400px] rounded-full border-[3px]"
          style={{
            borderColor: 'rgba(254, 134, 48, 0.65)',
          }}
        />

        {/* Concentric Circle 1 - 100% Orange (Innermost) - Hard Edge */}
        <motion.div
          animate={{
            rotate: [0, 360],
          }}
          transition={{
            duration: 40,
            repeat: Infinity,
            ease: 'linear',
          }}
          className="absolute -left-[150px] -top-[150px] w-[300px] h-[300px] rounded-full border-[3px]"
          style={{
            borderColor: 'rgba(254, 134, 48, 1)',
          }}
        />

        {/* Core Orange Ball (visible when shrunk) */}
        <motion.div
          className="absolute -left-[20px] -top-[20px] w-[40px] h-[40px] rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(254, 134, 48, 1) 0%, rgba(254, 134, 48, 0.8) 100%)',
          }}
        />
      </motion.div>
    </div>
  );
};

export default CircleCluster;
