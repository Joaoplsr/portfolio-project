import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';
import './Projects.css';

const projectData = [
  {
    id: 1,
    title: 'Site CEBP Online',
    description: 'Minha primeira experiência com desenvolvimento web, um site destinado a uma igreja com o intuito de divulgar a igreja e suas atividades. Ainda está em desenvolvimento, mas já é um site funcional.',
    imageUrl: '../../dist/cebp.png',
    tags: ['HTML', 'CSS', 'JavaScript'],
    liveLink: 'https://cebponline.com',
    githubLink: 'https://github.com/joaoplsr/CEBP',
  },
  {
    id: 2,
    title: 'GraphoArt',
    description: 'GraphoArt é um site que estou desenvolvendo com o intuito de desenvolver minhas habilidades com Laravel e React.Js. O intuito é ser um app web para criação e divulgação de artigos.',
    imageUrl: '../../dist/graphoart.png',
    tags: ['React.js', 'Laravel', 'TailwindCSS', 'PHP', 'PostgreSQL'],
    liveLink: '#',
    githubLink: 'https://github.com/joaoplsr/GraphoArt',
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
        Meus Projetos
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
                    <ExternalLink size={18} /> Ver Site
                  </a>
                )}
                {project.githubLink && project.githubLink !== '#' && (
                  <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="project-link">
                    <Github size={18} /> Ver Repositório
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
