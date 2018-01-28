import React from 'react';
import PropTypes from 'prop-types';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

const styles = {
  customWidth: {
    width: 150,
  },
};

const genders = [
  'Female',
  'Male',
  'Other',
  'Prefer not to say',
];

class Gender extends React.Component {
  handleChange = (event, index, value) => this.props.updateState({ gender: value });

  render() {
    const { gender } = this.props;
    return (
      <div>
        <SelectField
          style={styles.customWidth}
          hintText="Gender"
          value={gender}
          onChange={this.handleChange}
        >
          {genders.map(gen => (
            <MenuItem
              key={gen}
              insetChildren
              checked={gender && gender.indexOf(gen) > -1}
              value={gen}
              primaryText={gen}
            />))}
        </SelectField>
      </div>
    );
  }
}

Gender.propTypes = {
  gender: PropTypes.string.isRequired,
  updateState: PropTypes.func.isRequired,
};

export default Gender;
