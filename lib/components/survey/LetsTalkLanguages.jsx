import React from 'react';
import PropTypes from 'prop-types';
import ClearFix from 'material-ui/internal/ClearFix';
import CodingInstitutions from '../questions/CodingInstitutions';
import LanguageUses from '../questions/LanguageUses';
import PrimaryLanguage from '../questions/PrimaryLanguage';
import SecondaryLanguages from '../questions/SecondaryLanguages';
import PrimaryLanguageExperience from '../questions/PrimaryLanguageExperience';

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

/**
 * The second page of the survey.
 */
class TellUsAboutYourCurrentRole extends React.PureComponent {
  render() {
    const { survey } = this.props;
    return (
      <React.Fragment>
        <h1 style={styles.h1}>Let’s Talk Languages</h1>
        <div style={styles.questionGroup}>
          <ClearFix>
            <PrimaryLanguage
              languagePrimaryWorkLanguage={survey.languagePrimaryWorkLanguage}
            />
            <div style={styles.div}>is</div>
            <div style={styles.div}>my</div>
            <div style={styles.div}>primary</div>
            <div style={styles.div}>work</div>
            <div style={styles.div}>programming</div>
            <div style={styles.div}>language.</div>
            <div style={styles.div}>At</div>
            <div style={styles.div}>home,</div>
            <div style={styles.div}>I</div>
            <div style={styles.div}>use</div>
            <SecondaryLanguages
              languagePrimaryHomeLanguages={survey.languagePrimaryHomeLanguages}
            />
            <div style={styles.div}>for</div>
            <div style={styles.div}>my</div>
            <div style={styles.div}>personal</div>
            <div style={styles.div}>and</div>
            <div style={styles.div}>open-source</div>
            <div style={styles.div}>projects.</div>
            <div style={styles.div}>I’ve</div>
            <div style={styles.div}>been</div>
            <div style={styles.div}>using</div>
            <div style={styles.div}>my</div>
            <div style={styles.div}>primary</div>
            <div style={styles.div}>language</div>
            <div style={styles.div}>for</div>
            <LanguageUses
              languageWhyDoYouUseIt={survey.languageWhyDoYouUseIt}
            />
            <div style={styles.div}>.</div>
            <div style={styles.div}>I</div>
            <div style={styles.div}>learned</div>
            <div style={styles.div}>it</div>
            <PrimaryLanguageExperience
              languageWhenDidYouLearnIt={survey.languageWhenDidYouLearnIt}
            />
            <div style={styles.div}>years</div>
            <div style={styles.div}>ago</div>
            <div style={styles.div}>from</div>
            <CodingInstitutions
              languageWhereDidYouLearnIt={survey.languageWhereDidYouLearnIt}
            />
            <div style={styles.div}>.</div>
          </ClearFix>
        </div>
      </React.Fragment>
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
};

export default TellUsAboutYourCurrentRole;
