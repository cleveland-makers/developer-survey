import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
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
    height: '45px',
    marginRight: '16px',
    width: '110px',
  },
  buttonMainLabel: {
    lineHeight: '45px',
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
  },
};

const Faq = () => (
  <FullWidthSection style={styles.root}>
    <section style={styles.div}>
      <div>
        <h1 style={styles.h1}>Welcome to the CLE Tech Survey</h1>
        <p>
          Popular tech surveys don’t seem to get Cleveland. So, we made our own
          Cleveland-based survey to try to get a more accurate idea of what goes on
          in Cleveland tech.
        </p>
        <p>
          The purpose of this survey is to collect and present information about
          salary, education, and experience for those in Cleveland Technology to
          get an understanding of the influence different components have on
          salary calculations.
        </p>
        <p>
          The information collected is anonymous and will be accessible to all, in
          downloadable (INSERT FILE FORMAT TYPE HERE) format, once the survey
          collection period is over (INSERT DATE OF COMPLETION HERE).
        </p>
        <p>
          The survey takes about 7 minutes to complete.
        </p>
      </div>
      <div>
        <RaisedButton
          backgroundColor="#730006"
          href="/survey"
          label="Start"
          labelColor="#F7F5F4"
          labelStyle={styles.buttonMainLabel}
          style={styles.buttonMain}
        />
      </div>
    </section>
  </FullWidthSection>
);

export default Faq;
