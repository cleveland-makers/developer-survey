import React from 'react';
import PropTypes from 'prop-types';
import ClearFix from 'material-ui/internal/ClearFix';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import CodingInstitutions from '../questions/CodingInstitutions';
import LanguageUses from '../questions/LanguageUses';
import PrimaryLanguage from '../questions/PrimaryLanguage';
import SecondaryLanguages from '../questions/SecondaryLanguages';
import storeProvider from '../storeProvider';
import PrimaryLanguageExperience from '../questions/PrimaryLanguageExperience';
import SurveyFormat from '../SurveyFormat';

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
};

/**
 * The second page of the survey.
 */
class TellUsAboutYourCurrentRole extends React.PureComponent {
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
        <SurveyFormat>
          <h1 style={styles.h1}>Let’s Talk Languages</h1>
          <div style={styles.questionGroup}>
            <ClearFix>
              <PrimaryLanguage
                languagePrimaryWorkLanguage={survey.languagePrimaryWorkLanguage}
              />
              <div style={styles.div}>is my primary work programming language. At home, I use</div>
              <SecondaryLanguages
                languagePrimaryHomeLanguages={survey.languagePrimaryHomeLanguages}
              />
              <div style={styles.div}>for my personal and open-source projects. I’ve been using my primary language for</div>
              <LanguageUses
                languageWhyDoYouUseIt={survey.languageWhyDoYouUseIt}
              />
              <div style={styles.div}>. I learned it</div>
              <PrimaryLanguageExperience
                languageWhenDidYouLearnIt={survey.languageWhenDidYouLearnIt}
              />
              <div style={styles.div}>years ago from</div>
              <CodingInstitutions
                languageWhereDidYouLearnIt={survey.languageWhereDidYouLearnIt}
              />
              <div style={styles.div}>.</div>
            </ClearFix>
          </div>
        </SurveyFormat>
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

TellUsAboutYourCurrentRole.propTypes = {
  store: PropTypes.shape({
    nextStep: PropTypes.func.isRequired,
    previousStep: PropTypes.func.isRequired,
  }).isRequired,
  survey: PropTypes.shape({
    languagePrimaryHomeLanguages: PropTypes.arrayOf(PropTypes.string).isRequired,
    languagePrimaryWorkLanguage: PropTypes.string.isRequired,
    languageWhenDidYouLearnIt: PropTypes.number.isRequired,
    languageWhereDidYouLearnIt: PropTypes.arrayOf(PropTypes.string).isRequired,
    languageWhyDoYouUseIt: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
};

export default storeProvider()(TellUsAboutYourCurrentRole);
