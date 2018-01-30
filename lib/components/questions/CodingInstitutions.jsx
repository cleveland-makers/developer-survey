import React from 'react';
import PropTypes from 'prop-types';
import SelectField from 'material-ui/SelectField';
import storeProvider from '../storeProvider';
import MenuItem from 'material-ui/MenuItem';

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

class CodingInstitutions extends React.PureComponent {
  handleChange = (event, index, values) => {
    this.props.store.saveWhereLearned(values);
  }

  render() {
    const { languageWhereDidYouLearnIt } = this.props;
    return (
      <div style={styles.div}>
        <SelectField
          hintText="Where you learned to code"
          multiple
          onChange={this.handleChange}
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
