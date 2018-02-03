import React from 'react';
import PropTypes from 'prop-types';
import Diversity from './survey/Diversity';
import FourOhFour from './FourOhFour';
import LetsTalkLanguages from './survey/LetsTalkLanguages';
import Loading from './Loading';
import MovingOn from './survey/MovingOn';
import SpeakingOfWork from './survey/SpeakingOfWork';
import storeProvider from './storeProvider';
import SurveyComplete from './SurveyComplete';
import SurveyNavigation from './survey/SurveyNavigation';
import SurveyProgress from './survey/SurveyProgress';
import TellUsAboutYourCurrentRole from './survey/TellUsAboutYourCurrentRole';

function buttonOptions(currentStep, submit) {
  if (currentStep === 0) {
    return {
      previousDisplay: false,
    };
  } else if (currentStep === 4) {
    return {
      nextFunc: submit,
      nextHref: '/confirmation',
      nextLabel: 'Submit',
    };
  }
  return {};
}

class Survey extends React.PureComponent {
  state = {
    loading: true,
  }

  componentDidMount = async () => {
    await this.props.store.loadProps();
    const { allowed } = await this.props.store.checkSurveyState();
    if (!allowed) {
      this.props.store.disallow();
    }
    this.setState({
      loading: false,
    });
  }

  surveyPage() {
    switch (this.props.surveyStep) {
      case -1:
        return (<SurveyComplete />);
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
    if (this.state.loading) {
      return (<Loading />);
    }
    const {
      nextFunc,
      nextHref,
      nextLabel,
      previousDisplay,
    } = buttonOptions(this.props.surveyStep, this.props.store.submitSurvey);
    return (
      <div>
        <SurveyProgress
          surveyStep={this.props.surveyStep}
          surveyLength={this.props.surveyLength}
        />
        <SurveyNavigation
          nextFunc={nextFunc}
          nextHref={nextHref}
          nextLabel={nextLabel}
          previousDisplay={previousDisplay}
        >
          {this.surveyPage()}
        </SurveyNavigation>
      </div>
    );
  }
}

Survey.propTypes = {
  store: PropTypes.shape({
    checkSurveyState: PropTypes.func.isRequired,
    disallow: PropTypes.func.isRequired,
    loadProps: PropTypes.func.isRequired,
    submitSurvey: PropTypes.func.isRequired,
  }).isRequired,
  surveyLength: PropTypes.number.isRequired,
  surveyStep: PropTypes.number.isRequired,
};

export default storeProvider()(Survey);
