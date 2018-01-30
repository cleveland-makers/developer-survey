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

const ethnicities = [
  'Black or of African descent',
  'East Asian',
  'Hispanic or Latino/Latina',
  'Middle Eastern',
  'Native American, Pacific Islander, or Indigenous Australian',
  'South Asian',
  'White or of European descent',
  'Prefer not to say',
  'Other',
];

class Ethnicity extends React.PureComponent {
  handleChange = (event, index, value) => {
    this.props.store.saveEthnicity(value);
  }

  render() {
    const { personalEthnicity } = this.props;
    return (
      <SelectField
        autoWidth
        hintText="Ethnicity"
        onChange={this.handleChange}
        style={styles.field}
        value={personalEthnicity}
      >
        {ethnicities.map(eth => (
          <MenuItem
            checked={personalEthnicity.length > 0 && personalEthnicity === eth}
            key={eth}
            primaryText={eth}
            value={eth}
          />))}
      </SelectField>
    );
  }
}

Ethnicity.propTypes = {
  personalEthnicity: PropTypes.string.isRequired,
  store: PropTypes.shape({
    saveEthnicity: PropTypes.func.isRequired,
  }).isRequired,
};

export default storeProvider()(Ethnicity);
