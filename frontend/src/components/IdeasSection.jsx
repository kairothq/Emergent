import React from 'react';
import { motion } from 'framer-motion';
import { Lightbulb, ArrowRight, ExternalLink } from 'lucide-react';

const IdeasSection = () => {
  const ideas = [
    {
      id: 1,
      title: 'AI-Powered Product Discovery',
      category: 'Product Concept',
      description: 'A platform that uses machine learning to help users discover products they didn\'t know they needed based on behavioral patterns.',
      date: 'Dec 2024',
      tags: ['AI/ML', 'Discovery', 'Personalization'],
      status: 'Exploring',
      color: '#FFB84D',
    },
    {
      id: 2,
      title: 'Micro-SaaS for Content Creators',
      category: 'Business Model',
      description: 'Building small, focused tools that solve specific pain points for content creators rather than all-in-one platforms.',
      date: 'Nov 2024',
      tags: ['Creator Economy', 'SaaS', 'Niche'],
      status: 'Validated',
      color: 'var(--accent-green)',
    },
    {
      id: 3,
      title: 'Async-First Team Collaboration',
      category: 'Product Philosophy',
      description: 'Rethinking team tools to prioritize async communication and deep work over constant real-time interaction.',
      date: 'Oct 2024',
      tags: ['Remote Work', 'Productivity', 'Culture'],
      status: 'Writing',
      color: 'var(--accent-orange)',
    },
    {
      id: 4,
      title: 'Gamification in B2B Products',
      category: 'Growth Strategy',
      description: 'How to apply gaming mechanics to enterprise software without making it feel childish or forced.',
      date: 'Sep 2024',
      tags: ['Gamification', 'B2B', 'Engagement'],
      status: 'Published',
      color: '#8B7FFF',
    },
  ];

  return (
    <section 
      id="ideas" 
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
            <Lightbulb size={32} style={{ color: 'var(--accent-orange)' }} />
            <p 
              className="text-sm font-medium tracking-wide uppercase"
              style={{ color: 'var(--accent-orange)' }}
            >
              Ideas & Experiments
            </p>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span style={{ color: 'var(--text-on-dark)' }}>Things I'm </span>
            <span style={{ 
              background: 'linear-gradient(to right, var(--accent-orange), var(--accent-green))',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}>Exploring</span>
          </h2>
          <p 
            className="text-xl max-w-3xl mx-auto"
            style={{ color: 'var(--text-on-dark)', opacity: 0.7 }}
          >
            Product concepts, business models, and random thoughts that keep me up at night
          </p>
        </motion.div>

        {/* Ideas Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {ideas.map((idea, index) => (
            <motion.div
              key={idea.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="group cursor-pointer"
            >
              <div 
                className="p-8 rounded-3xl h-full flex flex-col"
                style={{
                  background: 'linear-gradient(135deg, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0.03) 100%)',
                  border: `2px solid ${idea.color}40`,
                }}
              >
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <span 
                    className="px-4 py-2 rounded-full text-sm font-medium"
                    style={{
                      background: `${idea.color}20`,
                      color: idea.color,
                    }}
                  >
                    {idea.category}
                  </span>
                  <span 
                    className="text-xs font-medium px-3 py-1 rounded-full"
                    style={{
                      background: 'rgba(255,255,255,0.1)',
                      color: 'var(--text-on-dark)',
                      opacity: 0.6,
                    }}
                  >
                    {idea.status}
                  </span>
                </div>

                {/* Content */}
                <h3 
                  className="text-2xl font-bold mb-3 group-hover:text-[var(--accent-green)] transition-colors"
                  style={{ color: 'var(--text-on-dark)' }}
                >
                  {idea.title}
                </h3>
                
                <p 
                  className="text-base leading-relaxed mb-6 flex-grow"
                  style={{ color: 'var(--text-on-dark)', opacity: 0.7 }}
                >
                  {idea.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {idea.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="text-xs px-3 py-1 rounded-full"
                      style={{
                        background: 'rgba(255,255,255,0.05)',
                        color: 'var(--text-on-dark)',
                        opacity: 0.6,
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Footer */}
                <div className="flex items-center justify-between pt-4 border-t" style={{ borderColor: 'rgba(255,255,255,0.1)' }}>
                  <span className="text-sm" style={{ color: 'var(--text-on-dark)', opacity: 0.5 }}>
                    {idea.date}
                  </span>
                  <motion.div
                    className="flex items-center space-x-1"
                    whileHover={{ x: 4 }}
                  >
                    <span className="text-sm font-medium" style={{ color: idea.color }}>
                      Read More
                    </span>
                    <ExternalLink size={16} style={{ color: idea.color }} />
                  </motion.div>
                </div>
              </div>
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
            href="/ideas"
            className="inline-flex items-center space-x-3 px-10 py-5 rounded-full text-lg font-semibold"
            style={{ 
              background: 'transparent',
              border: '2px solid var(--accent-orange)',
              color: 'var(--accent-orange)',
            }}
            whileHover={{ scale: 1.05, background: 'var(--accent-orange)', color: 'white' }}
            whileTap={{ scale: 0.95 }}
          >
            <span>Explore All Ideas</span>
            <ArrowRight size={20} />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default IdeasSection;
