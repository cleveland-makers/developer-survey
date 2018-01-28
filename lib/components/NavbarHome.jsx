import React from 'react';
import AppBar from 'material-ui/AppBar';

const styles = {
  navBarHeader: {
    color: '#fff',
    fontSize: '3em',
  },
  navBar: {
    backgroundColor: '#8097ad',
  },
};

const AppBarHome = () => (
  <div>
    <AppBar
      style={styles.navBar}
      iconClassNameRight="muidocs-icon-navigation-expand-more"
      zDepth={0}
    />
  </div>
);

export default AppBarHome;
