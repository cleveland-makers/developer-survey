import React from 'react';
import PropTypes from 'prop-types';
import LinearProgress from 'material-ui/LinearProgress';

const styles = {
  progressBar: {
    height: '10px',
  },
};

class SurveyProgress extends React.PureComponent {
  render() {
    return (
      <LinearProgress
        style={styles.progressBar}
        color="#730006"
        max={this.props.surveyLength}
        mode="determinate"
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
