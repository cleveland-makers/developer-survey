import React from 'react';
import PropTypes from 'prop-types';
import ClearFix from 'material-ui/internal/ClearFix';
import RaisedButton from 'material-ui/RaisedButton';
import CurrentRole from '../questions/CurrentRole';
import YearsOfExperience from '../questions/YearsOfExperience';
import storeProvider from '../storeProvider';
import SurveyFormat from '../SurveyFormat';

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
  buttonMain: {
    height: '45px',
    marginRight: '16px',
    width: '110px',
  },
  buttonMainLabel: {
    lineHeight: '45px',
  },
  questionGroup: {
    marginTop: '20px',
  },
  buttonGroup: {
    paddingTop: '30px',
  },
};

class TellUsAboutYourCurrentRole extends React.PureComponent {
  saveAndContinue = (e) => {
    e.preventDefault();
    this.props.store.nextStep();
  }

  render() {
    const { survey } = this.props;
    return (
      <React.Fragment>
        <SurveyFormat>
          <h1 style={styles.h1}>Tell Us About Your Current Role</h1>
          <ClearFix style={styles.questionGroup}>
            <div style={styles.div}>I have been programming as a</div>
            <CurrentRole
              developerCurrentRoles={survey.developerCurrentRoles}
            />
            <div style={styles.div}>developer for</div>
            <YearsOfExperience
              developerHowLong={survey.developerHowLong}
            />
            <div style={styles.div}>years.</div>
          </ClearFix>
        </SurveyFormat>
        <div style={styles.buttonGroup}>
          <RaisedButton
            backgroundColor="#730006"
            label="Next"
            labelColor="#F7F5F4"
            labelStyle={styles.buttonMainLabel}
            onClick={this.saveAndContinue}
            style={styles.buttonMain}
          />
        </div>
      </React.Fragment>
    );
  }
}

TellUsAboutYourCurrentRole.propTypes = {
  store: PropTypes.shape({
    nextStep: PropTypes.func.isRequired,
  }).isRequired,
  survey: PropTypes.shape({
    developerCurrentRoles: PropTypes.arrayOf(PropTypes.string).isRequired,
    developerHowLong: PropTypes.number.isRequired,
  }).isRequired,
};

export default storeProvider()(TellUsAboutYourCurrentRole);
