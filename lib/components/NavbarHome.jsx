import React from 'react';
import AppBar from 'material-ui/AppBar';

const styles = {
  navbar: {
    backgroundColor: '#8097ad',
    flexShrink: 'none',
  },
};

const NavbarHome = () => (
  <div style={styles.navbar}>
    <AppBar
      style={styles.navbar}
      iconClassNameRight="muidocs-icon-navigation-expand-more"
      zDepth={0}
    />
  </div>
);

export default NavbarHome;
