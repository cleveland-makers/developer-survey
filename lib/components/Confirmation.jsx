import React from 'react';
import Paper from 'material-ui/Paper';
import SurveyProgress from './survey/SurveyProgress';

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
  paper: {
    padding: '20px 30px',
  },
};

const Confirmation = () => (
  <React.Fragment>
    <SurveyProgress
      surveyStep={1}
      surveyLength={1}
    />
    <Paper style={styles.paper} zDepth={1}>
      <section style={styles.div}>
        <h1 style={styles.h1}>Thank you!</h1>
        <p>
          We appreciate you taking the time to tell us about yourself. Results
          will be available soon.
        </p>
      </section>
    </Paper>
  </React.Fragment>
);

export default Confirmation;
