import React from 'react';

function CV() {
  return (
    <section id="cv" style={{
      minHeight: '100vh',
      backgroundColor: '#0f0f0f',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '80px 60px',
    }}>
      <div style={{ maxWidth: '1100px', width: '100%', textAlign: 'center' }}>

        <p style={{
          fontSize: '11px',
          letterSpacing: '4px',
          textTransform: 'uppercase',
          color: '#C4A882',
          marginBottom: '16px',
        }}>
          CV
        </p>

        <h2 style={{
          fontSize: '56px',
          fontWeight: '700',
          color: '#F5F0E8',
          letterSpacing: '-2px',
          lineHeight: '1',
          marginBottom: '8px',
        }}>
          MON
        </h2>
        <h2 style={{
          fontSize: '56px',
          fontWeight: '200',
          color: '#F5F0E8',
          letterSpacing: '-2px',
          lineHeight: '1',
          marginBottom: '60px',
        }}>
          CURRICULUM VITAE
        </h2>

        <iframe
          src={process.env.PUBLIC_URL + '/cv-amel.pdf'}
          style={{
            width: '100%',
            height: '800px',
            border: 'none',
            borderRadius: '4px',
          }}
          title="CV Amel Mehdaoui"
        />

        
          <a href={process.env.PUBLIC_URL + '/cv-amel.pdf'}
          download="CV-Amel-Mehdaoui.pdf"
          style={{
            display: 'inline-block',
            marginTop: '32px',
            backgroundColor: 'transparent',
            color: '#F5F0E8',
            border: '1px solid rgba(245,240,232,0.2)',
            padding: '16px 48px',
            fontSize: '11px',
            letterSpacing: '4px',
            textTransform: 'uppercase',
            textDecoration: 'none',
          }}

          >
        
          Télécharger
          </a>
        

      </div>
    </section>
  );
}

export default CV;