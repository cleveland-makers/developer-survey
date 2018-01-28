import React from 'react';
import PropTypes from 'prop-types';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

const locations = [
  'West of the West Side',
  'The West Side',
  'Downtown',
  'The East Side',
  'East of the East Side',
  'Other',
];

class WorkLocation extends React.Component {
  handleChange = (event, index, value) => this.props.updateState({ workLocation: value });

  render() {
    const { workLocation } = this.props;
    return (
      <SelectField
        hintText="Work Location"
        value={workLocation}
        onChange={this.handleChange}
      >
        {locations.map(location => (
          <MenuItem
            key={location}
            insetChildren
            checked={workLocation && workLocation.indexOf(location) > -1}
            value={location}
            primaryText={location}
          />))}
      </SelectField>
    );
  }
}

WorkLocation.propTypes = {
  workLocation: PropTypes.string.isRequired,
  updateState: PropTypes.func.isRequired,
};

export default WorkLocation;