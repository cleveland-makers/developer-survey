import React from 'react';
import PropTypes from 'prop-types';
import CurrentRole from '../questions/CurrentRole';
import YearsExp from '../questions/YearsExp';
import storeProvider from '../storeProvider';

class TellUsAboutYourCurrentRole extends React.PureComponent {
  saveAndContinue(e) {
    e.preventDefault();

    this.props.saveValues({});
    this.props.nextStep();
  }

  render() {
    return (
      <div>
        <h1>Tell Us About Your Current Role</h1>
        <div>
          <div>I have been doing</div>
          <CurrentRole
            currentRoles={this.props.currentRoles}
            updateState={this.props.updateState}
          />
          <div>for</div>
          <YearsExp
            yearsExp={this.props.yearsExp}
            updateState={this.props.updateState}
          /><div> years.</div>
        </div>
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

export default storeProvider()(TellUsAboutYourCurrentRole);
