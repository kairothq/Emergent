import React, { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import CircleCluster from './CircleCluster';
import FloatingCards from './FloatingCards';
import VideoLaptop from './VideoLaptop';
import ConnectDialog from './ConnectDialog';

const Hero = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const connectButtonRef = useRef(null);
  const heroRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  // Background color transition: dark → white
  const backgroundColor = useTransform(
    scrollYProgress,
    [0, 0.4, 0.6],
    ['#122F26', '#f5f0eb', '#ffffff']
  );

  return (
    <>
      <motion.section 
        ref={heroRef}
        id="home" 
        className="relative min-h-[250vh] flex items-start pt-32 justify-center overflow-hidden px-6"
        style={{ backgroundColor }}
      >
        {/* Background Circle Cluster - Bottom right, expands on scroll */}
        <CircleCluster scrollProgress={scrollYProgress} />

        {/* Floating Snapshot Cards */}
        <FloatingCards scrollProgress={scrollYProgress} />

        {/* Video Laptop (appears from circles, moves to center, shrinks) */}
        <VideoLaptop scrollProgress={scrollYProgress} />

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            style={{
              opacity: useTransform(scrollYProgress, [0, 0.3], [1, 0]),
            }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-6"
          >
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-sm font-medium tracking-wide uppercase"
              style={{ color: 'var(--accent-orange)' }}
            >
              Product Manager · Builder · Creator
            </motion.p>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight">
              <span style={{ color: 'var(--text-on-dark)' }}>Passionate for </span>
              <br />
              <span className="gradient-text">building public facing products</span>
            </h1>

            <p 
              className="text-lg md:text-xl leading-relaxed max-w-xl"
              style={{ color: 'var(--text-on-dark)', opacity: 0.8 }}
            >
              Turning ideas into scalable products. From 0 to 1. 
              Product strategy, AI, consumer apps, and everything in between.
            </p>

            {/* CTA Buttons */}
            <motion.div 
              className="flex flex-wrap gap-4 pt-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <motion.a
                href="#projects"
                className="group px-8 py-4 rounded-full text-base font-semibold flex items-center space-x-2"
                style={{ background: 'var(--accent-green)', color: 'var(--bg-dark)' }}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                <span>Explore Projects</span>
                <motion.div
                  animate={{ x: [0, 4, 0] }}
                  transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
                >
                  <ArrowRight size={20} />
                </motion.div>
              </motion.a>

              <motion.button
                ref={connectButtonRef}
                onClick={() => setIsDialogOpen(true)}
                onMouseEnter={() => setIsHovering(true)}
                onMouseLeave={() => setIsHovering(false)}
                className="relative px-8 py-4 rounded-full text-base font-semibold overflow-hidden"
                style={{ 
                  background: 'transparent', 
                  color: isHovering ? 'white' : 'var(--accent-green)',
                  border: '2px solid var(--accent-green)',
                }}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                {/* Spill animation background */}
                <motion.div
                  initial={{ scale: 0, x: '-50%', y: '-50%' }}
                  animate={isHovering ? { scale: 3 } : { scale: 0 }}
                  transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  className="absolute top-1/2 left-1/2 w-full h-full rounded-full"
                  style={{
                    background: 'radial-gradient(circle, var(--accent-orange) 0%, var(--accent-orange) 100%)',
                  }}
                />
                <span className="relative z-10">Let's Connect</span>
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Right: Space for effects */}
          <div className="hidden lg:block" />
        </div>
      </motion.section>

      {/* Connect Dialog */}
      <ConnectDialog
        isOpen={isDialogOpen}
        onClose={() => setIsDialogOpen(false)}
        buttonRef={connectButtonRef}
      />
    </>
  );
};

export default Hero;
