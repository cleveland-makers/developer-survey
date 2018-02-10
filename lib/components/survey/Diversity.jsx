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
            <div style={styles.div}>I</div>
            <div style={styles.div}>identify</div>
            <div style={styles.div}>as</div>
            <Gender
              personalGender={survey.personalGender}
              showValidation={showValidation}
            />
            <div style={styles.div}>.</div>
            <div style={styles.div}>I</div>
            <div style={styles.div}>describe</div>
            <div style={styles.div}>myself</div>
            <div style={styles.div}>as</div>
            <Ethnicity
              personalEthnicity={survey.personalEthnicity}
              showValidation={showValidation}
            />
            <div style={styles.div}>.</div>
            <div style={styles.div}>The</div>
            <div style={styles.div}>highest</div>
            <div style={styles.div}>level</div>
            <div style={styles.div}>of</div>
            <div style={styles.div}>education</div>
            <div style={styles.div}>I’ve</div>
            <div style={styles.div}>completed</div>
            <div style={styles.div}>is</div>
            <HighestEducationalAttainment
              personalHighestEducation={survey.personalHighestEducation}
              showValidation={showValidation}
            />
            <div style={styles.div}>.</div>
          </ClearFix>
        </div>
      </React.Fragment>
    );
  }
}

Diversity.propTypes = {
  showValidation: PropTypes.bool.isRequired,
  survey: PropTypes.shape({
    personalEthnicity: PropTypes.arrayOf(PropTypes.string).isRequired,
    personalGender: PropTypes.string.isRequired,
    personalHighestEducation: PropTypes.string.isRequired,
  }).isRequired,
};

export default Diversity;
