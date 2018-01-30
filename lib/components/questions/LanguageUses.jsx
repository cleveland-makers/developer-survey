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
      <SelectField
        hintText="Reason for using language"
        multiple
        onChange={this.handleChange}
        style={styles.field}
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
