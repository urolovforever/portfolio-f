import React from 'react';
import { FaGithub, FaLinkedin, FaTelegram, FaEnvelope, FaHeart } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: FaGithub, href: 'https://github.com/urolovforever', label: 'GitHub' },
    { icon: FaLinkedin, href: 'https://www.linkedin.com/in/nizomjonurolov', label: 'LinkedIn' },
    { icon: FaTelegram, href: 'tel:+998950393669', label: 'Phone' },
    { icon: FaEnvelope, href: 'mailto:nizomjonurolov24@gmail.com', label: 'Email' },
  ];

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Resume', href: '#resume' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (href) => {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-50 dark:bg-gray-900 text-gray-700 dark:text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand Section */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Nizomjon Urolov</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Junior Web Developer passionate about building secure and
              user-friendly web applications.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-gray-200 dark:bg-gray-800 hover:bg-primary-600 transition-colors duration-200"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(link.href);
                    }}
                    className="text-gray-600 dark:text-gray-400 hover:text-primary-400 transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Get In Touch</h4>
            <ul className="space-y-2 text-gray-600 dark:text-gray-400">
              <li>
                <a
                  href="mailto:nizomjonurolov24@gmail.com"
                  className="hover:text-primary-400 transition-colors duration-200"
                >
                  nizomjonurolov24@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="tel:+998950393669"
                  className="hover:text-primary-400 transition-colors duration-200"
                >
                  +998 95-039-36-69
                </a>
              </li>
              <li>Location: Pilla street, 78, Tashkent</li>
              <li>Available for freelance opportunities</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-200 dark:border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 md:mb-0">
            © {currentYear} Nizomjon Urolov. All rights reserved.
          </p>
          <p className="text-gray-600 dark:text-gray-400 text-sm flex items-center gap-1">
            Made with <FaHeart className="text-red-500 w-4 h-4" /> using React & Django
          </p>
        </div>
      </div>

      {/* Back to Top Button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-8 right-8 p-3 bg-primary-600 hover:bg-primary-700 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110"
        aria-label="Back to top"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M5 10l7-7m0 0l7 7m-7-7v18"></path>
        </svg>
      </button>
    </footer>
  );
};

export default Footer;
