import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import CV from './components/CV';
import Contact from './components/Contact';

function App() {
  const [entered, setEntered] = useState(false);

  return (
    <div style={{ backgroundColor: '#0a0a0a', minHeight: '100vh' }}>
      <AnimatePresence>
        {!entered && (
          <motion.div
            key="intro"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            style={{
              position: 'fixed',
              top: 0, left: 0, right: 0, bottom: 0,
              backgroundColor: '#0a0a0a',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              zIndex: 1000,
            }}
          >
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              style={{
                fontSize: '11px',
                letterSpacing: '6px',
                textTransform: 'uppercase',
                color: '#C4A882',
                marginBottom: '24px',
              }}
            >
              Portfolio
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.9 }}
              style={{
                fontSize: '100px',
                fontWeight: '700',
                color: '#F5F0E8',
                letterSpacing: '-4px',
                marginBottom: '0px',
                lineHeight: '1',
                textAlign: 'center',
              }}
            >
              AMEL
            </motion.h1>
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.9 }}
              style={{
                fontSize: '100px',
                fontWeight: '200',
                color: '#F5F0E8',
                letterSpacing: '-4px',
                marginBottom: '60px',
                lineHeight: '1',
                textAlign: 'center',
              }}
            >
              MEHDAOUI
            </motion.h1>
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5, duration: 0.6 }}
              whileHover={{ backgroundColor: '#F5F0E8', color: '#0a0a0a' }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setEntered(true)}
              style={{
                backgroundColor: 'transparent',
                color: '#F5F0E8',
                border: '1px solid #F5F0E8',
                padding: '16px 60px',
                fontSize: '11px',
                letterSpacing: '4px',
                textTransform: 'uppercase',
                cursor: 'pointer',
                borderRadius: '0px',
                transition: 'all 0.3s',
              }}
            >
              Entrer
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>

      {entered && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <Navbar />
          <Hero />
          <About />
          <Projects />
          <CV/>
          <Contact />
        </motion.div>
      )}
    </div>
  );
}

export default App;