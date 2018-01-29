import React from 'react';
import PropTypes from 'prop-types';
import AppBar from 'material-ui/AppBar';
import { withRouter } from 'react-router-dom';

const styles = {
  navbar: {
    backgroundColor: '#8097ad',
  },
  navbarTitle: {
    cursor: 'pointer',
    fontFamily: 'Play, serif',
    fontWeight: '600',
    textShadow: '2px 2px 5px #6B86A0',
    textTransform: 'uppercase',
  },
};

class AppNavbar extends React.PureComponent {
  onTitleClick = () => {
    const { history } = this.props;
    history.push('/');
  }

  render() {
    return (
      <div>
        <AppBar
          onTitleClick={this.onTitleClick}
          style={styles.navbar}
          titleStyle={styles.navbarTitle}
          title={this.props.i18n.header}
        />
      </div>
    );
  }
}

AppNavbar.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
  i18n: PropTypes.shape({
    header: PropTypes.string.isRequired,
  }).isRequired,
};

export default withRouter(AppNavbar);
