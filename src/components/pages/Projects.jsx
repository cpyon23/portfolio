import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const projects = [
  {
    title: 'Project 1',
    description: 'A brief description of project 1 and the technologies used.',
    img: 'https://via.placeholder.com/300x200',
    link: 'https://github.com/cpyon23/portfolio', // Update with your project link
  },
  {
    title: 'Project 2',
    description: 'A brief description of project 2 and the technologies used.',
    img: 'https://via.placeholder.com/300x200',
    link: 'https://github.com/cpyon23/portfolio',
  },
  {
    title: 'Project 3',
    description: 'A brief description of project 3 and the technologies used.',
    img: 'https://via.placeholder.com/300x200',
    link: 'https://github.com/cpyon23/portfolio',
  },
  // Add more projects as needed
];

const Projects = () => {
  return (
    <section className="bg-gray-100 dark:bg-gray-900 py-12" id="projects">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-10">
          My Projects
        </h2>
        <div 
          data-aos="fade-up"
          data-aos-delay="200"
          className="grid gap-8 lg:grid-cols-3 sm:grid-cols-2">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-lg hover:shadow-2xl transition duration-300 transform hover:-translate-y-2"
            >
              <img
                className="w-full h-48 object-cover rounded-t-lg"
                src={project.img}
                alt={project.title}
              />
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-3">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {project.description}
                </p>
                <a
                  href={project.link}
                  className="inline-block bg-blue-500 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-600 transition"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Project
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
