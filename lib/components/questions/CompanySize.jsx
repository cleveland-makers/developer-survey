import React from 'react';
import PropTypes from 'prop-types';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import storeProvider from '../storeProvider';
import styles from './styles';

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
    const { officeEmployeeCount, showValidation } = this.props;
    return (
      <SelectField
        autoWidth
        errorText={
          showValidation &&
          !officeEmployeeCount &&
          officeEmployeeCount.length === 0 &&
          'Company size'
        }
        hintStyle={styles.highlightLabel}
        hintText="Company Size"
        labelStyle={styles.highlightLabel}
        onChange={this.handleChange}
        style={styles.fieldSingleSelect}
        value={officeEmployeeCount}
      >
        {buckets.map(bucket => (
          <MenuItem
            checked={
              officeEmployeeCount.length > 0 &&
              officeEmployeeCount === bucket
            }
            key={bucket}
            primaryText={bucket}
            value={bucket}
          />))}
      </SelectField>
    );
  }
}

CompanySize.propTypes = {
  officeEmployeeCount: PropTypes.string.isRequired,
  store: PropTypes.shape({
    saveCompanySize: PropTypes.func.isRequired,
  }).isRequired,
  showValidation: PropTypes.bool,
};

CompanySize.defaultProps = {
  showValidation: false,
};

export default storeProvider()(CompanySize);
