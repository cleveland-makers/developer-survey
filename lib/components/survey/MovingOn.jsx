import React from 'react';
import PropTypes from 'prop-types';
import ClearFix from 'material-ui/internal/ClearFix';
import ReasonsForStayingInCleveland from '../questions/ReasonsForStayingInCleveland';
import FavSportsTeam from '../questions/FavSportsTeam';
import FavCleActivity from '../questions/FavCleActivity';
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

class MovingOn extends React.PureComponent {
  previousStep = (e) => {
    e.preventDefault();
    this.props.store.previousStep();
  }

  saveAndContinue = (e) => {
    e.preventDefault();
    this.props.store.nextStep();
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
  store: PropTypes.shape({
    nextStep: PropTypes.func.isRequired,
    previousStep: PropTypes.func.isRequired,
  }).isRequired,
  survey: PropTypes.shape({
    personalFavoriteClevelandActivity: PropTypes.string.isRequired,
    personalFavoriteSportsTeams: PropTypes.string.isRequired,
    personalWhyCleveland: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
};

export default storeProvider()(MovingOn);
