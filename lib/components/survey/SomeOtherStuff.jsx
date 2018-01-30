import React from 'react';
import PropTypes from 'prop-types';
import ClearFix from 'material-ui/internal/ClearFix';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import Paper from 'material-ui/Paper';
import Gender from '../questions/Gender';
import Ethnicity from '../questions/Ethnicity';
import HighestEducationalAttainment from '../questions/Education';
import storeProvider from '../storeProvider';

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
  buttonSecondary: {
    height: '45px',
    marginRight: '16px',
    width: '110px',
  },
  questionGroup: {
    marginTop: '20px',
  },
  buttonGroup: {
    paddingTop: '30px',
  },
  paper: {
    padding: '20px 30px',
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
        <Paper style={styles.paper} zDepth={1}>
          <h1 style={styles.h1}>Some Other Stuff</h1>
          <div style={styles.questionGroup}>
            <ClearFix>
              <Gender
                personalGender={survey.personalGender}
              />
            </ClearFix>
            <ClearFix>
              <Ethnicity
                personalEthnicity={survey.personalEthnicity}
              />
            </ClearFix>
            <ClearFix>
              <HighestEducationalAttainment
                personalHighestEducation={survey.personalHighestEducation}
              />
            </ClearFix>
          </div>
        </Paper>
        <div style={styles.buttonGroup}>
          <FlatButton
            label="Previous"
            onClick={this.previousStep}
            style={styles.buttonSecondary}
          />
          <RaisedButton
            backgroundColor="#730006"
            label="Submit"
            labelColor="#F7F5F4"
            labelStyle={styles.buttonMainLabel}
            onClick={this.submitSurvey}
            style={styles.buttonMain}
          />
        </div>
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
