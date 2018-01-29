import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
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
    fontSize: '50px',
    fontWeight: '600',
    lineHeight: '1.08',
    textTransform: 'uppercase',
  },
  div: {
    width: '60%',
    margin: 'auto',
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
  buttonSecondary: {
    backgroundColor: '#F7F5F4',
    border: '2px solid #4556A5',
    borderRadius: '2px',
    color: '#4556A5',
    padding: '15px 32px',
    textAlign: 'center',
    textDecoration: 'none',
    display: 'inline-block',
    font: '16px Roboto, sans-serif',
    fontWeight: 'bold',
  },
  root: {
    backgroundColor: '#8097ad',
    overflow: 'hidden',
    minHeight: '800px',
  },
};

class SomeOtherStuff extends React.PureComponent {
  previousStep(e) {
    e.preventDefault();
    this.props.saveValues({});
    this.props.previousStep();
  }
  submitSurvey() {
    this.props.saveValues({});
  }

  render() {
    return (
      <div>
        <h1>Some Other Stuff</h1>
        <Gender
          gender={this.props.gender}
          updateState={this.props.updateState}
        />
        <Ethnicity
          ethnicity={this.props.ethnicity}
          updateState={this.props.updateState}
        />
        <HighestEducationalAttainment
          highestEducationalAttainment={this.props.highestEducationalAttainment}
          updateState={this.props.updateState}
        />
        <button onClick={(e) => { this.previousStep(e); }}>Previous</button>
        <div className="buttons">
          <Link style={styles.buttonMain} to="/confirmation" onClick={this.submitSurvey()}>Submit Survey</Link>
        </div>
      </div>
    );
  }
}

SomeOtherStuff.propTypes = {
  saveValues: PropTypes.func.isRequired,
  previousStep: PropTypes.func.isRequired,
  updateState: PropTypes.func.isRequired,
  gender: PropTypes.string.isRequired,
  ethnicity: PropTypes.string.isRequired,
  highestEducationalAttainment: PropTypes.string.isRequired,
};

export default SomeOtherStuff;
