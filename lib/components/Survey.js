import React from 'react';
import PropTypes from 'prop-types';
import TellUsAboutYourCurrentRole from './pages/TellUsAboutYourCurrentRole';
import LetsTalkLanguages from './pages/LetsTalkLanguages';
import SpeakingOfWork from './pages/SpeakingOfWork';
import MovingOn from './pages/MovingOn';
import SomeOtherStuff from './pages/SomeOtherStuff';

let fieldValues = {
  name: null,
  email: null,
  password: null,
  age: null,
  colors: [],
};

const saveValues = fields => ((() => {
  fieldValues = Object.assign({}, fieldValues, fields);
})());

class Survey extends React.PureComponent {
  constructor(props) {
    super(props);
    this.updateState = this.updateState.bind(this);
  }

  state = {
    step: 1,
    currentRoles: [],
    yearsExp: 7,
  };

  updateState(state) {
    this.setState(Object.assign({}, this.state, state));
  }

  nextStep = () => {
    this.setState({
      step: this.state.step + 1,
    });
  }

  previousStep = () => {
    this.setState({
      step: this.state.step - 1,
    });
  }

  render() {
    switch (this.state.step) {
      case 1:
        return (<TellUsAboutYourCurrentRole
          nextStep={this.nextStep}
          saveValues={saveValues}
          {...this.props}
        />);
      case 2:
        return (<LetsTalkLanguages
          nextStep={this.nextStep}
          previousStep={this.previousStep}
          saveValues={saveValues}
          {...this.props}
        />);
      case 3:
        return (<SpeakingOfWork
          nextStep={this.nextStep}
          previousStep={this.previousStep}
          saveValues={saveValues}
          updateState={this.updateState}
          {...this.props}
        />);
      case 4:
        return (<MovingOn
          nextStep={this.nextStep}
          previousStep={this.previousStep}
          saveValues={saveValues}
          updateState={this.updateState}
          {...this.state}
          {...this.props}
        />);
      case 5:
        return (<SomeOtherStuff
          nextStep={this.nextStep}
          previousStep={this.previousStep}
          saveValues={saveValues}
          {...this.props}
        />);
      default:
        return (<TellUsAboutYourCurrentRole
          nextStep={this.nextStep}
          saveValues={saveValues}
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
};

export default Survey;
