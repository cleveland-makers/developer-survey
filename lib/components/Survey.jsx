import React from 'react';
import PropTypes from 'prop-types';
import TellUsAboutYourCurrentRole from './pages/TellUsAboutYourCurrentRole';
import LetsTalkLanguages from './pages/LetsTalkLanguages';
import SpeakingOfWork from './pages/SpeakingOfWork';
import MovingOn from './pages/MovingOn';
import SomeOtherStuff from './pages/SomeOtherStuff';

class Survey extends React.PureComponent {
  render() {
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
  surveyStep: PropTypes.number.isRequired,
};

export default Survey;
