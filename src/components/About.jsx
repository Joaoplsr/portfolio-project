import React from "react";
import { motion } from "framer-motion";
import { Briefcase, Code, Database, GitBranch } from "lucide-react";
import "./About.css";

const About = () => {
  const skills = [
    { name: "React", icon: <Code size={20} /> },
    { name: "Laravel", icon: <Briefcase size={20} /> },
    { name: "PHP", icon: <Code size={20} /> },
    { name: "Banco de Dados", icon: <Database size={20} /> },
    { name: "JavaScript (ES6+)", icon: <Code size={20} /> },
    { name: "Git/Github", icon: <GitBranch size={20} /> },
    { name: "HTML5 & CSS3", icon: <Code size={20} /> },
  ];

  return (
    <motion.section
      id="about"
      className="about-section"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
    >
      <div className="about-content">
        <motion.h2
          className="about-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
        >
          Me Conheça!
        </motion.h2>
        <motion.div
          className="flex flex-col md:flex-row items-center justify-center gap-8 mb-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4, ease: "easeOut" }}
        >
          <div className="md:w-1/2">
            <motion.p
              className="about-description"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4, ease: "easeOut" }}
            >
              Olá! Sou João Pedro, desenvolvedor web full-stack apaixonado por
              criar aplicações robustas e centradas no usuário, utilizando
              React, JavaScript, HTML, CSS, Laravel e PHP. Gosto de transformar
              desafios complexos em soluções elegantes, com código limpo e
              interfaces intuitivas. Estou sempre em busca de aprimoramento
              contínuo, explorando novas tecnologias para entregar resultados
              sólidos, escaláveis e que realmente façam a diferença na
              experiência do usuário.
            </motion.p>
          </div>

          <motion.div
            className="about-image-container md:w-3/4 flex justify-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4, ease: "easeOut" }}
          >
            <img
              src="../../dist/me.jpg"
              alt="João Pedro"
              className="w-3/4 rounded-lg shadow-md"
            />
          </motion.div>
        </motion.div>

        <motion.div
          className="skills-container"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6, ease: "easeOut" }}
        >
          <h3 className="skills-title">Habilidades</h3>
          <ul className="skills-list">
            {skills.map((skill, index) => (
              <motion.li
                key={index}
                className="skill-item"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.3,
                  delay: 0.7 + index * 0.1,
                  ease: "easeOut",
                }}
              >
                {skill.icon}
                <span>{skill.name}</span>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default About;
