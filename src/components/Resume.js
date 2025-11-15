import React from 'react';
import { FaGraduationCap, FaBriefcase, FaCertificate } from 'react-icons/fa';

const Resume = () => {
  const education = [
    {
      degree: 'Bachelor\'s Degree in Computer Engineering',
      institution: 'International Islamic Academy of Uzbekistan',
      period: 'Sep 2022 - Jun 2026',
      description: 'Full grant scholarship. Focus on Computer Engineering, IT Services, Information Security, and Multimedia Technologies. GPA: 4.31/5.0. Prize-winner of ICPC Uzbekistan algorithmic programming competition.',
    },
    {
      degree: 'General Secondary Education',
      institution: 'General Secondary School N60',
      period: 'Sep 2011 - May 2022',
      description: 'Graduated with silver medal. GPA: 5/5. Winner and prize-winner of Olympiads in Mathematics and Physics. Winner of chess tournament.',
    },
  ];

  const experience = [
    {
      position: 'Web Developer (Part-time)',
      company: '"SAMO-TOUR" MCHJ',
      period: 'Jun 2025 - Present',
      description: 'Developing and maintaining hotel website with integrated booking system.',
      achievements: [
        'Developed responsive hotel website: www.westernsuiteshotel.com',
        'Implemented booking system with CMS integration',
        'Optimized performance, SEO, and mobile usability using HTML, CSS, JavaScript, and WordPress',
        'Deployed site with SSL, domain setup, and analytics integration',
      ],
    },
    {
      position: 'Python Developer (Internship)',
      company: 'Fido-Biznes Ltd',
      period: 'Jan 2023 - Jan 2024',
      description: 'Designed automation scripts and performed data analysis.',
      achievements: [
        'Designed Python automation scripts, increasing workflow efficiency by 15%',
        'Performed data analysis and visualization using Pandas, NumPy, and Matplotlib',
        'Reduced manual tasks through process automation and optimization',
        'Collaborated with teams to prototype solutions for industry challenges',
      ],
    },
    {
      position: 'Event Organizer and Leader',
      company: 'Istiqbolli avlod NGO',
      period: '2022 - Jan 2023',
      description: 'Organized events and advocated for human rights.',
      achievements: [
        'Planned and coordinated community events',
        'Addressed client problems and provided solutions',
        'Educated communities about human rights and human trafficking prevention',
      ],
    },
  ];

  const skills = {
    'Frontend & Design': ['HTML5', 'CSS3', 'JavaScript (ES6+)', 'Responsive Design', 'Cross-Browser Design', 'WordPress'],
    'Backend & Programming': ['Python', 'Django', 'SQL', 'Database Management', 'REST APIs', 'Pandas', 'NumPy', 'Matplotlib'],
    'Security & Tools': ['Linux', 'Bash', 'Command Line', 'Network Scanning', 'Nmap', 'Wireshark', 'Git'],
  };

  const certifications = [
    {
      name: 'ICPC Uzbekistan - Algorithmic Programming',
      issuer: 'International Collegiate Programming Contest',
      year: '2023',
    },
    {
      name: 'Mathematics & Physics Olympiad Winner',
      issuer: 'National Academic Competitions',
      year: '2020-2022',
    },
    {
      name: 'International Forums Participant',
      issuer: 'Various International Organizations',
      year: '2022-2024',
    },
    {
      name: 'Full Grant Scholarship',
      issuer: 'International Islamic Academy of Uzbekistan',
      year: '2022',
    },
  ];

  return (
    <section id="resume" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto">
        <h2 className="section-title">Resume</h2>

        {/* Skills Section */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 flex items-center">
            <span className="w-2 h-8 bg-primary-600 rounded-full mr-4"></span>
            Skills
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {Object.entries(skills).map(([category, skillList]) => (
              <div key={category} className="card p-6">
                <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                  {category}
                </h4>
                <div className="flex flex-wrap gap-2">
                  {skillList.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-300 rounded-full text-sm font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Experience Section */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 flex items-center">
            <FaBriefcase className="text-primary-600 mr-4" />
            Experience
          </h3>
          <div className="space-y-6">
            {experience.map((exp, index) => (
              <div key={index} className="card p-6">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                  <div>
                    <h4 className="text-xl font-semibold text-gray-900 dark:text-white">
                      {exp.position}
                    </h4>
                    <p className="text-primary-600 dark:text-primary-400 font-medium">
                      {exp.company}
                    </p>
                  </div>
                  <span className="text-gray-600 dark:text-gray-400 text-sm md:text-base mt-2 md:mt-0">
                    {exp.period}
                  </span>
                </div>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  {exp.description}
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-400">
                  {exp.achievements.map((achievement, i) => (
                    <li key={i}>{achievement}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Education Section */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 flex items-center">
            <FaGraduationCap className="text-primary-600 mr-4" />
            Education
          </h3>
          <div className="space-y-6">
            {education.map((edu, index) => (
              <div key={index} className="card p-6">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                  <div>
                    <h4 className="text-xl font-semibold text-gray-900 dark:text-white">
                      {edu.degree}
                    </h4>
                    <p className="text-primary-600 dark:text-primary-400 font-medium">
                      {edu.institution}
                    </p>
                  </div>
                  <span className="text-gray-600 dark:text-gray-400 text-sm md:text-base mt-2 md:mt-0">
                    {edu.period}
                  </span>
                </div>
                <p className="text-gray-700 dark:text-gray-300">
                  {edu.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Awards & Achievements Section */}
        <div>
          <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 flex items-center">
            <FaCertificate className="text-primary-600 mr-4" />
            Awards & Achievements
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {certifications.map((cert, index) => (
              <div key={index} className="card p-6">
                <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {cert.name}
                </h4>
                <p className="text-primary-600 dark:text-primary-400 font-medium mb-1">
                  {cert.issuer}
                </p>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  {cert.year}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
