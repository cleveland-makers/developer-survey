import React from 'react';
import PropTypes from 'prop-types';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import storeProvider from '../storeProvider';
import styles from './styles';

const ethnicities = [
  'American Indian or Alaska Native',
  'Asian',
  'Black or African descent',
  'Native Hawaiian or Other Pacific Islander',
  'Hispanic, Latino, or of Spanish origin',
  'White',
  'Not Listed',
  'Prefer not to answer',
];

/**
 * Asks the question:
 *
 * What ethnicity are you?
 */
class Ethnicity extends React.PureComponent {
  handleChange = (event, index, values) => {
    this.props.store.saveEthnicity(values);
  }

  render() {
    const { personalEthnicity, showValidation } = this.props;
    return (
      <SelectField
        autoWidth
        errorText={
          showValidation &&
          !personalEthnicity &&
          personalEthnicity.length === 0 &&
          'Ethnicity'
        }
        hintStyle={styles.highlightLabel}
        hintText="Ethnicity"
        labelStyle={styles.highlightLabel}
        multiple
        onChange={this.handleChange}
        style={styles.fieldSingleSelect}
        value={personalEthnicity}
      >
        {ethnicities.map(eth => (
          <MenuItem
            checked={
              personalEthnicity.length > 0 &&
              personalEthnicity === eth
            }
            key={eth}
            primaryText={eth}
            value={eth}
          />))}
      </SelectField>
    );
  }
}

Ethnicity.propTypes = {
  personalEthnicity: PropTypes.arrayOf(PropTypes.string).isRequired,
  store: PropTypes.shape({
    saveEthnicity: PropTypes.func.isRequired,
  }).isRequired,
  showValidation: PropTypes.bool,
};

Ethnicity.defaultProps = {
  showValidation: false,
};

export default storeProvider()(Ethnicity);
