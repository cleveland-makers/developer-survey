import React from 'react';
import PropTypes from 'prop-types';
import TextField from 'material-ui/TextField';
import storeProvider from '../storeProvider';
import styles from './styles';

/**
 * Answers the question:
 *
 * How long have you been doing them?
 */
class YearsOfExperience extends React.PureComponent {
  handleChange = (event, value) => {
    let validatedValue = parseInt(value, 10);
    if (value < 1) {
      validatedValue = 1;
    } else if (value > 99) {
      validatedValue = 99;
    }
    this.props.store.saveHowLong(validatedValue);
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
        value={this.props.developerHowLong}
      />
    );
  }
}

YearsOfExperience.propTypes = {
  developerHowLong: PropTypes.number.isRequired,
  store: PropTypes.shape({
    saveHowLong: PropTypes.func.isRequired,
  }).isRequired,
};

export default storeProvider()(YearsOfExperience);
