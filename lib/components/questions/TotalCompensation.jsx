import React from 'react';
import PropTypes from 'prop-types';
import TextField from 'material-ui/TextField';
import storeProvider from '../storeProvider';

const styles = {
  div: {
    float: 'left',
  },
};

class TotalCompensation extends React.Component {
  handleChange = (event, index, value) => {
    this.props.updateState({ totalCompensation: value });
    this.props.store.saveCompensation(value);
  }

  render() {
    return (
      <div style={styles.div}>
        <TextField
          type="number"
          hintText="Total Compensation"
          onChange={this.handleChange}
        />
      </div>
    );
  }
}

TotalCompensation.propTypes = {
  updateState: PropTypes.func.isRequired,
  store: PropTypes.shape({
    saveCompensation: PropTypes.func.isRequired,
  }).isRequired,
};

export default storeProvider()(TotalCompensation);
