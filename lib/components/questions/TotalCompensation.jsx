import React from 'react';
import PropTypes from 'prop-types';
import TextField from 'material-ui/TextField';
import storeProvider from '../storeProvider';

/**
 * Asks the question:
 *
 * How much do you earn?
 */

const styles = {
  field: {
    width: 70,
    marginLeft: '8px',
    float: 'left',
  },
};

class TotalCompensation extends React.PureComponent {
  handleChange = (event, value) => {
    this.props.store.saveCompensation(value);
  }

  render() {
    return (
      <TextField
        style={styles.field}
        hintText="Total Compensation"
        onChange={this.handleChange}
        type="number"
        value={this.props.careerSalary}
      />
    );
  }
}

TotalCompensation.propTypes = {
  careerSalary: PropTypes.number.isRequired,
  store: PropTypes.shape({
    saveCompensation: PropTypes.func.isRequired,
  }).isRequired,
};

export default storeProvider()(TotalCompensation);
