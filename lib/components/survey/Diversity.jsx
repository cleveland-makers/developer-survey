import React from 'react';
import PropTypes from 'prop-types';
import ClearFix from 'material-ui/internal/ClearFix';
import Gender from '../questions/Gender';
import Ethnicity from '../questions/Ethnicity';
import HighestEducationalAttainment from '../questions/Education';

const styles = {
  h1: {
    color: '#730006',
    fontFamily: 'Play, serif',
    fontSize: '35px',
    fontWeight: '600',
    lineHeight: '1.08',
    marginBottom: '40px',
    marginTop: '20px',
    textShadow: '2px 2px 5px #F24932',
    textTransform: 'uppercase',
  },
  div: {
    color: '#343432',
    display: 'inline-block',
    float: 'left',
    fontSize: '20px',
    fontWeight: '400',
    height: '48px',
    lineHeight: '48px',
  },
  questionGroup: {
    marginTop: '20px',
  },
};

class Diversity extends React.PureComponent {
  render() {
    const { showValidation, survey } = this.props;
    return (
      <React.Fragment>
        <h1 style={styles.h1}>Personal Information</h1>
        <div style={styles.questionGroup}>
          <ClearFix>
            <Gender
              personalGender={survey.personalGender}
              showValidation={showValidation}
            />
          </ClearFix>
          <ClearFix>
            <Ethnicity
              personalEthnicity={survey.personalEthnicity}
              showValidation={showValidation}
            />
          </ClearFix>
          <ClearFix>
            <HighestEducationalAttainment
              personalHighestEducation={survey.personalHighestEducation}
              showValidation={showValidation}
            />
          </ClearFix>
        </div>
      </React.Fragment>
    );
  }
}

Diversity.propTypes = {
  showValidation: PropTypes.bool.isRequired,
  survey: PropTypes.shape({
    personalEthnicity: PropTypes.string.isRequired,
    personalGender: PropTypes.string.isRequired,
    personalHighestEducation: PropTypes.string.isRequired,
  }).isRequired,
};

export default Diversity;
