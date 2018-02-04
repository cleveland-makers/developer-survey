import React from 'react';
import PropTypes from 'prop-types';
import LinearProgress from 'material-ui/LinearProgress';
import { deepRed } from '../colors';

const styles = {
  progressBar: {
    height: '10px',
  },
};

class SurveyProgress extends React.PureComponent {
  render() {
    return (
      <LinearProgress
        color={deepRed}
        max={this.props.surveyLength}
        mode="determinate"
        style={styles.progressBar}
        value={this.props.surveyStep}
      />
    );
  }
}

SurveyProgress.propTypes = {
  surveyLength: PropTypes.number.isRequired,
  surveyStep: PropTypes.number.isRequired,
};

export default SurveyProgress;
