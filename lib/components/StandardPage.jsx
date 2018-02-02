import React from 'react';
import PropTypes from 'prop-types';
import withWidth, { SMALL } from 'material-ui/utils/withWidth';
import FullWidthSection from './FullWidthSection';

const styles = {
  containerSmall: {
  },
  containerLarge: {
    width: '60%',
    margin: 'auto',
  },
  root: {
    overflow: 'hidden',
    minHeight: '500px',
  },
};

class StandardPage extends React.PureComponent {
  render() {
    if (this.props.width === SMALL) {
      return (
        <div style={styles.root}>
          <div style={styles.containerSmall}>
            {this.props.children}
          </div>
        </div>
      );
    }
    return (
      <div style={styles.root}>
        <FullWidthSection>
          <div style={styles.containerLarge}>
            {this.props.children}
          </div>
        </FullWidthSection>
      </div>
    );
  }
}

StandardPage.propTypes = {
  children: PropTypes.node.isRequired,
  width: PropTypes.number.isRequired,
};

export default withWidth()(StandardPage);
