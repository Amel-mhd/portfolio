import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const projects = [
  {
    id: 1,
    title: 'Marvel Universe',
    subtitle: 'Application Web',
    description: "Site Marvel avec liste de personnages, comics, favoris et moteur de recherche. Fullstack React & Node.js.",
    stack: ['React', 'Node.js', 'Marvel API', 'MongoDB'],
    github: 'https://github.com/Amel-mhd/marvel',
    logo: '/marvel.png',
    color: '#1a0808',
  },
  {
    id: 2,
    title: 'Vinted Mobile',
    subtitle: 'Application Mobile',
    description: "Réplique de l'application Vinted. Fullstack avec authentification, publication d'annonces et recherche.",
    stack: ['React Native', 'Expo', 'Node.js', 'MongoDB'],
    github: 'https://github.com/Amel-mhd/vinted-mobile',
    logo: '/vinted.png',
    color: '#0d0d0d',
  },
  {
    id: 3,
    title: 'Netflix Clone',
    subtitle: 'Application Web',
    description: "Réplique de l'interface Netflix. Affichage des films et séries avec une interface soignée.",
    stack: ['React', 'JavaScript', 'CSS'],
    github: 'https://github.com/Amel-mhd/netflix',
    logo: '/netflix.png',
    color: '#1a0808',
  },
  {
  id: 4,
  title: 'Memory Game',
  subtitle: 'Jeu Web',
  description: "Jeu de mémoire - retournez les cartes et trouvez les paires.",
  stack: ['React', 'JavaScript', 'CSS'],
  github: 'https://github.com/Amel-mhd/memory-game',
  logo: '/memory-logo.png',
  color: '#0d1a0d',
},
{
  id: 5,
  title: 'Weather App',
  subtitle: 'Application Web',
  description: "Application météo - entrez une ville et voyez la météo en temps réel.",
  stack: ['React', 'API Météo', 'JavaScript', 'CSS'],
  github: 'https://github.com/Amel-mhd/weather-app',
  logo: '/weather-logo.png',
  color: '#080d1a',
},
];

function Projects() {
  const [hovered, setHovered] = useState(null);
  const scrollRef = useRef(null);

  const scroll = (dir) => {
    scrollRef.current.scrollBy({ left: dir * 320, behavior: 'smooth' });
  };

  return (
    <section id="projects" style={{
      minHeight: '100vh',
      backgroundColor: '#0a0a0a',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '80px 0',
    }}>
      <div style={{ width: '100%' }}>

        <div style={{ padding: '0 60px' }}>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{
              fontSize: '11px',
              letterSpacing: '4px',
              textTransform: 'uppercase',
              color: '#C4A882',
              marginBottom: '16px',
            }}
          >
            Projets
          </motion.p>

          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-end',
            marginBottom: '40px',
          }}>
            <div>
              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                style={{
                  fontSize: '56px',
                  fontWeight: '700',
                  color: '#F5F0E8',
                  letterSpacing: '-2px',
                  lineHeight: '1',
                  marginBottom: '8px',
                }}
              >
                MES
              </motion.h2>
              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                style={{
                  fontSize: '56px',
                  fontWeight: '200',
                  color: '#F5F0E8',
                  letterSpacing: '-2px',
                  lineHeight: '1',
                }}
              >
                RÉALISATIONS
              </motion.h2>
            </div>
          </div>
        </div>

        <div style={{ position: 'relative' }}>
          <button
            onClick={() => scroll(-1)}
            style={{
              position: 'absolute',
              left: '10px',
              top: '50%',
              transform: 'translateY(-50%)',
              width: '40px',
              height: '80px',
              backgroundColor: 'rgba(10,10,10,0.7)',
              border: 'none',
              color: '#F5F0E8',
              fontSize: '20px',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              zIndex: 10,
            }}
          >
            {'<'}
          </button>

          <button
            onClick={() => scroll(1)}
            style={{
              position: 'absolute',
              right: '10px',
              top: '50%',
              transform: 'translateY(-50%)',
              width: '40px',
              height: '80px',
              backgroundColor: 'rgba(10,10,10,0.7)',
              border: 'none',
              color: '#F5F0E8',
              fontSize: '20px',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              zIndex: 10,
            }}
          >
            {'>'}
          </button>

          <div
            ref={scrollRef}
            style={{
              display: 'flex',
              gap: '4px',
              overflowX: 'auto',
              scrollbarWidth: 'none',
              msOverflowStyle: 'none',
              padding: '0 60px',
            }}
          >
            {projects.map((project) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                onHoverStart={() => setHovered(project.id)}
                onHoverEnd={() => setHovered(null)}
                style={{
                  position: 'relative',
                  minWidth: '320px',
                  height: '400px',
                  backgroundColor: project.color,
                  overflow: 'hidden',
                  cursor: 'pointer',
                  flexShrink: 0,
                  borderRadius: '4px',
                }}
              >
                <div style={{
                  position: 'absolute',
                  top: 0, left: 0, right: 0, bottom: 0,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                  <motion.img
                    src={project.logo}
                    alt={project.title}
                    animate={{ scale: hovered === project.id ? 1.1 : 1 }}
                    transition={{ duration: 0.6 }}
                    style={{
                      width: '160px',
                      height: '160px',
                      objectFit: 'contain',
                      filter: 'brightness(0.9)',
                    }}
                  />
                </div>

                <AnimatePresence>
                  {hovered === project.id && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      style={{
                        position: 'absolute',
                        top: 0, left: 0, right: 0, bottom: 0,
                        backgroundColor: 'rgba(10,10,10,0.85)',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'flex-end',
                        padding: '30px',
                      }}
                    >
                      <motion.p
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.1 }}
                        style={{
                          fontSize: '11px',
                          letterSpacing: '3px',
                          textTransform: 'uppercase',
                          color: '#C4A882',
                          marginBottom: '8px',
                        }}
                      >
                        {project.subtitle}
                      </motion.p>
                      <motion.h3
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.15 }}
                        style={{
                          fontSize: '24px',
                          fontWeight: '700',
                          color: '#F5F0E8',
                          marginBottom: '10px',
                          letterSpacing: '-1px',
                        }}
                      >
                        {project.title}
                      </motion.h3>
                      <motion.p
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        style={{
                          fontSize: '12px',
                          color: 'rgba(245,240,232,0.6)',
                          lineHeight: '1.7',
                          marginBottom: '16px',
                        }}
                      >
                        {project.description}
                      </motion.p>
                      <motion.div
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.25 }}
                        style={{
                          display: 'flex',
                          gap: '6px',
                          flexWrap: 'wrap',
                          marginBottom: '20px',
                        }}
                      >
                        {project.stack.map((s) => (
                          <span key={s} style={{
                            fontSize: '10px',
                            letterSpacing: '2px',
                            textTransform: 'uppercase',
                            color: '#C4A882',
                            border: '1px solid rgba(196,168,130,0.3)',
                            padding: '3px 8px',
                          }}>
                            {s}
                          </span>
                        ))}
                      </motion.div>
                      <motion.a
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.3 }}
                        href={project.github}
                        target="_blank"
                        rel="noreferrer"
                        style={{
                          fontSize: '11px',
                          letterSpacing: '3px',
                          textTransform: 'uppercase',
                          color: '#F5F0E8',
                          textDecoration: 'none',
                          borderBottom: '1px solid rgba(245,240,232,0.3)',
                          paddingBottom: '4px',
                          alignSelf: 'flex-start',
                        }}
                      >
                        Voir sur GitHub
                      </motion.a>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;