import React, { useState, useEffect } from 'react';
import { FaGithub, FaLinkedin, FaTelegram, FaEnvelope, FaDownload } from 'react-icons/fa';
import { profileAPI } from '../utils/api';

const HeroSection = () => {
  const [profile, setProfile] = useState({
    name: 'Nizomjon Urolov',
    title: 'Junior Web Developer | Cybersecurity Enthusiast',
    bio: 'Passionate about building clean, responsive, and user-friendly websites. Currently strengthening cybersecurity skills to create secure and efficient web applications.',
    profile_image: null,
    cv_file: null,
    email: 'nizomjonurolov24@gmail.com',
    phone: '+998950393669',
    github_url: 'https://github.com/urolovforever',
    linkedin_url: 'https://www.linkedin.com/in/nizomjonurolov',
    telegram_url: 'https://t.me/urolovnizomjon',
  });

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const data = await profileAPI.get();
        setProfile(data);
      } catch (error) {
        console.error('Error loading profile:', error);
        // Use default values if fetch fails
      }
    };
    fetchProfile();
  }, []);

  const socialLinks = [
    { icon: FaGithub, href: profile.github_url, label: 'GitHub' },
    { icon: FaLinkedin, href: profile.linkedin_url, label: 'LinkedIn' },
    { icon: FaTelegram, href: profile.telegram_url || 'https://t.me/urolovnizomjon', label: 'Telegram' },
    { icon: FaEnvelope, href: `mailto:${profile.email}`, label: 'Email' },
  ];

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary-50 to-white dark:from-gray-900 dark:to-gray-800 pt-16"
    >
      <div className="max-w-7xl mx-auto text-center animate-fade-in">
        {/* Profile Image */}
        <div className="mb-8 animate-slide-down">
          <div className="w-40 h-40 mx-auto rounded-full bg-gradient-to-br from-primary-400 to-primary-600 p-1 shadow-2xl">
            {profile.profile_image ? (
              <img
                src={profile.profile_image}
                alt={profile.name}
                className="w-full h-full rounded-full object-cover"
              />
            ) : (
              <div className="w-full h-full rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center text-6xl font-bold text-primary-600 dark:text-primary-400">
                {profile.name.split(' ').map(n => n[0]).join('').toUpperCase()}
              </div>
            )}
          </div>
        </div>

        {/* Name & Title */}
        <h1 className="text-5xl md:text-7xl font-bold mb-4 animate-slide-up">
          <span className="bg-gradient-to-r from-primary-600 to-primary-400 bg-clip-text text-transparent">
            {profile.name}
          </span>
        </h1>

        <h2 className="text-2xl md:text-3xl text-gray-600 dark:text-gray-300 mb-6 animate-slide-up">
          {profile.title}
        </h2>

        {/* Tagline */}
        <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-8 animate-fade-in">
          {profile.bio}
        </p>

        {/* Social Links */}
        <div className="flex justify-center space-x-4 mb-8 animate-slide-up">
          {socialLinks.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-white dark:bg-gray-800 shadow-md hover:shadow-xl transform hover:scale-110 transition-all duration-300 text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400"
              aria-label={social.label}
            >
              <social.icon className="w-6 h-6" />
            </a>
          ))}
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-4 animate-slide-up">
          {profile.cv_file && (
            <a
              href={profile.cv_file}
              download
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-flex items-center justify-center gap-2"
            >
              <FaDownload className="w-4 h-4" />
              Download CV
            </a>
          )}
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="btn-secondary inline-flex items-center justify-center gap-2"
          >
            <FaEnvelope className="w-4 h-4" />
            Contact Me
          </a>
        </div>

        {/* Scroll Indicator */}
        <div className="mt-16 animate-bounce">
          <a
            href="#about"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="inline-block"
          >
            <svg
              className="w-6 h-6 text-primary-600 dark:text-primary-400"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
