import React from 'react';
import PropTypes from 'prop-types';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import storeProvider from '../storeProvider';
import styles from './styles';

const education = [
  'Less than a high school diploma',
  'High school diploma or equivalent (e.g. GED',
  'Some college, no degree',
  'Bootcamp',
  'Associate degree',
  'Bachelor’s degree',
  'Master’s degree / Professional degree',
  'Doctorate',
  'Not Listed',
  'I prefer not to answer',
];

/**
 * Answers the question:
 *
 * What is the highest level of education you have attained?
 */
class Education extends React.PureComponent {
  handleChange = (event, index, value) => {
    this.props.store.saveHighestEducation(value);
  };

  render() {
    const { personalHighestEducation, showValidation } = this.props;
    return (
      <SelectField
        autoWidth
        errorText={
          showValidation &&
          !personalHighestEducation &&
          personalHighestEducation.length === 0 &&
          'Education'
        }
        hintStyle={styles.highlightLabel}
        hintText="Education"
        labelStyle={styles.highlightLabel}
        onChange={this.handleChange}
        style={styles.fieldSingleSelect}
        value={personalHighestEducation}
      >
        {education.map(ed => (
          <MenuItem
            checked={
              personalHighestEducation.length > 0 &&
              personalHighestEducation === ed
            }
            key={ed}
            primaryText={ed}
            value={ed}
          />))}
      </SelectField>
    );
  }
}

Education.propTypes = {
  personalHighestEducation: PropTypes.string.isRequired,
  store: PropTypes.shape({
    saveHighestEducation: PropTypes.func.isRequired,
  }).isRequired,
  showValidation: PropTypes.bool,
};

Education.defaultProps = {
  showValidation: false,
};

export default storeProvider()(Education);
