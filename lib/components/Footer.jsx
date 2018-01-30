import React from 'react';
import PropTypes from 'prop-types';
import { lightWhite } from 'material-ui/styles/colors';
import FullWidthSection from './FullWidthSection';
import storeProvider from './storeProvider';

const styles = {
  p: {
    color: lightWhite,
    fontSize: '18px',
    margin: '0 auto',
    maxWidth: 416,
    padding: 0,
  },
  fingerprint: {
    color: lightWhite,
    fontSize: '14px',
    margin: '0 auto',
    maxWidth: 416,
    padding: 0,
    textAlign: 'center',
  },
  footer: {
    backgroundColor: '#343432',
    flexShrink: 'none',
    padding: '20px',
  },
};

class Footer extends React.PureComponent {
  render() {
    return (
      <footer style={styles.footer}>
        <FullWidthSection>
          <p style={styles.p}>
            {'Hand crafted with love by engineers from Cleveland. '}
          </p>
          <p style={styles.fingerprint}>
            {this.props.fingerprint}
          </p>
        </FullWidthSection>
      </footer>
    );
  }
}

Footer.propTypes = {
  fingerprint: PropTypes.string.isRequired,
};

export default storeProvider()(Footer);
