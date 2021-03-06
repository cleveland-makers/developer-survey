import React from 'react';
import PropTypes from 'prop-types';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import storeProvider from '../storeProvider';
import styles from './styles';

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

/**
 * Asks the question:
 *
 * What is your primary language at work?
 */
class PrimaryLanguage extends React.PureComponent {
  handleChange = (event, index, value) => {
    this.props.store.savePrimaryLanguage(value);
  }

  render() {
    const { languagePrimaryWorkLanguage, showValidation } = this.props;
    return (
      <SelectField
        autoWidth
        errorText={
          showValidation &&
          !languagePrimaryWorkLanguage &&
          languagePrimaryWorkLanguage.length === 0 &&
          'Primary language'
        }
        hintStyle={styles.highlightLabel}
        hintText="Primary Language"
        labelStyle={styles.highlightLabel}
        onChange={this.handleChange}
        style={styles.fieldSingleSelect}
        value={languagePrimaryWorkLanguage}
      >
        {langs.map(lang => (
          <MenuItem
            checked={
              languagePrimaryWorkLanguage.length > 0
              && languagePrimaryWorkLanguage === lang
            }
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
  showValidation: PropTypes.bool,
};

PrimaryLanguage.defaultProps = {
  showValidation: false,
};

export default storeProvider()(PrimaryLanguage);
