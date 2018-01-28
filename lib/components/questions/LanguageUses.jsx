import React from 'react';
import PropTypes from 'prop-types';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import storeProvider from '../storeProvider';

const styles = {
  div: {
    float: 'left',
  },
};

const uses = [
  'Fun',
  'Work',
  'Study',
];

class LanguageUses extends React.Component {
  handleChange = (event, index, values) => this.props.updateState({ languageUses: values });

  render() {
    const { languageUses } = this.props;
    return (
      <div style={styles.div}>
        <SelectField
          multiple
          hintText="Reason for using language"
          value={languageUses}
          onChange={this.handleChange}
        >
          {uses.map(use => (
            <MenuItem
              key={use}
              insetChildren
              checked={languageUses && languageUses.indexOf(use) > -1}
              value={use}
              primaryText={use}
            />))}
        </SelectField>
      </div>
    );
  }
}

LanguageUses.propTypes = {
  languageUses: PropTypes.arrayOf(PropTypes.string).isRequired,
  updateState: PropTypes.func.isRequired,
};

export default LanguageUses;
