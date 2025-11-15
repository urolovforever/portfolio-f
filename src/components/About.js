import React from 'react';
import { FaCode, FaLightbulb, FaRocket } from 'react-icons/fa';

const About = () => {
  const highlights = [
    {
      icon: FaCode,
      title: 'Responsive Design',
      description: 'Creating clean, responsive, and cross-browser compatible websites',
    },
    {
      icon: FaLightbulb,
      title: 'Critical Thinker',
      description: 'Strong problem-solving and decision-making skills for complex challenges',
    },
    {
      icon: FaRocket,
      title: 'Team Player',
      description: 'Excellent teamwork and multitasking abilities in collaborative environments',
    },
  ];

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto">
        <h2 className="section-title">About Me</h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left side - Text content */}
          <div className="space-y-6">
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              Hello! I'm a motivated <span className="font-semibold text-primary-600 dark:text-primary-400">Junior Web Developer</span> with
              a passion for cybersecurity. I enjoy building clean, responsive, and user-friendly websites using
              HTML, CSS, JavaScript, and Python.
            </p>

            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              Currently, I'm taking hands-on <span className="font-semibold text-primary-600 dark:text-primary-400">cybersecurity courses</span> to
              strengthen my skills and create secure, efficient web applications. I'm always eager to learn new
              technologies and improve with every project.
            </p>

            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              I'm fluent in <span className="font-semibold text-primary-600 dark:text-primary-400">English, Russian, Arabic, and Uzbek</span>,
              which helps me collaborate effectively with diverse teams and understand different perspectives in problem-solving.
            </p>

            <div className="pt-4">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Philosophy
              </h3>
              <p className="text-lg text-gray-700 dark:text-gray-300 italic">
                Security and user experience go hand-in-hand. I believe in creating applications that are
                both beautiful and secure, making the web a safer place for everyone.
              </p>
            </div>
          </div>

          {/* Right side - Highlights */}
          <div className="space-y-6">
            {highlights.map((highlight, index) => (
              <div
                key={index}
                className="card p-6 flex items-start space-x-4"
              >
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-lg bg-primary-100 dark:bg-primary-900 flex items-center justify-center">
                    <highlight.icon className="w-6 h-6 text-primary-600 dark:text-primary-400" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    {highlight.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    {highlight.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
