import React from 'react';
import { motion } from 'framer-motion';
import { Linkedin, Instagram, Youtube, Github, Mail, ExternalLink } from 'lucide-react';

const Footer = () => {
  const socialLinks = [
    { icon: Linkedin, href: 'https://www.linkedin.com/in/divy-kairoth/', label: 'LinkedIn' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Youtube, href: '#', label: 'YouTube' },
    { icon: Github, href: 'https://github.com/kairothq', label: 'GitHub' },
  ];

  const quickLinks = [
    { label: 'Projects', href: '#projects' },
    { label: 'Ideas', href: '#ideas' },
    { label: 'Blog', href: '#blog' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'About', href: '#about' },
  ];

  return (
    <footer 
      className="relative py-20 px-6"
      style={{ background: '#122F26', zIndex: 50 }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          {/* Brand + Description */}
          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="text-3xl font-bold mb-4" style={{ color: 'var(--text-on-dark)' }}>
                Divy Kairoth
              </h3>
              <p className="text-base leading-relaxed" style={{ color: 'var(--text-on-dark)', opacity: 0.7 }}>
                Building products people love. Sharing the journey along the way.
              </p>
            </motion.div>

            {/* Social Links */}
            <div className="flex items-center space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full"
                  style={{ background: 'rgba(255,255,255,0.1)' }}
                  whileHover={{ 
                    scale: 1.1, 
                    background: 'var(--accent-orange)',
                  }}
                  whileTap={{ scale: 0.9 }}
                  aria-label={social.label}
                >
                  <social.icon size={20} style={{ color: 'var(--text-on-dark)' }} />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <h4 className="text-lg font-bold mb-6" style={{ color: 'var(--text-on-dark)' }}>
                Quick Links
              </h4>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <motion.a
                      href={link.href}
                      className="text-base"
                      style={{ color: 'var(--text-on-dark)', opacity: 0.7 }}
                      whileHover={{ x: 4, opacity: 1, color: 'var(--accent-green)' }}
                    >
                      {link.label}
                    </motion.a>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Contact */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <h4 className="text-lg font-bold mb-6" style={{ color: 'var(--text-on-dark)' }}>
                Get in Touch
              </h4>
              <div className="space-y-4">
                <motion.a
                  href="https://www.linkedin.com/in/divy-kairoth/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3 px-6 py-3 rounded-full"
                  style={{ 
                    background: 'var(--accent-green)', 
                    color: 'var(--bg-dark)',
                  }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Mail size={20} />
                  <span className="font-semibold">Let's Connect</span>
                </motion.a>

                <p className="text-sm" style={{ color: 'var(--text-on-dark)', opacity: 0.6 }}>
                  Open to collaboration, consulting, and interesting conversations about building products.
                </p>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Final Name Reveal */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-center py-16 mb-8"
        >
          <motion.h2 
            className="text-6xl md:text-8xl lg:text-9xl font-bold"
            style={{
              background: 'linear-gradient(to right, var(--accent-green), var(--accent-orange))',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ 
              duration: 1.2, 
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            DIVY KAIROTH
          </motion.h2>
          <motion.p
            className="text-xl mt-6"
            style={{ color: 'var(--text-on-dark)', opacity: 0.7 }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 0.7 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
          >
            Building the future, one product at a time
          </motion.p>
        </motion.div>

        {/* Divider */}
        <div className="h-px mb-8" style={{ background: 'rgba(255,255,255,0.1)' }} />

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
          <p className="text-sm" style={{ color: 'var(--text-on-dark)', opacity: 0.5 }}>
            © 2025 Divy Kairoth. All rights reserved.
          </p>

          <div className="flex items-center space-x-6">
            <a 
              href="https://bento.me/divykairoth" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-sm flex items-center space-x-1 hover:text-[var(--accent-green)] transition-colors"
              style={{ color: 'var(--text-on-dark)', opacity: 0.5 }}
            >
              <span>Previous Portfolio</span>
              <ExternalLink size={14} />
            </a>
            <span className="text-sm" style={{ color: 'var(--text-on-dark)', opacity: 0.5 }}>
              Built with ❤️ using React
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
