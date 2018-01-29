import React from 'react';
import PropTypes from 'prop-types';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import storeProvider from '../storeProvider';

const styles = {
  div: {
    float: 'left',
  },
  field: {
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

class SecondaryLanguages extends React.Component {
  handleChange = (event, index, values) => {
    this.props.store.saveHomeLanguages(values);
  }

  render() {
    const { languagePrimaryHomeLanguages } = this.props;
    return (
      <div style={styles.div}>
        <SelectField
          style={styles.field}
          multiple
          hintText="Languages"
          value={languagePrimaryHomeLanguages}
          onChange={this.handleChange}
        >
          {langs.map(lang => (
            <MenuItem
              key={lang}
              insetChildren
              checked={languagePrimaryHomeLanguages && languagePrimaryHomeLanguages.indexOf(lang) > -1}
              value={lang}
              primaryText={lang}
            />))}
        </SelectField>
      </div>
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
