import React from 'react';
import PropTypes from 'prop-types';
import LetsTalkLanguages from './survey/LetsTalkLanguages';
import MovingOn from './survey/MovingOn';
import SomeOtherStuff from './survey/SomeOtherStuff';
import SpeakingOfWork from './survey/SpeakingOfWork';
import SurveyProgress from './survey/SurveyProgress';
import TellUsAboutYourCurrentRole from './survey/TellUsAboutYourCurrentRole';

class Survey extends React.PureComponent {
  surveyPage() {
    switch (this.props.surveyStep) {
      case 1:
        return (<TellUsAboutYourCurrentRole
          nextStep={this.nextStep}
          {...this.props}
        />);
      case 2:
        return (<LetsTalkLanguages
          nextStep={this.nextStep}
          previousStep={this.previousStep}
          {...this.props}
        />);
      case 3:
        return (<SpeakingOfWork
          nextStep={this.nextStep}
          previousStep={this.previousStep}
          {...this.props}
        />);
      case 4:
        return (<MovingOn
          nextStep={this.nextStep}
          previousStep={this.previousStep}
          {...this.props}
        />);
      case 5:
        return (<SomeOtherStuff
          nextStep={this.nextStep}
          previousStep={this.previousStep}
          {...this.props}
        />);
      default:
        return (<TellUsAboutYourCurrentRole
          nextStep={this.nextStep}
          {...this.props}
        />);
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

export default Survey;
