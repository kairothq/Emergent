import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Calendar, Linkedin, Instagram, Youtube, Mail } from 'lucide-react';

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

          {/* Dialog - Larger size with #53644C background */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 flex items-center justify-center z-50 p-6"
          >
            <div 
              className="w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-[2.5rem] shadow-2xl"
              style={{
                background: '#53644C',
                fontFamily: 'Inter, sans-serif',
              }}
            >
              {/* Header */}
              <div className="sticky top-0 p-8 pb-6 flex items-center justify-between border-b" style={{ borderColor: 'rgba(255, 255, 255, 0.1)', background: '#53644C' }}>
                <div className="flex items-center space-x-4">
                  <div
                    className="w-14 h-14 rounded-full flex items-center justify-center"
                    style={{ background: 'var(--accent-orange)' }}
                  >
                    <svg width="40" height="40" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M20 10 L30 30 L10 30 Z" fill="var(--accent-orange)" />
                      <path d="M30 30 L40 50 L20 50 Z" fill="var(--accent-green)" />
                    </svg>
                  </div>
                  <div>
                    <h2 className="text-4xl font-bold" style={{ color: 'white' }}>
                      Schedule
                    </h2>
                    <h2 className="text-4xl font-bold" style={{ color: 'var(--accent-green)' }}>
                      a Demo.
                    </h2>
                  </div>
                </div>
                <motion.button
                  onClick={onClose}
                  className="p-3 rounded-full"
                  style={{ background: 'rgba(0, 0, 0, 0.2)' }}
                  whileHover={{ scale: 1.1, background: 'rgba(0, 0, 0, 0.4)' }}
                  whileTap={{ scale: 0.9 }}
                  aria-label="Close dialog"
                >
                  <X size={24} style={{ color: 'white' }} />
                </motion.button>
              </div>

              {/* Content - Two Column Layout */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-8">
                {/* Left Column - Description */}
                <div className="space-y-6">
                  <p className="text-xl leading-relaxed" style={{ color: 'rgba(255, 255, 255, 0.9)' }}>
                    Let's get some basic info, and then we will get you on the calendar.
                  </p>
                  
                  <p className="text-lg" style={{ color: 'rgba(255, 255, 255, 0.7)' }}>
                    Interested in partnering? Submit a request
                  </p>

                  {/* Social Links */}
                  <div className="pt-6">
                    <p className="text-sm font-medium mb-4" style={{ color: 'rgba(255, 255, 255, 0.7)' }}>
                      Quick Connect
                    </p>
                    <div className="flex items-center space-x-3">
                      {socialLinks.map((social, index) => (
                        <motion.a
                          key={index}
                          href={social.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-4 rounded-2xl flex items-center justify-center"
                          style={{ background: 'rgba(255, 255, 255, 0.1)' }}
                          whileHover={{ scale: 1.05, background: 'rgba(255, 255, 255, 0.2)' }}
                          whileTap={{ scale: 0.95 }}
                          aria-label={social.label}
                        >
                          <social.icon size={24} style={{ color: 'white' }} />
                        </motion.a>
                      ))}
                    </div>
                  </div>

                  {/* Calendar Booking */}
                  <motion.a
                    href="#"
                    className="block p-6 rounded-2xl text-center space-y-2"
                    style={{ background: 'var(--accent-green)', color: 'var(--bg-dark)' }}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <div className="flex items-center justify-center space-x-3">
                      <Calendar size={24} />
                      <span className="text-xl font-semibold">Schedule a Meeting</span>
                    </div>
                    <p className="text-base opacity-80">Book time on my calendar</p>
                  </motion.a>
                </div>

                {/* Right Column - Form */}
                <form onSubmit={handleSubmit} className="space-y-5">
                  <p className="text-xl font-semibold mb-6" style={{ color: 'white' }}>
                    Details
                  </p>

                  <div className="grid grid-cols-2 gap-4">
                    <input
                      type="text"
                      placeholder="First Name"
                      value={formData.firstName}
                      onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                      className="px-5 py-4 rounded-2xl text-base outline-none"
                      style={{
                        background: 'rgba(255, 255, 255, 0.15)',
                        border: 'none',
                        color: 'white',
                      }}
                      required
                    />
                    <input
                      type="text"
                      placeholder="Last Name"
                      value={formData.lastName}
                      onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                      className="px-5 py-4 rounded-2xl text-base outline-none"
                      style={{
                        background: 'rgba(255, 255, 255, 0.15)',
                        border: 'none',
                        color: 'white',
                      }}
                      required
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <input
                      type="email"
                      placeholder="Work Email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="px-5 py-4 rounded-2xl text-base outline-none"
                      style={{
                        background: 'rgba(255, 255, 255, 0.15)',
                        border: 'none',
                        color: 'white',
                      }}
                      required
                    />
                    <input
                      type="text"
                      placeholder="Company Name"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="px-5 py-4 rounded-2xl text-base outline-none"
                      style={{
                        background: 'rgba(255, 255, 255, 0.15)',
                        border: 'none',
                        color: 'white',
                      }}
                    />
                  </div>

                  <input
                    type="tel"
                    placeholder="Phone #"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-5 py-4 rounded-2xl text-base outline-none"
                    style={{
                      background: 'rgba(255, 255, 255, 0.15)',
                      border: 'none',
                      color: 'white',
                    }}
                  />

                  <textarea
                    placeholder="Message (optional)"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    rows={4}
                    className="w-full px-5 py-4 rounded-2xl text-base outline-none resize-none"
                    style={{
                      background: 'rgba(255, 255, 255, 0.15)',
                      border: 'none',
                      color: 'white',
                    }}
                  />

                  <motion.button
                    type="submit"
                    className="w-full px-8 py-5 rounded-full text-xl font-semibold flex items-center justify-center space-x-3"
                    style={{ background: 'var(--accent-green)', color: 'var(--bg-dark)' }}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <span>Submit</span>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M5 12h14m-7-7l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </motion.button>
                </form>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default ConnectDialog;
