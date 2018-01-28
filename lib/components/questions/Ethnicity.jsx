import React from 'react';
import PropTypes from 'prop-types';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

const styles = {
  customWidth: {
    width: 150,
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

class Ethnicity extends React.Component {
  handleChange = (event, index, value) => this.props.updateState({ ethnicity: value });

  render() {
    const { ethnicity } = this.props;
    return (
      <div>
        <SelectField
          style={styles.customWidth}
          hintText="Ethnicity"
          value={ethnicity}
          onChange={this.handleChange}
        >
          {ethnicities.map(eth => (
            <MenuItem
              key={eth}
              insetChildren
              checked={ethnicity && ethnicity.indexOf(eth) > -1}
              value={eth}
              primaryText={eth}
            />))}
        </SelectField>
      </div>
    );
  }
}

Ethnicity.propTypes = {
  ethnicity: PropTypes.string.isRequired,
  updateState: PropTypes.func.isRequired,
};

export default Ethnicity;
