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

const genders = [
  'Female',
  'Male',
  'Other',
  'Prefer not to say',
];

class Gender extends React.PureComponent {
  handleChange = (event, index, value) => {
    this.props.store.saveGender(value);
  }

  render() {
    const { personalGender } = this.props;
    return (
      <SelectField
        autoWidth
        hintText="Gender"
        onChange={this.handleChange}
        style={styles.field}
        value={personalGender}
      >
        {genders.map(gen => (
          <MenuItem
            checked={personalGender.length > 0 && personalGender === gen}
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
};

export default storeProvider()(Gender);
