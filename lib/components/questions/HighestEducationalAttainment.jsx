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

class HighestEducationalAttainment extends React.Component {
  handleChange = (event, index, value) => {
    this.props.updateState({ highestEducationalAttainment: value });
    this.props.store.saveHighestEducation(value);
  };

  render() {
    const { highestEducationalAttainment } = this.props;
    return (
      <div style={styles.div}>
        <SelectField
          style={styles.customWidth}
          hintText="Highest Educational Attainment"
          value={highestEducationalAttainment}
          onChange={this.handleChange}
        >
          {education.map(ed => (
            <MenuItem
              key={ed}
              insetChildren
              checked={highestEducationalAttainment && highestEducationalAttainment.indexOf(ed) > -1}
              value={ed}
              primaryText={ed}
            />))}
        </SelectField>
      </div>
    );
  }
}

HighestEducationalAttainment.propTypes = {
  highestEducationalAttainment: PropTypes.string.isRequired,
  updateState: PropTypes.func.isRequired,
  store: PropTypes.shape({
    saveHighestEducation: PropTypes.func.isRequired,
  }).isRequired,
};

export default storeProvider()(HighestEducationalAttainment);
