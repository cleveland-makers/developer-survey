import React from 'react';
import PropTypes from 'prop-types';
import ClearFix from 'material-ui/internal/ClearFix';
import ReasonsForStayingInCleveland from '../questions/ReasonsForStayingInCleveland';
import FavoriteSportsTeam from '../questions/FavoriteSportsTeam';
import FavoriteClevelandActivity from '../questions/FavoriteClevelandActivity';
import SurveyNavigation from './SurveyNavigation';

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
    marginLeft: '4px',
  },
  questionGroup: {
    marginTop: '20px',
  },
};

class MovingOn extends React.PureComponent {
  render() {
    const { survey } = this.props;
    return (
      <React.Fragment>
        <h1 style={styles.h1}>Moving On</h1>
        <div style={styles.questionGroup}>
          <ClearFix>
            <div style={styles.div}>I</div>
            <div style={styles.div}>stay</div>
            <div style={styles.div}>in</div>
            <div style={styles.div}>Cleveland</div>
            <div style={styles.div}>because</div>
            <ReasonsForStayingInCleveland
              personalWhyCleveland={survey.personalWhyCleveland}
            />
            <div style={styles.div}>,</div>
            <div style={styles.div}>and</div>
            <div style={styles.div}>I</div>
            <div style={styles.div}>live</div>
            <div style={styles.div}>and</div>
            <div style={styles.div}>breathe</div>
            <div style={styles.div}>the</div>
            <FavoriteSportsTeam
              personalFavoriteSportsTeams={survey.personalFavoriteSportsTeams}
            />
            <div style={styles.div}>(most</div>
            <div style={styles.div}>of</div>
            <div style={styles.div}>the</div>
            <div style={styles.div}>time).</div>
            <div style={styles.div}>Cleveland</div>
            <div style={styles.div}>is</div>
            <div style={styles.div}>a</div>
            <div style={styles.div}>special</div>
            <div style={styles.div}>place,</div>
            <div style={styles.div}>and</div>
            <div style={styles.div}>I</div>
            <div style={styles.div}>wish</div>
            <div style={styles.div}>more</div>
            <div style={styles.div}>people</div>
            <div style={styles.div}>knew</div>
            <div style={styles.div}>about</div>
            <div style={styles.div}>the</div>
            <FavoriteClevelandActivity
              personalFavoriteClevelandActivity={survey.personalFavoriteClevelandActivity}
            />
            <div style={styles.div}>.</div>
          </ClearFix>
        </div>
      </React.Fragment>
    );
  }
}

MovingOn.propTypes = {
  survey: PropTypes.shape({
    personalFavoriteClevelandActivity: PropTypes.string.isRequired,
    personalFavoriteSportsTeams: PropTypes.string.isRequired,
    personalWhyCleveland: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
};

export default MovingOn;
