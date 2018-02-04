import React from 'react';
import PropTypes from 'prop-types';
import Paper from 'material-ui/Paper';
import withWidth, { SMALL } from 'material-ui/utils/withWidth';
import FullWidthSection from '../FullWidthSection';

const styles = {
  mobile: {
    backgroundColor: '#FFFFFF',
  },
  paper: {
    padding: '20px 30px',
  },
};

class SurveyFormat extends React.PureComponent {
  render() {
    if (this.props.width === SMALL) {
      return (
        <FullWidthSection style={styles.mobile}>
          {this.props.children}
        </FullWidthSection>
      );
    }
    return (
      <Paper style={styles.paper} zDepth={1}>
        {this.props.children}
      </Paper>
    );
  }
}

SurveyFormat.propTypes = {
  children: PropTypes.node.isRequired,
  width: PropTypes.number.isRequired,
};

export default withWidth()(SurveyFormat);
