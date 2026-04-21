import React, { useState, useEffect } from 'react';

function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const styles = {
    nav: {
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '24px 60px',
      backgroundColor: scrolled ? 'rgba(10,10,10,0.95)' : 'transparent',
      zIndex: 100,
      transition: 'background-color 0.4s',
      backdropFilter: scrolled ? 'blur(10px)' : 'none',
    },
    logo: {
      fontSize: '18px',
      fontWeight: '700',
      color: '#F5F0E8',
      letterSpacing: '4px',
      textTransform: 'uppercase',
    },
    links: {
      display: 'flex',
      gap: '40px',
      listStyle: 'none',
      margin: 0,
      padding: 0,
    },
    link: {
      color: 'rgba(245,240,232,0.6)',
      textDecoration: 'none',
      fontSize: '11px',
      letterSpacing: '2px',
      textTransform: 'uppercase',
      cursor: 'pointer',
      transition: 'color 0.3s',
    },
    cvLink: {
      color: '#C4A882',
      textDecoration: 'none',
      fontSize: '11px',
      letterSpacing: '2px',
      textTransform: 'uppercase',
      cursor: 'pointer',
      transition: 'color 0.3s',
      border: '1px solid rgba(196,168,130,0.4)',
      padding: '6px 14px',
    },
  };

  return (
    <nav style={styles.nav}>
      <span style={styles.logo}>A.M</span>
      <ul style={styles.links}>
        <li><a href="#hero" style={styles.link}>Accueil</a></li>
        <li><a href="#about" style={styles.link}>À propos</a></li>
        <li><a href="#projects" style={styles.link}>Projets</a></li>
        <li><a href="#cv" style={styles.link}>CV</a></li>
        <li><a href="#contact" style={styles.link}>Contact</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;