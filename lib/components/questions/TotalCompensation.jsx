import React from 'react';
import PropTypes from 'prop-types';
import TextField from 'material-ui/TextField';
import storeProvider from '../storeProvider';

const styles = {
  div: {
    float: 'left',
  },
};

/**
 * Asks the question:
 *
 * How much do you earn?
 */
class TotalCompensation extends React.PureComponent {
  handleChange = (event, value) => {
    this.props.store.saveCompensation(value);
  }

  render() {
    return (
      <div style={styles.div}>
        <TextField
          hintText="Total Compensation"
          onChange={this.handleChange}
          type="number"
          value={this.props.careerSalary}
        />
      </div>
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
