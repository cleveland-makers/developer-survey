import React from 'react';
import PropTypes from 'prop-types';
import TextField from 'material-ui/TextField';
import storeProvider from '../storeProvider';

const styles = {
  div: {
    float: 'left',
  },
};

class YearsExpWithLanguage extends React.Component {
  handleChange = (event, index, value) => {
    this.props.updateState({ yearsExpWithLanguage: value });
    this.props.store.saveWhenLearned(value);
  }

  render() {
    return (
      <div style={styles.div}>
        <TextField
          type="number"
          hintText="Number of Years"
          onChange={this.handleChange}
        />
      </div>
    );
  }
}

YearsExpWithLanguage.propTypes = {
  updateState: PropTypes.func.isRequired,
  store: PropTypes.shape({
    saveWhenLearned: PropTypes.func.isRequired,
  }).isRequired,
};

export default storeProvider()(YearsExpWithLanguage);
