import React, { useState } from 'react';
import { FaPaperPlane, FaCheckCircle } from 'react-icons/fa';
import { contactAPI } from '../utils/api';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [status, setStatus] = useState('idle'); // idle, submitting, success, error

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('submitting');

    try {
      // Send the data to the backend
      await contactAPI.send(formData);

      setStatus('success');
      setFormData({ name: '', email: '', message: '' });

      // Reset success message after 5 seconds
      setTimeout(() => setStatus('idle'), 5000);
    } catch (error) {
      console.error('Contact form error:', error);
      setStatus('error');
      setTimeout(() => setStatus('idle'), 5000);
    }
  };

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-4xl mx-auto">
        <h2 className="section-title">Get In Touch</h2>

        <p className="text-center text-gray-600 dark:text-gray-400 text-lg mb-12 max-w-2xl mx-auto">
          I'm always open to discussing new projects, creative ideas, or opportunities to be
          part of your vision. Feel free to reach out!
        </p>

        <div className="card p-8">
          {status === 'success' ? (
            <div className="text-center py-12 animate-fade-in">
              <FaCheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                Message Sent!
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Thank you for reaching out. I'll get back to you soon!
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Field */}
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                >
                  Your Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="input-field"
                  placeholder="John Doe"
                  disabled={status === 'submitting'}
                />
              </div>

              {/* Email Field */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                >
                  Your Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="input-field"
                  placeholder="john@example.com"
                  disabled={status === 'submitting'}
                />
              </div>

              {/* Message Field */}
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                >
                  Your Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="6"
                  className="input-field resize-none"
                  placeholder="Tell me about your project or just say hi..."
                  disabled={status === 'submitting'}
                />
              </div>

              {/* Error Message */}
              {status === 'error' && (
                <div className="p-4 bg-red-100 dark:bg-red-900 border border-red-400 dark:border-red-700 rounded-lg">
                  <p className="text-red-700 dark:text-red-300">
                    Oops! Something went wrong. Please try again later.
                  </p>
                </div>
              )}

              {/* Submit Button */}
              <button
                type="submit"
                disabled={status === 'submitting'}
                className="w-full btn-primary inline-flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {status === 'submitting' ? (
                  <>
                    <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                        fill="none"
                      />
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      />
                    </svg>
                    Sending...
                  </>
                ) : (
                  <>
                    <FaPaperPlane className="w-4 h-4" />
                    Send Message
                  </>
                )}
              </button>
            </form>
          )}
        </div>

        {/* Additional Contact Info */}
        <div className="mt-12 text-center">
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            Or connect with me on social media
          </p>
          <div className="flex justify-center gap-4">
            <a
              href="https://github.com/urolovforever"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
            >
              GitHub
            </a>
            <span className="text-gray-400">•</span>
            <a
              href="https://www.linkedin.com/in/nizomjonurolov"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
            >
              LinkedIn
            </a>
            <span className="text-gray-400">•</span>
            <a
              href="tel:+998950393669"
              className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
            >
              Phone
            </a>
            <span className="text-gray-400">•</span>
            <a
              href="mailto:nizomjonurolov24@gmail.com"
              className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
            >
              Email
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
