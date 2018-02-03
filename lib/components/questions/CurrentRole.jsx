import React from 'react';
import PropTypes from 'prop-types';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import storeProvider from '../storeProvider';
import styles from './styles';

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

/**
 * Asks the question:
 *
 * What roles do you do?
 */
class CurrentRole extends React.PureComponent {
  handleChange = (event, index, values) => {
    this.props.store.saveRoles(values);
  }

  render() {
    const { developerCurrentRoles } = this.props;
    return (
      <SelectField
        autoWidth
        hintStyle={styles.highlightLabel}
        hintText="Individual Roles"
        labelStyle={styles.highlightLabel}
        multiple
        onChange={this.handleChange}
        style={styles.fieldMultipleSelect}
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
