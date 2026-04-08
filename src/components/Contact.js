import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';

const infos = [
  {
    label: 'Email',
    value: 'amelmeh17@outlook.fr',
    href: 'mailto:amelmeh17@outlook.fr',
  },
  {
    label: 'Téléphone',
    value: '07 67 96 33 79',
    href: 'tel:0767963379',
  },
  {
    label: 'GitHub',
    value: 'github.com/Amel-mhd',
    href: 'https://github.com/Amel-mhd',
  },
  {
    label: 'LinkedIn',
    value: 'Amel Mehdaoui',
    href: 'https://www.linkedin.com/in/amel-mehdaoui-559213315',
  },
];

function Contact() {
  const form = useRef();
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await emailjs.sendForm(
        'service_srcc9mi',
        'template_yi1e6vi',
        form.current,
        'dPTvun38AOmREaTit'
      );
      setSent(true);
      form.current.reset();
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <section id="contact" style={{
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
            Contact
          </motion.p>

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
            TRAVAILLONS
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
              marginBottom: '80px',
            }}
          >
            ENSEMBLE
          </motion.h2>

          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '80px',
            alignItems: 'start',
          }}>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(2, 1fr)',
              gap: '2px',
            }}>
              {infos.map((info, index) => (
                <motion.a
                  key={info.label}
                  href={info.href}
                  target={info.href.startsWith('http') ? '_blank' : '_self'}
                  rel="noreferrer"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ backgroundColor: '#1a1a1a' }}
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    padding: '30px',
                    backgroundColor: '#141414',
                    textDecoration: 'none',
                    transition: 'background-color 0.3s',
                  }}
                >
                  <span style={{
                    fontSize: '11px',
                    letterSpacing: '3px',
                    textTransform: 'uppercase',
                    color: '#C4A882',
                    marginBottom: '12px',
                  }}>
                    {info.label}
                  </span>
                  <span style={{
                    fontSize: '14px',
                    color: '#F5F0E8',
                    fontWeight: '300',
                  }}>
                    {info.value}
                  </span>
                </motion.a>
              ))}
            </div>

            <motion.form
              ref={form}
              onSubmit={handleSubmit}
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '16px',
              }}
            >
              {sent ? (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  style={{
                    padding: '40px',
                    backgroundColor: '#141414',
                    textAlign: 'center',
                  }}
                >
                  <p style={{
                    fontSize: '11px',
                    letterSpacing: '3px',
                    textTransform: 'uppercase',
                    color: '#C4A882',
                    marginBottom: '12px',
                  }}>
                    Message envoyé
                  </p>
                  <p style={{
                    fontSize: '15px',
                    color: '#F5F0E8',
                    fontWeight: '300',
                  }}>
                    Merci, je vous répondrai rapidement !
                  </p>
                </motion.div>
              ) : (
                <>
                  <input
                    name="from_name"
                    placeholder="Votre nom"
                    required
                    style={{
                      backgroundColor: '#141414',
                      border: 'none',
                      borderBottom: '1px solid rgba(245,240,232,0.1)',
                      padding: '16px',
                      fontSize: '14px',
                      color: '#F5F0E8',
                      outline: 'none',
                    }}
                  />
                  <input
                    name="from_email"
                    placeholder="Votre email"
                    type="email"
                    required
                    style={{
                      backgroundColor: '#141414',
                      border: 'none',
                      borderBottom: '1px solid rgba(245,240,232,0.1)',
                      padding: '16px',
                      fontSize: '14px',
                      color: '#F5F0E8',
                      outline: 'none',
                    }}
                  />
                  <textarea
                    name="message"
                    placeholder="Votre message"
                    required
                    style={{
                      backgroundColor: '#141414',
                      border: 'none',
                      borderBottom: '1px solid rgba(245,240,232,0.1)',
                      padding: '16px',
                      fontSize: '14px',
                      color: '#F5F0E8',
                      outline: 'none',
                      height: '140px',
                      resize: 'none',
                    }}
                  />
                  <button
                    type="submit"
                    disabled={loading}
                    style={{
                      backgroundColor: 'transparent',
                      color: '#F5F0E8',
                      border: '1px solid rgba(245,240,232,0.2)',
                      padding: '16px 32px',
                      fontSize: '11px',
                      letterSpacing: '3px',
                      textTransform: 'uppercase',
                      cursor: 'pointer',
                      alignSelf: 'flex-start',
                      transition: 'all 0.3s',
                    }}
                  >
                    {loading ? 'Envoi...' : 'Envoyer'}
                  </button>
                </>
              )}
            </motion.form>
          </div>
        </div>
      </section>

      <footer style={{
        backgroundColor: '#0a0a0a',
        padding: '30px 60px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderTop: '1px solid rgba(245,240,232,0.05)',
      }}>
        <span style={{
          fontSize: '11px',
          letterSpacing: '3px',
          textTransform: 'uppercase',
          color: 'rgba(245,240,232,0.3)',
        }}>
          © 2026 Amel Mehdaoui
        </span>
        <span style={{
          fontSize: '11px',
          letterSpacing: '3px',
          textTransform: 'uppercase',
          color: 'rgba(245,240,232,0.3)',
        }}>
          Développeuse Fullstack
        </span>
      </footer>
    </>
  );
}

export default Contact;