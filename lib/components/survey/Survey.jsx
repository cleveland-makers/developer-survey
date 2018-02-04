import React from 'react';
import PropTypes from 'prop-types';
import Diversity from './Diversity';
import FourOhFour from '../FourOhFour';
import LetsTalkLanguages from './LetsTalkLanguages';
import Loading from '../Loading';
import MovingOn from './MovingOn';
import SpeakingOfWork from './SpeakingOfWork';
import storeProvider from '../storeProvider';
import SurveyComplete from '../SurveyComplete';
import SurveyNavigation from './SurveyNavigation';
import SurveyProgress from './SurveyProgress';
import TellUsAboutYourCurrentRole from './TellUsAboutYourCurrentRole';

function buttonOptions(currentStep) {
  if (currentStep === -1) {
    return {
      nextDisplay: false,
      previousDisplay: false,
    };
  } else if (currentStep === 0) {
    return {
      previousDisplay: false,
    };
  } else if (currentStep === 4) {
    return {
      nextHref: '/confirmation',
      nextLabel: 'Submit',
    };
  }
  return {};
}

function validator(survey, surveyStep) {
  return () => {
    switch (surveyStep) {
      case 0:
        return survey.developerCurrentRoles &&
          survey.developerCurrentRoles.length > 0 &&
          survey.developerHowLong !== 0;
      case 1:
        return survey.languagePrimaryHomeLanguages &&
          survey.languagePrimaryHomeLanguages.length > 0 &&
          survey.languagePrimaryWorkLanguage &&
          survey.languagePrimaryWorkLanguage.length > 0 &&
          survey.languageWhenDidYouLearnIt &&
          survey.languageWhenDidYouLearnIt > 0 &&
          survey.languageWhereDidYouLearnIt &&
          survey.languageWhereDidYouLearnIt.length > 0 &&
          survey.languageWhyDoYouUseIt &&
          survey.languageWhyDoYouUseIt.length > 0;
      case 2:
        return survey.careerDevelopmentJobCount > 0 &&
          survey.careerSalary > 0 &&
          survey.careerSatisfaction &&
          survey.careerSatisfaction.length > 0 &&
          survey.careerWorkLifeBalance &&
          survey.careerWorkLifeBalance.length > 0 &&
          survey.officeEmployeeCount &&
          survey.officeEmployeeCount.length > 0 &&
          survey.officeHoursPerWeek > 0 &&
          survey.officeLocation &&
          survey.officeLocation.length > 0;
      case 3:
        return survey.personalFavoriteClevelandActivity &&
          survey.personalFavoriteClevelandActivity.length > 0 &&
          survey.personalFavoriteSportsTeams &&
          survey.personalFavoriteSportsTeams.length > 0 &&
          survey.personalWhyCleveland &&
          survey.personalWhyCleveland.length > 0;
      case 4:
        return survey.personalEthnicity &&
          survey.personalEthnicity.length > 0 &&
          survey.personalGender &&
          survey.personalGender.length > 0 &&
          survey.personalHighestEducation &&
          survey.personalHighestEducation.length > 0;
      default:
        return false;
    }
  };
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
    this.props.store.resetState();
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
    const nextFunc = (this.props.surveyStep === 4) ?
      this.props.store.submitSurvey : null;
    const options = buttonOptions(this.props.surveyStep);
    const validation = validator(this.props.survey, this.props.surveyStep);
    return (
      <div>
        <SurveyProgress
          surveyStep={this.props.surveyStep}
          surveyLength={this.props.surveyLength}
        />
        <SurveyNavigation
          nextFunc={nextFunc}
          validator={validation}
          {...options}
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
    resetState: PropTypes.func.isRequired,
    submitSurvey: PropTypes.func.isRequired,
  }).isRequired,
  survey: PropTypes.shape({
    careerDevelopmentJobCount: PropTypes.number.isRequired,
    careerSalary: PropTypes.number.isRequired,
    careerSatisfaction: PropTypes.string.isRequired,
    careerWorkLifeBalance: PropTypes.string.isRequired,
    developerCurrentRoles: PropTypes.arrayOf(PropTypes.string).isRequired,
    developerHowLong: PropTypes.number.isRequired,
    languagePrimaryHomeLanguages: PropTypes.arrayOf(PropTypes.string).isRequired,
    languagePrimaryWorkLanguage: PropTypes.string.isRequired,
    languageWhenDidYouLearnIt: PropTypes.number.isRequired,
    languageWhereDidYouLearnIt: PropTypes.arrayOf(PropTypes.string).isRequired,
    languageWhyDoYouUseIt: PropTypes.arrayOf(PropTypes.string).isRequired,
    officeEmployeeCount: PropTypes.string.isRequired,
    officeHoursPerWeek: PropTypes.number.isRequired,
    officeLocation: PropTypes.string.isRequired,
    personalEthnicity: PropTypes.string.isRequired,
    personalFavoriteClevelandActivity: PropTypes.string.isRequired,
    personalFavoriteSportsTeams: PropTypes.string.isRequired,
    personalGender: PropTypes.string.isRequired,
    personalHighestEducation: PropTypes.string.isRequired,
    personalWhyCleveland: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
  surveyLength: PropTypes.number.isRequired,
  surveyStep: PropTypes.number.isRequired,
};

export default storeProvider()(Survey);
