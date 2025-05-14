import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Linkedin, Github, Phone } from 'lucide-react';
import './Contact.css';

const Contact = () => {

  const contactDetails = {
    email: 'joaoplsr2006@gmail.com',
    linkedin: 'https://linkedin.com/in/ppedroftv',
    github: 'https://github.com/joaoplsr',
    phone: ''
  };

  const listItemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.5,
        ease: 'easeOut',
      },
    }),
  };

  return (
    <motion.section
      id="contact"
      className="contact-section"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
    >
      <motion.h2
        className="contact-title"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1, ease: 'easeOut' }}
      >
        Fale Comigo!
      </motion.h2>
      <motion.p
        className="contact-intro"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2, ease: 'easeOut' }}
      >
        Estou disponível e aberto a oportunidades onde eu possa aplicar minha experiência com React, Laravel e tecnologias web para criar soluções reais. Se você valoriza qualidade, parceria e comprometimento, vamos conversar.
      </motion.p>

      <motion.div
        className="contact-methods"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.4, ease: 'easeOut' }}
      >
        <motion.div
          className="contact-card"
          custom={0}
          variants={listItemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <Mail size={24} className="contact-icon" />
          <a href={`mailto:${contactDetails.email}`} className="contact-link">{contactDetails.email}</a>
        </motion.div>

        {contactDetails.linkedin && (
          <motion.div
            className="contact-card"
            custom={1}
            variants={listItemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <Linkedin size={24} className="contact-icon" />
            <a href={contactDetails.linkedin} target="_blank" rel="noopener noreferrer" className="contact-link">LinkedIn</a>
          </motion.div>
        )}

        {contactDetails.github && (
          <motion.div
            className="contact-card"
            custom={2}
            variants={listItemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <Github size={24} className="contact-icon" />
            <a href={contactDetails.github} target="_blank" rel="noopener noreferrer" className="contact-link">GitHub</a>
          </motion.div>
        )}

        {contactDetails.phone && (
          <motion.div
            className="contact-card"
            custom={3}
            variants={listItemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <Phone size={24} className="contact-icon" />
            <a href={`tel:${contactDetails.phone}`} className="contact-link">{contactDetails.phone}</a>
          </motion.div>
        )}
      </motion.div>
    </motion.section>
  );
};

export default Contact;
