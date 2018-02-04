import React from 'react';
import PropTypes from 'prop-types';
import Paper from 'material-ui/Paper';
import withWidth, { SMALL } from 'material-ui/utils/withWidth';
import FullWidthSection from '../FullWidthSection';
import { white } from '../colors';

const styles = {
  mobile: {
    backgroundColor: white,
  },
  web: {
    padding: '20px 30px',
  },
};

class SurveyFormat extends React.PureComponent {
  render() {
    switch (this.props.width) {
      case SMALL:
        return (
          <FullWidthSection style={styles.mobile}>
            {this.props.children}
          </FullWidthSection>
        );
      default:
        return (
          <Paper style={styles.web} zDepth={1}>
            {this.props.children}
          </Paper>
        );
    }
  }
}

SurveyFormat.propTypes = {
  children: PropTypes.node.isRequired,
  width: PropTypes.number.isRequired,
};

export default withWidth()(SurveyFormat);
