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

const institutions = [
  'Bootcamp',
  'Coding competition or part­-time course',
  'College',
  'Hackathon',
  'Industry certification',
  'Online course',
  'Open source contributions',
  'Self taught',
  'Other',
];

class CodingInstitutions extends React.PureComponent {
  handleChange = (event, index, values) => {
    this.props.store.saveWhereLearned(values);
  }

  render() {
    const { languageWhereDidYouLearnIt } = this.props;
    return (
      <SelectField
        autoWidth
        hintText="Where you learned to code"
        multiple
        onChange={this.handleChange}
        style={styles.field}
        value={languageWhereDidYouLearnIt}
      >
        {institutions.map(institution => (
          <MenuItem
            checked={languageWhereDidYouLearnIt && languageWhereDidYouLearnIt.indexOf(institution) > -1}
            insetChildren
            key={institution}
            primaryText={institution}
            value={institution}
          />))}
      </SelectField>
    );
  }
}

CodingInstitutions.propTypes = {
  languageWhereDidYouLearnIt: PropTypes.arrayOf(PropTypes.string).isRequired,
  store: PropTypes.shape({
    saveWhereLearned: PropTypes.func.isRequired,
  }).isRequired,
};

export default storeProvider()(CodingInstitutions);
