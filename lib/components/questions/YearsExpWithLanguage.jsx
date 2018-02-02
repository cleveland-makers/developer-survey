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
class YearsExpWithLanguage extends React.PureComponent {
  handleChange = (event, value) => {
    this.props.store.saveWhenLearned(value);
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
        value={this.props.languageWhenDidYouLearnIt}
      />
    );
  }
}

YearsExpWithLanguage.propTypes = {
  languageWhenDidYouLearnIt: PropTypes.number.isRequired,
  store: PropTypes.shape({
    saveWhenLearned: PropTypes.func.isRequired,
  }).isRequired,
};

export default storeProvider()(YearsExpWithLanguage);
