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

class PrimaryLanguage extends React.PureComponent {
  handleChange = (event, index, value) => {
    this.props.store.savePrimaryLanguage(value);
  }

  render() {
    const { languagePrimaryWorkLanguage } = this.props;
    return (
      <SelectField
        hintText="Language"
        onChange={this.handleChange}
        style={styles.field}
        value={languagePrimaryWorkLanguage}
      >
        {langs.map(lang => (
          <MenuItem
            checked={languagePrimaryWorkLanguage.length > 0 && languagePrimaryWorkLanguage === lang}
            key={lang}
            primaryText={lang}
            value={lang}
          />))}
      </SelectField>
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
