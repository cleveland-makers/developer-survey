import React from 'react';
import PropTypes from 'prop-types';
import AppBar from 'material-ui/AppBar';
import { withRouter } from 'react-router-dom';
import { blueGrey, greyBlue } from './colors';

const styles = {
  header: {
    flexShrink: 'none',
  },
  navbar: {
    backgroundColor: blueGrey,
  },
  navbarTitle: {
    cursor: 'pointer',
    fontFamily: 'Play, serif',
    fontWeight: '600',
    textShadow: `2px 2px 5px ${greyBlue}`,
    textTransform: 'uppercase',
  },
};

class Navbar extends React.PureComponent {
  onTitleClick = () => {
    const { history } = this.props;
    history.push('/');
  }

  render() {
    return (
      <header style={styles.header}>
        <AppBar
          onTitleClick={this.onTitleClick}
          showMenuIconButton={false}
          style={styles.navbar}
          title={this.props.i18n.header}
          titleStyle={styles.navbarTitle}
        />
      </header>
    );
  }
}

Navbar.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
  i18n: PropTypes.shape({
    header: PropTypes.string.isRequired,
  }).isRequired,
};

export default withRouter(Navbar);
