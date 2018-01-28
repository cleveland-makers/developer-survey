import React from 'react';
import { lightWhite } from 'material-ui/styles/colors';
import FullWidthSection from './FullWidthSection';

const styles = {
  p: {
    color: lightWhite,
    fontSize: '18px',
    margin: '0 auto',
    maxWidth: 416,
    padding: 0,
  },
  footer: {
    backgroundColor: '#343432',
    minHeight: '400px',
  },
};

const Footer = () => (
  <FullWidthSection style={styles.footer}>
    <p style={styles.p}>
      {'Hand crafted with love by engineers from Cleveland. '}
    </p>
  </FullWidthSection>
);

export default Footer;
