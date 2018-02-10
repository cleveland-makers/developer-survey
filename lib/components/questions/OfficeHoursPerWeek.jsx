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
    this.props.store.saveHoursPerWeek(value);
  }

  render() {
    const { officeHoursPerWeek, showValidation } = this.props;
    return (
      <TextField
        errorText={
          showValidation &&
          (!officeHoursPerWeek ||
            officeHoursPerWeek > 168 ||
            officeHoursPerWeek < 0) &&
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
