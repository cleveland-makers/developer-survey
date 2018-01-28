import React from 'react';
import PropTypes from 'prop-types';
import ReasonsForStayingInCleveland from './ReasonsForStayingInCleveland';
import FavSportsTeam from './FavSportsTeam';
import FavCleActivity from './FavCleActivity';

class TellUsAboutYourCurrentRole extends React.PureComponent {
  previousStep(e) {
    e.preventDefault();
    this.props.saveValues({});
    this.props.previousStep();
  }
  saveAndContinue(e) {
    e.preventDefault();
    this.props.saveValues({});
    this.props.nextStep();
  }

  render() {
    return (
      <div>
        <h1>Moving On...</h1>
        {'I stay in Cleveland because '}
        <ReasonsForStayingInCleveland
          reasonsForStayingInCleveland={this.props.reasonsForStayingInCleveland}
          updateState={this.props.updateState}
        />{', and I live and breathe the'}
        <FavSportsTeam
          favSportsTeam={this.props.favSportsTeam}
          updateState={this.props.updateState}
        />{'(most of the time), but I wish more people knew about '}
        <FavCleActivity
          favCleActivity={this.props.favCleActivity}
          updateState={this.props.updateState}
        />
        <button onClick={(e) => { this.previousStep(e); }}>Previous</button>
        <button onClick={(e) => { this.saveAndContinue(e); }}>Next</button>
      </div>
    );
  }
}

TellUsAboutYourCurrentRole.propTypes = {
  saveValues: PropTypes.func.isRequired,
  nextStep: PropTypes.func.isRequired,
  previousStep: PropTypes.func.isRequired,
  updateState: PropTypes.func.isRequired,
  reasonsForStayingInCleveland: PropTypes.arrayOf(PropTypes.string).isRequired,
  favSportsTeam: PropTypes.string.isRequired,
  favCleActivity: PropTypes.string.isRequired,
};

export default TellUsAboutYourCurrentRole;
