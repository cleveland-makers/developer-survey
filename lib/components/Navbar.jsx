import React from 'react';
import PropTypes from 'prop-types';
import AppBar from 'material-ui/AppBar';

const styles = {
  navBarHeader: {
    color: '#fff',
    fontSize: '3em',
  },
  navBar: {
    backgroundColor: '#6B86A0',
  },
};

class AppNavbar extends React.PureComponent {
  render() {
    return (
      <div>
        <AppBar
          style={styles.navBar}
          title={this.props.i18n.header}
          iconClassNameRight="muidocs-icon-navigation-expand-more"
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
