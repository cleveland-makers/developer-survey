import React from 'react';
import PropTypes from 'prop-types';
import ClearFix from 'material-ui/internal/ClearFix';
import CurrentRole from '../questions/CurrentRole';
import YearsOfExperience from '../questions/YearsOfExperience';
import storeProvider from '../storeProvider';

const styles = {
  h1: {
    color: '#730006',
    fontFamily: 'Play, serif',
    fontSize: '30px',
    fontWeight: '600',
    lineHeight: '1.08',
    marginBottom: '40px',
    marginTop: '20px',
    textShadow: '2px 2px 5px #F24932',
    textTransform: 'uppercase',
  },
  div: {
    display: 'inline-block',
    float: 'left',
    fontSize: '16px',
    height: '48px',
    lineHeight: '48px',
  },
  answer: {
    float: 'left',
    paddingLeft: '5px',
    paddingRight: '5px',
  },
  buttonMain: {
    backgroundColor: '#730006',
    border: '2px solid #730006',
    borderRadius: '2px',
    color: '#F7F5F4',
    display: 'inline-block',
    font: '14px Roboto, sans-serif',
    fontWeight: 'bold',
    marginRight: '16px',
    padding: '8px 14px',
    textAlign: 'center',
    textDecoration: 'none',
  },
  specialMargin: {
    marginBottom: '20px',
    marginTop: '15px',
  },
};

class TellUsAboutYourCurrentRole extends React.PureComponent {
  saveAndContinue = (e) => {
    e.preventDefault();
    this.props.store.nextStep();
  }

  render() {
    return (
      <div>
        <h1 style={styles.h1}>Tell Us About Your Current Role</h1>
        <ClearFix style={styles.specialMargin}>
          <div style={styles.div}>I have been programming as a</div>
          <div style={styles.answer}>
            <CurrentRole
              developerCurrentRoles={this.props.survey.developerCurrentRoles}
            />
          </div>
          <div style={styles.div}>developer for</div>
          <div style={styles.answer}>
            <YearsOfExperience
              developerHowLong={this.props.survey.developerHowLong}
              style={styles.answer}
            />
          </div>
          <div style={styles.div}>years.</div>
        </ClearFix>
        <ClearFix style={styles.specialMargin}>
          <button style={styles.buttonMain} onClick={this.saveAndContinue}>
            Next
          </button>
        </ClearFix>
      </div>
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
