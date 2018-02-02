import React from 'react';
import PropTypes from 'prop-types';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import storeProvider from '../storeProvider';
import styles from './styles';

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

/**
 * Asks the question:
 *
 * What ethnicity are you?
 */
class Ethnicity extends React.PureComponent {
  handleChange = (event, index, value) => {
    this.props.store.saveEthnicity(value);
  }

  render() {
    const { personalEthnicity } = this.props;
    return (
      <SelectField
        autoWidth
        hintStyle={styles.highlightLabel}
        hintText="Ethnicity"
        labelStyle={styles.highlightLabel}
        onChange={this.handleChange}
        style={styles.fieldSingleSelect}
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
