import React from 'react';
import { motion } from 'framer-motion';
import { Home, User, Briefcase, Mail, Download } from 'lucide-react';
import './Navbar.css';

const Navbar = () => {
  const navItems = [
    { id: 'hero', label: 'Início', icon: <Home size={18} /> },
    { id: 'about', label: 'Sobre Mim', icon: <User size={18} /> },
    { id: 'projects', label: 'Projetos', icon: <Briefcase size={18} /> },
    { id: 'contact', label: 'Contato', icon: <Mail size={18} /> },
  ];

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.nav
      className="navbar"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    >
      <div className="navbar-logo">
        <a href="#hero" onClick={() => scrollToSection('hero')}>João Pedro Leal</a>
      </div>
      <ul className="navbar-links">
        {navItems.map((item) => (
          <motion.li
            key={item.id}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <a
              href={`#${item.id}`}
              onClick={(e) => {
                e.preventDefault();
                scrollToSection(item.id);
              }}
              aria-label={`Ir para a seção ${item.label}`}
            >
              {item.icon}
              <span>{item.label}</span>
            </a>
          </motion.li>
        ))}
        <motion.li
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <a href="/cv.pdf" download="JoaoPedroLeal_CV.pdf">
            <Download size={18} />
            <span>CV</span>
          </a>
        </motion.li>
      </ul>
    </motion.nav>
  );
};

export default Navbar;
