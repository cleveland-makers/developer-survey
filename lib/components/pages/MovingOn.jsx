import React from 'react';
import PropTypes from 'prop-types';
import ReasonsForStayingInCleveland from '../questions/ReasonsForStayingInCleveland';
import FavSportsTeam from '../questions/FavSportsTeam';
import FavCleActivity from '../questions/FavCleActivity';

class TellUsAboutYourCurrentRole extends React.PureComponent {
  previousStep = (e) => {
    e.preventDefault();
    this.props.saveValues({});
    this.props.previousStep();
  }

  saveAndContinue = (e) => {
    e.preventDefault();
    this.props.saveValues({});
    this.props.nextStep();
  }

  render() {
    const { survey } = this.props;
    return (
      <div>
        <h1>Moving On...</h1>
        I stay in Cleveland because
        <ReasonsForStayingInCleveland
          personalWhyCleveland={survey.personalWhyCleveland}
        />
        , and I live and breathe the
        <FavSportsTeam
          personalFavoriteSportsTeams={survey.personalFavoriteSportsTeams}
        />
        (most of the time), but I wish more people knew about
        <FavCleActivity
          personalFavoriteClevelandActivity={survey.personalFavoriteClevelandActivity}
        />
        <button onClick={this.previousStep}>Previous</button>
        <button onClick={this.saveAndContinue}>Next</button>
      </div>
    );
  }
}

TellUsAboutYourCurrentRole.propTypes = {
  survey: PropTypes.shape({
    personalFavoriteClevelandActivity: PropTypes.string.isRequired,
    personalFavoriteSportsTeams: PropTypes.string.isRequired,
    personalWhyCleveland: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
  saveValues: PropTypes.func.isRequired,
  nextStep: PropTypes.func.isRequired,
  previousStep: PropTypes.func.isRequired,
};

export default TellUsAboutYourCurrentRole;
