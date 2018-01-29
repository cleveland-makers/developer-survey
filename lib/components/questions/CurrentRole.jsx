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

class CurrentRole extends React.PureComponent {
  handleChange = (event, index, values) => {
    this.props.store.saveRoles(values);
  }

  render() {
    const { developerCurrentRoles } = this.props;
    return (
      <div style={styles.div}>
        <SelectField
          hintText="Role"
          multiple
          onChange={this.handleChange}
          value={developerCurrentRoles}
        >
          {roles.map(role => (
            <MenuItem
              checked={developerCurrentRoles && developerCurrentRoles.indexOf(role) > -1}
              insetChildren
              key={role}
              primaryText={role}
              value={role}
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
