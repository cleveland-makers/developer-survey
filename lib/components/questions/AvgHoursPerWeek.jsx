import React from 'react';
import PropTypes from 'prop-types';
import TextField from 'material-ui/TextField';

class AvgHoursPerWeek extends React.Component {
  handleChange = (event, index, value) => this.props.updateState({ avgHoursPerWeek: value });

  render() {
    return (
      <div>
        <TextField
          type="number"
          hintText="Average Work Hours Per Week"
        />
      </div>
    );
  }
}

AvgHoursPerWeek.propTypes = {
  updateState: PropTypes.func.isRequired,
};

export default AvgHoursPerWeek;
