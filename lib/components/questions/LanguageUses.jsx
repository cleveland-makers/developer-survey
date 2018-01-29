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
  handleChange = (event, index, values) => {
    this.props.store.saveLanguageUses(values);
  }

  render() {
    const { languageWhyDoYouUseIt } = this.props;
    return (
      <div style={styles.div}>
        <SelectField
          multiple
          hintText="Reason for using language"
          value={languageWhyDoYouUseIt}
          onChange={this.handleChange}
        >
          {uses.map(use => (
            <MenuItem
              key={use}
              insetChildren
              checked={languageWhyDoYouUseIt && languageWhyDoYouUseIt.indexOf(use) > -1}
              value={use}
              primaryText={use}
            />))}
        </SelectField>
      </div>
    );
  }
}

LanguageUses.propTypes = {
  languageWhyDoYouUseIt: PropTypes.arrayOf(PropTypes.string).isRequired,
  store: PropTypes.shape({
    saveLanguageUses: PropTypes.func.isRequired,
  }).isRequired,
};

export default storeProvider()(LanguageUses);
