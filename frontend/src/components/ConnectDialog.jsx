import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Calendar, Linkedin, Instagram, Youtube, Mail, Phone } from 'lucide-react';

const ConnectDialog = ({ isOpen, onClose, buttonRef }) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    company: '',
    phone: '',
    message: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Add form submission logic here
    onClose();
  };

  const socialLinks = [
    { icon: Linkedin, href: 'https://www.linkedin.com/in/divy-kairoth/', label: 'LinkedIn', color: '#0077B5' },
    { icon: Instagram, href: '#', label: 'Instagram', color: '#E4405F' },
    { icon: Youtube, href: '#', label: 'YouTube', color: '#FF0000' },
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40"
          />

          {/* Dialog */}
          <motion.div
            initial={{ opacity: 0, x: 100, scale: 0.9 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: 100, scale: 0.9 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="fixed right-6 top-20 z-50 w-full max-w-md max-h-[calc(100vh-120px)] overflow-y-auto rounded-3xl shadow-2xl"
            style={{
              background: 'linear-gradient(135deg, var(--bg-dark) 0%, #0d221c 100%)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
            }}
          >
            {/* Header */}
            <div className="sticky top-0 p-6 pb-4 flex items-center justify-between border-b" style={{ borderColor: 'rgba(255, 255, 255, 0.1)', background: 'var(--bg-dark)' }}>
              <div className="flex items-center space-x-3">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center"
                  style={{ background: 'var(--accent-orange)' }}
                >
                  <Mail size={20} style={{ color: 'white' }} />
                </div>
                <h2 className="text-2xl font-bold" style={{ color: 'var(--text-on-dark)' }}>
                  Let's Connect
                </h2>
              </div>
              <motion.button
                onClick={onClose}
                className="p-2 rounded-full"
                style={{ background: 'var(--glass-opa-1)' }}
                whileHover={{ scale: 1.1, background: 'var(--accent-orange)' }}
                whileTap={{ scale: 0.9 }}
                aria-label="Close dialog"
              >
                <X size={20} style={{ color: 'var(--text-on-dark)' }} />
              </motion.button>
            </div>

            {/* Content */}
            <div className="p-6 space-y-6">
              {/* Social Links */}
              <div>
                <p className="text-sm font-medium mb-3" style={{ color: 'var(--text-on-dark)', opacity: 0.7 }}>
                  Quick Connect
                </p>
                <div className="flex items-center space-x-3">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 rounded-xl flex-1 flex items-center justify-center"
                      style={{ background: 'var(--glass-opa-1)', border: '1px solid rgba(255, 255, 255, 0.1)' }}
                      whileHover={{ scale: 1.05, borderColor: social.color }}
                      whileTap={{ scale: 0.95 }}
                      aria-label={social.label}
                    >
                      <social.icon size={24} style={{ color: social.color }} />
                    </motion.a>
                  ))}
                </div>
              </div>

              {/* Calendar Booking */}
              <motion.a
                href="#"
                className="block p-4 rounded-2xl text-center space-y-2"
                style={{ background: 'var(--accent-green)', color: 'var(--bg-dark)' }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="flex items-center justify-center space-x-2">
                  <Calendar size={20} />
                  <span className="font-semibold">Schedule a Meeting</span>
                </div>
                <p className="text-sm opacity-80">Book time on my calendar</p>
              </motion.a>

              {/* Divider */}
              <div className="flex items-center space-x-4">
                <div className="flex-1 h-px" style={{ background: 'rgba(255, 255, 255, 0.1)' }} />
                <span className="text-xs" style={{ color: 'var(--text-on-dark)', opacity: 0.5 }}>
                  OR
                </span>
                <div className="flex-1 h-px" style={{ background: 'rgba(255, 255, 255, 0.1)' }} />
              </div>

              {/* Contact Form */}
              <form onSubmit={handleSubmit} className="space-y-4">
                <p className="text-sm font-medium" style={{ color: 'var(--text-on-dark)', opacity: 0.7 }}>
                  Send a Message
                </p>

                <div className="grid grid-cols-2 gap-3">
                  <input
                    type="text"
                    placeholder="First Name"
                    value={formData.firstName}
                    onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                    className="px-4 py-3 rounded-xl text-sm outline-none"
                    style={{
                      background: 'var(--glass-opa-1)',
                      border: '1px solid rgba(255, 255, 255, 0.1)',
                      color: 'var(--text-on-dark)',
                    }}
                    required
                  />
                  <input
                    type="text"
                    placeholder="Last Name"
                    value={formData.lastName}
                    onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                    className="px-4 py-3 rounded-xl text-sm outline-none"
                    style={{
                      background: 'var(--glass-opa-1)',
                      border: '1px solid rgba(255, 255, 255, 0.1)',
                      color: 'var(--text-on-dark)',
                    }}
                    required
                  />
                </div>

                <input
                  type="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl text-sm outline-none"
                  style={{
                    background: 'var(--glass-opa-1)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    color: 'var(--text-on-dark)',
                  }}
                  required
                />

                <div className="grid grid-cols-2 gap-3">
                  <input
                    type="text"
                    placeholder="Company"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="px-4 py-3 rounded-xl text-sm outline-none"
                    style={{
                      background: 'var(--glass-opa-1)',
                      border: '1px solid rgba(255, 255, 255, 0.1)',
                      color: 'var(--text-on-dark)',
                    }}
                  />
                  <input
                    type="tel"
                    placeholder="Phone"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="px-4 py-3 rounded-xl text-sm outline-none"
                    style={{
                      background: 'var(--glass-opa-1)',
                      border: '1px solid rgba(255, 255, 255, 0.1)',
                      color: 'var(--text-on-dark)',
                    }}
                  />
                </div>

                <textarea
                  placeholder="Message (optional)"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={4}
                  className="w-full px-4 py-3 rounded-xl text-sm outline-none resize-none"
                  style={{
                    background: 'var(--glass-opa-1)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    color: 'var(--text-on-dark)',
                  }}
                />

                <motion.button
                  type="submit"
                  className="w-full px-6 py-4 rounded-full text-base font-semibold flex items-center justify-center space-x-2"
                  style={{ background: 'var(--accent-orange)', color: 'white' }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span>Send Message</span>
                  <Mail size={18} />
                </motion.button>
              </form>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default ConnectDialog;
