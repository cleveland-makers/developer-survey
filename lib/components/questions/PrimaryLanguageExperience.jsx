import React from 'react';
import PropTypes from 'prop-types';
import TextField from 'material-ui/TextField';
import storeProvider from '../storeProvider';
import styles from './styles';

/**
 * Asks the question:
 *
 * When did you learn you primary language?
 */
class PrimaryLanguageExperience extends React.PureComponent {
  handleChange = (event, value) => {
    let validatedValue = parseInt(value, 10);
    if (value < 1) {
      validatedValue = 1;
    } else if (value > 99) {
      validatedValue = 99;
    }
    this.props.store.saveWhenLearned(validatedValue);
  }

  render() {
    const { languageWhenDidYouLearnIt, showValidation } = this.props;
    return (
      <TextField
        errorText={
          showValidation &&
          languageWhenDidYouLearnIt === 0 &&
          'Years'
        }
        hintStyle={styles.highlightLabel}
        hintText="x"
        inputStyle={styles.highlightLabel}
        onChange={this.handleChange}
        style={styles.fieldText}
        type="number"
        value={languageWhenDidYouLearnIt}
      />
    );
  }
}

PrimaryLanguageExperience.propTypes = {
  languageWhenDidYouLearnIt: PropTypes.number.isRequired,
  store: PropTypes.shape({
    saveWhenLearned: PropTypes.func.isRequired,
  }).isRequired,
  showValidation: PropTypes.bool,
};

PrimaryLanguageExperience.defaultProps = {
  showValidation: false,
};

export default storeProvider()(PrimaryLanguageExperience);
