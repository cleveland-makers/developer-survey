import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import FullWidthSection from './FullWidthSection';
import { deepRed, heroText, offWhite, greyBlue } from './colors';

const styles = {
  container: {
    margin: 'auto',
    width: '60%',
  },
  containerRoot: {
    overflow: 'hidden',
  },
  h1: {
    color: offWhite,
    fontFamily: 'Play, serif',
    fontSize: '50px',
    fontWeight: '600',
    lineHeight: '1.08',
    marginBottom: '40px',
    marginTop: '20px',
    textShadow: `2px 2px 5px ${greyBlue}`,
    textTransform: 'uppercase',
  },
  buttonMain: {
    height: '45px',
    marginRight: '16px',
    width: '110px',
  },
  buttonMainLabel: {
    lineHeight: '45px',
  },
  p: {
    color: heroText,
    fontSize: '23px',
    fontWeight: '400',
    lineHeight: '1.58',
  },
};

const Faq = () => (
  <FullWidthSection style={styles.containerRoot}>
    <section style={styles.container}>
      <div>
        <h1 style={styles.h1}>Welcome to the CLE Tech Survey</h1>
        <p style={styles.p}>
          Popular tech surveys don’t seem to get Cleveland. So, we made our own
          Cleveland-based survey to try to get a more accurate idea of what goes on
          in Cleveland tech.
        </p>
        <p style={styles.p}>
          The purpose of this survey is to collect and present information about
          salary, education, and experience for those in Cleveland Technology to
          get an understanding of the influence different components have on
          salary calculations.
        </p>
        <p style={styles.p}>
          The information collected is anonymous and will be accessible to all,
          as a downloadable csv, once the survey collection period is over
          March 31st, 2018.
        </p>
        <p style={styles.p}>
          The survey takes about 7 minutes to complete.
        </p>
      </div>
      <div>
        <RaisedButton
          backgroundColor={deepRed}
          href="/survey"
          label="Start"
          labelColor={offWhite}
          labelStyle={styles.buttonMainLabel}
          style={styles.buttonMain}
        />
      </div>
    </section>
  </FullWidthSection>
);

export default Faq;
