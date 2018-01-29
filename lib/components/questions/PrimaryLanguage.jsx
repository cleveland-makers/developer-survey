import React from 'react';
import PropTypes from 'prop-types';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import storeProvider from '../storeProvider';

const styles = {
  customWidth: {
    width: 150,
  },
  div: {
    float: 'left',
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
    this.props.updateState({ primaryLanguage: value });
    this.props.store.savePrimaryLanguage(value);
  }

  render() {
    const { primaryLanguage } = this.props;
    return (
      <div style={styles.div}>
        <SelectField
          hintText="Language"
          value={primaryLanguage}
          onChange={this.handleChange}
          style={styles.customWidth}
        >
          {langs.map(lang => (
            <MenuItem
              key={lang}
              insetChildren
              checked={primaryLanguage && primaryLanguage.indexOf(lang) > -1}
              value={lang}
              primaryText={lang}
            />))}
        </SelectField>
      </div>
    );
  }
}

PrimaryLanguage.propTypes = {
  primaryLanguage: PropTypes.string.isRequired,
  updateState: PropTypes.func.isRequired,
  store: PropTypes.shape({
    savePrimaryLanguage: PropTypes.func.isRequired,
  }).isRequired,
};

export default storeProvider()(PrimaryLanguage);
