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

const institutions = [
  'Bootcamp',
  'Coding competition or part­time course',
  'College',
  'Hackathon',
  'Industry certification',
  'Online course',
  'Open source contributions',
  'Self taught',
  'Other',
];

class CodingInstitutions extends React.Component {
  handleChange = (event, index, values) => this.props.updateState({ codingInstitutions: values });

  render() {
    const { codingInstitutions } = this.props;
    return (
      <div style={styles.div}>
        <SelectField
          multiple
          hintText="Where you learned to code"
          value={codingInstitutions}
          onChange={this.handleChange}
        >
          {institutions.map(institution => (
            <MenuItem
              key={institution}
              insetChildren
              checked={codingInstitutions && codingInstitutions.indexOf(institution) > -1}
              value={institution}
              primaryText={institution}
            />))}
        </SelectField>
      </div>
    );
  }
}

CodingInstitutions.propTypes = {
  codingInstitutions: PropTypes.arrayOf(PropTypes.string).isRequired,
  updateState: PropTypes.func.isRequired,
};

export default CodingInstitutions;
