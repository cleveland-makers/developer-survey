import React from 'react';
import PropTypes from 'prop-types';
import { Navbar, Nav, NavItem } from 'react-bootstrap';

const styles =  {
  navBarHeader: {
    color: "#fff",
    fontSize: "3em",
  },
  navBar: {
    backgroundColor: "#44C938",
  },
};

class AppNavbar extends React.PureComponent {
  render() {
    return (
      <Navbar style={styles.navBar}>
        <Navbar.Header style={styles.navBarHeader}>
          {this.props.i18n.header}
        </Navbar.Header>
      </Navbar>
    );
  }
}

AppNavbar.propTypes = {
  i18n: PropTypes.object.isRequired,
}

export default AppNavbar;
