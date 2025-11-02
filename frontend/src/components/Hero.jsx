import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import CircleCluster from './CircleCluster';

const Hero = () => {
  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden px-6"
      style={{ background: 'var(--bg-dark)' }}
    >
      {/* Background Circle Cluster */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1/2 h-full">
        <CircleCluster />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left: Text Content */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
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

            <motion.a
              href="https://www.linkedin.com/in/divy-kairoth/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 rounded-full text-base font-semibold"
              style={{ 
                background: 'transparent', 
                color: 'var(--accent-green)',
                border: '2px solid var(--accent-green)'
              }}
              whileHover={{ scale: 1.03, background: 'var(--glass-opa-1)' }}
              whileTap={{ scale: 0.97 }}
            >
              Let's Connect
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Right: Space for Circle Cluster (absolute positioned) */}
        <div className="hidden lg:block" />
      </div>
    </section>
  );
};

export default Hero;
