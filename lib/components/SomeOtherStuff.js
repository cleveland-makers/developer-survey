import React from 'react';
import PropTypes from 'prop-types';
import Gender from './Gender';
import Ethnicity from './Ethnicity';
import HighestEducationalAttainment from './HighestEducationalAttainment';

class TellUsAboutYourCurrentRole extends React.PureComponent {
  previousStep(e) {
    e.preventDefault();
    this.props.saveValues({});
    this.props.previousStep();
  }
  submitSurvey(e) {
    e.preventDefault();
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
          <Link style={styles.buttonMain} to="/confirmation" onClick={submitSurvey()}>Submit Survey</Link>
        </div>
      </div>
    );
  }
}

TellUsAboutYourCurrentRole.propTypes = {
  saveValues: PropTypes.func.isRequired,
  previousStep: PropTypes.func.isRequired,
  updateState: PropTypes.func.isRequired,
  gender: PropTypes.string.isRequired,
  ethnicity: PropTypes.string.isRequired,
  highestEducationalAttainment: PropTypes.string.isRequired,
};

export default TellUsAboutYourCurrentRole;
