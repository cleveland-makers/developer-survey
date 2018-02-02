import React from 'react';
import PropTypes from 'prop-types';
import TextField from 'material-ui/TextField';
import storeProvider from '../storeProvider';
import styles from './styles';

/**
 * Asks the question:
 *
 * How much do you earn?
 */
class TotalCompensation extends React.PureComponent {
  handleChange = (event, value) => {
    this.props.store.saveCompensation(value);
  }

  render() {
    return (
      <TextField
        hintStyle={styles.highlightLabel}
        hintText="Total Compensation"
        inputStyle={styles.highlightLabel}
        onChange={this.handleChange}
        style={{
          ...styles.fieldText,
          width: '70px',
        }}
        type="number"
        value={this.props.careerSalary}
      />
    );
  }
}

TotalCompensation.propTypes = {
  careerSalary: PropTypes.number.isRequired,
  store: PropTypes.shape({
    saveCompensation: PropTypes.func.isRequired,
  }).isRequired,
};

export default storeProvider()(TotalCompensation);
