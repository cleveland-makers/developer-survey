import React from 'react';
import PropTypes from 'prop-types';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import storeProvider from '../storeProvider';

const styles = {
  customWidth: {
    width: 150,
  },
  div: {
    float: 'left',
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

class CodingInstitutions extends React.Component {
  handleChange = (event, index, values) => {
    this.props.store.saveWhereLearned(values);
  }

  render() {
    const { languageWhereDidYouLearnIt } = this.props;
    return (
      <div style={styles.div}>
        <SelectField
          multiple
          hintText="Where you learned to code"
          value={languageWhereDidYouLearnIt}
          onChange={this.handleChange}
        >
          {institutions.map(institution => (
            <MenuItem
              key={institution}
              insetChildren
              checked={languageWhereDidYouLearnIt && languageWhereDidYouLearnIt.indexOf(institution) > -1}
              value={institution}
              primaryText={institution}
            />))}
        </SelectField>
      </div>
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
