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
      showMenuIconButton={false}
      style={styles.navbar}
      zDepth={0}
    />
  </div>
);

export default NavbarHome;
