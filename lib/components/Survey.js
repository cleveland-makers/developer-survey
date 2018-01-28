import React from 'react';
import TellUsAboutYourCurrentRole from './TellUsAboutYourCurrentRole';
import SurveyFields from './SurveyFields';

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

  nextStep() {
    this.setState({
      step: this.state.step + 1,
    });
  }

  previousStep() {
    this.setState({
      step: this.state.step - 1,
    });
  }

  render() {
    switch (this.state.step) {
      case 1:
        return (<TellUsAboutYourCurrentRole
          fieldValues={fieldValues}
          nextStep={() => { this.nextStep(); }}
          saveValues={saveValues}
          updateState={this.updateState}
          {...this.state}
        />);
      case 2:
        return (<SurveyFields
          fieldValues={fieldValues}
          nextStep={() => { this.nextStep(); }}
          previousStep={() => { this.previousStep(); }}
          saveValues={saveValues}
          updateState={this.updateState}
          {...this.state}
        />);
      default:
        return (<TellUsAboutYourCurrentRole
          fieldValues={fieldValues}
          nextStep={() => { this.nextStep(); }}
          saveValues={saveValues}
          updateState={this.updateState}
          {...this.state}
        />);
    }
  }
}

export default Survey;
