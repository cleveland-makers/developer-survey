import React from 'react';
import PropTypes from 'prop-types';
import TextField from 'material-ui/TextField';
import storeProvider from '../storeProvider';

const styles = {
  field: {
    width: 40,
    marginLeft: '8px',
  },
};

class YearsExpWithLanguage extends React.PureComponent {
  handleChange = (event, value) => {
    this.props.store.saveWhenLearned(value);
  }

  render() {
    return (
      <TextField
        hintText="Number of Years"
        onChange={this.handleChange}
        style={styles.field}
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
