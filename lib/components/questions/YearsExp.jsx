import React from 'react';
import PropTypes from 'prop-types';
import TextField from 'material-ui/TextField';
import storeProvider from '../storeProvider';

const styles = {
  div: {
    float: 'left',
  },
  customWidth: {
    width: 160,
  },
};

class YearsExp extends React.Component {
  handleChange = (event, index, value) => {
    this.props.updateState({ yearsExp: value });
    this.props.store.saveHowLong(value);
  }

  render() {
    return (
      <div style={styles.div}>
        <TextField
          type="number"
          hintText="Number of Years"
          onChange={this.handleChange}
          style={styles.customWidth}
        />
      </div>
    );
  }
}

YearsExp.propTypes = {
  updateState: PropTypes.func.isRequired,
  store: PropTypes.shape({
    saveHowLong: PropTypes.func.isRequired,
  }).isRequired,
};

export default storeProvider()(YearsExp);
