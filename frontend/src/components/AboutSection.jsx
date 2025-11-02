import React from 'react';
import { motion } from 'framer-motion';
import { User, Briefcase, Award, MapPin } from 'lucide-react';

const AboutSection = () => {
  const stats = [
    { label: 'Years Experience', value: '5+', icon: Briefcase },
    { label: 'Products Launched', value: '12', icon: Award },
    { label: 'Countries Worked', value: '3', icon: MapPin },
    { label: 'Users Impacted', value: '100K+', icon: User },
  ];

  const timeline = [
    {
      year: '2024',
      role: 'Independent Product Builder',
      company: 'Self',
      description: 'Building micro-SaaS products and helping startups with product strategy.',
    },
    {
      year: '2023',
      role: 'Product Manager',
      company: 'Battery Smart',
      description: 'Led product development for EV battery swapping platform, 0→1 features.',
    },
    {
      year: '2022',
      role: 'Associate Product Manager',
      company: 'OnePlus',
      description: 'Managed product marketing and launch strategy for OnePlus Nord series.',
    },
    {
      year: '2021',
      role: 'Product Intern',
      company: 'Mierae',
      description: 'Early stage startup experience building B2B SaaS products.',
    },
  ];

  return (
    <section 
      id="about" 
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
          <p 
            className="text-sm font-medium tracking-wide uppercase mb-4"
            style={{ color: 'var(--accent-green)' }}
          >
            About Me
          </p>
          <h2 className="text-5xl md:text-6xl font-bold mb-6" style={{ color: '#122F26' }}>
            <span>Turning Ideas into </span>
            <span style={{ 
              background: 'linear-gradient(to right, var(--accent-green), var(--accent-orange))',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}>Reality</span>
          </h2>
        </motion.div>

        {/* Bio + Stats */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20">
          {/* Bio */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div className="space-y-4">
              <p className="text-xl leading-relaxed" style={{ color: '#122F26' }}>
                Hi, I'm <strong>Divy Kairoth</strong> — a product manager obsessed with building things people actually want to use.
              </p>
              <p className="text-lg leading-relaxed" style={{ color: '#122F26', opacity: 0.7 }}>
                I've spent the last 5+ years taking products from 0→1, working with teams at OnePlus, Battery Smart, and now independently building micro-SaaS products.
              </p>
              <p className="text-lg leading-relaxed" style={{ color: '#122F26', opacity: 0.7 }}>
                My approach is simple: understand the problem deeply, ship fast, iterate based on data, and always put users first. I believe in building public, sharing learnings, and helping others along the way.
              </p>
              <p className="text-lg leading-relaxed" style={{ color: '#122F26', opacity: 0.7 }}>
                When I'm not building products, you'll find me running, writing about product strategy, or exploring new AI tools that could change how we work.
              </p>
            </div>
          </motion.div>

          {/* Stats Grid */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-2 gap-6"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -8 }}
                className="p-8 rounded-3xl text-center"
                style={{
                  background: 'linear-gradient(135deg, rgba(18, 47, 38, 0.05) 0%, rgba(18, 47, 38, 0.02) 100%)',
                  border: '2px solid rgba(18, 47, 38, 0.1)',
                }}
              >
                <stat.icon 
                  size={32} 
                  className="mx-auto mb-4"
                  style={{ color: 'var(--accent-green)' }}
                />
                <div className="text-4xl font-bold mb-2" style={{ color: 'var(--accent-orange)' }}>
                  {stat.value}
                </div>
                <div className="text-sm font-medium" style={{ color: '#122F26', opacity: 0.6 }}>
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-3xl font-bold mb-12 text-center" style={{ color: '#122F26' }}>
            Journey So Far
          </h3>

          <div className="space-y-8">
            {timeline.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative pl-24 pb-8 border-l-4"
                style={{ borderColor: index === 0 ? 'var(--accent-orange)' : 'rgba(18, 47, 38, 0.2)' }}
              >
                {/* Year Badge */}
                <div 
                  className="absolute -left-12 top-0 w-20 h-20 rounded-full flex items-center justify-center font-bold text-lg"
                  style={{
                    background: index === 0 ? 'var(--accent-orange)' : 'rgba(18, 47, 38, 0.1)',
                    color: index === 0 ? 'white' : '#122F26',
                  }}
                >
                  {item.year}
                </div>

                {/* Content */}
                <div className="space-y-2">
                  <h4 className="text-2xl font-bold" style={{ color: '#122F26' }}>
                    {item.role}
                  </h4>
                  <p className="text-lg font-medium" style={{ color: 'var(--accent-green)' }}>
                    {item.company}
                  </p>
                  <p className="text-base" style={{ color: '#122F26', opacity: 0.7 }}>
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
