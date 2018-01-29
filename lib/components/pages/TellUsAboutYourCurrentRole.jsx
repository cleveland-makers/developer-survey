import React from 'react';
import PropTypes from 'prop-types';
import ClearFix from 'material-ui/internal/ClearFix';
import CurrentRole from '../questions/CurrentRole';
import YearsExp from '../questions/YearsExp';
import storeProvider from '../storeProvider';

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
    width: '175px',
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
  },
  specialMargin: {
    marginTop: '15px',
    marginBottom: '20px',
  },
};

class TellUsAboutYourCurrentRole extends React.PureComponent {
  saveAndContinue(e) {
    e.preventDefault();

    this.props.saveValues({});
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
              currentRoles={this.props.currentRoles}
              updateState={this.props.updateState}
            />
          </div>
          <div style={styles.div}>developer for</div>
          <div style={styles.answer}>
            <YearsExp
              yearsExp={this.props.yearsExp}
              updateState={this.props.updateState}
              style={styles.answer}
            />
          </div>
          <div style={styles.div}>years.</div>
        </ClearFix>
        <div>
          <button style={styles.buttonMain} onClick={(e) => { this.saveAndContinue(e); }}>
            Save and Continue
          </button>
        </div>
      </div>
    );
  }
}

TellUsAboutYourCurrentRole.propTypes = {
  currentRoles: PropTypes.arrayOf(PropTypes.string).isRequired,
  saveValues: PropTypes.func.isRequired,
  nextStep: PropTypes.func.isRequired,
  updateState: PropTypes.func.isRequired,
  yearsExp: PropTypes.number.isRequired,
};

export default storeProvider()(TellUsAboutYourCurrentRole);
