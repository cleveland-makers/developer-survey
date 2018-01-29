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
    flexShrink: 'none',
    padding: '20px',
  },
};

const Footer = () => (
  <footer style={styles.footer}>
    <FullWidthSection>
      <p style={styles.p}>
        {'Hand crafted with love by engineers from Cleveland. '}
      </p>
    </FullWidthSection>
  </footer>
);

export default Footer;
