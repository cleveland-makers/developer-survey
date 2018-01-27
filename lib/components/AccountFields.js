import React from 'react';
import PropTypes from 'prop-types';
import CurrentRole from './CurrentRole';

class AccountFields extends React.PureComponent {
  onNameChange(e) {
    this.setState({ name: e.target.value, ...this.state });
  }
  onPasswordChange(e) {
    this.setState({ password: e.target.value, ...this.state });
  }
  onEmailChange(e) {
    this.setState({ email: e.target.value, ...this.state });
  }

  saveAndContinue(e) {
    e.preventDefault();
    const data = {
      name: this.state.name,
      password: this.state.password,
      email: this.state.email,
    };

    this.props.saveValues(data);
    this.props.nextStep();
  }

  render() {
    return (
      <div>
        <CurrentRole />
        <label>Name</label>
        <input
          type="text"
          onChange={(e) => { this.onNameChange(e); }}
          defaultValue={this.props.fieldValues.name}
        />

        <label>Password</label>
        <input
          type="password"
          onChange={(e) => { this.onPasswordChange(e); }}
          defaultValue={this.props.fieldValues.password}
        />

        <label>Email</label>
        <input
          type="email"
          onChange={(e) => { this.onEmailChange(e); }}
          defaultValue={this.props.fieldValues.email}
        />

        <button onClick={(e) => { this.saveAndContinue(e); }}>Save and Continue</button>
      </div>
    );
  }
}

AccountFields.propTypes = {
  saveValues: PropTypes.func.isRequired,
  nextStep: PropTypes.func.isRequired,
  fieldValues: PropTypes.shape({
    name: PropTypes.string.isRequired,
    password: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
  }).isRequired,
};

export default AccountFields;
