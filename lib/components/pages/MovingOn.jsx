import React from 'react';
import PropTypes from 'prop-types';
import ClearFix from 'material-ui/internal/ClearFix';
import ReasonsForStayingInCleveland from '../questions/ReasonsForStayingInCleveland';
import FavSportsTeam from '../questions/FavSportsTeam';
import FavCleActivity from '../questions/FavCleActivity';

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

class MovingOn extends React.PureComponent {
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
        <h1 style={styles.h1}>Moving On...</h1>
        <div style={styles.specialMargin}>
          <ClearFix>
            <div style={styles.div}>I stay in Cleveland because</div>
            <div style={styles.answer}>
              <ReasonsForStayingInCleveland
                personalWhyCleveland={survey.personalWhyCleveland}
              />
            </div>
            <div style={styles.div}>, and I live and breathe the</div>
            <div style={styles.answer}>
              <FavSportsTeam
                personalFavoriteSportsTeams={survey.personalFavoriteSportsTeams}
              />
            </div>
            <div style={styles.div}>(most of the time), but I wish more people knew about</div>
            <div style={styles.answer}>
              <FavCleActivity
                personalFavoriteClevelandActivity={survey.personalFavoriteClevelandActivity}
              />
            </div>
          </ClearFix>
        </div>
        <button style={styles.buttonMain} onClick={this.previousStep}>Previous</button>
        <button style={styles.buttonMain} onClick={this.saveAndContinue}>Next</button>
      </div>
    );
  }
}

MovingOn.propTypes = {
  survey: PropTypes.shape({
    personalFavoriteClevelandActivity: PropTypes.string.isRequired,
    personalFavoriteSportsTeams: PropTypes.string.isRequired,
    personalWhyCleveland: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
  saveValues: PropTypes.func.isRequired,
  nextStep: PropTypes.func.isRequired,
  previousStep: PropTypes.func.isRequired,
};

export default MovingOn;
