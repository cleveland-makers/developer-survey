import React from 'react';
import PropTypes from 'prop-types';
import ClearFix from 'material-ui/internal/ClearFix';
import Gender from '../questions/Gender';
import Ethnicity from '../questions/Ethnicity';
import HighestEducationalAttainment from '../questions/HighestEducationalAttainment';
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
    lineHeight: '45px',
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

class SomeOtherStuff extends React.PureComponent {
  previousStep = (e) => {
    e.preventDefault();
    this.props.store.previousStep();
  }

  submitSurvey = () => {
    this.props.store.submitSurvey();
  }

  render() {
    const { survey } = this.props;
    return (
      <div>
        <h1 style={styles.h1}>Some Other Stuff</h1>
        <div style={styles.specialMargin}>
          <ClearFix>
            <div style={styles.answer}>
              <Gender
                personalGender={survey.personalGender}
              />
            </div>
          </ClearFix>
          <ClearFix>
            <div style={styles.answer}>
              <Ethnicity
                personalEthnicity={survey.personalEthnicity}
              />
            </div>
          </ClearFix>
          <ClearFix>
            <div style={styles.answer}>
              <HighestEducationalAttainment
                personalHighestEducation={survey.personalHighestEducation}
              />
            </div>
          </ClearFix>
        </div>
        <button style={styles.buttonMain} onClick={this.previousStep}>Previous</button>
        <button style={styles.buttonMain} onClick={this.submitSurvey}>Submit</button>
      </div>
    );
  }
}

SomeOtherStuff.propTypes = {
  store: PropTypes.shape({
    previousStep: PropTypes.func.isRequired,
    submitSurvey: PropTypes.func.isRequired,
  }).isRequired,
  survey: PropTypes.shape({
    personalEthnicity: PropTypes.string.isRequired,
    personalGender: PropTypes.string.isRequired,
    personalHighestEducation: PropTypes.string.isRequired,
  }).isRequired,
};

export default storeProvider()(SomeOtherStuff);
