import React from 'react';
import PropTypes from 'prop-types';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import storeProvider from '../storeProvider';
import styles from './styles';

const uses = [
  'Fun',
  'Work',
  'Study',
];

/**
 * Asks the question:
 *
 * Why do you use you primary language?
 */
class LanguageUses extends React.PureComponent {
  handleChange = (event, index, values) => {
    this.props.store.saveLanguageUses(values);
  }

  render() {
    const { languageWhyDoYouUseIt, showValidation } = this.props;
    return (
      <SelectField
        errorText={
          showValidation &&
          languageWhyDoYouUseIt &&
          languageWhyDoYouUseIt.length === 0 &&
          'Uses'
        }
        hintStyle={styles.highlightLabel}
        hintText="Reasons"
        labelStyle={styles.highlightLabel}
        multiple
        onChange={this.handleChange}
        style={styles.fieldMultipleSelect}
        value={languageWhyDoYouUseIt}
      >
        {uses.map(use => (
          <MenuItem
            checked={
              languageWhyDoYouUseIt &&
              languageWhyDoYouUseIt.indexOf(use) > -1
            }
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
  showValidation: PropTypes.bool,
};

LanguageUses.defaultProps = {
  showValidation: false,
};

export default storeProvider()(LanguageUses);
