import React from 'react';
import { motion } from 'framer-motion';
import { Camera, Image as ImageIcon } from 'lucide-react';

const GallerySection = () => {
  const galleryItems = [
    { id: 1, type: 'wide', color: 'var(--accent-orange)' },
    { id: 2, type: 'tall', color: 'var(--accent-green)' },
    { id: 3, type: 'square', color: '#FFB84D' },
    { id: 4, type: 'square', color: '#8B7FFF' },
    { id: 5, type: 'wide', color: '#FF6B9D' },
    { id: 6, type: 'tall', color: 'var(--accent-orange)' },
  ];

  return (
    <section 
      id="gallery" 
      className="relative py-32 px-6"
      style={{ background: '#122F26', zIndex: 50 }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20 text-center"
        >
          <div className="flex items-center justify-center space-x-3 mb-4">
            <Camera size={32} style={{ color: 'var(--accent-orange)' }} />
            <p 
              className="text-sm font-medium tracking-wide uppercase"
              style={{ color: 'var(--accent-orange)' }}
            >
              Visual Stories
            </p>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span style={{ color: 'var(--text-on-dark)' }}>Gallery & </span>
            <span style={{ 
              background: 'linear-gradient(to right, var(--accent-orange), var(--accent-green))',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}>Moments</span>
          </h2>
          <p 
            className="text-xl max-w-3xl mx-auto"
            style={{ color: 'var(--text-on-dark)', opacity: 0.7 }}
          >
            Photography, design work, and visual inspiration
          </p>
        </motion.div>

        {/* Masonry Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          {galleryItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, zIndex: 10 }}
              className={`
                relative rounded-3xl overflow-hidden cursor-pointer
                ${item.type === 'wide' ? 'col-span-2' : ''}
                ${item.type === 'tall' ? 'row-span-2' : ''}
              `}
              style={{
                background: `linear-gradient(135deg, ${item.color}40 0%, ${item.color}20 100%)`,
                aspectRatio: item.type === 'wide' ? '2/1' : item.type === 'tall' ? '1/2' : '1/1',
              }}
            >
              {/* Placeholder */}
              <div className="absolute inset-0 flex items-center justify-center">
                <ImageIcon size={48} style={{ color: item.color, opacity: 0.4 }} />
              </div>

              {/* Hover Overlay */}
              <motion.div
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                className="absolute inset-0 flex items-center justify-center"
                style={{
                  background: 'rgba(0,0,0,0.6)',
                  backdropFilter: 'blur(8px)',
                }}
              >
                <span className="text-white text-lg font-medium">View</span>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* View All CTA */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <motion.a
            href="/gallery"
            className="inline-flex items-center space-x-3 px-10 py-5 rounded-full text-lg font-semibold"
            style={{ 
              background: 'transparent',
              border: '2px solid var(--accent-orange)',
              color: 'var(--accent-orange)',
            }}
            whileHover={{ scale: 1.05, background: 'var(--accent-orange)', color: 'white' }}
            whileTap={{ scale: 0.95 }}
          >
            <span>Explore Full Gallery</span>
            <Camera size={20} />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default GallerySection;
