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
    this.props.store.saveHowLong(value);
  }

  render() {
    const { developerHowLong, showValidation } = this.props;
    return (
      <TextField
        errorText={
          showValidation &&
          (!developerHowLong ||
            developerHowLong > 99 ||
            developerHowLong < 0) &&
          'Years'
        }
        hintStyle={styles.highlightLabel}
        inputStyle={styles.highlightLabel}
        onChange={this.handleChange}
        style={styles.fieldText}
        type="number"
        value={developerHowLong}
      />
    );
  }
}

YearsOfExperience.propTypes = {
  developerHowLong: PropTypes.number.isRequired,
  store: PropTypes.shape({
    saveHowLong: PropTypes.func.isRequired,
  }).isRequired,
  showValidation: PropTypes.bool,
};

YearsOfExperience.defaultProps = {
  showValidation: false,
};

export default storeProvider()(YearsOfExperience);
