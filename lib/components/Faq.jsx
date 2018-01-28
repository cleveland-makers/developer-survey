import React from 'react';
import NavbarHome from './NavbarHome';
import { Link } from 'react-router-dom';
import FullWidthSection from './FullWidthSection';

const styles = {
  h1: {
    marginTop: '20px',
    marginBottom: '40px',
    fontFamily: 'Play, serif',
    color: '#510004',
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
    backgroundColor: '#4556A5',
    border: '2px solid #4556A5',
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
    backgroundColor: '#6B86A0',
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
          <h1 style={styles.h1}>Welcome to the CLE Tech Survey</h1>
          <p>
            The purpose of this survey is to collect and present information about
            salary, education, and experience for those in Cleveland Technology to
            get an understanding of the influence different components have on
            salary calculation.
          </p>
          <p>
            The information collected is anonymous and will be accessible to all, in
            downloadable (type) format once the survey collection period is over
            (date here).
          </p>
          <p>
            The full survey will take under 10 minutes and contains only the
            necessary questions to help people understand the primary salary
            considerations.
          </p>
        </div>
        <div className="buttons">
          <a href="next.html" style={styles.buttonMain}>Start</a>
        </div>
      </section>
    </FullWidthSection>
  </div>
);

export default Faq;
