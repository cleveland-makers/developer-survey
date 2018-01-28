import React from 'react';
import PropTypes from 'prop-types';
import AppBar from 'material-ui/AppBar';

const styles = {
  navbar: {
    backgroundColor: '#8097ad',
  },
  navbarTitle: {
    fontFamily: 'Play, serif',
    fontWeight: '600',
    textShadow: '2px 2px 5px #6B86A0',
    textTransform: 'uppercase',
  },
};

class AppNavbar extends React.PureComponent {
  render() {
    return (
      <div>
        <AppBar
          style={styles.navbar}
          titleStyle={styles.navbarTitle}
          title={this.props.i18n.header}
        />
      </div>
    );
  }
}

AppNavbar.propTypes = {
  i18n: PropTypes.shape({
    header: PropTypes.string.isRequired,
  }).isRequired,
};

export default AppNavbar;
