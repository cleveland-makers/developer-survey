import React from 'react';
import { Link } from 'react-router-dom';
import NavbarHome from './NavbarHome';
import FullWidthSection from './FullWidthSection';

const styles = {
  h1: {
    color: '#730006',
    fontFamily: 'Play, serif',
    fontSize: '50px',
    fontWeight: '600',
    lineHeight: '1.08',
    marginBottom: '40px',
    marginTop: '20px',
    textShadow: '2px 2px 5px #F24932',
    textTransform: 'uppercase',
  },
  div: {
    margin: 'auto',
    width: '60%',
  },
  buttonMain: {
    backgroundColor: '#730006',
    border: '2px solid #730006',
    borderRadius: '2px',
    color: '#F7F5F4',
    display: 'inline-block',
    font: '16px Roboto, sans-serif',
    fontWeight: 'bold',
    padding: '15px 32px',
    textAlign: 'center',
    textDecoration: 'none',
  },
  buttonSecondary: {
    backgroundColor: '#F7F5F4',
    border: '2px solid #4556A5',
    borderRadius: '2px',
    color: '#4556A5',
    display: 'inline-block',
    font: '16px Roboto, sans-serif',
    fontWeight: 'bold',
    padding: '15px 32px',
    textAlign: 'center',
    textDecoration: 'none',
  },
  root: {
    backgroundColor: '#8097ad',
    minHeight: '800px',
    overflow: 'hidden',
  },
};

const Faq = () => (
  <div>
    <NavbarHome />
    <FullWidthSection style={styles.root}>
      <section style={styles.div}>
        <div className="intro">
          <h1 style={styles.h1}>Thank you!</h1>
          <p>
            We appreciate you taking the time to tell us about yourself. Results
            will be available soon.
          </p>
        </div>
        <div className="buttons">
          <Link style={styles.buttonMain} to="/faq">Start</Link>
        </div>
      </section>
    </FullWidthSection>
  </div>
);

export default Faq;
