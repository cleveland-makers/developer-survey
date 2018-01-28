import React from 'react';
import PropTypes from 'prop-types';

const styles = {
  navBarHeader: {
    color: '#fff',
    fontSize: '3em',
  },
  navBar: {
    backgroundColor: '#44C938',
  },
};

class AppNavbar extends React.PureComponent {
  render() {
    return (
      <div style={styles.navBar}>
        <div style={styles.navBarHeader}>
          {this.props.i18n.header}
        </div>
      </div>
    );
  }
}

AppNavbar.propTypes = {
  i18n: PropTypes.object.isRequired,
};

export default AppNavbar;
