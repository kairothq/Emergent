import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Github, ExternalLink } from 'lucide-react';

const ProjectsSection = () => {
  const featuredProjects = [
    {
      id: 1,
      title: 'Mindlessly',
      subtitle: 'Chrome Extension',
      description: 'A productivity tool that helps users focus by blocking distracting websites and tracking time spent online.',
      tags: ['Chrome Extension', 'JavaScript', 'Productivity'],
      github: 'https://github.com/kairothq/Mindlessly',
      link: '#',
      color: 'var(--accent-orange)',
    },
    {
      id: 2,
      title: 'OnePlus Nord',
      subtitle: 'Marketing Campaign',
      description: 'Led the product marketing strategy for OnePlus Nord launch, achieving significant market penetration.',
      tags: ['Product Marketing', 'Campaign', 'Launch Strategy'],
      link: '#',
      color: 'var(--accent-green)',
    },
    {
      id: 3,
      title: "Mierae's Investor Deck",
      subtitle: 'Pitch Deck Design',
      description: 'Created comprehensive investor presentation resulting in successful seed funding round.',
      tags: ['Investor Relations', 'Pitch Deck', 'Fundraising'],
      link: '#',
      color: '#FFB84D',
    },
  ];

  return (
    <section 
      id="projects" 
      className="relative py-32 px-6"
      style={{ background: 'var(--bg-dark)' }}
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
            style={{ color: 'var(--accent-orange)' }}
          >
            Featured Work
          </p>
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span style={{ color: 'var(--text-on-dark)' }}>Selected </span>
            <span className="gradient-text">Projects</span>
          </h2>
          <p 
            className="text-xl max-w-3xl mx-auto"
            style={{ color: 'var(--text-on-dark)', opacity: 0.7 }}
          >
            A collection of products and campaigns I've built from 0 to 1
          </p>
        </motion.div>

        {/* Featured Projects Grid */}
        <div className="space-y-12 mb-20">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="group"
            >
              <div 
                className="p-8 md:p-12 rounded-[2.5rem] backdrop-blur-md"
                style={{
                  background: 'linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.02) 100%)',
                  border: `2px solid ${project.color}30`,
                }}
              >
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                  {/* Left: Content */}
                  <div className="space-y-6">
                    <div>
                      <p 
                        className="text-sm font-medium mb-2"
                        style={{ color: project.color }}
                      >
                        {project.subtitle}
                      </p>
                      <h3 
                        className="text-4xl md:text-5xl font-bold mb-4"
                        style={{ color: 'var(--text-on-dark)' }}
                      >
                        {project.title}
                      </h3>
                      <p 
                        className="text-lg leading-relaxed"
                        style={{ color: 'var(--text-on-dark)', opacity: 0.8 }}
                      >
                        {project.description}
                      </p>
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, i) => (
                        <span
                          key={i}
                          className="px-4 py-2 rounded-full text-sm font-medium"
                          style={{
                            background: `${project.color}20`,
                            color: project.color,
                          }}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Links */}
                    <div className="flex items-center space-x-4 pt-4">
                      {project.github && (
                        <motion.a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center space-x-2 px-6 py-3 rounded-full"
                          style={{ background: 'var(--glass-opa-1)', color: 'var(--text-on-dark)' }}
                          whileHover={{ scale: 1.05, background: project.color }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <Github size={20} />
                          <span>View Code</span>
                        </motion.a>
                      )}
                      <motion.a
                        href={project.link}
                        className="flex items-center space-x-2 px-6 py-3 rounded-full"
                        style={{ background: project.color, color: 'var(--bg-dark)' }}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <span>Learn More</span>
                        <ArrowRight size={20} />
                      </motion.a>
                    </div>
                  </div>

                  {/* Right: Project Visual Placeholder */}
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="relative aspect-video rounded-2xl overflow-hidden"
                    style={{
                      background: `linear-gradient(135deg, ${project.color}30 0%, ${project.color}10 100%)`,
                    }}
                  >
                    <div className="absolute inset-0 flex items-center justify-center">
                      <ExternalLink size={48} style={{ color: project.color, opacity: 0.3 }} />
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Projects CTA */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <motion.a
            href="/projects"
            className="inline-flex items-center space-x-3 px-12 py-6 rounded-full text-xl font-semibold"
            style={{ background: 'var(--accent-orange)', color: 'white' }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span>View All Project Archives</span>
            <ArrowRight size={24} />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
