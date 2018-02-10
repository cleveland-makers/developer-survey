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
    this.props.store.saveCompensation((value) ? parseInt(value, 10) : '');
  }

  render() {
    const { careerSalary, showValidation } = this.props;
    return (
      <TextField
        errorText={
          showValidation &&
          (!careerSalary ||
            careerSalary < 0) &&
          'Salary'
        }
        hintStyle={styles.highlightLabel}
        hintText="100,000"
        inputStyle={styles.highlightLabel}
        onChange={this.handleChange}
        style={{
          ...styles.fieldText,
          width: '100px',
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
