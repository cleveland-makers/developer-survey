import React from 'react';
import PropTypes from 'prop-types';
import TextField from 'material-ui/TextField';
import storeProvider from '../storeProvider';

/**
 * Asks the question:
 *
 * How many development jobs have you had?
 */
class NumCompaniesWorkedFor extends React.PureComponent {
  handleChange = (event, value) => {
    this.props.store.saveNumberOfJobs(value);
  }

  render() {
    return (
      <TextField
        hintText="Number of Companies You've Worked For"
        onChange={this.handleChange}
        type="number"
        value={this.props.careerDevelopmentJobCount}
      />
    );
  }
}

NumCompaniesWorkedFor.propTypes = {
  careerDevelopmentJobCount: PropTypes.number.isRequired,
  store: PropTypes.shape({
    saveNumberOfJobs: PropTypes.func.isRequired,
  }).isRequired,
};

export default storeProvider()(NumCompaniesWorkedFor);
