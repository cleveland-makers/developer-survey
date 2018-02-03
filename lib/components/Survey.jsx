import React from 'react';
import PropTypes from 'prop-types';
import Diversity from './survey/Diversity';
import FourOhFour from './FourOhFour';
import LetsTalkLanguages from './survey/LetsTalkLanguages';
import MovingOn from './survey/MovingOn';
import SpeakingOfWork from './survey/SpeakingOfWork';
import SurveyProgress from './survey/SurveyProgress';
import TellUsAboutYourCurrentRole from './survey/TellUsAboutYourCurrentRole';

class Survey extends React.PureComponent {
  surveyPage() {
    switch (this.props.surveyStep) {
      case 0:
        return (<TellUsAboutYourCurrentRole
          {...this.props}
        />);
      case 1:
        return (<LetsTalkLanguages
          {...this.props}
        />);
      case 2:
        return (<SpeakingOfWork
          {...this.props}
        />);
      case 3:
        return (<MovingOn
          {...this.props}
        />);
      case 4:
        return (<Diversity
          {...this.props}
        />);
      default:
        return (<FourOhFour />);
    }
  }

  render() {
    return (
      <div>
        <SurveyProgress
          surveyStep={this.props.surveyStep}
          surveyLength={this.props.surveyLength}
        />
        {this.surveyPage()}
      </div>
    );
  }
}

Survey.propTypes = {
  surveyLength: PropTypes.number.isRequired,
  surveyStep: PropTypes.number.isRequired,
};

export default Survey;
