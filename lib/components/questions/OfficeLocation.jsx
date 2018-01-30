import React from 'react';
import PropTypes from 'prop-types';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import storeProvider from '../storeProvider';

const styles = {
  field: {
    float: 'left',
    fontSize: '20px',
    paddingLeft: '10px',
    paddingRight: '10px',
  },
};

const locations = [
  'West of the West Side',
  'The West Side',
  'Downtown',
  'The East Side',
  'East of the East Side',
  'Other',
];

/**
 * Asks the question:
 *
 * Where is your office located?
 */
class OfficeLocation extends React.PureComponent {
  handleChange = (event, index, value) => {
    this.props.store.saveWorkLocation(value);
  }

  render() {
    const { officeLocation } = this.props;
    return (
      <SelectField
        hintText="Work Location"
        onChange={this.handleChange}
        style={styles.field}
        value={officeLocation}
      >
        {locations.map(location => (
          <MenuItem
            checked={officeLocation.length > 0 && officeLocation === location}
            key={location}
            primaryText={location}
            value={location}
          />))}
      </SelectField>
    );
  }
}

OfficeLocation.propTypes = {
  officeLocation: PropTypes.string.isRequired,
  store: PropTypes.shape({
    saveWorkLocation: PropTypes.func.isRequired,
  }).isRequired,
};

export default storeProvider()(OfficeLocation);
