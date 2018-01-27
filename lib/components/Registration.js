import React from 'react';
import AccountFields from './AccountFields';
import SurveyFields from './SurveyFields';
// import Confirmation from './Confirmation';
// import Success from './Success';


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

class Registration extends React.PureComponent {
  state = {
    step: 1,
  };

  nextStep() {
    this.setState({
      step: this.state.step + 1,
    });
  }
  // Same as nextStep, but decrementing
  previousStep() {
    this.setState({
      step: this.state.step - 1,
    });
  }

  render() {
    switch (this.state.step) {
      case 1:
        return (<AccountFields
          fieldValues={fieldValues}
          nextStep={() => { this.nextStep(); }}
          saveValues={saveValues}
        />);
      case 2:
        return (<SurveyFields
          fieldValues={fieldValues}
          nextStep={() => { this.nextStep(); }}
          previousStep={() => { this.previousStep(); }}
          saveValues={saveValues}
        />);
      // case 3:
      //   return (<Confirmation
      //     fieldValues={fieldValues}
      //     previousStep={() => { this.previousStep(); }}
      //     submitRegistration={this.submitRegistration}
      //   />);
      // case 4:
      //   return (<Success
      //     fieldValues={fieldValues}
      //   />);
      default:
        return (<AccountFields
          fieldValues={fieldValues}
          nextStep={() => { this.nextStep(); }}
          saveValues={saveValues}
        />);
    }
  }
}

export default Registration;
