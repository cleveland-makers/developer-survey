import React from 'react';
import PropTypes from 'prop-types';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

const langs = [
  'C',
  'JavaScript',
  'Haskell',
];

class SecondaryLanguages extends React.Component {
  handleChange = (event, index, values) => this.props.updateState({ secondaryLanguages: values });

  render() {
    const { secondaryLanguages } = this.props;
    return (
      <SelectField
        multiple
        hintText="Secondary Languages"
        value={secondaryLanguages}
        onChange={this.handleChange}
      >
        {langs.map(lang => (
          <MenuItem
            key={lang}
            insetChildren
            checked={secondaryLanguages && secondaryLanguages.indexOf(lang) > -1}
            value={lang}
            primaryText={lang}
          />))}
      </SelectField>
    );
  }
}

SecondaryLanguages.propTypes = {
  secondaryLanguages: PropTypes.arrayOf(PropTypes.string).isRequired,
  updateState: PropTypes.func.isRequired,
};

export default SecondaryLanguages;
