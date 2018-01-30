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
      <SelectField
        hintText="Role"
        multiple
        onChange={this.handleChange}
        style={styles.field}
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
