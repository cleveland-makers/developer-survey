import React from 'react';
import PropTypes from 'prop-types';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import storeProvider from '../storeProvider';
import styles from './styles';

const genders = [
  'Male',
  'Female',
  'Transgender Male',
  'Transgender Female',
  'Gender Variant / Non-Conforming',
  'Not Listed',
  'Prefer not to answer',
];

/**
 * Asks the question:
 *
 * What is your gender?
 */
class Gender extends React.PureComponent {
  handleChange = (event, index, value) => {
    this.props.store.saveGender(value);
  }

  render() {
    const { personalGender, showValidation } = this.props;
    return (
      <SelectField
        autoWidth
        errorText={
          showValidation &&
          !personalGender &&
          personalGender.length === 0 &&
          'Gender'
        }
        hintStyle={styles.highlightLabel}
        hintText="Gender"
        labelStyle={styles.highlightLabel}
        onChange={this.handleChange}
        style={styles.fieldSingleSelect}
        value={personalGender}
      >
        {genders.map(gen => (
          <MenuItem
            checked={
              personalGender.length > 0 &&
              personalGender === gen
            }
            key={gen}
            primaryText={gen}
            value={gen}
          />))}
      </SelectField>
    );
  }
}

Gender.propTypes = {
  personalGender: PropTypes.string.isRequired,
  store: PropTypes.shape({
    saveGender: PropTypes.func.isRequired,
  }).isRequired,
  showValidation: PropTypes.bool,
};

Gender.defaultProps = {
  showValidation: false,
};

export default storeProvider()(Gender);
