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
    width: 150,
  },
};

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

class SecondaryLanguages extends React.PureComponent {
  handleChange = (event, index, values) => {
    this.props.store.saveHomeLanguages(values);
  }

  render() {
    const { languagePrimaryHomeLanguages } = this.props;
    return (
      <SelectField
        autoWidth
        hintText="Languages"
        multiple
        onChange={this.handleChange}
        style={styles.field}
        value={languagePrimaryHomeLanguages}
      >
        {langs.map(lang => (
          <MenuItem
            checked={languagePrimaryHomeLanguages && languagePrimaryHomeLanguages.indexOf(lang) > -1}
            insetChildren
            key={lang}
            primaryText={lang}
            value={lang}
          />))}
      </SelectField>
    );
  }
}

SecondaryLanguages.propTypes = {
  languagePrimaryHomeLanguages: PropTypes.arrayOf(PropTypes.string).isRequired,
  store: PropTypes.shape({
    saveHomeLanguages: PropTypes.func.isRequired,
  }).isRequired,
};

export default storeProvider()(SecondaryLanguages);
