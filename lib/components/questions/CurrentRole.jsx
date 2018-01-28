import React from 'react';
import PropTypes from 'prop-types';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import storeProvider from '../storeProvider';

const roles = [
  'Back-End',
  'Data Science',
  'DevOps',
  'Front-End',
  'Full-Stack',
  'Game',
  'IoT',
  'Mobile',
  'QA',
  'UX',
];

class CurrentRole extends React.Component {
  handleChange = (event, index, values) => {
    this.props.updateState({ currentRoles: values });
    this.props.store.saveRoles(values);
  }

  render() {
    const { currentRoles } = this.props;
    return (
      <SelectField
        multiple
        hintText="Select a role"
        value={currentRoles}
        onChange={this.handleChange}
      >
        {roles.map(role => (
          <MenuItem
            key={role}
            insetChildren
            checked={currentRoles && currentRoles.indexOf(role) > -1}
            value={role}
            primaryText={role}
          />))}
      </SelectField>
    );
  }
}

CurrentRole.propTypes = {
  currentRoles: PropTypes.arrayOf(PropTypes.string).isRequired,
  updateState: PropTypes.func.isRequired,
  store: PropTypes.shape({
    saveRoles: PropTypes.func.isRequired,
  }).isRequired,
};

export default storeProvider()(CurrentRole);
