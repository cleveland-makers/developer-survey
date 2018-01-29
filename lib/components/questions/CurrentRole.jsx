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
    this.props.store.saveRoles(values);
  }

  render() {
    const { developerCurrentRoles } = this.props;
    return (
      <div style={styles.div}>
        <SelectField
          multiple
          hintText="Role"
          value={developerCurrentRoles}
          onChange={this.handleChange}
        >
          {roles.map(role => (
            <MenuItem
              key={role}
              insetChildren
              checked={developerCurrentRoles && developerCurrentRoles.indexOf(role) > -1}
              value={role}
              primaryText={role}
            />))}
        </SelectField>
      </div>
    );
  }
}

CurrentRole.propTypes = {
  developerCurrentRoles: PropTypes.arrayOf(PropTypes.string).isRequired,
  store: PropTypes.shape({
    saveRoles: PropTypes.func.isRequired,
  }).isRequired,
};

export default storeProvider()(CurrentRole);
