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

class PrimaryLanguage extends React.Component {
  handleChange = (event, index, value) => {
    this.props.store.savePrimaryLanguage(value);
  }

  render() {
    const { languagePrimaryWorkLanguage } = this.props;
    return (
      <div style={styles.div}>
        <SelectField
          hintText="Language"
          value={languagePrimaryWorkLanguage}
          onChange={this.handleChange}
          style={styles.field}
        >
          {langs.map(lang => (
            <MenuItem
              key={lang}
              insetChildren
              checked={languagePrimaryWorkLanguage.length > 0 && languagePrimaryWorkLanguage === lang}
              value={lang}
              primaryText={lang}
            />))}
        </SelectField>
      </div>
    );
  }
}

PrimaryLanguage.propTypes = {
  languagePrimaryWorkLanguage: PropTypes.string.isRequired,
  store: PropTypes.shape({
    savePrimaryLanguage: PropTypes.func.isRequired,
  }).isRequired,
};

export default storeProvider()(PrimaryLanguage);
