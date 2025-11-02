import React from 'react';
import { motion } from 'framer-motion';

const CircleCluster = () => {
  return (
    <div className="relative w-full h-full flex items-center justify-center">
      {/* Outer Orange Circle */}
      <motion.div
        animate={{
          scale: [1, 1.05, 1],
          rotate: [0, 5, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute w-[400px] h-[400px] rounded-full"
        style={{
          background: 'radial-gradient(circle, var(--orange-opa-18) 0%, transparent 70%)',
          filter: 'blur(40px)',
        }}
      />

      {/* Middle Green Circle */}
      <motion.div
        animate={{
          scale: [1, 1.08, 1],
          rotate: [0, -8, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 0.5,
        }}
        className="absolute w-[320px] h-[320px] rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(179, 239, 150, 0.15) 0%, transparent 70%)',
          filter: 'blur(30px)',
        }}
      />

      {/* Inner Orange Glow */}
      <motion.div
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.6, 0.8, 0.6],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute w-[200px] h-[200px] rounded-full"
        style={{
          background: 'radial-gradient(circle, var(--accent-orange) 0%, transparent 70%)',
          filter: 'blur(50px)',
        }}
      />

      {/* Concentric Ring 1 */}
      <motion.div
        animate={{
          rotate: [0, 360],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: 'linear',
        }}
        className="absolute w-[350px] h-[350px] rounded-full border-2"
        style={{
          borderColor: 'var(--orange-opa-10)',
        }}
      />

      {/* Concentric Ring 2 */}
      <motion.div
        animate={{
          rotate: [360, 0],
        }}
        transition={{
          duration: 40,
          repeat: Infinity,
          ease: 'linear',
        }}
        className="absolute w-[280px] h-[280px] rounded-full border-2"
        style={{
          borderColor: 'rgba(179, 239, 150, 0.1)',
        }}
      />
    </div>
  );
};

export default CircleCluster;
