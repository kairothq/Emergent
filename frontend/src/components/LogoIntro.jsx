import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ANIMATION_CONFIG } from '../config/animation';

const LogoIntro = ({ onComplete }) => {
  const [showIntro, setShowIntro] = useState(true);
  const name = "DIVY KAIROTH";
  const letters = name.split('');

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowIntro(false);
      onComplete();
    }, ANIMATION_CONFIG.intro.totalDuration * 1000);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {showIntro && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: -50, scale: 0.9 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="fixed inset-0 z-50 flex items-center justify-center"
          style={{ background: 'var(--bg-dark)' }}
        >
          {/* Orange glow background */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ 
              opacity: [0, 0.6, 0.4], 
              scale: [0.8, 1.2, 1] 
            }}
            transition={{
              duration: ANIMATION_CONFIG.intro.glowPulse,
              ease: 'easeOut',
            }}
            className="absolute w-96 h-96 rounded-full blur-[120px]"
            style={{ background: 'var(--accent-orange)' }}
          />

          {/* Letter-by-letter animation */}
          <div className="relative flex items-center justify-center space-x-1 md:space-x-2">
            {letters.map((letter, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: ANIMATION_CONFIG.intro.letterDuration,
                  delay: index * ANIMATION_CONFIG.intro.letterStagger,
                  ease: [0, 0.55, 0.45, 1],
                }}
                className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight"
                style={{ color: 'var(--text-on-dark)' }}
              >
                {letter === ' ' ? '\u00A0' : letter}
              </motion.span>
            ))}
          </div>

          {/* Campfire logo mark (simple geometric representation) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              delay: 1.8,
              duration: 0.5,
              ease: 'circOut',
            }}
            className="absolute"
          >
            <svg
              width="60"
              height="60"
              viewBox="0 0 60 60"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <motion.path
                d="M20 10 L30 30 L10 30 Z"
                stroke="var(--accent-orange)"
                strokeWidth="2"
                fill="none"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{
                  delay: 1.8,
                  duration: ANIMATION_CONFIG.intro.logoStrokeDuration,
                  ease: 'circOut',
                }}
              />
              <motion.path
                d="M30 30 L40 50 L20 50 Z"
                stroke="var(--accent-green)"
                strokeWidth="2"
                fill="none"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{
                  delay: 2.0,
                  duration: ANIMATION_CONFIG.intro.logoStrokeDuration,
                  ease: 'circOut',
                }}
              />
            </svg>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LogoIntro;
