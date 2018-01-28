import React from 'react';
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
