import React from 'react';
import PropTypes from 'prop-types';
import CurrentRole from './CurrentRole';
import YearsExp from './YearsExp';

class TellUsAboutYourCurrentRole extends React.PureComponent {
  saveAndContinue(e) {
    e.preventDefault();

    this.props.saveValues({});
    this.props.nextStep();
  }

  render() {
    return (
      <div>
        <h1>{"Let's talk about your current role"}</h1>
        I have been doing
        <CurrentRole
          currentRoles={this.props.currentRoles}
          updateState={this.props.updateState}
        />
        for
        <YearsExp
          yearsExp={this.props.yearsExp}
          updateState={this.props.updateState}
        /> years.
        <button onClick={(e) => { this.saveAndContinue(e); }}>Save and Continue</button>
      </div>
    );
  }
}

TellUsAboutYourCurrentRole.propTypes = {
  currentRoles: PropTypes.arrayOf(PropTypes.string).isRequired,
  saveValues: PropTypes.func.isRequired,
  nextStep: PropTypes.func.isRequired,
  updateState: PropTypes.func.isRequired,
  yearsExp: PropTypes.number.isRequired,
};

export default TellUsAboutYourCurrentRole;
