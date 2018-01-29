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

const buckets = [
  '< 10',
  '10 - 19',
  '20 - 99',
  '100 - 499',
  '500 - 999',
  '1,000 - 4,999',
  '5,000 - 9,999',
  '> 10,000',
];

/**
 * Asks the question:
 *
 * How large is your company?
 */
class CompanySize extends React.PureComponent {
  handleChange = (event, index, value) => {
    this.props.store.saveCompanySize(value);
  }

  render() {
    const { officeEmployeeCount } = this.props;
    return (
      <div style={styles.div}>
        <SelectField
          hintText="Company Size"
          onChange={this.handleChange}
          style={styles.field}
          value={officeEmployeeCount}
        >
          {buckets.map(bucket => (
            <MenuItem
              checked={officeEmployeeCount.length > 0 && officeEmployeeCount === bucket}
              insetChildren
              key={bucket}
              primaryText={bucket}
              value={bucket}
            />))}
        </SelectField>
      </div>
    );
  }
}

CompanySize.propTypes = {
  officeEmployeeCount: PropTypes.string.isRequired,
  store: PropTypes.shape({
    saveCompanySize: PropTypes.func.isRequired,
  }).isRequired,
};

export default storeProvider()(CompanySize);
