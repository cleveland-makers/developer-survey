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
    let validatedValue = parseInt(value, 10);
    if (value < 0) {
      validatedValue = 0;
    }
    this.props.store.saveCompensation(validatedValue);
  }

  render() {
    const { careerSalary, showValidation } = this.props;
    return (
      <TextField
        errorText={
          showValidation &&
          'Compensation'
        }
        hintStyle={styles.highlightLabel}
        hintText="Total Compensation"
        inputStyle={styles.highlightLabel}
        onChange={this.handleChange}
        style={{
          ...styles.fieldText,
          width: '70px',
        }}
        type="number"
        value={careerSalary}
      />
    );
  }
}

TotalCompensation.propTypes = {
  careerSalary: PropTypes.number.isRequired,
  store: PropTypes.shape({
    saveCompensation: PropTypes.func.isRequired,
  }).isRequired,
  showValidation: PropTypes.bool,
};

TotalCompensation.defaultProps = {
  showValidation: false,
};

export default storeProvider()(TotalCompensation);
