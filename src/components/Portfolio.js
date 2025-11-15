import React, { useState, useEffect } from 'react';
import { FaGithub, FaExternalLinkAlt, FaSpinner } from 'react-icons/fa';
import { projectsAPI } from '../utils/api';

const Portfolio = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [filter, setFilter] = useState('All');

  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    try {
      setLoading(true);
      const data = await projectsAPI.getAll();
      setProjects(data);
      setError(null);
    } catch (err) {
      setError('Failed to load projects. Please try again later.');
      console.error('Error fetching projects:', err);
    } finally {
      setLoading(false);
    }
  };

  // Get unique project types for filtering
  const projectTypes = ['All', ...new Set(projects.map(p => p.project_type).filter(Boolean))];

  // Filter projects based on selected filter
  const filteredProjects = filter === 'All'
    ? projects
    : projects.filter(p => p.project_type === filter);

  return (
    <section id="portfolio" className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto">
        <h2 className="section-title">Portfolio</h2>

        <p className="text-center text-gray-600 dark:text-gray-400 text-lg mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects. Each project showcases different technologies
          and problem-solving approaches.
        </p>

        {/* Filter Buttons */}
        {projectTypes.length > 1 && (
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {projectTypes.map((type) => (
              <button
                key={type}
                onClick={() => setFilter(type)}
                className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                  filter === type
                    ? 'bg-primary-600 text-white shadow-lg scale-105'
                    : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'
                }`}
              >
                {type}
              </button>
            ))}
          </div>
        )}

        {/* Loading State */}
        {loading && (
          <div className="flex justify-center items-center py-20">
            <FaSpinner className="w-12 h-12 text-primary-600 animate-spin" />
          </div>
        )}

        {/* Error State */}
        {error && !loading && (
          <div className="text-center py-20">
            <p className="text-red-600 dark:text-red-400 text-lg mb-4">{error}</p>
            <button
              onClick={fetchProjects}
              className="btn-primary"
            >
              Try Again
            </button>
          </div>
        )}

        {/* Empty State */}
        {!loading && !error && filteredProjects.length === 0 && (
          <div className="text-center py-20">
            <p className="text-gray-600 dark:text-gray-400 text-lg">
              No projects found. Check back soon!
            </p>
          </div>
        )}

        {/* Projects Grid */}
        {!loading && !error && filteredProjects.length > 0 && (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="card overflow-hidden group"
              >
                {/* Project Image */}
                <div className="relative h-48 bg-gradient-to-br from-primary-400 to-primary-600 overflow-hidden">
                  {project.image ? (
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-white text-4xl font-bold">
                      {project.title.charAt(0)}
                    </div>
                  )}
                  <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                </div>

                {/* Project Details */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                    {project.title}
                  </h3>

                  {project.project_type && (
                    <span className="inline-block px-3 py-1 bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-300 rounded-full text-xs font-medium mb-3">
                      {project.project_type}
                    </span>
                  )}

                  <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-3">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  {project.technologies && (
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.split(',').slice(0, 3).map((tech, index) => (
                        <span
                          key={index}
                          className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded text-xs"
                        >
                          {tech.trim()}
                        </span>
                      ))}
                    </div>
                  )}

                  {/* Links */}
                  <div className="flex gap-4">
                    {project.github_link && (
                      <a
                        href={project.github_link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                      >
                        <FaGithub className="w-5 h-5" />
                        <span className="text-sm font-medium">Code</span>
                      </a>
                    )}
                    {project.live_link && (
                      <a
                        href={project.live_link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                      >
                        <FaExternalLinkAlt className="w-4 h-4" />
                        <span className="text-sm font-medium">Live Demo</span>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Portfolio;
