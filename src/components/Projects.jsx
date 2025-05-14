import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';
import './Projects.css';

const projectData = [
  {
    id: 1,
    title: 'Project Alpha',
    description: 'A brief description of Project Alpha, highlighting its key features and technologies used. This project aimed to solve problem X by implementing solution Y.',
    imageUrl: 'https://via.placeholder.com/400x250/E0E0E0/B0B0B0?text=Project+Alpha',
    tags: ['React', 'Node.js', 'MongoDB', 'Framer Motion'],
    liveLink: '#',
    githubLink: '#',
  },
  {
    id: 2,
    title: 'Project Beta',
    description: 'Project Beta is an innovative web application that focuses on user engagement through interactive elements and a clean UI. Built with a modern tech stack.',
    imageUrl: 'https://via.placeholder.com/400x250/D0D0D0/A0A0A0?text=Project+Beta',
    tags: ['Vue.js', 'Firebase', 'TailwindCSS'],
    liveLink: '#',
    githubLink: '#',
  },
  {
    id: 3,
    title: 'Project Gamma',
    description: 'This project showcases advanced data visualization techniques and a robust backend system. It was developed to provide insights into complex datasets.',
    imageUrl: 'https://via.placeholder.com/400x250/C0C0C0/909090?text=Project+Gamma',
    tags: ['Angular', 'Python/Django', 'D3.js'],
    liveLink: '#',
    githubLink: '#',
  },
];

const Projects = () => {
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.6,
        ease: 'easeOut',
      },
    }),
  };

  return (
    <motion.section 
      id="projects"
      className="projects-section"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    >
      <motion.h2 
        className="projects-title"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1, ease: 'easeOut' }}
      >
        My Projects
      </motion.h2>
      <div className="projects-grid">
        {projectData.map((project, index) => (
          <motion.div 
            key={project.id} 
            className="project-card"
            custom={index}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            whileHover={{ scale: 1.03, boxShadow: '0px 10px 20px rgba(0,0,0,0.1)'}}
            transition={{ duration: 0.3 }}
          >
            <div className="project-image-container">
              <img src={project.imageUrl} alt={project.title} className="project-image" />
            </div>
            <div className="project-card-content">
              <h3 className="project-card-title">{project.title}</h3>
              <p className="project-card-description">{project.description}</p>
              <div className="project-tags">
                {project.tags.map((tag, idx) => (
                  <span key={idx} className="project-tag">{tag}</span>
                ))}
              </div>
              <div className="project-links">
                {project.liveLink && project.liveLink !== '#' && (
                  <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="project-link">
                    <ExternalLink size={18} /> Live Demo
                  </a>
                )}
                {project.githubLink && project.githubLink !== '#' && (
                  <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="project-link">
                    <Github size={18} /> View Code
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default Projects;
