import React from 'react';
import PropTypes from 'prop-types';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

const styles = {
  customWidth: {
    width: 150,
  },
};

const langs = [
  'C',
  'F#',
  'Lua',
];

class PrimaryLanguage extends React.Component {
  handleChange = (event, index, value) => this.props.updateState({ primaryLanguage: value });

  render() {
    const { primaryLanguage } = this.props;
    return (
      <div>
        <SelectField
          style={styles.customWidth}
          hintText="Primary Language"
          value={primaryLanguage}
          onChange={this.handleChange}
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
};

export default PrimaryLanguage;
