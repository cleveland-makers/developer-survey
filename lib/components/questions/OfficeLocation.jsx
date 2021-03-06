import React from 'react';
import PropTypes from 'prop-types';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import storeProvider from '../storeProvider';
import styles from './styles';

const locations = [
  'West of the West Side',
  'The West Side',
  'Downtown',
  'The East Side',
  'East of the East Side',
  'Just North of Akron',
  'The Akron area',
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
    const { officeLocation, showValidation } = this.props;
    return (
      <SelectField
        autoWidth
        errorText={
          showValidation &&
          !officeLocation &&
          officeLocation.length === 0 &&
          'Office location'
        }
        hintStyle={styles.highlightLabel}
        hintText="Work Location"
        labelStyle={styles.highlightLabel}
        onChange={this.handleChange}
        style={styles.fieldSingleSelect}
        value={officeLocation}
      >
        {locations.map(location => (
          <MenuItem
            checked={
              officeLocation.length > 0 &&
              officeLocation === location
            }
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
  showValidation: PropTypes.bool,
};

OfficeLocation.defaultProps = {
  showValidation: false,
};

export default storeProvider()(OfficeLocation);
