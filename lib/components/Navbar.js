import React from 'react';
import PropTypes from 'prop-types';
import AppBar from 'material-ui/AppBar';

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
        <AppBar
          title={this.props.i18n.header}
          iconClassNameRight="muidocs-icon-navigation-expand-more"
        />
      </div>
    );
  }
}

AppNavbar.propTypes = {
  i18n: PropTypes.object.isRequired,
};

export default AppNavbar;
