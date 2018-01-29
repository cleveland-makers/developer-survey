import React from 'react';
import PropTypes from 'prop-types';
import TextField from 'material-ui/TextField';
import storeProvider from '../storeProvider';

const styles = {
  div: {
    float: 'left',
  },
  field: {
    width: 40,
  },
};

class YearsExp extends React.Component {
  handleChange = (event, value) => {
    this.props.store.saveHowLong(parseInt(value, 10));
  }

  render() {
    return (
      <div style={styles.div}>
        <TextField
          hintText="Number of Years"
          onChange={this.handleChange}
          style={styles.field}
          type="number"
          value={this.props.developerHowLong}
        />
      </div>
    );
  }
}

YearsExp.propTypes = {
  developerHowLong: PropTypes.number.isRequired,
  store: PropTypes.shape({
    saveHowLong: PropTypes.func.isRequired,
  }).isRequired,
};

export default storeProvider()(YearsExp);
