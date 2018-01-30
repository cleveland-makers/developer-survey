import React from 'react';
import PropTypes from 'prop-types';
import ClearFix from 'material-ui/internal/ClearFix';
import CodingInstitutions from '../questions/CodingInstitutions';
import LanguageUses from '../questions/LanguageUses';
import PrimaryLanguage from '../questions/PrimaryLanguage';
import SecondaryLanguages from '../questions/SecondaryLanguages';
import storeProvider from '../storeProvider';
import YearsExpWithLanguage from '../questions/YearsExpWithLanguage';

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
      <div>
        <h1 style={styles.h1}>Let’s Talk Languages</h1>
        <div style={styles.specialMargin}>
          <ClearFix>
            <div style={styles.answer}>
              <PrimaryLanguage
                languagePrimaryWorkLanguage={survey.languagePrimaryWorkLanguage}
              />
            </div>
            <div style={styles.div}>is my primary work programming language.</div>
          </ClearFix>
          <ClearFix>
            <div style={styles.div}>At home, I use</div>
            <div style={styles.answer}>
              <SecondaryLanguages
                languagePrimaryHomeLanguages={survey.languagePrimaryHomeLanguages}
              />
            </div>
            <div style={styles.div}>for my personal and open-source projects.</div>
          </ClearFix>
          <ClearFix>
            <div style={styles.div}>I’ve been using my primary language for</div>
            <div style={styles.answer}>
              <LanguageUses
                languageWhyDoYouUseIt={survey.languageWhyDoYouUseIt}
              />
            </div>
          </ClearFix>
          <ClearFix>
            <div style={styles.div}>I learned it </div>
            <div style={styles.answer}>
              <YearsExpWithLanguage
                languageWhenDidYouLearnIt={survey.languageWhenDidYouLearnIt}
              />
            </div>
            <div style={styles.div}>years ago from</div>
            <div style={styles.answer}>
              <CodingInstitutions
                languageWhereDidYouLearnIt={survey.languageWhereDidYouLearnIt}
              />
            </div>
            <div style={styles.div}>.</div>
          </ClearFix>
        </div>
        <button style={styles.buttonMain} onClick={this.previousStep}>
          Previous
        </button>
        <button style={styles.buttonMain} onClick={this.saveAndContinue}>
          Next
        </button>
      </div>
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
