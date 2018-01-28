import React from 'react';
import PropTypes from 'prop-types';
import TextField from 'material-ui/TextField';

class TotalCompensation extends React.Component {
  handleChange = (event, index, value) => this.props.updateState({ totalCompensation: value });

  render() {
    return (
      <div>
        <TextField
          type="number"
          hintText="Total Compensation"
        />
      </div>
    );
  }
}

TotalCompensation.propTypes = {
  updateState: PropTypes.func.isRequired,
};

export default TotalCompensation;
