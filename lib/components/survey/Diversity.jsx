import React from 'react';
import PropTypes from 'prop-types';
import ClearFix from 'material-ui/internal/ClearFix';
import Gender from '../questions/Gender';
import Ethnicity from '../questions/Ethnicity';
import HighestEducationalAttainment from '../questions/Education';
import globalStyles from '../questions/styles';

const styles = globalStyles.survey;

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
