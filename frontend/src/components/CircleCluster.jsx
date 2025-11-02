import React from 'react';
import { motion, useTransform } from 'framer-motion';

const CircleCluster = ({ scrollProgress }) => {
  // Phase 1: Expand from bottom-right (0 → 0.4)
  // Phase 2: Shrink to minuscule in center (0.4 → 0.7)
  // Phase 3: Stay in center as parallax (0.7 → 1)
  
  const scale = useTransform(scrollProgress, [0, 0.4, 0.7, 1], [1, 3, 0.15, 0.15]);
  const x = useTransform(scrollProgress, [0, 0.4, 0.7], [0, -300, -300]);
  const y = useTransform(scrollProgress, [0, 0.4, 0.7], [0, -150, -150]);
  
  // White circle expansion
  const whiteScale = useTransform(scrollProgress, [0.3, 0.5], [0, 8]);
  const whiteOpacity = useTransform(scrollProgress, [0.3, 0.5], [0, 1]);

  return (
    <div className="fixed bottom-0 right-0 w-full h-full pointer-events-none" style={{ zIndex: 5 }}>
      <motion.div style={{ scale, x, y }} className="absolute -bottom-[400px] -right-[400px]">
        {/* Orange Glow */}
        <motion.div
          animate={{
            scale: [1, 1.03, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute left-0 top-0 w-[800px] h-[800px] rounded-full"
          style={{
            background: 'radial-gradient(circle at center, rgba(254, 134, 48, 1) 0%, rgba(254, 134, 48, 0.3) 70%, transparent 90%)',
            filter: 'blur(60px)',
          }}
        />

        {/* White Circle - Expands on scroll */}
        <motion.div
          style={{ scale: whiteScale, opacity: whiteOpacity }}
          className="absolute left-[200px] top-[200px] w-[400px] h-[400px] rounded-full"
          style={{
            background: 'radial-gradient(circle at center, #ffffff 0%, #ffffff 50%, transparent 70%)',
          }}
        />

        {/* Concentric Circle 1 - 100% Orange (Innermost) */}
        <motion.div
          animate={{
            rotate: [0, 360],
          }}
          transition={{
            duration: 40,
            repeat: Infinity,
            ease: 'linear',
          }}
          className="absolute left-[250px] top-[250px] w-[300px] h-[300px] rounded-full border-2"
          style={{
            borderColor: 'rgba(254, 134, 48, 1)',
          }}
        />

        {/* Concentric Circle 2 - 65% Orange (Middle) */}
        <motion.div
          animate={{
            rotate: [360, 0],
          }}
          transition={{
            duration: 50,
            repeat: Infinity,
            ease: 'linear',
          }}
          className="absolute left-[200px] top-[200px] w-[400px] h-[400px] rounded-full border-2"
          style={{
            borderColor: 'rgba(254, 134, 48, 0.65)',
          }}
        />

        {/* Concentric Circle 3 - 30% Orange (Outermost) */}
        <motion.div
          animate={{
            rotate: [0, 360],
          }}
          transition={{
            duration: 60,
            repeat: Infinity,
            ease: 'linear',
          }}
          className="absolute left-[150px] top-[150px] w-[500px] h-[500px] rounded-full border-2"
          style={{
            borderColor: 'rgba(254, 134, 48, 0.3)',
          }}
        />
      </motion.div>
    </div>
  );
};

export default CircleCluster;
