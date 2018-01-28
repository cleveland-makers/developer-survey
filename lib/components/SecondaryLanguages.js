import React from 'react';
import PropTypes from 'prop-types';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

const langs = [
  'Assembly',
  'C',
  'C++',
  'C#',
  'CoffeeScript',
  'Elixir',
  'Go',
  'Groovy',
  'Haskell',
  'Java',
  'JavaScript',
  'Lua',
  'Matlab',
  'Objective C',
  'PHP',
  'Perl',
  'Python',
  'R',
  'Ruby',
  'Rust',
  'Scala',
  'SQL',
  'Swift',
  'TypeScript',
  'VB',
  '.NET',
  'VBA',
  'Visual Basic 6',
  'Other',
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
