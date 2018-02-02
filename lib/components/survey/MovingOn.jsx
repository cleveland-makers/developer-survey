import React from 'react';
import PropTypes from 'prop-types';
import ClearFix from 'material-ui/internal/ClearFix';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import Paper from 'material-ui/Paper';
import ReasonsForStayingInCleveland from '../questions/ReasonsForStayingInCleveland';
import FavoriteSportsTeam from '../questions/FavoriteSportsTeam';
import FavoriteClevelandActivity from '../questions/FavoriteClevelandActivity';
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
      <React.Fragment>
        <Paper style={styles.paper} zDepth={1}>
          <h1 style={styles.h1}>Moving On...</h1>
          <div style={styles.questionGroup}>
            <ClearFix>
              <div style={styles.div}>I stay in Cleveland because</div>
              <ReasonsForStayingInCleveland
                personalWhyCleveland={survey.personalWhyCleveland}
              />
              <div style={styles.div}>, and I live and breathe the</div>
              <FavoriteSportsTeam
                personalFavoriteSportsTeams={survey.personalFavoriteSportsTeams}
              />
              <div style={styles.div}>(most of the time). Cleveland is a special place,</div>
            </ClearFix>
            <ClearFix>
              <div style={styles.div}>and I wish more people knew about the</div>
              <FavoriteClevelandActivity
                personalFavoriteClevelandActivity={survey.personalFavoriteClevelandActivity}
              />
              <div style={styles.div}>.</div>
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
            label="Next"
            labelColor="#F7F5F4"
            labelStyle={styles.buttonMainLabel}
            onClick={this.saveAndContinue}
            style={styles.buttonMain}
          />
        </div>
      </React.Fragment>
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
