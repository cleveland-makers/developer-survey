import React from 'react';
import PropTypes from 'prop-types';
import ClearFix from 'material-ui/internal/ClearFix';
import ReasonsForStayingInCleveland from '../questions/ReasonsForStayingInCleveland';
import FavoriteSportsTeam from '../questions/FavoriteSportsTeam';
import FavoriteClevelandActivity from '../questions/FavoriteClevelandActivity';
import globalStyles from '../questions/styles';

const styles = globalStyles.survey;

class MovingOn extends React.PureComponent {
  render() {
    const { showValidation, survey } = this.props;
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
              showValidation={showValidation}
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
              showValidation={showValidation}
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
              showValidation={showValidation}
            />
            <div style={styles.div}>.</div>
          </ClearFix>
        </div>
      </React.Fragment>
    );
  }
}

MovingOn.propTypes = {
  showValidation: PropTypes.bool.isRequired,
  survey: PropTypes.shape({
    personalFavoriteClevelandActivity: PropTypes.string.isRequired,
    personalFavoriteSportsTeams: PropTypes.string.isRequired,
    personalWhyCleveland: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
};

export default MovingOn;
