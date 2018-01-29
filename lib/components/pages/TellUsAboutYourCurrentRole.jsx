import React from 'react';
import PropTypes from 'prop-types';
import ClearFix from 'material-ui/internal/ClearFix';
import CurrentRole from '../questions/CurrentRole';
import YearsExp from '../questions/YearsExp';

const styles = {
  h1: {
    marginTop: '20px',
    marginBottom: '40px',
    fontFamily: 'Play, serif',
    color: '#730006',
    textShadow: '2px 2px 5px #F24932',
    fontSize: '30px',
    fontWeight: '600',
    lineHeight: '1.08',
    textTransform: 'uppercase',
  },
  div: {
    display: 'inline-block',
    lineHeight: '45px',
    height: '48px',
    float: 'left',
    fontSize: '16px',
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
    padding: '8px 14px',
    textAlign: 'center',
    textDecoration: 'none',
    display: 'inline-block',
    font: '14px Roboto, sans-serif',
    fontWeight: 'bold',
    marginRight: '16px',
  },
  specialMargin: {
    marginTop: '15px',
    marginBottom: '20px',
  },
};

class TellUsAboutYourCurrentRole extends React.PureComponent {
  saveAndContinue = (e) => {
    e.preventDefault();
    this.props.nextStep();
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
            <YearsExp
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
  survey: PropTypes.shape({
    developerCurrentRoles: PropTypes.arrayOf(PropTypes.string).isRequired,
    developerHowLong: PropTypes.number.isRequired,
  }).isRequired,
  nextStep: PropTypes.func.isRequired,
};

export default TellUsAboutYourCurrentRole;
