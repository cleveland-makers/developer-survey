import React from 'react';
import PropTypes from 'prop-types';
import TextField from 'material-ui/TextField';
import storeProvider from '../storeProvider';
import styles from './styles';

/**
 * Asks the question:
 *
 * How many development jobs have you had?
 */
class NumCompaniesWorkedFor extends React.PureComponent {
  handleChange = (event, value) => {
    let validatedValue = parseInt(value, 10);
    if (value < 0) {
      validatedValue = 0;
    }
    this.props.store.saveNumberOfJobs(validatedValue);
  }

  render() {
    return (
      <TextField
        hintStyle={styles.highlightLabel}
        hintText="x"
        inputStyle={styles.highlightLabel}
        onChange={this.handleChange}
        style={styles.fieldText}
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
