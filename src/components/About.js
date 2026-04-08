import React from 'react';
import { motion } from 'framer-motion';

const skills = [
  { name: 'React Native', level: 80 },
  { name: 'React', level: 75 },
  { name: 'Node.js', level: 70 },
  { name: 'MongoDB', level: 70 },
  { name: 'JavaScript', level: 85 },
  { name: 'HTML', level: 90 },
  { name: 'CSS', level: 85 },
  { name: 'Git', level: 75 },
  { name: 'Design', level: 80 },
  { name: 'Expo', level: 80 },
];

function About() {
  return (
    <section id="about" style={{
      minHeight: '100vh',
      backgroundColor: '#0f0f0f',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '80px 60px',
    }}>
      <div style={{ maxWidth: '1100px', width: '100%' }}>
        
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
          À propos
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          style={{
            fontSize: '56px',
            fontWeight: '700',
            color: '#F5F0E8',
            letterSpacing: '-2px',
            lineHeight: '1',
            marginBottom: '8px',
          }}
        >
          CRÉATRICE
        </motion.h2>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          style={{
            fontSize: '56px',
            fontWeight: '200',
            color: '#F5F0E8',
            letterSpacing: '-2px',
            lineHeight: '1',
            marginBottom: '60px',
          }}
        >
          & DÉVELOPPEUSE
        </motion.h2>

        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '80px',
          alignItems: 'start',
        }}>
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <p style={{
              fontSize: '15px',
              color: 'rgba(245,240,232,0.5)',
              lineHeight: '1.9',
              marginBottom: '16px',
            }}>
              Passionnée par le code, le design et le graphisme. Je crée des interfaces soignées qui allient esthétique et technique.
            </p>
            <p style={{
              fontSize: '15px',
              color: 'rgba(245,240,232,0.5)',
              lineHeight: '1.9',
            }}>
              J'aime transformer des idées en expériences visuelles uniques et fonctionnelles.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            {skills.map((skill, index) => (
              <div key={skill.name} style={{ marginBottom: '20px' }}>
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  marginBottom: '8px',
                }}>
                  <span style={{
                    fontSize: '11px',
                    letterSpacing: '2px',
                    textTransform: 'uppercase',
                    color: '#F5F0E8',
                  }}>
                    {skill.name}
                  </span>
                  <span style={{
                    fontSize: '11px',
                    color: '#C4A882',
                  }}>
                    {skill.level}%
                  </span>
                </div>
                <div style={{
                  height: '1px',
                  backgroundColor: 'rgba(245,240,232,0.1)',
                  width: '100%',
                }}>
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.8 }}
                    style={{
                      height: '1px',
                      backgroundColor: '#C4A882',
                    }}
                  />
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default About;