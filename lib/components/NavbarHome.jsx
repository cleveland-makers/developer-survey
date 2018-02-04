import React from 'react';
import AppBar from 'material-ui/AppBar';
import { blueGrey } from './colors';

const styles = {
  header: {
    flexShrink: 'none',
  },
  navbar: {
    backgroundColor: blueGrey,
  },
};

const NavbarHome = () => (
  <header style={styles.header}>
    <AppBar
      showMenuIconButton={false}
      style={styles.navbar}
      zDepth={0}
    />
  </header>
);

export default NavbarHome;
