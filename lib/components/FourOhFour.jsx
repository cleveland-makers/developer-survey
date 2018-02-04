import React from 'react';
import Paper from 'material-ui/Paper';
import { deepRed, rubyRed } from './colors';

const styles = {
  h1: {
    color: deepRed,
    fontFamily: 'Play, serif',
    fontSize: '50px',
    fontWeight: '600',
    lineHeight: '1.08',
    marginBottom: '40px',
    marginTop: '20px',
    textShadow: `2px 2px 5px ${rubyRed}`,
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

const FourOhFour = () => (
  <Paper style={styles.paper} zDepth={1}>
    <section style={styles.div}>
      <h1 style={styles.h1}>Page Not Found</h1>
      <p>
        Please return to the home page.
      </p>
    </section>
  </Paper>
);

export default FourOhFour;
