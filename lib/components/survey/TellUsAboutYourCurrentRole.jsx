import React from 'react';
import PropTypes from 'prop-types';
import ClearFix from 'material-ui/internal/ClearFix';
import CurrentRole from '../questions/CurrentRole';
import YearsOfExperience from '../questions/YearsOfExperience';
import globalStyles from '../questions/styles';

const styles = globalStyles.survey;

class TellUsAboutYourCurrentRole extends React.PureComponent {
  render() {
    const { showValidation, survey } = this.props;
    return (
      <React.Fragment>
        <h1 style={styles.h1}>Tell Us About Your Current Role</h1>
        <ClearFix style={styles.questionGroup}>
          <div style={styles.div}>I</div>
          <div style={styles.div}>have</div>
          <div style={styles.div}>been</div>
          <div style={styles.div}>programming</div>
          <div style={styles.div}>as</div>
          <div style={styles.div}>a</div>
          <CurrentRole
            developerCurrentRoles={survey.developerCurrentRoles}
            showValidation={showValidation}
          />
          <div style={styles.div}>developer</div>
          <div style={styles.div}>for</div>
          <YearsOfExperience
            developerHowLong={survey.developerHowLong}
            showValidation={showValidation}
          />
          <div style={styles.div}>years.</div>
        </ClearFix>
      </React.Fragment>
    );
  }
}

TellUsAboutYourCurrentRole.propTypes = {
  showValidation: PropTypes.bool.isRequired,
  survey: PropTypes.shape({
    developerCurrentRoles: PropTypes.arrayOf(PropTypes.string).isRequired,
    developerHowLong: PropTypes.number.isRequired,
  }).isRequired,
};

export default TellUsAboutYourCurrentRole;
