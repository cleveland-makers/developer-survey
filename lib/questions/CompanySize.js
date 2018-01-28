import React from 'react';
import PropTypes from 'prop-types';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

const styles = {
  customWidth: {
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

class CompanySize extends React.Component {
  handleChange = (event, index, value) => this.props.updateState({ companySize: value });

  render() {
    const { companySize } = this.props;
    return (
      <div>
        <SelectField
          style={styles.customWidth}
          hintText="Primary Language"
          value={companySize}
          onChange={this.handleChange}
        >
          {buckets.map(bucket => (
            <MenuItem
              key={bucket}
              insetChildren
              checked={companySize && companySize.indexOf(bucket) > -1}
              value={bucket}
              primaryText={bucket}
            />))}
        </SelectField>
      </div>
    );
  }
}

CompanySize.propTypes = {
  companySize: PropTypes.string.isRequired,
  updateState: PropTypes.func.isRequired,
};

export default CompanySize;
