import React from 'react';
import PropTypes from 'prop-types';
import ClearFix from 'material-ui/internal/ClearFix';
import PrimaryLanguage from '../questions/PrimaryLanguage';
import SecondaryLanguages from '../questions/SecondaryLanguages';
import LanguageUses from '../questions/LanguageUses';
import YearsExpWithLanguage from '../questions/YearsExpWithLanguage';
import CodingInstitutions from '../questions/CodingInstitutions';

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

/**
 * The second page of the survey.
 */
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
        <h1 style={styles.h1}>Let’s Talk Languages</h1>
        <ClearFix style={styles.specialMargin}>
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
        </ClearFix>
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
  survey: PropTypes.shape({
    languagePrimaryHomeLanguages: PropTypes.arrayOf(PropTypes.string).isRequired,
    languagePrimaryWorkLanguage: PropTypes.string.isRequired,
    languageWhenDidYouLearnIt: PropTypes.number.isRequired,
    languageWhereDidYouLearnIt: PropTypes.arrayOf(PropTypes.string).isRequired,
    languageWhyDoYouUseIt: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
  nextStep: PropTypes.func.isRequired,
  previousStep: PropTypes.func.isRequired,
  saveValues: PropTypes.func.isRequired,
};

export default TellUsAboutYourCurrentRole;
