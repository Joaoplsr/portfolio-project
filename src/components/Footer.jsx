import React from 'react';
import { motion } from 'framer-motion';
import { Linkedin, Github, Mail, MessageCircle } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { name: 'LinkedIn', url: 'https://linkedin.com/in/ppedroftv', icon: <Linkedin size={20} /> },
    { name: 'GitHub', url: 'https://github.com/joaoplsr', icon: <Github size={20} /> },
    { name: 'Email', url: 'mailto:joaoplsr2006@example.com', icon: <Mail size={20} /> },
    { name: 'WhatsApp', url: 'http://wa.me/71988212914', icon: <MessageCircle size={20} /> },
  ];

  return (
    <motion.footer 
      className="footer"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <div className="footer-content">
        <div className="footer-social-links">
          {socialLinks.map((link, index) => (
            <motion.a 
              key={index} 
              href={link.url} 
              target="_blank" 
              rel="noopener noreferrer"
              className="social-link"
              whileHover={{ scale: 1.15, color: '#007BFF' }} 
              whileTap={{ scale: 0.9 }}
            >
              {link.icon}
              <span className="sr-only">{link.name}</span>
            </motion.a>
          ))}
        </div>
        <p className="footer-copyright">
          &copy; {currentYear} João Pedro Leal. Todos os direitos reservados.
        </p>
      </div>
    </motion.footer>
  );
};

export default Footer;
