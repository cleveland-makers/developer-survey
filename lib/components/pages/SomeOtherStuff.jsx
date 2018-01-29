import React from 'react';
import PropTypes from 'prop-types';
import Gender from '../questions/Gender';
import Ethnicity from '../questions/Ethnicity';
import HighestEducationalAttainment from '../questions/HighestEducationalAttainment';

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

class SomeOtherStuff extends React.PureComponent {
  previousStep = (e) => {
    e.preventDefault();
    this.props.saveValues({});
    this.props.previousStep();
  }

  submitSurvey = () => {
    this.props.saveValues({});
  }

  render() {
    const { survey } = this.props;
    return (
      <div>
        <h1>Some Other Stuff</h1>
        <Gender
          personalGender={survey.personalGender}
        />
        <Ethnicity
          personalEthnicity={survey.personalEthnicity}
        />
        <HighestEducationalAttainment
          personalHighestEducation={survey.personalHighestEducation}
        />
        <button onClick={this.previousStep}>Previous</button>
        <button onClick={this.submitSurvey}>Submit</button>
      </div>
    );
  }
}

SomeOtherStuff.propTypes = {
  saveValues: PropTypes.func.isRequired,
  previousStep: PropTypes.func.isRequired,
  survey: PropTypes.shape({
    personalEthnicity: PropTypes.string.isRequired,
    personalGender: PropTypes.string.isRequired,
    personalHighestEducation: PropTypes.string.isRequired,
  }).isRequired,
};

export default SomeOtherStuff;
