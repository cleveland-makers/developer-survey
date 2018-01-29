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

class LanguageUses extends React.PureComponent {
  handleChange = (event, index, values) => {
    this.props.store.saveLanguageUses(values);
  }

  render() {
    const { languageWhyDoYouUseIt } = this.props;
    return (
      <div style={styles.div}>
        <SelectField
          hintText="Reason for using language"
          multiple
          onChange={this.handleChange}
          value={languageWhyDoYouUseIt}
        >
          {uses.map(use => (
            <MenuItem
              checked={languageWhyDoYouUseIt && languageWhyDoYouUseIt.indexOf(use) > -1}
              insetChildren
              key={use}
              primaryText={use}
              value={use}
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
