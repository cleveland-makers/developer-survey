import React from 'react';
import PropTypes from 'prop-types';
import TextField from 'material-ui/TextField';
import storeProvider from '../storeProvider';

const styles = {
  field: {
    float: 'left',
    fontSize: '20px',
    paddingLeft: '10px',
    paddingRight: '10px',
    width: '40px',
  },
};

class YearsOfExperience extends React.PureComponent {
  handleChange = (event, value) => {
    this.props.store.saveHowLong(parseInt(value, 10));
  }

  render() {
    return (
      <TextField
        hintText="Number of Years"
        onChange={this.handleChange}
        style={styles.field}
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
