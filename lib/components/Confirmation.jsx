import React from 'react';
import { Link } from 'react-router-dom';
import NavbarHome from './NavbarHome';
import FullWidthSection from './FullWidthSection';

const styles = {
  h1: {
    marginTop: '20px',
    marginBottom: '40px',
    fontFamily: 'Play, serif',
    color: '#730006',
    textShadow: '2px 2px 5px #F24932',
    fontSize: '50px',
    fontWeight: '600',
    lineHeight: '1.08',
    textTransform: 'uppercase',
  },
  div: {
    width: '60%',
    margin: 'auto',
  },
  buttonMain: {
    backgroundColor: '#730006',
    border: '2px solid #730006',
    borderRadius: '2px',
    color: '#F7F5F4',
    padding: '15px 32px',
    textAlign: 'center',
    textDecoration: 'none',
    display: 'inline-block',
    font: '16px Roboto, sans-serif',
    fontWeight: 'bold',
  },
  buttonSecondary: {
    backgroundColor: '#F7F5F4',
    border: '2px solid #4556A5',
    borderRadius: '2px',
    color: '#4556A5',
    padding: '15px 32px',
    textAlign: 'center',
    textDecoration: 'none',
    display: 'inline-block',
    font: '16px Roboto, sans-serif',
    fontWeight: 'bold',
  },
  root: {
    backgroundColor: '#8097ad',
    overflow: 'hidden',
    minHeight: '800px',
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
          <Link style={styles.buttonMain} to="/survey">Start</Link>
        </div>
      </section>
    </FullWidthSection>
  </div>
);

export default Faq;
