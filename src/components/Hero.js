import React, { useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const words = ['Développeuse Fullstack', 'React Native', 'Node.js', 'Design'];

function Hero() {
  const [currentWord, setCurrentWord] = useState('');
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const y = useTransform(scrollYProgress, [0, 1], [0, -100]);

  useEffect(() => {
    const style = document.createElement('style');
    style.textContent = `@keyframes blink { 0%, 100% { opacity: 1; } 50% { opacity: 0; } }`;
    document.head.appendChild(style);
    return () => document.head.removeChild(style);
  }, []);

  useEffect(() => {
    const word = words[wordIndex];
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setCurrentWord(word.slice(0, currentWord.length + 1));
        if (currentWord === word) setTimeout(() => setIsDeleting(true), 1500);
      } else {
        setCurrentWord(word.slice(0, currentWord.length - 1));
        if (currentWord === '') {
          setIsDeleting(false);
          setWordIndex((prev) => (prev + 1) % words.length);
        }
      }
    }, isDeleting ? 60 : 100);
    return () => clearTimeout(timeout);
  }, [currentWord, isDeleting, wordIndex]);

  return (
    <section
      ref={ref}
      id="hero"
      style={{
        minHeight: '100vh',
        backgroundColor: '#0a0a0a',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '0 60px',
        paddingTop: '80px',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
        maxWidth: '1100px',
        gap: '60px',
      }}>
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          style={{ flex: 1 }}
        >
          <p style={{
            fontSize: '11px',
            letterSpacing: '4px',
            textTransform: 'uppercase',
            color: '#C4A882',
            marginBottom: '20px',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
          }}>
            {currentWord}
            <span style={{
              display: 'inline-block',
              width: '2px',
              height: '14px',
              backgroundColor: '#C4A882',
              animation: 'blink 1s infinite',
            }} />
          </p>
          <h1 style={{
            fontSize: '72px',
            fontWeight: '700',
            color: '#F5F0E8',
            lineHeight: '1',
            marginBottom: '8px',
            letterSpacing: '-2px',
          }}>
            AMEL
          </h1>
          <h1 style={{
            fontSize: '72px',
            fontWeight: '200',
            color: '#F5F0E8',
            lineHeight: '1',
            marginBottom: '32px',
            letterSpacing: '-2px',
          }}>
            MEHDAOUI
          </h1>
          <p style={{
            fontSize: '15px',
            color: 'rgba(245,240,232,0.5)',
            lineHeight: '1.8',
            maxWidth: '440px',
            marginBottom: '48px',
          }}>
            Passionnée par le code, le design et le graphisme. Je crée des interfaces soignées qui allient esthétique et technique.
          </p>
          <div style={{ display: 'flex', gap: '16px' }}>
            <motion.button
              whileHover={{ backgroundColor: '#F5F0E8', color: '#0a0a0a' }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })}
              style={{
                backgroundColor: 'transparent',
                color: '#F5F0E8',
                border: '1px solid #F5F0E8',
                padding: '14px 36px',
                fontSize: '11px',
                letterSpacing: '3px',
                textTransform: 'uppercase',
                cursor: 'pointer',
                transition: 'all 0.3s',
              }}
            >
              Projets
            </motion.button>
            <motion.button
              whileHover={{ backgroundColor: '#C4A882', color: '#0a0a0a', borderColor: '#C4A882' }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
              style={{
                backgroundColor: 'transparent',
                color: '#C4A882',
                border: '1px solid #C4A882',
                padding: '14px 36px',
                fontSize: '11px',
                letterSpacing: '3px',
                textTransform: 'uppercase',
                cursor: 'pointer',
                transition: 'all 0.3s',
              }}
            >
              Contact
            </motion.button>
          </div>
        </motion.div>

        <motion.div
          style={{
            width: '380px',
            height: '500px',
            flexShrink: 0,
            position: 'relative',
            y,
          }}
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <img
            src="/photo.jpg"
            alt="Amel Mehdaoui"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              filter: 'grayscale(20%) contrast(1.1)',
            }}
          />
          <div style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            height: '200px',
            background: 'linear-gradient(to top, #0a0a0a, transparent)',
          }} />
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;