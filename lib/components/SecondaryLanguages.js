import React from 'react';
import PropTypes from 'prop-types';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

const languages = [
  'C',
  'JavaScript',
  'Haskell',
];

class SecondaryLanguages extends React.Component {
  handleChange = (event, index, values) => this.props.updateState({ languages: values });

  render() {
    const { languages } = this.props;
    return (
      <SelectField
        multiple
        hintText="Select a role"
        value={languages}
        onChange={this.handleChange}
      >
        {languages.map(role => (
          <MenuItem
            key={role}
            insetChildren
            checked={languages && languages.indexOf(role) > -1}
            value={role}
            primaryText={role}
          />))}
      </SelectField>
    );
  }
}

SecondaryLanguages.propTypes = {
  currentRoles: PropTypes.arrayOf(PropTypes.string).isRequired,
  updateState: PropTypes.func.isRequired,
};

export default SecondaryLanguages;
