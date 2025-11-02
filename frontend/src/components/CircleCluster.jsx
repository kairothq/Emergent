import React from 'react';
import { motion } from 'framer-motion';

const CircleCluster = () => {
  return (
    <div className="absolute top-0 right-0 w-[800px] h-[800px] overflow-hidden">
      {/* Large Orange Gradient Circle */}
      <motion.div
        animate={{
          scale: [1, 1.03, 1],
          rotate: [0, 3, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute -top-[400px] -right-[400px] w-[800px] h-[800px] rounded-full"
        style={{
          background: 'radial-gradient(circle at center, var(--accent-orange) 0%, rgba(254, 134, 48, 0.4) 40%, transparent 70%)',
          filter: 'blur(30px)',
        }}
      />

      {/* Middle Green Gradient */}
      <motion.div
        animate={{
          scale: [1, 1.05, 1],
          rotate: [0, -5, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 0.5,
        }}
        className="absolute -top-[350px] -right-[350px] w-[700px] h-[700px] rounded-full"
        style={{
          background: 'radial-gradient(circle at center, rgba(179, 239, 150, 0.3) 0%, rgba(179, 239, 150, 0.15) 40%, transparent 70%)',
          filter: 'blur(25px)',
        }}
      />

      {/* Concentric Rings - Less blurred, visible */}
      <motion.div
        animate={{
          rotate: [0, 360],
        }}
        transition={{
          duration: 40,
          repeat: Infinity,
          ease: 'linear',
        }}
        className="absolute -top-[300px] -right-[300px] w-[600px] h-[600px] rounded-full border-2"
        style={{
          borderColor: 'rgba(254, 134, 48, 0.2)',
          filter: 'blur(1px)',
        }}
      />

      <motion.div
        animate={{
          rotate: [360, 0],
        }}
        transition={{
          duration: 50,
          repeat: Infinity,
          ease: 'linear',
        }}
        className="absolute -top-[250px] -right-[250px] w-[500px] h-[500px] rounded-full border"
        style={{
          borderColor: 'rgba(179, 239, 150, 0.15)',
          filter: 'blur(0.5px)',
        }}
      />

      <motion.div
        animate={{
          rotate: [0, 360],
        }}
        transition={{
          duration: 60,
          repeat: Infinity,
          ease: 'linear',
        }}
        className="absolute -top-[200px] -right-[200px] w-[400px] h-[400px] rounded-full border"
        style={{
          borderColor: 'rgba(254, 134, 48, 0.15)',
          filter: 'blur(0.5px)',
        }}
      />
    </div>
  );
};

export default CircleCluster;
