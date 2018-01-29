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

const genders = [
  'Female',
  'Male',
  'Other',
  'Prefer not to say',
];

class Gender extends React.Component {
  handleChange = (event, index, value) => {
    this.props.updateState({ gender: value });
    this.props.store.saveGender(value);
  }

  render() {
    const { gender } = this.props;
    return (
      <div style={styles.div}>
        <SelectField
          style={styles.customWidth}
          hintText="Gender"
          value={gender}
          onChange={this.handleChange}
        >
          {genders.map(gen => (
            <MenuItem
              key={gen}
              insetChildren
              checked={gender && gender.indexOf(gen) > -1}
              value={gen}
              primaryText={gen}
            />))}
        </SelectField>
      </div>
    );
  }
}

Gender.propTypes = {
  gender: PropTypes.string.isRequired,
  updateState: PropTypes.func.isRequired,
  store: PropTypes.shape({
    saveGender: PropTypes.func.isRequired,
  }).isRequired,
};

export default storeProvider()(Gender);
