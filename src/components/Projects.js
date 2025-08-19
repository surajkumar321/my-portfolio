import React from 'react';

// You can create a new file for this data and import it.
const projectsData = [
  {
    id: 1,
    title: 'E-commerce Platform',
    description: 'A fully responsive e-commerce website built with React, Redux, and Firebase for backend services.',
    image: '/images/Screenshot (16).png', // Replace with your project image
    liveUrl: 'https://major-project-wy7t.onrender.com/login',
    githubUrl: '#',
  },
  {
    id: 2,
    title: 'Task Management App',
    description: 'A productivity app using the MERN stack (MongoDB, Express, React, Node.js) with user authentication.',
    image: 'https://via.placeholder.com/300x200', // Replace with your project image
    liveUrl: 'https://major-project-wy7t.onrender.com/listings',
    githubUrl: '#',
  },
  {
    id: 3,
    title: 'Portfolio Websites',
    description: 'My personal portfolio (the one you are looking at!) designed to showcase my skills and projects.',
    image: '/images/Screenshot (16).png', // Replace with your project image
    liveUrl: 'https://zoom-clone-frontend-d9xh.onrender.com',
    githubUrl: '#',
  },
  {
    id: 4,
    title: 'Portfolio Website',
    description: 'My personal portfolio (the one you are looking at!) designed to showcase my skills and projects.',
    image: 'https://via.placeholder.com/300x200', // Replace with your project image
    liveUrl: '#',
    githubUrl: '#',
  },
];

const Projects = () => {
  return (
    <section id="projects">
      <h2>My Projects</h2>
      <div className="projects-grid">
        {projectsData.map((project) => (
          <div className="project-card" key={project.id}>
            <img src={project.image} alt={project.title} />
            <div className="project-info">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="project-links">
                <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">Live Demo</a>
                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">GitHub</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;