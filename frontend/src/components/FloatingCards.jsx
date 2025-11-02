import React from 'react';
import { motion, useTransform } from 'framer-motion';
import { Code, Lightbulb, Camera, FileText } from 'lucide-react';

const FloatingCards = ({ scrollProgress }) => {
  const cards = [
    {
      id: 1,
      title: 'Divy Kairoth',
      subtitle: 'Product Manager',
      description: 'Building products from 0→1',
      type: 'profile',
      color: 'var(--accent-orange)',
      position: { bottom: 280, right: 420 },
    },
    {
      id: 2,
      title: 'Projects',
      icon: Code,
      description: 'Mindlessly, OnePlus Nord, Mierae',
      type: 'folder',
      color: 'var(--accent-green)',
      position: { bottom: 180, right: 180 },
    },
    {
      id: 3,
      title: 'Ideas',
      icon: Lightbulb,
      description: 'Product experiments & thoughts',
      type: 'folder',
      color: '#FFB84D',
      position: { bottom: 100, right: 450 },
    },
    {
      id: 4,
      title: 'Gallery',
      icon: Camera,
      description: 'Photography & visual work',
      type: 'folder',
      color: '#8B7FFF',
      position: { bottom: 380, right: 200 },
    },
    {
      id: 5,
      title: 'Blog',
      icon: FileText,
      description: 'Writings on product & tech',
      type: 'folder',
      color: '#FF6B9D',
      position: { bottom: 240, right: 600 },
    },
  ];

  return (
    <div className="fixed inset-0 pointer-events-none">
      {cards.map((card) => {
        const Icon = card.icon;
        
        // Calculate transforms based on scroll
        const opacity = useTransform(scrollProgress, [0, 0.3], [1, 0]);
        const scale = useTransform(scrollProgress, [0, 0.3], [1, 0.8]);
        const z = useTransform(scrollProgress, [0, 0.5], [10, -100]); // Move behind laptop
        
        return (
          <motion.div
            key={card.id}
            initial={{
              opacity: 0,
              scale: 0.8,
            }}
            animate={{
              opacity: 1,
              scale: 1,
            }}
            style={{
              opacity,
              scale,
              z,
              bottom: card.position.bottom,
              right: card.position.right,
            }}
            transition={{
              duration: 0.8,
              delay: card.id * 0.1,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="absolute pointer-events-auto"
          >
            <div
              className="p-6 rounded-3xl backdrop-blur-md shadow-2xl w-64 h-48 flex flex-col justify-between"
              style={{
                background: `linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 100%)`,
                border: `2px solid ${card.color}30`,
              }}
            >
              {card.type === 'profile' ? (
                <>
                  <div className="flex items-center space-x-4">
                    <div
                      className="w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold"
                      style={{ background: card.color, color: 'var(--bg-dark)' }}
                    >
                      DK
                    </div>
                    <div>
                      <h3 className="text-lg font-bold" style={{ color: 'var(--text-on-dark)' }}>
                        {card.title}
                      </h3>
                      <p className="text-sm opacity-70" style={{ color: 'var(--text-on-dark)' }}>
                        {card.subtitle}
                      </p>
                    </div>
                  </div>
                  <p className="text-sm opacity-80" style={{ color: 'var(--text-on-dark)' }}>
                    {card.description}
                  </p>
                </>
              ) : (
                <>
                  <div className="flex items-center space-x-3">
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center"
                      style={{ background: `${card.color}30` }}
                    >
                      <Icon size={24} style={{ color: card.color }} />
                    </div>
                    <h3 className="text-xl font-bold" style={{ color: 'var(--text-on-dark)' }}>
                      {card.title}
                    </h3>
                  </div>
                  <p className="text-sm opacity-70" style={{ color: 'var(--text-on-dark)' }}>
                    {card.description}
                  </p>
                </>
              )}
            </div>
          </motion.div>
        );
      })}
    </div>
  );
};

export default FloatingCards;
