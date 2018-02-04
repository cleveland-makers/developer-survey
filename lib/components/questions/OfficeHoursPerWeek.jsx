import React from 'react';
import PropTypes from 'prop-types';
import TextField from 'material-ui/TextField';
import storeProvider from '../storeProvider';
import styles from './styles';

/**
 * Asks the question:
 *
 * How many hours do you work per week?
 */
class OfficeHoursPerWeek extends React.PureComponent {
  handleChange = (event, value) => {
    let validatedValue = parseInt(value, 10);
    if (value < 0) {
      validatedValue = 0;
    }
    this.props.store.saveHoursPerWeek(validatedValue);
  }

  render() {
    const { officeHoursPerWeek, showValidation } = this.props;
    return (
      <TextField
        errorText={
          showValidation &&
          officeHoursPerWeek === 0 &&
          'Office hours'
        }
        hintStyle={styles.highlightLabel}
        hintText="x"
        inputStyle={styles.highlightLabel}
        onChange={this.handleChange}
        style={styles.fieldText}
        type="number"
        value={officeHoursPerWeek}
      />
    );
  }
}

OfficeHoursPerWeek.propTypes = {
  officeHoursPerWeek: PropTypes.number.isRequired,
  store: PropTypes.shape({
    saveHoursPerWeek: PropTypes.func.isRequired,
  }).isRequired,
  showValidation: PropTypes.bool,
};

OfficeHoursPerWeek.defaultProps = {
  showValidation: false,
};

export default storeProvider()(OfficeHoursPerWeek);
