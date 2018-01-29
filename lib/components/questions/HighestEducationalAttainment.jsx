import React from 'react';
import PropTypes from 'prop-types';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import storeProvider from '../storeProvider';

const styles = {
  div: {
    float: 'left',
  },
  field: {
    width: 150,
  },
};

const education = [
  'I never completed any formal education',
  'Primary/elementary school',
  'Secondary school',
  'Some college/university study without earning a bachelor’s degree',
  'Bachelor’s degree',
  'Master’s degree',
  'Professional degree',
  'Doctoral degree',
  'I prefer not to answer',
];

class HighestEducationalAttainment extends React.PureComponent {
  handleChange = (event, index, value) => {
    this.props.store.saveHighestEducation(value);
  };

  render() {
    const { personalHighestEducation } = this.props;
    return (
      <div style={styles.div}>
        <SelectField
          hintText="Highest Educational Attainment"
          onChange={this.handleChange}
          style={styles.field}
          value={personalHighestEducation}
        >
          {education.map(ed => (
            <MenuItem
              checked={personalHighestEducation.length > 0 && personalHighestEducation === ed}
              insetChildren
              key={ed}
              primaryText={ed}
              value={ed}
            />))}
        </SelectField>
      </div>
    );
  }
}

HighestEducationalAttainment.propTypes = {
  personalHighestEducation: PropTypes.string.isRequired,
  store: PropTypes.shape({
    saveHighestEducation: PropTypes.func.isRequired,
  }).isRequired,
};

export default storeProvider()(HighestEducationalAttainment);
