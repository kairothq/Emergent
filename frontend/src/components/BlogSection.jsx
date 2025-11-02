import React from 'react';
import { motion } from 'framer-motion';
import { FileText, Clock, ArrowRight } from 'lucide-react';

const BlogSection = () => {
  const blogPosts = [
    {
      id: 1,
      title: 'From 0 to 1: Lessons from Building My First Chrome Extension',
      excerpt: 'What I learned shipping Mindlessly from idea to 1,000 active users in 3 months, including mistakes made and wins celebrated.',
      category: 'Product',
      readTime: '8 min read',
      date: 'Jan 15, 2025',
      image: '/placeholder-blog-1.jpg',
      featured: true,
    },
    {
      id: 2,
      title: 'The Product Manager\'s Guide to AI Implementation',
      excerpt: 'Practical frameworks for integrating AI into existing products without over-engineering or under-delivering.',
      category: 'AI & Tech',
      readTime: '12 min read',
      date: 'Jan 8, 2025',
      image: '/placeholder-blog-2.jpg',
      featured: false,
    },
    {
      id: 3,
      title: 'Why Most Product Roadmaps Fail',
      excerpt: 'And how to build one that actually helps your team ship faster and smarter.',
      category: 'Strategy',
      readTime: '6 min read',
      date: 'Dec 28, 2024',
      image: '/placeholder-blog-3.jpg',
      featured: false,
    },
  ];

  return (
    <section 
      id="blog" 
      className="relative py-32 px-6"
      style={{ background: 'white', zIndex: 50 }}
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
            <FileText size={32} style={{ color: 'var(--accent-green)' }} />
            <p 
              className="text-sm font-medium tracking-wide uppercase"
              style={{ color: 'var(--accent-green)' }}
            >
              Blog & Writings
            </p>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold mb-6" style={{ color: '#122F26' }}>
            <span>Latest </span>
            <span style={{ 
              background: 'linear-gradient(to right, var(--accent-green), var(--accent-orange))',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}>Thoughts</span>
          </h2>
          <p 
            className="text-xl max-w-3xl mx-auto"
            style={{ color: '#122F26', opacity: 0.7 }}
          >
            Deep dives on product management, building, and lessons learned
          </p>
        </motion.div>

        {/* Featured Post */}
        {blogPosts.filter(post => post.featured).map((post, index) => (
          <motion.div
            key={post.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-16"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center p-8 md:p-12 rounded-[2.5rem]"
              style={{
                background: 'linear-gradient(135deg, rgba(18, 47, 38, 0.05) 0%, rgba(18, 47, 38, 0.02) 100%)',
                border: '2px solid var(--accent-green)',
              }}
            >
              {/* Image */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="relative aspect-video rounded-2xl overflow-hidden cursor-pointer"
                style={{
                  background: 'linear-gradient(135deg, var(--accent-green) 0%, var(--accent-orange) 100%)',
                }}
              >
                <div className="absolute inset-0 flex items-center justify-center">
                  <FileText size={64} style={{ color: 'white', opacity: 0.3 }} />
                </div>
              </motion.div>

              {/* Content */}
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <span 
                    className="px-4 py-2 rounded-full text-sm font-medium"
                    style={{
                      background: 'var(--accent-green)',
                      color: 'white',
                    }}
                  >
                    Featured
                  </span>
                  <span className="text-sm" style={{ color: '#122F26', opacity: 0.6 }}>
                    {post.category}
                  </span>
                </div>

                <h3 className="text-3xl md:text-4xl font-bold" style={{ color: '#122F26' }}>
                  {post.title}
                </h3>

                <p className="text-lg leading-relaxed" style={{ color: '#122F26', opacity: 0.7 }}>
                  {post.excerpt}
                </p>

                <div className="flex items-center space-x-6 pt-4">
                  <div className="flex items-center space-x-2">
                    <Clock size={16} style={{ color: '#122F26', opacity: 0.5 }} />
                    <span className="text-sm" style={{ color: '#122F26', opacity: 0.6 }}>
                      {post.readTime}
                    </span>
                  </div>
                  <span className="text-sm" style={{ color: '#122F26', opacity: 0.6 }}>
                    {post.date}
                  </span>
                </div>

                <motion.a
                  href={`/blog/${post.id}`}
                  className="inline-flex items-center space-x-2 px-8 py-4 rounded-full text-base font-semibold mt-4"
                  style={{ background: 'var(--accent-green)', color: 'white' }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span>Read Article</span>
                  <ArrowRight size={20} />
                </motion.a>
              </div>
            </div>
          </motion.div>
        ))}

        {/* Recent Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {blogPosts.filter(post => !post.featured).map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="group cursor-pointer"
            >
              <div 
                className="p-6 rounded-3xl h-full flex flex-col"
                style={{
                  background: 'white',
                  border: '2px solid rgba(18, 47, 38, 0.1)',
                  boxShadow: '0 4px 24px rgba(0,0,0,0.04)',
                }}
              >
                {/* Image */}
                <div 
                  className="relative aspect-video rounded-2xl overflow-hidden mb-6"
                  style={{
                    background: 'linear-gradient(135deg, rgba(179, 239, 150, 0.2) 0%, rgba(254, 134, 48, 0.2) 100%)',
                  }}
                >
                  <div className="absolute inset-0 flex items-center justify-center">
                    <FileText size={48} style={{ color: '#122F26', opacity: 0.2 }} />
                  </div>
                </div>

                {/* Category & Date */}
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm font-medium" style={{ color: 'var(--accent-green)' }}>
                    {post.category}
                  </span>
                  <span className="text-sm" style={{ color: '#122F26', opacity: 0.5 }}>
                    {post.date}
                  </span>
                </div>

                {/* Title */}
                <h3 
                  className="text-xl font-bold mb-3 group-hover:text-[var(--accent-green)] transition-colors"
                  style={{ color: '#122F26' }}
                >
                  {post.title}
                </h3>

                {/* Excerpt */}
                <p 
                  className="text-sm leading-relaxed mb-4 flex-grow"
                  style={{ color: '#122F26', opacity: 0.7 }}
                >
                  {post.excerpt}
                </p>

                {/* Read Time */}
                <div className="flex items-center justify-between pt-4 border-t" style={{ borderColor: 'rgba(18, 47, 38, 0.1)' }}>
                  <div className="flex items-center space-x-2">
                    <Clock size={16} style={{ color: '#122F26', opacity: 0.5 }} />
                    <span className="text-sm" style={{ color: '#122F26', opacity: 0.6 }}>
                      {post.readTime}
                    </span>
                  </div>
                  <motion.div
                    className="flex items-center space-x-1"
                    whileHover={{ x: 4 }}
                  >
                    <span className="text-sm font-medium" style={{ color: 'var(--accent-green)' }}>
                      Read
                    </span>
                    <ArrowRight size={16} style={{ color: 'var(--accent-green)' }} />
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
            href="/blog"
            className="inline-flex items-center space-x-3 px-10 py-5 rounded-full text-lg font-semibold"
            style={{ background: 'var(--accent-orange)', color: 'white' }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span>View All Posts</span>
            <ArrowRight size={20} />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default BlogSection;
