import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Linkedin, Instagram, Youtube } from 'lucide-react';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  // Sticky navigation with hide on scroll down
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY < lastScrollY || currentScrollY < 50) {
        setIsVisible(true);
      } else if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
        setIsOpen(false);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const navLinks = [
    { title: 'About', href: '#about' },
    { title: 'Projects', href: '#projects' },
    { title: 'Ideas', href: '#ideas' },
    { title: 'Blog', href: '#blog' },
    { title: 'Gallery', href: '#gallery' },
    { title: 'Contact', href: '#contact' },
  ];

  const socialLinks = [
    { icon: Linkedin, href: 'https://www.linkedin.com/in/divy-kairoth/', label: 'LinkedIn' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Youtube, href: '#', label: 'YouTube' },
  ];

  return (
    <>
      {/* Sticky Navigation Bar */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: isVisible ? 0 : -100 }}
        transition={{ duration: 0.3, ease: 'easeOut' }}
        className="fixed top-0 left-0 right-0 z-40 px-6 py-4"
        style={{ background: 'rgba(18, 47, 38, 0.8)', backdropFilter: 'blur(12px)' }}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo / Name */}
          <motion.a
            href="#home"
            className="text-xl md:text-2xl font-bold tracking-tight"
            style={{ color: 'var(--text-on-dark)' }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            DK
          </motion.a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {navLinks.map((link, index) => (
              <motion.a
                key={index}
                href={link.href}
                className="text-sm font-medium"
                style={{ color: 'var(--text-on-dark)' }}
                whileHover={{ scale: 1.05, color: 'var(--accent-green)' }}
                whileTap={{ scale: 0.95 }}
              >
                {link.title}
              </motion.a>
            ))}
          </div>

          {/* CTA Button + Menu Toggle */}
          <div className="flex items-center space-x-4">
            <motion.a
              href="https://www.linkedin.com/in/divy-kairoth/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2 rounded-full text-sm font-semibold hidden md:inline-block"
              style={{ background: 'var(--accent-green)', color: 'var(--bg-dark)' }}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              Let's Connect
            </motion.a>

            {/* Mobile Menu Toggle */}
            <motion.button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-full md:hidden"
              style={{ background: 'var(--accent-green)' }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <X size={24} style={{ color: 'var(--bg-dark)' }} />
              ) : (
                <Menu size={24} style={{ color: 'var(--bg-dark)' }} />
              )}
            </motion.button>

            {/* Desktop Menu Toggle for Dropdown */}
            <motion.button
              onClick={() => setIsOpen(!isOpen)}
              className="hidden md:block p-2 rounded-full"
              style={{ background: 'var(--accent-green)' }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              aria-label="Toggle dropdown menu"
            >
              {isOpen ? (
                <X size={24} style={{ color: 'var(--bg-dark)' }} />
              ) : (
                <Menu size={24} style={{ color: 'var(--bg-dark)' }} />
              )}
            </motion.button>
          </div>
        </div>
      </motion.nav>

      {/* Dropdown Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="fixed top-20 right-6 z-50 p-6 rounded-3xl shadow-2xl min-w-[280px]"
            style={{ background: 'var(--bg-dark)', border: '1px solid rgba(255, 255, 255, 0.1)' }}
          >
            {/* Navigation Links */}
            <div className="space-y-4 mb-6">
              {navLinks.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block text-lg font-medium"
                  style={{ color: 'var(--text-on-dark)' }}
                  whileHover={{ x: 8, color: 'var(--accent-green)' }}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                >
                  {link.title}
                </motion.a>
              ))}
            </div>

            {/* Social Links */}
            <div className="pt-6 border-t" style={{ borderColor: 'rgba(255, 255, 255, 0.1)' }}>
              <p className="text-xs font-medium mb-3" style={{ color: 'var(--text-on-dark)', opacity: 0.6 }}>
                Connect
              </p>
              <div className="flex items-center space-x-3">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-full"
                    style={{ background: 'var(--glass-opa-1)' }}
                    whileHover={{ scale: 1.1, background: 'var(--accent-orange)' }}
                    whileTap={{ scale: 0.9 }}
                    aria-label={social.label}
                  >
                    <social.icon size={20} style={{ color: 'var(--text-on-dark)' }} />
                  </motion.a>
                ))}
              </div>
            </div>

            {/* CTA in Mobile Menu */}
            <motion.a
              href="https://www.linkedin.com/in/divy-kairoth/"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 block text-center px-6 py-3 rounded-full text-sm font-semibold"
              style={{ background: 'var(--accent-green)', color: 'var(--bg-dark)' }}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              Let's Connect
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Backdrop */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 z-30 bg-black/50 backdrop-blur-sm"
          />
        )}
      </AnimatePresence>
    </>
  );
};

export default Navigation;
